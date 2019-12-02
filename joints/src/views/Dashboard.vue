<template>
    <div class="dashboard">
        <h1>Dashboard Peserta</h1>
        <h2>{{ $store.getters.user.data.displayName }}</h2>
        <h2>{{ $store.getters.user.data.email }}</h2>
        <button @click="logout">LOGOUT</button>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    methods: {
        async logout() {
            await firebase.auth().signOut();
            this.$router.push('/login');
        }
    }
};
</script>
