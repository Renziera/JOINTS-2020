<template>
    <div class="dashboard">
        <h1>Dashboard Peserta</h1>
        <h2>{{ $store.getters.user.data.displayName }}</h2>
        <h2>{{ $store.getters.user.data.email }}</h2>
        <button @click="logout">LOGOUT</button>
        <br />
        <br>
        <button @click="opentab(1)">Announcement</button>
        <button @click="opentab(2)">PreEvents</button>
        <button @click="opentab(3)">Competitions</button>
        <button @click="opentab(4)">Events</button>
        <component :is="konten"></component>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import Announcement from '@/components/Announcement.vue';
import PreEvents from '@/components/PreEvents.vue';
import Competitions from '@/components/Competitions.vue';
import Events from '@/components/Events.vue';


export default {
    data: () => {
        return {
            index: 1,
            konten: Announcement
        };
    },
    async created() {
        let uid = this.$store.getters.user.data.uid;
        let doc = await firebase
            .firestore()
            .collection('users')
            .doc(uid)
            .get();
        if (!doc.exists) this.$router.push('/login');
    },
    methods: {
        async logout() {
            await firebase.auth().signOut();
            this.$router.push('/login');
        },
        opentab(index){
            if(this.index == index) return;
            this.index = index;
            switch (index) {
                case 1:
                    this.konten = Announcement;
                    break;
                case 2:
                    this.konten = PreEvents;
                    break;
                case 3:
                    this.konten = Competitions;
                    break;
                case 4:
                    this.konten = Events;
                    break;
            }
        }
    }
};
</script>
