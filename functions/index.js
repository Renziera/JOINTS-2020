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
const { google } = require('googleapis');
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
        let qs = await db.collectionGroup('pendaftaran').where('harga', '==', parseInt(transaction.amount)).where('status', '==', 'menunggu_pembayaran').get();
        if (qs.empty) return;
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

    async function fetchURL(doc) {
        let data = doc.data();
        if (data.event === 'joints_camp')
            data.resume = (await storage.file(data.resume).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        return data;
    }

    return res.send({
        status: 'ok',
        events: await Promise.all(qs.docs.map(doc => fetchURL(doc))),
    });
});

app.get('/competition', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').orderBy('competition').get();

    async function fetchURL(doc) {
        let data = doc.data();
        data.ktm_ketua = (await storage.file(data.ktm_ketua).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_1)
            data.ktm_1 = (await storage.file(data.ktm_1).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_2)
            data.ktm_2 = (await storage.file(data.ktm_2).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.makalah)
            data.makalah = (await storage.file(data.makalah).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.proposal)
            data.proposal = (await storage.file(data.proposal).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        return data;
    }

    return res.send({
        status: 'ok',
        competitions: await Promise.all(qs.docs.map(doc => fetchURL(doc))),
    });
});

app.get('/daftar/grand_launching', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('event', '==', 'grand_launching').get();
    if (qs.empty) {
        let harga = getHarga('grand_launching') + Math.floor(Math.random() * 1000);
        await db.collection('users').doc(req.uid).collection('pendaftaran').add({
            event: 'grand_launching',
            harga,
            status: 'menunggu_pembayaran',
            id_pembayaran: uuid(),
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        });
        return res.send({ status: 'ok', harga });
    }

    return res.send({ ...qs.docs[0].data() });
});

app.get('/daftar/it_day', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('event', '==', 'it_day').get();
    if (qs.empty) {
        let harga = getHarga('it_day') + Math.floor(Math.random() * 1000);
        await db.collection('users').doc(req.uid).collection('pendaftaran').add({
            event: 'it_day',
            harga,
            status: 'menunggu_pembayaran',
            id_pembayaran: uuid(),
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        });
        return res.send({ status: 'ok', harga });
    }

    return res.send({ ...qs.docs[0].data() });
});

app.post('/daftar/joints_camp', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('event', '==', 'joints_camp').get();
    if (qs.empty) {
        if (req.files.length !== 1) return res.send({ status: 'fail' });
        let file = storage.file(uuid());
        await file.save(req.files[0].buffer, { resumable: false, contentType: req.files[0].mimetype });
        await db.collection('users').doc(req.uid).collection('pendaftaran').add({
            event: 'joints_camp',
            status: 'lunas',
            linked_in: req.body.linked_in,
            resume: file.id,
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        });
        return res.send({ status: 'ok' });
    }

    let resume = (await storage.file(qs.docs[0].get('resume')).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];

    return res.send({ ...qs.docs[0].data(), resume });
});

app.post('/daftar/pcs', async (req, res) => {
    let { nama_tim, nama_1, nama_2 } = req.body;
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('competition', '==', 'pcs').get();
    if (qs.empty) {
        let single = !(nama_1 || nama_2);
        let ktm_ketua = req.files.find(f => f.fieldname === 'ktm_ketua');
        if (!ktm_ketua) return res.send({ status: 'fail' });
        let file = storage.file(uuid());
        await file.save(ktm_ketua.buffer, { resumable: false, contentType: ktm_ketua.mimetype });
        let harga = getHarga(single ? 'pcs_single' : 'pcs') + Math.floor(Math.random() * 1000);
        let data = {
            competition: 'pcs',
            nama_tim,
            single,
            ktm_ketua: file.id,
            harga,
            status: 'menunggu_pembayaran',
            id_pembayaran: uuid(),
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        };
        if (nama_1) {
            let ktm_1 = req.files.find(f => f.fieldname === 'ktm_1');
            if (!ktm_1) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_1.buffer, { resumable: false, contentType: ktm_1.mimetype });
            data.nama_1 = nama_1;
            data.ktm_1 = file.id;
        }
        if (nama_2) {
            let ktm_2 = req.files.find(f => f.fieldname === 'ktm_2');
            if (!ktm_2) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_2.buffer, { resumable: false, contentType: ktm_2.mimetype });
            data.nama_2 = nama_2;
            data.ktm_2 = file.id;
        }
        await db.collection('users').doc(req.uid).collection('pendaftaran').add(data);
        return res.send({ status: 'ok' });
    }
    return res.send({ ...qs.docs[0].data() });
});

