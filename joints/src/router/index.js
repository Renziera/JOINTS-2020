import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';
import GrandLaunching from '@/views/GrandLaunching.vue';
import TechTalk from '@/views/TechTalk.vue';
import JointsCamp from '@/views/JointsCamp.vue';
import Competitions from '@/views/Competitions.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Panitia from '@/views/Panitia.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';

// Dashboard Router
import Announcement from '@/components/Dashboard/AnnounceDashboard.vue';
import CompetitionsDash from '@/components/Dashboard/CompetitionsDash.vue';
import Events from '@/components/Dashboard/Events.vue';
import Profil from '@/components/Dashboard/Profil.vue';
import Registration from '@/components/Dashboard/RegistrationPage.vue';
import PaymentDash from '@/components/Dashboard/PaymentDash.vue';
import EventRegist from '@/components/Dashboard/EventRegist.vue';
import JointsCampRegist from '@/components/Dashboard/CampRegist.vue';
import CaptureTheFlag from '@/components/Dashboard/Competitions/CaptureTheFlag.vue'

// AdminControl
import AdminControl from '@/views/Admin/AdminControl.vue';
import AdminPengumuman from '@/components/Admin/AdminPengumuman.vue';
import AdminGL from '@/components/Admin/AdminGL.vue';
import AdminCamp from '@/components/Admin/AdminCamp.vue';
import AdminCtf from '@/components/Admin/AdminCtf.vue';
import AdminPcs from '@/components/Admin/AdminPcs.vue';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/grandlaunching',
        name: 'grandlaunching',
        component: GrandLaunching
    },

    // Di uncomment saat udah mau open regis

    {
        path: '/jointscamp',
        name: 'jointscamp',
        component: JointsCamp
    },
    // {
    //     path: '/techtalk',
    //     name: 'techtalk',
    //     component: TechTalk
    // },
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
        path: '/panitia',
        redirect: '/panitia/pengumumanbyadmin'
    },
    {
        path: '/panitia',
        name: 'panitia',
        component: AdminControl,
        beforeEnter: (to, from, next) => {
            if (store.getters.user.loggedIn == false) return next('/login');
            else if (store.getters.user.isPanitia == false)
                return next('/dashboard');
            else next();
        },
        children: [{
                path: 'pengumumanbyadmin',
                name: 'pengumumanbyadmin',
                component: AdminPengumuman
            },
            {
                path: 'grandlaunchingbyadmin',
                name: 'grandlaunchingbyadmin',
                component: AdminGL
            },
            {
                path: 'jointscampbyadmin',
                name: 'jointscampbyadmin',
                component: AdminCamp
            },
            {
                path: 'ctfbyadmin',
                name: 'ctfbyadmin',
                component: AdminCtf
            },
            {
                path: 'pcsbyadmin',
                name: 'pcsbyadmin',
                component: AdminPcs
            }
        ]
    },
    {
        path: '/dashboard',
        redirect: '/dashboard/profile'
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (store.getters.user.loggedIn == false) return next('/login');
            else if (store.getters.user.isPanitia == true)
                return next('/panitia');
            else next();


        },
        children: [{
                path: 'announcement',
                name: 'announcement',
                component: Announcement
            },
            {
                path: 'competitions',
                name: 'competition',
                component: CompetitionsDash
            },
            // Uncomment kalau udah mau open regis
            {
                path: 'competitions/:section/register',
                name: 'registration',
                component: Registration,
                props: true,
                beforeEnter: (to, from, next) => {
                    const id = to.params.section;
                    if (!['datamining', 'ctf', 'uiux', 'pcs'].includes(id)) next('/not-found');
                    else next();
                }
            },
            // {
            //     path: 'competitions/:section/payment',
            //     name: 'payment',
            //     component: PaymentDash,
            //     props: true,
            //     beforeEnter: (to, from, next) => {
            //         const id = to.params.section;
            //         if (!['datamining', 'ctf', 'uiux', 'pcs'].includes(id)) next('/not-found');
            //         else next();
            //     }
            // },
            {
                path: 'events',
                name: 'events',
                component: Events
            },

            // Uncomment kalo udah mau open regis
            {
                path: 'events/jointscamp/register',
                name: 'jointscampRegist',
                component: JointsCampRegist
            },

            {
                path: 'events/:section/register',
                name: 'eventRegist',
                component: EventRegist,
                props: true,
                beforeEnter: (to, from, next) => {
                    const section = to.params.section;

                    if (!['grandlaunching'].includes(section)) {
                        next('/not-found');
                    }
                    // Di uncomment kalo udah mau open regis
                    // else if (['jointscamp'].includes(section)) {
                    //     next('/events/jointscamp/register')
                    // }
                    else next();
                }
            },

            {
                path: 'profile',
                name: 'profile',
                component: Profil,
                //   beforeEnter: (to, from, next) => {

                //       store.dispatch(getProfilDataVuex)
                //       .then(next);
                //       console.log('beforeenter done')

                // },
            }
        ]
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

// router.beforeResolve((to, from, next) => {
//     // If this isn't an initial page load.
//     if (to.path) {
//         // Start the route progress bar.
//         NProgress.start()
//     }
//     next()
// })

// router.afterEach((to, from) => {
//     // Complete the animation of the route progress bar.
//     NProgress.done()
// })

export default router;