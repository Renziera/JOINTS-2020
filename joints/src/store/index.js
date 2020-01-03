import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            isPanitia: false,
            data: null,



        }
    },
    getters: {
        user(state) {
            return state.user;
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_PANITIA(state, value) {
            state.user.isPanitia = value;
        }
    },
    actions: {
        async fetchUser({ commit }, user) {
            commit('SET_LOGGED_IN', user !== null);
            if (user) {
                commit('SET_USER', {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    uid: user.uid
                });
                let doc = await firebase
                    .firestore()
                    .collection('panitia')
                    .doc(user.uid)
                    .get();
                commit('SET_PANITIA', doc.exists);
            } else {
                commit('SET_USER', null);
            }
        }
    },
    modules: {}
});
