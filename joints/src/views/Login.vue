<template>
    <div>
        <Navbar accessFrom="dashboardNavbar" colorKind="gradient-dashboard"> </Navbar>
        <section class="login">
            <b-container>
                <b-row>
                    <b-col lg="6" class="d-none d-lg-block">
                        <div
                            class="d-flex align-items-center justify-content-center h-100"
                        >
                            <img src="" alt="No image found" />
                        </div>
                    </b-col>
                    <template v-if="!biodata">
                        <b-col lg="6" cols="12">
                            <b-card
                                title="Login with Google"
                                class="text-left login-card"
                            >
                                <b-card-text
                                    class="d-flex align-items-center justify-content-center"
                                >
                                    <b-button
                                        @click="login"
                                        class="button-signin"
                                        variant="primary"
                                        >Sign in with Google</b-button
                                    >
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </template>
                    <template v-else>
                        <b-col lg="6" cols="12">
                            <b-card
                                title="Biodata Umum"
                                class="text-left biodata-card"
                            >
                                <b-card-text
                                    class="d-flex align-items-center justify-content-center flex-column"
                                >
                                    <b-form-group
                                        id="input-group-nama"
                                        label="Nama"
                                        label-for="input-nama"
                                    >
                                        <b-form-input
                                            id="input-nama"
                                            v-model="nama"
                                            required
                                            placeholder="Nama Lengkap"
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                        id="input-group-email"
                                        label="Email"
                                        label-for="input-email"
                                    >
                                        <b-form-input
                                            id="input-email"
                                            disabled
                                            :placeholder="
                                                $store.getters.user.data.email
                                            "
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                        id="input-group-nohp"
                                        label="Nomor HP"
                                        label-for="input-nohp"
                                    >
                                        <b-form-input
                                            id="input-nohp"
                                            v-model="nomor"
                                            required
                                            placeholder="Nomor HP"
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                        id="input-group-instansi"
                                        label="Instansi"
                                        label-for="input-instansi"
                                    >
                                        <b-form-input
                                            id="input-instansi"
                                            v-model="instansi"
                                            required
                                            placeholder="Universitas/Sekolah/Komunitas"
                                        ></b-form-input>
                                    </b-form-group>
                                    <b-button
                                        @click="submitBiodata"
                                        class="button-submit"
                                        variant="primary"
                                        >Submit</b-button
                                    >
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </template>
                </b-row>
            </b-container>
        </section>
        <Footer accessFrom="dashboardNavbar" footerKind="gradient-dashboard-footer"> </Footer>
        <!--<template v-if="!biodata">
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
            <input
                v-model="instansi"
                placeholder="Universitas/Sekolah/Komunitas"
            />
            <br />
            <button @click="submitBiodata">SUBMIT</button>
        </template> -->
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Navbar from '@/components/Landing/Navbar.vue';
import Footer from '@/components/Landing/Footer.vue';

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
                    email: this.$store.getters.user.data.email,
                    waktu: firebase.firestore.FieldValue.serverTimestamp()
                });
            this.$router.push('/dashboard');
        }
    },
    components: {
        Navbar,
        Footer
    }
};
</script>

<style>
.login {
    min-height: 70vh;
    padding-top: 220px;
}

.login .card {
    border: none;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.login .card-title {
    background-image: linear-gradient(90deg, #8cddda, #b94f80);
    border-radius: 10px;
    color: white;
    font-size: 16px;
    padding: 15px 20px;
    margin-bottom: 0;
}

.login .card-body {
    padding: 0;
    background: #f6f6f6;
    border-radius: 10px;
}

.login .login-card .card-text {
    height: 150px;
}

.login .biodata-card .card-text {
    padding: 25px;
}

.login .button-signin {
    font-size: 14px;
}

.login label {
    font-size: 16px !important;
}
</style>
