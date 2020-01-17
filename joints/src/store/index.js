import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import Api from '@/services/Api.js'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            isPanitia: false,
            data: null
        },
        profils : null
    },
    getters: {
        user(state) {
            return state.user;
        },

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
        },
        SET_PROFIL(state, value){
            state.profils = value
        },
        ADD_PROFIL(state, value){
            let profil = state.profils.concat(value);
            state.profils = profil;
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
            } else {
                commit('SET_USER', null);
            }
        },
        async submitProfil({commit}, profil) {
            let response = await Api().post('/biodata', profils)
            commit('ADD_PROFIL', profil)
            console.log(response)
        },

        getTheform() {
            axios.get('')
        }
        

    },
    modules: {}
});
