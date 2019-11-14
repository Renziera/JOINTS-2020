<template>
    <div class="login">
        <h1>Login</h1>
        <button @click="login">Masuk dengan Google</button>
        <br />
        <br />
        <input type="text" v-model="nomor" placeholder="+628..." />
        <br />
        <button @click="otp" id="otp-button">Masuk dengan OTP</button>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    data: () => {
        return {
            nomor: ''
        };
    },
    methods: {
        async login() {
            let googleLogin = new firebase.auth.GoogleAuthProvider();

            try {
                await firebase.auth().signInWithPopup(googleLogin);
                this.$router.push('/dashboard');
            } catch (error) {
                console.log(error);
            }
        },
        otp() {
            let captcha = new firebase.auth.RecaptchaVerifier('otp-button', {
                size: 'invisible'
            });

            try {
                firebase.auth().signInWithPhoneNumber(this.nomor, captcha);
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
