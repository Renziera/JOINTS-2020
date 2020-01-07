<template>
    <div>
        <Navbar accessFrom="dashboardNavbar" colorKind="gradient-dashboard"></Navbar>
        <section class="login">
            <b-container>
                <b-row>
                    <b-col lg="6" class="d-none d-lg-block">
                        <div class="d-flex align-items-center justify-content-center h-100">
                            <img class="login-image" src="@/assets/login.png" alt="No image found" />
                        </div>
                    </b-col>
                    <template v-if="!biodata">
                        <b-col lg="6" cols="12" class="d-flex align-items-center">
                            <b-card title="Login with Google" class="text-left login-card">
                                <b-card-text
                                    class="d-flex align-items-center justify-content-center"
                                >
                                    <b-button
                                        @click="login"
                                        class="button-signin"
                                        variant="primary"
                                    >
                                        <div class="google-icon-wrapper">
                                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                                        </div>
                                        <div class="btn-text-wrapper">
                                            <p class="btn-text">Sign in with google</p>
                                        </div>
                                    </b-button>
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </template>
                    <template v-else>
                        <b-col lg="6" cols="12" class="d-flex align-items-center">
                            <b-card title="Biodata Umum" class="text-left biodata-card">
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
                                    >Submit</b-button>
                                </b-card-text>
                            </b-card>
                        </b-col>
                    </template>
                </b-row>
            </b-container>
        </section>
        <Footer accessFrom="dashboardNavbar" footerKind="gradient-dashboard-footer"></Footer>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
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
            
        }
    },
    methods: {
        async login() {
            let googleLogin = new firebase.auth.GoogleAuthProvider();

            try {
                let cred = await firebase.auth().signInWithPopup(googleLogin);
                
                
            } catch (error) {
                console.log(error);
            }
        },
        async submitBiodata() {
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

.login .login-image{
    width: 300px;
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
    background: #4285F4;
    padding: 3px 12px 3px 3px;
}

.login .button-signin div{
    display: inline-block;
}

.login .button-signin .google-icon-wrapper{
    background: white;
    padding: 5px;
    width: auto;
}

.login .button-signin .google-icon-wrapper .google-icon{
    width: 20px;
}

.login .button-signin .btn-text{
    margin-bottom: 0;
    margin-left: 10px;
}

.login label {
    font-size: 16px !important;
}

</style>
