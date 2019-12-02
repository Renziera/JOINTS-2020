<template>
    <div class="login">
        <h1>Login</h1>
        <button @click="login">Masuk dengan Google</button>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    methods: {
        async login() {
            let googleLogin = new firebase.auth.GoogleAuthProvider();

            try {
                await firebase.auth().signInWithPopup(googleLogin);
                this.$router.push('/dashboard');
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>
