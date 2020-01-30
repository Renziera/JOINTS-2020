import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import BootstrapVue from 'bootstrap-vue';
import vuetify from '@/plugins/vuetify';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faFacebook,
    faLinkedin,
    faInstagram,
    faLine
} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook, faLinkedin, faLine, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(vuetify);
Vue.use(BootstrapVue);
Vue.use(ElementUI);



Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: 'AIzaSyAvwS9hac8KtPC-5qt3v5c9rQIadcu30jw',
    authDomain: 'joints-ugm.firebaseapp.com',
    databaseURL: 'https://joints-ugm.firebaseio.com',
    projectId: 'joints-ugm',
    storageBucket: 'joints-ugm.appspot.com',
    messagingSenderId: '382054057518',
    appId: '1:382054057518:web:571099e5c44e83ed40c1bf'
};

firebase.initializeApp(firebaseConfig);

let loaded = false;

firebase.auth().onAuthStateChanged(async user => {
    await store.dispatch('fetchUser', user);
    await store.dispatch('fetchIsPanitia');
  

    if (loaded) return;

    new Vue({
        router,
        store,
        vuetify,
        
        render: h => h(App)
    }).$mount('#app');

    loaded = true;
});
