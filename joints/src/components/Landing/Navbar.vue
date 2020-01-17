<template>
    <div>
        <b-navbar id="navbar" fixed="top" toggleable="lg" :class="accessFrom">
            <b-navbar-brand to="/">
                <img src="@/./assets/joints.png" alt="Image not found" class="d-none d-lg-block" />
                <span class="d-lg-none">JOINTS</span>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" class="custom-toggler"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/grandlaunching">Grand Launching</b-nav-item>
                    <b-nav-item to="/jointstalk">IT Day</b-nav-item>
                    <b-nav-item to="/competitions">Kompetisi</b-nav-item>
                    <b-nav-item to="/jointscamp">Joints Camp</b-nav-item>
                    <b-nav-item-dropdown v-if="$store.getters.user.loggedIn" class="nav-item-login" right>
                        <template v-slot:button-content>
                            {{ $store.getters.user.data.displayName.split(" ")[0] }}
                        </template>
                        <b-dropdown-item to="/dashboard">Dashboard</b-dropdown-item>
                        <b-dropdown-item href="#">Log Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item v-else class="nav-item-login" to="/login">Login</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div>
            <svg
                class="positionNav"
                :class="colorKind"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 50"
            >
                <defs>
                    <linearGradient :id="colorKind">
                        <stop offset="0%" stop-color="var(--color-stop-4)" />
                        <stop offset="100%" stop-color="var(--color-stop-5)" />
                    </linearGradient>
                </defs>
                <path
                    fill
                    fill-opacity="1"
                    d="M1440,50c-8.5,0.1-21.1-0.3-36-3.3c-24.2-4.9-36.5-12.9-55-20c-22-8.5-38.7-10.3-70.3-13.7c-9.7-1-39.6-3.9-92.3,0c-47.1,3.5-82.2,10.1-88.7,11.3C1020,38.7,952.1,25,711,14c-99.9-4.6-140.6-4.6-189.5-1c-51.6,3.8-48,7-130,15C321.8,34.8,254.6,38.8,182,38c-39.8-0.5-69.7-2.3-104.7-8.3C46,24.2,19.8,16.9,0,10.5C0,7,0,3.5,0,0h1440V50z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accessFrom: String,
        colorKind: String
    },

    methods: {}
};
</script>

<style>
* {
    transition: 0.3s ease-in-out;
}

.positionNav {
    position: fixed;
    left: 0;
    top: 60px;
    z-index: 1029;
    margin-bottom: 1000px;
}

.gradient-competition path {
    fill: url('#gradient-competition');
}

.gradient-dashboard path {
    fill: url('#gradient-dashboard');
}

.gradient-talk path {
    fill: url('#gradient-talk');
}

.gradient-home path {
    fill: url('#gradient-home');
}

.gradient-camp path {
    fill: url('#gradient-camp');
}

#gradient-navbar {
    --color-stop-4: #bf5888;
    --color-stop-5: #18cebe;
}

#gradient-competition {
    --color-stop-5: #a729a4;
    --color-stop-4: #e273b1;
}

#gradient-talk {
    --color-stop-4: #18cebe;
    --color-stop-5: #82c9fb;
}

#gradient-home {
    --color-stop-4: #19c4b9;
    --color-stop-5: #90169f;
}

#gradient-camp {
    --color-stop-4: #6753A8;
    --color-stop-5: #18C6BA;
}

.gradient-dashboard {
    --color-stop-4: #bf5888;
    --color-stop-5: #18cebe;
}   

.gradient-talk {
    --color-stop-4: #18cebe;
    --color-stop-5: #82c9fb;
}

.navbar {
    padding-top: 0px;
    padding-bottom: 0px !important;
}

.navbar .navbar-brand {
    color: white !important;
}

.competition {
    background-image: linear-gradient(-90deg, #a729a4, #e273b1);
}

.dashboardNavbar {
    background-image: linear-gradient(90deg, #bf5888, #18cebe);
}

.talk {
    background-image: linear-gradient(-90deg, #82c9fb, #18cebe) !important;
}

.default {
    background-image: linear-gradient(135deg, #e475b2, #16cdbb);
}

.home {
    background-image: linear-gradient(90deg, #19c4b9, #90169f);
}

.camp {
    background-image: linear-gradient(-90deg, #19c4b9, #6753A8);
}

.navbar .nav-link {
    color: white !important;
}

.navbar .navbar-brand img{
    width: 70px;
}

.navbar.dashboardNavbar .nav-link:hover {
    color: #491fa7 !important;
}

.navbar.home .nav-link:hover {
    color: #15e677 !important;
}

.navbar.camp .nav-link:hover {
    color: #491fa7 !important;
}

.navbar.competition .nav-link:hover {
    color: #13cebb !important;
}

.navbar.talk .nav-link:hover {
    color: #4e4e4e !important;
}

.navbar.dashboardNavbar .nav-item-login .nav-link {
    color: #491fa7 !important;
}

.navbar.home .nav-item-login .nav-link {
    color: #15e677 !important;
}

.navbar.camp .nav-item-login .nav-link {
    color: #491fa7 !important;
}

.navbar.competition .nav-item-login .nav-link {
    color: #13cebb !important;
}

.navbar.talk .nav-item-login .nav-link {
    color: #4e4e4e !important;
}

.navbar .custom-toggler.navbar-toggler {
    border: none;
}

.navbar .custom-toggler.navbar-toggler:focus {
    border: none;
    outline: none !important;
    box-shadow:none;
}

.custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
}

@media (max-width: 991.98px) {
    .navbar{
        padding-top: 15px;
    }

    .positionNav {
        z-index: 1000;
        top: 48px;
    }

    .home {
        background-image: linear-gradient(90deg, #b22abe, #b22abe);
    }

    #gradient-home {
        --color-stop-4: #b22abe;
        --color-stop-5: #b22abe;
    }
}

.navbar .dropdown-menu{
    z-index: 1029;
}
</style>
