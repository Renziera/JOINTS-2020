<template>
    <div>
        <b-navbar id="navbar" fixed="top" toggleable="lg" :class="accessFrom">
            <b-navbar-brand to="/">
                <img src alt="Image not found" class="d-none d-lg-block" />
                <span class="d-lg-none">JOINTS</span>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" class="custom-toggler"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>
                    <b-nav-item to="/grandlaunching">Grand Launching</b-nav-item>
                    <b-nav-item to="/jointstalk">Seminar</b-nav-item>
                    <b-nav-item to="/competitions">Kompetisi</b-nav-item>
                    <b-nav-item
                        v-if="$store.getters.user.loggedIn"
                        class="nav-item-login"
                        to="/dashboard"
                    >Dashboard</b-nav-item>
                    <b-nav-item v-else class="nav-item-login" to="/login">Login</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <div>
            <svg
                class="positionNav"
                :class="colorKind"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 175 1440 150"
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
                    d="M0,224L48,224C96,224,192,224,288,213.3C384,203,480,181,576,176C672,171,768,181,864,192C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
    top: 54.6px;
    z-index: 99999;
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

#gradient-navbar {
    --color-stop-4: #bf5888;
    --color-stop-5: #18cebe;
}

#gradient-competition {
    --color-stop-4: #bf5888;
    --color-stop-5: #efa0c9;
}

#gradient-talk {
    --color-stop-4: #18cebe;
    --color-stop-5: #82c9fb;
}

#gradient-home {
    --color-stop-4: #19c4b9;
    --color-stop-5: #90169f;
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
    padding-top: 15px !important;
    padding-bottom: 0px !important;
}

.navbar .navbar-brand {
    color: white !important;
}

.competition {
    background-image: linear-gradient(90deg, #bf5888, #efa0c9);
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

.navbar .nav-link {
    color: white !important;
}

.navbar.dashboardNavbar .nav-link:hover {
    color: #491fa7 !important;
}

.navbar.home .nav-link:hover {
    color: #15e677 !important;
}

.navbar.competition .nav-link:hover {
    color: #491fa7 !important;
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

.navbar.competition .nav-item-login .nav-link {
    color: #491fa7 !important;
}

.navbar.talk .nav-item-login .nav-link {
    color: #4e4e4e !important;
}

.navbar .custom-toggler.navbar-toggler {
    border: none;
}

.custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E") !important;
}

@media (max-width: 991.98px) {
    .positionNav {
        z-index: 1000;
    }

    .home {
        background-image: linear-gradient(90deg, #b22abe, #b22abe);
    }

    #gradient-home {
        --color-stop-4: #b22abe;
        --color-stop-5: #b22abe;
    }
}
</style>
