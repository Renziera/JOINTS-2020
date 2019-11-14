<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Ceritanya web JOINTS gan, mantap kimac" />
        <router-link v-if="$store.getters.user.loggedIn" to="/dashboard">Dashboard</router-link>
        <router-link v-else to="/login">Login</router-link>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    }
};
</script>
