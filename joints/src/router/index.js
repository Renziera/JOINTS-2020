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
import NotFound from '@/views/NotFound.vue'


// Dashboard Router
import Announcement from '@/components/Dashboard/AnnounceDashboard.vue';
import CompetitionsDash from '@/components/Dashboard/CompetitionsDash.vue';
import PreEvents from '@/components/Dashboard/PreEvents.vue';
import Events from '@/components/Dashboard/Events.vue';
import Profil from '@/components/Dashboard/Profil.vue';
import Registration from '@/components/Dashboard/RegistrationPage.vue';
import JointsCampDash from '@/components/Dashboard/JointsCamp.vue';
import PaymentDash from '@/components/Dashboard/PaymentDash.vue';
import EventRegist from '@/components/Dashboard/EventRegist.vue';

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
                path: 'competitions',
                name: 'competition',
                component: CompetitionsDash,

            },
            {
                path: 'competitions/:section/register',
                name: 'registration',
                component: Registration,
                props: true,
                beforeEnter: (to, from, next) => {
                const id = to.params.section;
                if (!['datamining','ctf','uiux','pcs'].includes(id)) next('/not-found');
                else next();
                }
            },
            {
                path: 'competitions/:section/payment',
                name: 'payment',
                component: PaymentDash,
                props: true,
                beforeEnter: (to, from, next) => {
                const id = to.params.section;
                if (!['datamining','ctf','uiux','pcs'].includes(id)) next('/not-found');
                else next();
                }
            },
            {
                path: 'events',
                name: 'events',
                component: Events
            },
            {
                path: 'events/:section/register',
                name: 'jointscamp',
                component: EventRegist,
                props: true,
                beforeEnter: (to, from, next) => {
                const section = to.params.section;
                if (!['grandlaunching','itday','jointscamp','jointscamp2'].includes(section)) next('/not-found');
                else next();}
            },
            {
                path: 'profile',
                name: 'profile',
                component: Profil
            },
            
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
    },
    {
        path: '*',
        component: NotFound
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
