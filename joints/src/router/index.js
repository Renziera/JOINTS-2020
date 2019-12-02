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
        meta: {
            harusLogin: true
        }
    },
    {
        path: '/panitia',
        name: 'panitia',
        component: Panitia,
        meta: {
            harusLogin: true
        }
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
    const harusLogin = to.matched.some(record => record.meta.harusLogin);

    if (store.getters.user.loggedIn) {
        if (to.name == 'login') return next('/dashboard');
        return next();
    }

    if (!harusLogin) return next();
    return next('/login');
});

export default router;
