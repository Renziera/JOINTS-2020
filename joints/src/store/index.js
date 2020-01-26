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
        },
        profils(state) {
            return state.profils.profilData;
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
        SET_PROFIL(state, data) {
            state.profils.profilData = data;
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
        async getProfilData({ commit }) {
            if (!firebase.auth().currentUser) return;
            let token = await firebase.auth().currentUser.getIdToken(true);

            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/biodata', config)
                .then(response => {
                    // console.log(response);
                    // console.log('data profil dari vuex')

                    commit('SET_PROFIL', {
                        nama: response.data.biodata.nama,
                        email: response.data.biodata.email,
                        nomor: response.data.biodata.nomor,
                        instansi: response.data.biodata.instansi
                    })

                    // console.log(this.state.profils.profilData)
                    // console.log('dari prifldata')
                })

                .catch(error => {
                    console.log(error);
                });
        },
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
