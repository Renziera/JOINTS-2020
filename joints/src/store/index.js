import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase/app';
import Api from '@/services/Api.js';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            isPanitia: false,
            data: null
        },
        profils: {
            profilData: null,
            dialogIsOn: true,
            isAlert: false
        },
        payment: {
            isSudahLunas: null,
            isBelumLunas: null,
            paymentData: null
        },
        pengumumanDatas: null,
        events: {
            eventDatas: null
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
        },
        SET_PROFIL(state, value) {
            state.profils = value;
        },
        ADD_PROFIL(state, value) {
            let profil = state.profils.concat(value);
            state.profils = profil;
        },
        SET_PENGUMUMAN(state, value) {
            state.pengumumanDatas = value;
        },
        ADD_PENGUMUMAN(state, value) {
            state.pengumumanDatas.push(value);
        },
        ADD_EVENTS(state, value) {
            state.events.eventDatas = value;
        }
    },
    actions: {
        async fetchIsPanitia({ commit }) {
            if (!firebase.auth().currentUser) return commit('SET_PANITIA', false);
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const BASE_URL = 'https://api.joints.id';
            let response = await Axios.get(BASE_URL + '/cek_panitia', config);
            if (response.status !== 200) return;
            commit('SET_PANITIA', response.data.panitia);
        },
        async fetchEventsData({ commit }) {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const eventsBaru = {};

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/event', config)
                .then(response => {
                    response.data.events.forEach((value, index) => {
                        eventsBaru[value.event] = value;
                        commit('ADD_EVENTS', eventsBaru);
                    });

                    // console.log(this.state.events.eventDatas)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        async fetchPengumumans({ commit }) {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const pengumumanDatas = [];
            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/announcement', config)
                .then(response => {
                    // console.log('ini dari vuex which is fetchPengumuan is berhasil')
                    // console.log(response)
                    response.data.announcements.forEach((value, index) => {
                        pengumumanDatas.push({
                            eventsData: value,
                            isIndex: index,
                            isExpand: false
                        });
                        // console.log(value, index)
                    });
                    commit('SET_PENGUMUMAN', pengumumanDatas);

                    // console.log(this.state.pengumumanDatas)
                })
                .catch(error => {
                    console.log(error);
                });
        },

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
        async submitProfil({ commit }, profil) {
            //let response = await Api().post('/biodata', profils);
            commit('ADD_PROFIL', profil);
            // console.log(response)
        }

        // getTheform() {
        //     axios.get('')
        // }
    },
    modules: {}
});