app.post('/daftar/ctf', async (req, res) => {
    let { nama_tim, nama_1, nama_2, sma } = req.body;
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('competition', '==', 'ctf').get();
    if (qs.empty) {
        let ktm_ketua = req.files.find(f => f.fieldname === 'ktm_ketua');
        if (!ktm_ketua) return res.send({ status: 'fail' });
        let file = storage.file(uuid());
        await file.save(ktm_ketua.buffer, { resumable: false, contentType: ktm_ketua.mimetype });
        let harga = getHarga(sma == 'true' ? 'ctf_sma' : 'ctf') + Math.floor(Math.random() * 1000);
        let data = {
            competition: 'ctf',
            nama_tim,
            sma: sma == 'true',
            ktm_ketua: file.id,
            harga,
            status: 'menunggu_pembayaran',
            id_pembayaran: uuid(),
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        };
        if (nama_1) {
            let ktm_1 = req.files.find(f => f.fieldname === 'ktm_1');
            if (!ktm_1) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_1.buffer, { resumable: false, contentType: ktm_1.mimetype });
            data.nama_1 = nama_1;
            data.ktm_1 = file.id;
        }
        if (nama_2) {
            let ktm_2 = req.files.find(f => f.fieldname === 'ktm_2');
            if (!ktm_2) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_2.buffer, { resumable: false, contentType: ktm_2.mimetype });
            data.nama_2 = nama_2;
            data.ktm_2 = file.id;
        }
        await db.collection('users').doc(req.uid).collection('pendaftaran').add(data);
        return res.send({ status: 'ok' });
    }
    return res.send({ ...qs.docs[0].data() });
});

app.post('/daftar/data_mining', async (req, res) => {
    let { nama_tim, nama_1, nama_2 } = req.body;
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('competition', '==', 'data_mining').get();
    if (qs.empty) {
        let ktm_ketua = req.files.find(f => f.fieldname === 'ktm_ketua');
        if (!ktm_ketua) return res.send({ status: 'fail' });
        let file = storage.file(uuid());
        await file.save(ktm_ketua.buffer, { resumable: false, contentType: ktm_ketua.mimetype });
        let harga = getHarga('data_mining') + Math.floor(Math.random() * 1000);
        let data = {
            competition: 'data_mining',
            nama_tim,
            ktm_ketua: file.id,
            harga,
            status: 'menunggu_pembayaran',
            id_pembayaran: uuid(),
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        };
        if (nama_1) {
            let ktm_1 = req.files.find(f => f.fieldname === 'ktm_1');
            if (!ktm_1) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_1.buffer, { resumable: false, contentType: ktm_1.mimetype });
            data.nama_1 = nama_1;
            data.ktm_1 = file.id;
        }
        if (nama_2) {
            let ktm_2 = req.files.find(f => f.fieldname === 'ktm_2');
            if (!ktm_2) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_2.buffer, { resumable: false, contentType: ktm_2.mimetype });
            data.nama_2 = nama_2;
            data.ktm_2 = file.id;
        }
        await db.collection('users').doc(req.uid).collection('pendaftaran').add(data);
        return res.send({ status: 'ok' });
    }
    return res.send({ ...qs.docs[0].data() });
});

app.post('/daftar/data_mining/upload_makalah', async (req, res) => {
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('competition', '==', 'data_mining').get();
    if (qs.empty) return res.send({ status: 'belum_terdaftar' });
    if (qs.docs[0].get('status') !== 'lunas') return res.send({ status: 'menunggu_pembayaran' });
    if (req.files.length !== 1) return res.send({ status: 'fail' });
    let file = storage.file(uuid());
    await file.save(req.files[0].buffer, { resumable: false, contentType: req.files[0].mimetype });
    await qs.docs[0].ref.update({ makalah: file.id });
    res.send({ status: 'ok' });
});

