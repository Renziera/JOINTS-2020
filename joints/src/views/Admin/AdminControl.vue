<template>
    <div>
        <Navbar accessFrom="dashboardNavbar" colorKind="gradient-dashboard"></Navbar>
        <div class="container all-container">
            <div>
                <div class="dashboard">
                    <h1 class="dashboard">Control</h1>
                    <h2>Welcome, {{ $store.getters.user.data.displayName }}</h2>
                    <h2>Apakah panitia ? {{ $store.getters.user.isPanitia }}</h2>
                </div>
                <v-app>
                    <v-tabs color="#94119F" slider-color="yellow" show-arrows>
                        <v-tabs-slider color="#4DE2D2"></v-tabs-slider>
                        <v-tab
                            v-for="tab of tabs"
                            :key="tab.id"
                            :to="tab.route"
                            exact
                        >{{ tab.name }}</v-tab>
                    </v-tabs>
                    <router-view></router-view>
                </v-app>
            </div>
        </div>

        <Footer accessFrom="dashboardNavbar" footerKind="gradient-dashboard-footer"></Footer>
    </div>
</template>

<script>
import Axios from 'axios';
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
            // linkSpreadsheet: [],
            tabs: [
                {
                    id: 1,
                    name: 'Announcement',
                    route: `/panitia/pengumumanbyadmin`
                },
                {
                    id: 2,
                    name: 'List Pembayaran',
                    route: `/panitia/paymentbyadmin`
                },
                {
                    id: 3,
                    name: 'Grand Launching',
                    route: `/panitia/grandlaunchingbyadmin`
                },
                {
                    id: 4,
                    name: 'Joints Camp',
                    route: '/panitia/jointscampbyadmin'
                },
                {
                    id: 5,
                    name: 'CTF',
                    route: '/panitia/ctfbyadmin'
                },
                {
                    id: 6,
                    name: 'PCS',
                    route: '/panitia/pcsbyadmin'
                },
                {
                    id: 7,
                    name: 'Data Mining',
                    route: '/panitia/datminbyadmin'
                },
                {
                    id: 8,
                    name: 'UX Design',
                    route: '/panitia/uxbyadmin'
                }
            ]
        };
    },
    async created() {
        let uid = this.$store.getters.user.data.uid;
        // this.getExportData();
    },
    methods: {
        // async logout() {
        //     await firebase.auth().signOut();
        //     this.$router.push('/login');
        // }
        // async getExportData() {
        //     let token = await firebase.auth().currentUser.getIdToken(true);
        //     const config = {
        //         headers: { Authorization: 'Bearer ' + token }
        //     };
        //     const BASE_URL = 'https://api.joints.id';
        //     Axios.get(BASE_URL + '/admin/export', config)
        //         .then(response => {
        //             console.log(response);
        //             // response.data.forEach((value, index) => {
        //             //     let linkSpreadsheet = {
        //             //         sheet: value.sheet
        //             //     };
        //             //     this.desserts.push(linkSpreadsheet);
        //             // });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // }
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
