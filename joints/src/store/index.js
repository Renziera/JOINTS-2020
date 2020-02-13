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
        profilsData: {},
        payment: {
            isSudahLunas: null,
            isBelumLunas: null,
            paymentData: null
        },
        pengumumanDatas: [],
        events: null,
        competitions : null 
    },
    getters: {
        user(state) {
            return state.user;
        },
        profilsData(state) {
            return state.profilsData;
        },
        competitions(state){
            return  state.competitions;
        },
        events(state){
          return state.events;
        },
        competitions(state){
          return  state.competitions;
        },
        competitionsDataMining(state){
          return state.competitions.data_mining
        },
        pengumumans(state){
          return state.pengumumanDatas;
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
            state.profilsData = data;
        },
        ADD_PROFIL(state, value) {
            let profil = state.profilsData.concat(value);
            state.profilsData = profil;
        },
        SET_PENGUMUMAN(state, value) {
            state.pengumumanDatas = value;
        },
        ADD_PENGUMUMAN(state, value) {
            state.pengumumanDatas.push(value);
        },
        ADD_EVENTS(state, value) {
            state.events = value;
        },
        ADD_COMPETITIONS(state, value ){
          state.competitions = value
        }
    },
    actions: {

      async getPengumumanDataVuex({ commit }) {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const pengumumanBaru = [];

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/announcement', config)
                .then(response => {
                    // console.log(response)
                    response.data.announcements.forEach((value, index) => {
                        pengumumanBaru.push({
                          pengumumanData : value,
                          isIndex: value.waktu._seconds,
                          isExpand : false})
                    });

                    commit('SET_PENGUMUMAN', pengumumanBaru);

                    // console.log('ini pengumuman dari data dari vuex')
                    // console.log(this.state.pengumumanDatas)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        testActions({commits}) {
          // console.log('test action harusnya bisa su')
        },
        async getEventDataVuex({ commit }) {
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
                  });

                  commit('ADD_EVENTS', eventsBaru);
                  // console.log('ini event data dari vuex')
                  // console.log(this.state.events)
              })
              .catch(error => {
                  console.log(error);
              });
      },


        async getTeamDataVuex({ commit }) {
          // if (!firebase.auth().currentUser) return;
          const competitions = {};
          let token = await firebase.auth().currentUser.getIdToken(true);
          const config = {
              headers: { Authorization: 'Bearer ' + token }
          };
          const BASE_URL = 'https://api.joints.id';
          Axios.get(BASE_URL + '/competition', config)
              .then(response => {
                  // console.log(response);
                  // console.log('team dataa dari vuex')

                  response.data.competitions.forEach((value, index) => {
                    competitions[value.competition] = value;
                    
                });
                  commit('ADD_COMPETITIONS', competitions);
                  // console.log('fetch item data vuex ini ')
                  // console.log(this.state.competitions)
              })
              .catch(error => {
                  console.log(error);
              });
         },

        async getProfilDataVuex({ commit }) {
            // if (!firebase.auth().currentUser) return;
          
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/biodata', config)
                .then(response => {
                    // console.log(response);
                    

                     commit('SET_PROFIL', {
                        nama: response.data.biodata.nama,
                        email: response.data.biodata.email,
                        nomor: response.data.biodata.nomor,
                        instansi: response.data.biodata.instansi
                    })

                    // console.log('data profil dari vuex baru dateng ')

                    // console.log(this.state.profils.profilData)
                    // // console.log('dari prifldata')
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