app.post('/daftar/apps_innovation', async (req, res) => {
    let { nama_tim, nama_1, nama_2 } = req.body;
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('competition', '==', 'apps_innovation').get();
    if (qs.empty) {
        let ktm_ketua = req.files.find(f => f.fieldname === 'ktm_ketua');
        if (!ktm_ketua) return res.send({ status: 'fail' });
        let file = storage.file(uuid());
        await file.save(ktm_ketua.buffer, { resumable: false, contentType: ktm_ketua.mimetype });
        let harga = getHarga('apps_innovation') + Math.floor(Math.random() * 1000);
        let data = {
            competition: 'apps_innovation',
            nama_tim,
            ktm_ketua: file.id,
            harga,
            status: 'menunggu_pembayaran',
            id_pembayaran: uuid(),
            waktu_daftar: admin.firestore.FieldValue.serverTimestamp(),
        };
        if (nama_1) {
            let ktm_1 = req.files.find(f => f.fieldname === 'ktm_1');
            if (!ktm_1) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_1.buffer, { resumable: false, contentType: ktm_1.mimetype });
            data.nama_1 = nama_1;
            data.ktm_1 = file.id;
        }
        if (nama_2) {
            let ktm_2 = req.files.find(f => f.fieldname === 'ktm_2');
            if (!ktm_2) return res.send({ status: 'fail' });
            file = storage.file(uuid());
            await file.save(ktm_2.buffer, { resumable: false, contentType: ktm_2.mimetype });
            data.nama_2 = nama_2;
            data.ktm_2 = file.id;
        }
        await db.collection('users').doc(req.uid).collection('pendaftaran').add(data);
        return res.send({ status: 'ok' });
    }
    return res.send({ ...qs.docs[0].data() });
});

