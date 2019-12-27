<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Ceritanya web JOINTS gan, mantap kimac" />
        <router-link v-if="$store.getters.user.loggedIn" to="/dashboard"
            >Dashboard</router-link
        >
        <router-link v-else to="/login">Login</router-link>
        <br />
        <br />
        <router-link to="/grandlaunching">Grand Launching</router-link>
        <br />
        <router-link to="/jointstalk">JOINTS Talku</router-link>
        <br />
        <router-link to="/jointscamp">JOINTS Camp</router-link>
        <br />
        <router-link to="/competitions">Competitions</router-link>
        
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    }
};
</script>
