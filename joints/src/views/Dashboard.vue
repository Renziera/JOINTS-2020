<template>
    <div>
  
        <Navbar accessFrom="dashboardNavbar" colorKind="gradient-dashboard"></Navbar>

        <div class="container all-container">
            <div>
                <div class="dashboard">
                    <h1 class="dashboard">Dashboard</h1>
                    <h2>Welcome, {{ $store.getters.user.data.displayName }}</h2>
                    <div>
                        <v-btn depressed small @click="logout">LOGOUT</v-btn>
                    </div>
                </div>
                <v-app >
                    <v-tabs v-model="active" color="#94119F" slider-color="yellow" show-arrows>
                        <v-tabs-slider  color="#4DE2D2"></v-tabs-slider>
                        <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route">{{ tab.name }}</v-tab>
                        <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.route">
                            <router-view></router-view>
                        </v-tab-item>
                    </v-tabs>
                </v-app>
            </div>
        </div>
    
        <Footer accessFrom="dashboardNavbar" footerKind="gradient-dashboard-footer"></Footer>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

import Announcement from '@/components/Dashboard/AnnounceDashboard.vue';
import PreEvents from '@/components/Dashboard/PreEvents.vue';
import Competitions from '@/components/Dashboard/CompetitionsDash.vue';
import Events from '@/components/Dashboard/Events.vue';
import Navbar from '@/components/Landing/Navbar.vue';
import Footer from '@/components/Landing/Footer.vue';

export default {
    props: ['id'],
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            index: 1,
            konten: Announcement,
            tabs: [
                {
                    id: 1,
                    name: 'Announcement',
                    route: `/dashboard/Announcement`
                },
                { 
                    id: 2, 
                    name: 'ITDay', 
                    route: `/dashboard/preevents` },
                { 
                    id: 3,
                    name: 'Grand Launching', 
                    route: `/dashboard/events` },
                {
                    id: 4,
                    name: 'Competitions',
                    route: `/dashboard/competitions`
                },
                { 
                    id: 5, 
                    name: 'Profile', 
                    route: `/dashboard/profile` }
            ]
        };
    },
    async created() {
        let uid = this.$store.getters.user.data.uid;
    },
    methods: {
        async logout() {
            await firebase.auth().signOut();
            this.$router.push('/login');
        },
        opentab(index) {
            if (this.index == index) return;
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

<style>
.dashboard {
    text-align: left;
}

.all-container {
    position: relative;
    top: 100px;
}

h1 {
    color: blue;
}


v-button {
    align-content: left;
}

svg {
    fill: url(#gradient-horizontal);
}

</style>