app.post('/daftar/apps_innovation/upload_proposal', async (req, res) => {
    let { link_video } = req.body;
    let qs = await db.collection('users').doc(req.uid).collection('pendaftaran').where('competition', '==', 'apps_innovation').get();
    if (qs.empty) return res.send({ status: 'belum_terdaftar' });
    if (qs.docs[0].get('status') !== 'lunas') return res.send({ status: 'menunggu_pembayaran' });
    if (req.files.length !== 1) return res.send({ status: 'fail' });
    let file = storage.file(uuid());
    await file.save(req.files[0].buffer, { resumable: false, contentType: req.files[0].mimetype });
    await qs.docs[0].ref.update({ proposal: file.id, link_video });
    res.send({ status: 'ok' });
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
    let { nominal } = req.body;
    let qs = await db.collectionGroup('pendaftaran').where('harga', '==', parseInt(nominal)).get();
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
    let { id_pembayaran } = req.body;
    let qs = await db.collectionGroup('pendaftaran').where('id_pembayaran', '==', id_pembayaran).get();
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

app.get('/admin/it_day', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('event', '==', 'it_day').where('status', '==', 'lunas').get();
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

app.get('/admin/joints_camp', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('event', '==', 'joints_camp').where('status', '==', 'lunas').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        data.resume = (await storage.file(data.resume).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        delete data.waktu;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.get('/admin/pcs', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'pcs').where('status', '==', 'lunas').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        data.ktm_ketua = (await storage.file(data.ktm_ketua).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_1)
            data.ktm_1 = (await storage.file(data.ktm_1).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_2)
            data.ktm_2 = (await storage.file(data.ktm_2).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        delete data.waktu;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.get('/admin/ctf', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'pcs').where('status', '==', 'lunas').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        data.ktm_ketua = (await storage.file(data.ktm_ketua).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_1)
            data.ktm_1 = (await storage.file(data.ktm_1).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_2)
            data.ktm_2 = (await storage.file(data.ktm_2).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        delete data.waktu;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.get('/admin/data_mining', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'data_mining').where('status', '==', 'lunas').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        data.ktm_ketua = (await storage.file(data.ktm_ketua).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_1)
            data.ktm_1 = (await storage.file(data.ktm_1).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_2)
            data.ktm_2 = (await storage.file(data.ktm_2).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.makalah)
            data.makalah = (await storage.file(data.makalah).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        delete data.waktu;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.get('/admin/apps_innovation', async (req, res) => {
    let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'apps_innovation').where('status', '==', 'lunas').get();
    let results = [];

    async function getUserData(doc) {
        let userDoc = await doc.ref.parent.parent.get();
        let data = { ...doc.data(), ...userDoc.data() };
        data.ktm_ketua = (await storage.file(data.ktm_ketua).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_1)
            data.ktm_1 = (await storage.file(data.ktm_1).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.ktm_2)
            data.ktm_2 = (await storage.file(data.ktm_2).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        if (data.proposal)
            data.proposal = (await storage.file(data.proposal).getSignedUrl({ action: 'read', expires: Date.now() + 1000 * 60 * 60 }))[0];
        delete data.waktu;
        return data;
    }

    qs.forEach(doc => results.push(getUserData(doc)));

    return res.send({ status: 'ok', results: await Promise.all(results) });
});

app.get('/admin/export', async (req, res) => {
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] });
    const sheets = google.sheets({ version: 'v4', auth });

    async function pembarayan() {
        let qs = await db.collectionGroup('pendaftaran').orderBy('waktu_daftar', 'desc').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi', 'Event', 'Kompetisi', 'Nominal', 'Status'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi, data.event || '', data.competition || '', data.harga || 0, data.status,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'Pembayaran',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function grand_launching() {
        let qs = await db.collectionGroup('pendaftaran').where('event', '==', 'grand_launching').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'Grand Launching',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function it_day() {
        let qs = await db.collectionGroup('pendaftaran').where('event', '==', 'it_day').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'IT Day',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function joints_camp() {
        let qs = await db.collectionGroup('pendaftaran').where('event', '==', 'joints_camp').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'Joints Camp',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function pcs() {
        let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'pcs').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi', 'Nama Tim', 'Anggota 1', 'Anggota 2'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi, data.nama_tim, data.nama_1, data.nama_2,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'PCS',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function ctf() {
        let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'ctf').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi', 'Nama Tim', 'Anggota 1', 'Anggota 2', 'SMA'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi, data.nama_tim, data.nama_1, data.nama_2, data.sma,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'CTF',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function data_mining() {
        let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'data_mining').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi', 'Nama Tim', 'Anggota 1', 'Anggota 2'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi, data.nama_tim, data.nama_1, data.nama_2,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'Data Mining',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    async function apps_innovation() {
        let qs = await db.collectionGroup('pendaftaran').where('competition', '==', 'apps_innovation').where('status', '==', 'lunas').get();
        let results = [
            ['Nama', 'Email', 'Nomor', 'Instansi', 'Nama Tim', 'Anggota 1', 'Anggota 2'],
        ];

        async function getUserData(doc) {
            let userDoc = await doc.ref.parent.parent.get();
            let data = { ...doc.data(), ...userDoc.data() };
            return [
                data.nama, data.email, data.nomor, data.instansi, data.nama_tim, data.nama_1, data.nama_2,
            ];
        }

        qs.forEach(doc => results.push(getUserData(doc)));

        await sheets.spreadsheets.values.update({
            spreadsheetId: '1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4',
            range: 'Apps Innovation',
            valueInputOption: 'RAW',
            resource: {
                values: await Promise.all(results),
            },
        });
    }

    await Promise.all([
        pembarayan(),
        grand_launching(),
        it_day(),
        joints_camp(),
        pcs(),
        ctf(),
        data_mining(),
        apps_innovation(),
    ]);

    res.send({ status: 'ok', sheet: 'https://docs.google.com/spreadsheets/d/1UyIheoyez5pJrJFNebzUhFbi8C6zvpNxuJ8HJrbicQ4' });
});

app.all('*', (req, res) => res.send('INVALID ROUTE'));

exports.api = functions.https.onRequest(app);

/**
 * Returns price of the event
 * @param {String} event 
 * @return {number}
 */
function getHarga(event) {
    const IT_DAY_REG = 1585587600000;
    const EARLY_2 = 1581699600000;
    const REG = 1582390800000;

    let now = Date.now();

    switch (event) {
        case 'grand_launching':
            return 150000;
        case 'it_day':
            if (now < IT_DAY_REG) return 25000;
            return 50000;
        case 'joints_camp':
            return 0;
        case 'pcs':
            if (now < EARLY_2) return 90000;
            if (now < REG) return 110000;
            return 125000;
        case 'pcs_single':
            if (now < EARLY_2) return 65000;
            if (now < REG) return 85000;
            return 100000;
        case 'ctf':
            if (now < EARLY_2) return 60000;
            if (now < REG) return 80000;
            return 100000;
        case 'ctf_sma':
            if (now < EARLY_2) return 45000;
            if (now < REG) return 45000;
            return 60000;
        case 'data_mining':
            if (now < EARLY_2) return 60000;
            if (now < REG) return 75000;
            return 100000;
        case 'apps_innovation':
            if (now < EARLY_2) return 110000;
            if (now < REG) return 130000;
            return 150000;
        default:
            return 1000000;
    }
}