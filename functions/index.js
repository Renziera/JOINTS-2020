const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const storage = admin.storage().bucket();
const db = admin.firestore();

const express = require('express');
const cors = require('cors');
const bearerToken = require('express-bearer-token');
const multer = require('multer');
const uuid = require('uuid/v4');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bearerToken());

app.use(multer({
    storage: multer.memoryStorage(),
    startProcessing(req, busboy) {
        req.rawBody ? busboy.end(req.rawBody) : req.pipe(busboy);
    }
}).any());

app.get('/', (req, res) => res.send('OKKA WIBU'));

app.post('/mutasi_masuk', async (req, res) => {
    if (req.headers['api-signature'] !== '0ab6217ac89bf5f9e251cbcf403121d0644053344a50d857c69a0557bb77f321')
        return res.send('INVALID SIGNATURE');

    let data = req.body.content.data;
    let promises = [];

    async function checkTransaction(transaction) {
        let qs = await db.collectionGroup('pendaftaran').where('kode_unik', '==', transaction.description.toUpperCase()).get();
        if (qs.empty) return;
        if (qs.docs[0].get('harga') !== parseInt(transaction.amount)) return;
        await qs.docs[0].ref.update({
            status: 'lunas',
            waktu_lunas: admin.firestore.FieldValue.serverTimestamp(),
        });
    }

    for (const transaction of data) {
        if (transaction.type !== 'credit') continue;
        promises.push(checkTransaction(transaction));
    }

    await Promise.all(promises);
    return res.send('OK');
});

app.use(async (req, res, next) => {
    if (!req.token) return res.send({ status: 'invalid_token' });
    try {
        let decodedToken = await admin.auth().verifyIdToken(req.token);
        req.uid = decodedToken.uid;
        return next();
    } catch (error) {
        return res.send({ status: 'invalid_token' });
    }
});

app.use('/admin/*', async (req, res, next) => {
    let doc = await db.collection('panitia').doc(req.uid).get();
    if (!doc.exists) return res.send({ status: 'bukan_admin' });
    return next();
});

app.get('/announcement', async (req, res) => {
    let qs = await db.collection('announcement').orderBy('waktu', 'desc').get();
    return res.send({
        status: 'ok',
        announcements: qs.docs.map(doc => doc.data()),
    });
});

app.get('/check', async (req, res) => {
    let doc = await db.collection('users').doc(req.uid).get();
    if (doc.exists) return res.send({ status: 'ok' });
    return res.send({ status: 'baru' });
});

app.post('/biodata', async (req, res) => {
    let { nama, email, nomor, instansi } = req.body;
    await db.collection('users').doc(req.uid).set({
        nama, email, nomor, instansi,
        waktu: admin.firestore.FieldValue.serverTimestamp(),
    });
    return res.send({ status: 'ok' });
});

app.get('/biodata', async (req, res) => {
    let doc = await db.collection('users').doc(req.uid).get();
    return res.send({ status: 'ok', biodata: doc.data() });
});

app.get('/event', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').orderBy('event').get();
    return res.send({
        status: 'ok',
        events: qs.docs.map(doc => doc.data()),
    });
});

app.get('/competition', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').orderBy('competition').get();
    return res.send({
        status: 'ok',
        events: qs.docs.map(doc => doc.data()),
    });
});

app.get('/daftar/grand_launching', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('event', '==', 'grand_launching').get();
    if (qs.empty) {
        let kode_unik = uuid().split('-')[0].toUpperCase();
        await db.collection('users').doc(req.uid).collection('pendaftaran').add({
            event: 'grand_launching',
            harga: getHarga('grand_launching'),
            status: 'menunggu_pembayaran',
            kode_unik,
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        });
        return res.send({ status: 'ok', harga: getHarga('grand_launching'), kode_unik });
    }

    return res.send({ ...qs.docs[0].data() });
});

app.get('/daftar/it_day', async (req, res) => {

});

app.post('/daftar/joints_camp', async (req, res) => {

});

app.post('/daftar/competition/pcs', async (req, res) => {

});

app.post('/daftar/competition/data_mining', async (req, res) => {

});

app.post('/daftar/competition/apps_innovation', async (req, res) => {

});

app.post('/admin/announcement', async (req, res) => {
    let { judul, konten } = req.body;
    await db.collection('announcement').add({
        judul, konten,
        waktu: admin.firestore.FieldValue.serverTimestamp(),
    });
    return res.send({ status: 'ok' });
});

app.get('/admin/pembayaran', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').orderBy('waktu_daftar', 'desc').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        delete data.waktu;
        delete data.waktu_daftar;
        delete data.waktu_lunas;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.post('/admin/search_pembayaran', async (req, res) => {
    let { kode_unik } = req.body;
    let qs = await db.collectionGroup('pendaftaran').where('kode_unik', '==', kode_unik.toUpperCase()).get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        delete data.waktu;
        delete data.waktu_daftar;
        delete data.waktu_lunas;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.post('/admin/approve_pembayaran', async (req, res) => {
    let { kode_unik } = req.body;
    let qs = await db.collectionGroup('pendaftaran').where('kode_unik', '==', kode_unik.toUpperCase()).get();
    if (qs.empty) return res.send({ status: 'fail' });
    await qs.docs[0].ref.update({
        status: 'lunas',
        dilunasi_admin: true,
        waktu_lunas: admin.firestore.FieldValue.serverTimestamp(),
    });
    return res.send({ status: 'ok' });
});

app.get('/admin/grand_launching', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('event', '==', 'grand_launching').where('status', '==', 'lunas').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        delete data.waktu;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.all('*', (req, res) => res.send('INVALID ROUTE'));

exports.api = functions.https.onRequest(app);

/**
 * Returns price of the event
 * @param {String} event 
 * @return {number}
 */
function getHarga(event) {
    switch (event) {
        case 'grand_launching':
            return 150000;
        default:
            break;
    }
}