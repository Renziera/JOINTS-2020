<template>
    <div>
        <Navbar
            accessFrom="dashboardNavbar"
            colorKind="gradient-dashboard"
        ></Navbar>
        <div class="container all-container">
            <div>
                <div class="dashboard">
                    <h1 class="dashboard">Control</h1>
                    <h2>Welcome, {{ $store.getters.user.data.displayName }}</h2>
                    <h2>
                        Apakah panitia ? {{ $store.getters.user.isPanitia }}
                    </h2>
                </div>
                <v-app>
                    <v-tabs color="#94119F" slider-color="yellow" show-arrows>
                        <v-tabs-slider color="#4DE2D2"></v-tabs-slider>
                        <v-tab
                            v-for="tab of tabs"
                            :key="tab.id"
                            :to="tab.route"
                            exact
                        >
                            {{ tab.name }}</v-tab
                        >
                    </v-tabs>
                    <router-view></router-view>
                </v-app>
            </div>
        </div>

        <Footer
            accessFrom="dashboardNavbar"
            footerKind="gradient-dashboard-footer"
        ></Footer>
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
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    name: 'Announcement',
                    route: `/panitia/pengumumanbyadmin`
                },

                {
                    id: 2,
                    name: 'Grand Launching',
                    route: `/panitia/grandlaunchingbyadmin`
                },
                {
                    id: 3,
                    name: 'Joints Camp',
                    route: `/panitia/jointscampbyadmin`
                }
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
