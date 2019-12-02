<template>
    <div class="login">
        <template v-if="!biodata">
            <h1>Login</h1>
            <button @click="login">Masuk dengan Google</button>
        </template>
        <template v-else>
            <h1>Biodata Umum</h1>
            <input v-model="nama" placeholder="Nama Lengkap" />
            <br />
            {{ $store.getters.user.data.email }}
            <br />
            <input v-model="nomor" placeholder="Nomor HP" />
            <br />
            <input v-model="instansi" placeholder="Universitas/Sekolah/Komunitas" />
            <br />
            <button @click="submitBiodata">SUBMIT</button>
        </template>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default {
    data: () => {
        return {
            biodata: false,
            nama: '',
            nomor: '',
            instansi: ''
        };
    },
    async created() {
        if (this.$store.getters.user.loggedIn) {
            let uid = this.$store.getters.user.data.uid;
            let doc = await firebase
                .firestore()
                .collection('users')
                .doc(uid)
                .get();
            if (doc.exists) {
                this.$router.push('/dashboard');
            } else {
                this.biodata = true;
            }
        }
    },
    methods: {
        async login() {
            let googleLogin = new firebase.auth.GoogleAuthProvider();

            try {
                let cred = await firebase.auth().signInWithPopup(googleLogin);
                let doc = await firebase
                    .firestore()
                    .collection('users')
                    .doc(cred.user.uid)
                    .get();

                if (doc.exists) {
                    this.$router.push('/dashboard');
                } else {
                    this.biodata = true;
                }
            } catch (error) {
                console.log(error);
            }
        },
        async submitBiodata() {
            if (this.nama == '' || this.nomor == '' || this.instansi == '')
                return;

            await firebase
                .firestore()
                .collection('users')
                .doc(this.$store.getters.user.data.uid)
                .set({
                    nama: this.nama,
                    nomor: this.nomor,
                    instansi: this.instansi,
                    email: this.$store.getters.user.data.email
                });
            this.$router.push('/dashboard');
        }
    }
};
</script>
