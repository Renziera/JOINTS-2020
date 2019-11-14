import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

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

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);

    if (loaded) return;

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');
    
    loaded = true;
});
