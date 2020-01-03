import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';
import GrandLaunching from '@/views/GrandLaunching.vue';
import JointsTalk from '@/views/JointsTalk.vue';
import JointsCamp from '@/views/JointsCamp.vue';
import Competitions from '@/views/Competitions.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Panitia from '@/views/Panitia.vue';
import About from '@/views/About.vue';

// Dashboard Router
import Announcement from '@/components/Dashboard/AnnounceDashboard.vue';
import CompetitionsDash from '@/components/Dashboard/CompetitionsDash.vue';
import PreEvents from '@/components/Dashboard/PreEvents.vue';
import Events from '@/components/Dashboard/Events.vue';
import Profil from '@/components/Dashboard/Profil.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/grandlaunching',
        name: 'grandlaunching',
        component: GrandLaunching
    },
    {
        path: '/jointstalk',
        name: 'jointstalk',
        component: JointsTalk
    },
    {
        path: '/jointscamp',
        name: 'jointscamp',
        component: JointsCamp
    },
    {
        path: '/competitions',
        name: 'competitions',
        component: Competitions
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'announcement',
                name: 'announcement',
                component: Announcement
            },
            {
                path: 'preevents',
                name: 'preevents',
                component: PreEvents
            },
            {
                path: 'competitions',
                name: 'competitions',
                component: CompetitionsDash
            },
            {
                path: 'events',
                name: 'events',
                component: Events
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profil
            }
        ]
    },
    {
        path: '/panitia',
        name: 'panitia',
        component: Panitia
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name == 'dashboard') {
        if (!store.getters.user.loggedIn) return next('/login');
        if (store.getters.user.isPanitia) return next('/panitia');
    }

    if (to.name == 'panitia') {
        if (!store.getters.user.loggedIn) return next('/login');
        if (!store.getters.user.isPanitia) return next('/dashboard');
    }

    return next();
});

export default router;
