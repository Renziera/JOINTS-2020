<template>
    <div>
            <v-app class="white ">
               <v-container>
                <v-row>
                    <v-col cols="12" class="pb-0 mb-0 profil-team-title">
                        <h4 style="text-align: left" class="mb-0 pb-0">
                            Profil Team :
                        </h4>
                        <div class="subtitle mt-1 ml-0 subtitle-daftar">
                            Lengkapi Profil Team Anda:
                        </div>
                    </v-col>

                    <v-col md="8" lg="8" xs="12" sm="12" class="col-xs-12">
                        <v-card
                            outlined
                            class="mx-auto px-4 pt-4 mb-5 pt-0 regis-card mb-4"
                        >
                            <div class="subtitle">Nama Tim:</div>
                            <v-text-field
                                class="mt-1 pb-0"
                             
                                v-model="team.nama_tim"
                                :rules="[
                                    formValidation,
                                    () => !!team.nama_tim || 'This field is required'
                                ]"
                                 v-bind:disabled="this.isMemberKetua"
                                required
                                outlined
                                dense
                                placeholder="Nama"
                               
                            ></v-text-field>

                            <div class="subtitle">Nama Sekolah:</div>
                            <v-text-field
                                class="mt-1"
                                v-bind:disabled="this.isMemberKetua"
                                v-model="profils.instansi"
                                :rules="[
                                    formValidation,
                                    () => !!profils.instansi || 'This field is required'
                                ]"
                             
                                required
                                outlined
                                dense
                                placeholder="Nama"
                       
                            ></v-text-field>

                            <div class="subtitle">Jumlah Anggota:</div>
                            <div>

                           
                                  <v-slider
                                    v-bind:disabled="this.isMemberOne || this.isMemberKetua || this.isMemberTwo"
                                    class="pa-0"
                                    v-model="jumlahAnggota"
                                    :tick-labels="[
                                      1,
                                      2,
                                      3,
                                    
                                    ]"
                                    :min='1'
                                    :max="3"
                                    step="1"
                                    ticks="always"
                                    tick-size="6"
                                  ></v-slider>
                            
                             
                            </div>

                           

                            
                        </v-card>

                        <h4 class="mt-4" style="text-align: left">Data Ketua :</h4>
                        <div class="subtitle mt-1 ml-0 subtitle-daftar">
                            Pastikan ketua/anggota 1 merupakan pemegang akun ini, data ini akan otomatis tersimpan di biodata anda
                        </div>

                        <v-card outlined class="mx-auto px-4 pt-4 mb-5">
                            <div>
                                <div class="subtitle">Nama Ketua:</div>
                                <v-text-field
                                    class="mt-1"
                                     v-bind:disabled="this.isMemberKetua"
                                    v-model="profils.nama"
                                    :rules="[
                                        formValidation,
                                        () => !!profils.nama || 'This field is required'
                                    ]"
                         
                                    required
                                    outlined
                                    dense
                                    placeholder="Nama"
                                    
                                ></v-text-field>

                                <div class="subtitle">Email Ketua:</div>
                               <v-text-field
                                    class="mt-1 pb-0 mb-0"
                                    v-model="profils.email"
                                    :rules="[
                                        formValidation,
                                        () =>
                                            !!profils.email ||
                                            'This field is required'
                                    ]"
                                    required
                                    readonly
                                    outlined
                                    dense
                                    disabled
                                    placeholder="Email"
                                    append-outer-icon=" mdi-checkbox-marked-circle "
                                ></v-text-field>

                                <div class="subtitle">No Hp. Ketua:</div>
                                <v-text-field
                                    class="mt-1"
                                    v-bind:disabled="this.isMemberKetua"
                                    v-model="profils.nomor"
                                    :rules="[
                                        formValidation,
                                        () => !!profils.nomor || 'This field is required'
                                    ]"
                               
                                    required
                                    outlined
                                    dense
                                    placeholder="Nama"
                       
                                ></v-text-field>
                               <div class="subtitle font-weigth-bold">
                                    Kartu Pelajar Ketua:
                                </div>
                               <div class="d-flex">
                                   <v-file-input
                                    v-if="!isMemberKetua"
                                    v-model="team.ktm_ketua"
                                    counter
                                    dense
                                    placeholder="Select your files"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    accept=".pdf"
                                    :rules="[formValidation, v => !!v || 'File is required']"
                                    :show-size="1000"
                                ></v-file-input>
                                <v-alert
                                    v-if="isMemberKetua"
                                    class=" px-2 "
                                    dense
                                    text
                                    type="success"
                                >Uploaded</v-alert>
                                
                                  
                                </div>
                             
                            </div>
                        </v-card>

                        <h4 
                        v-show="(this.jumlahAnggota == 2 || this.jumlahAnggota == 3 )" 
                        transition="scale-transition" 
                        origin="center center" style="text-align: left">Data Anggota :</h4>
                        <div 
                        v-show="(this.jumlahAnggota == 2 || this.jumlahAnggota == 3 )" 
                        transition="scale-transition" origin="center center" 
                        class="subtitle mt-1 ml-0 mb-2 subtitle-daftar">
                            Masukan Data Anggota Anda:
                        </div>
                        <v-card
                           transition="scale-transition" origin="center center"
                           v-show="(this.jumlahAnggota == 2 || this.jumlahAnggota == 3 )"
                           outlined class="mx-auto px-4 pt-4">
                            <div>
                                <div class="subtitle">Nama Anggota 2:</div>
                                <v-text-field
                                    class="mt-1"
                                    v-bind:disabled="this.isMemberOne"
                                    v-model="team.nama_1"
                                    :rules="[
                                      formValidation,
                                        () => !!team.nama_1 || 'This field is required'
                                    ]"
                             
                                    required
                                    outlined
                                    dense
                                    placeholder="Nama"
                                    
                                ></v-text-field>

                                <div class="subtitle font-weigth-bold">
                                    Kartu Pelajar:
                                </div>
                                <div class="d-flex">
                                   <v-file-input
                                    v-if="!isMemberOne"
                                    v-model="team.ktm_1"
                                    counter
                                    dense
                                    placeholder="Select your files"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    accept=".pdf"
                                    :rules="[formValidation, v => !!v || 'File is required']"
                                    :show-size="1000"
                                ></v-file-input>
                                <v-alert
                                    v-if="isMemberOne"
                                    class=" px-2 "
                                    dense
                                    text
                                    type="success"
                                >Uploaded</v-alert>
                                
                                  
                                </div>

                               

                               
                            </div>
                        </v-card>

                        <v-card
                          transition="scale-transition" origin="center center"
                          v-show="(this.jumlahAnggota == 3)" 
                          outlined 
                          class="mt-4 mx-auto px-4 pt-4">
                            <div>
                                <div class="subtitle">Nama Anggota 3:</div>

                                <v-text-field
                                    class="mt-1"
                                    v-bind:disabled="this.isMemberTwo"
                                    v-model="team.nama_2"
                                    :rules="[
                                      formValidation,
                                        () => !!team.nama_2 || 'This field is required'
                                    ]"
                               
                                    required
                                    outlined
                                    dense
                                    placeholder="Nama"
                             
                                ></v-text-field>

                                <div class="subtitle font-weigth-bold">
                                    Kartu Pelajar:
                                </div>
                                <div class="d-flex">
                                   <v-file-input
                                    v-if="!isMemberTwo"
                                    v-model="team.ktm_2"
                                    v-bind:disabled="this.isMemberTwo"
                                    counter
                                    dense
                                    placeholder="Select your files"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    accept=".pdf"
                                    :rules="[formValidation, v => !!v || 'File is required']"
                                    :show-size="1000"
                                ></v-file-input>
                                <v-alert
                                    v-if="isMemberTwo"
                                    class=" px-2 "
                                    dense
                                    text
                                    type="success"
                                >Uploaded</v-alert>
                                
                                  
                                </div>
                                

                            </div>
                        </v-card>
                    </v-col>

                    <v-col
                        class="col-sm-12 col-lg-4 col-xs-12 "
                        md="8"
                        lg="4"
                        xs="12"
                        sm="12"
                        cols="12"
                    >
                        <v-card outlined class="mx-4 ml-0 " >
                            <v-container class="">
                                <v-card-title class="title pl-0 pt-0 ">
                                    Pembayaran
                                </v-card-title>

                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>
                                <div  class="justify-left ">
                                  <div class="subtitle mt-1 ml-0 subtitle-daftar">
                                    Kompetisi: Programming Competition Session
                                  </div>
                                  <div v-show="team.nama_tim" class="subtitle mt-1 ml-0 subtitle-daftar">
                                      Nama Tim: {{team.nama_tim}}
                                  </div>
                                  <div class="subtitle mt-1 ml-0 subtitle-daftar">
                                        Nama Sekolah : {{profils.instansi}} 
                                  </div>
                                  <div class="subtitle mt-1 ml-0 subtitle-daftar">
                                        Nama Ketua : {{this.profils.nama}} 
                                  </div>

                                  <div class="subtitle mt-1 ml-0 subtitle-daftar">
                                        Jumlah Anggota : {{this.jumlahAnggota}} orang
                                  </div>

                                  
                                </div>
                                  
                                <div
                                    class="d-flex justify-content-end daftar-section "
                                >
                                    <v-snackbar
                                       v-if="isBerhasil"
                                      :timeout="4000"
                                      vertical
                                      color='error'
                                    >
                                      Form Telah Dilengkap

                                      <v-btn
                                      
                                        text
                                        @click="snackbar = false"
                                      >
                                        Close
                                      </v-btn>
                                    </v-snackbar>
                                    <v-snackbar
                                      v-model="isTersimpan"
                                
                                      :timeout="4000"
                                      vertical
                                      color='success'
                                    >
                                      Form Telah Dilengkapi

                                      <v-btn
                                      
                                        text
                                        @click="snackbar = false"
                                      >
                                        Close
                                      </v-btn>
                                    </v-snackbar>

                                </div>

                            
                        
                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>
                            </v-container>
                            <v-card-actions class="pt-0">
                                 
                                <v-btn
                                    v-if="!isBelumBayar"
                                    @click="dialogKonfirmasi = true  " 
                                    color="#13CEBB"
                                    rounded
                                    outlined
                                    class="mt-0 daftar-button btn-block"
                                    min-width="150"
                                    >DAFTAR</v-btn
                                >
                                <v-btn
                                     v-if="isBelumBayar"
                                    @click="dialog = true" 
                                    color="#13CEBB"
                                    rounded
                                    outlined
                                    class="mt-0 daftar-button btn-block"
                                    min-width="150"
                                    >BAYAR</v-btn
                                >
                                  <div>
                                    <v-dialog
                                        v-model="dialogKonfirmasi"
                                        persistent
                                        max-width="600px"
                                    >
                                        <v-card>
                                          
                                            <div class="pa-6 title font-weight-regular">
                                            Apakah Anda sudah yakin dengan data yang Anda masukkan dan bersedia mengikuti proses pendaftaran Kompetisi Programming Competition Session JOINTS 2020?
                                            </div>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    text
                                                    color="blue darken-1"
                                                    @click="dialogKonfirmasi = false"
                                                    >Tidak</v-btn
                                                >
                                                <v-btn
                                                    text
                                                    color="blue darken-1"
                                                    @click="submitAllFunc()"
                                                    >YA</v-btn
                                                >
                                              
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </div>
                            </v-card-actions>
                            
                            <v-overlay
                                :absolute="absolute"
                                v-if="this.overlay"
                                light
                                color="white"
                                :opacity="1"
                            >
                                <v-container class=" d-flex py-0 ">
                                    <v-row class="py-0 my-0">
                                        <v-col>
                                            <v-card
                                                color="white"
                                                min-width="100"
                                                class="elevation-0"
                                            >
                                                <v-alert
                                                    type="success"
                                                    class="my-2 alert-card px-6 py-2 font-weight-bold "
                                                >
                                                    LUNAS
                                                </v-alert>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-overlay>

                            <div>
                                <v-dialog
                                    v-model="dialog"
                                    persistent
                                    max-width="600px"
                                    class="payment-dialog"
                                >
                                    <v-card class="rounded-4 payment-dialog">
                                        <v-card-title
                                            class="card-title mb-0 pb-0"
                                        >
                                            <span
                                                class="headline dialog-title mt-5 pb-1 font-weight-medium "
                                                >Pembayaran</span
                                            >
                                        </v-card-title>

                                        <v-card-text>
                                            <div
                                                class="title text-left font-weight-regular title-biru-muda "
                                            >
                                                Yuk Lakukan Tranfer via OVO :
                                            </div>
                                            <div class="title subtitle-purple">
                                                082112663311 an. Putri Rizki
                                            </div>

                                            <div>
                                                <v-avatar
                                                    class="compe-avatar"
                                                    size="220"
                                                    tile
                                                >
                                                    <v-img
                                                        :src="
                                                            require('@/assets/qrCodePNG.png')
                                                        "
                                                    >
                                                    </v-img>
                                                </v-avatar>

                                                <div class=" pa-0 mb-0">
                                                    <div
                                                        class="d-flex flex-column "
                                                    >
                                                        <div
                                                            class="title text-left font-weight-regular title-biru-muda"
                                                        >
                                                            Harap Lakukan
                                                            Pembayaran dalam
                                                        </div>
                                                        <div
                                                            class=" headline subtitle-purple"
                                                        >
                                                            3 x 24 Jam
                                                        </div>

                                                        <div
                                                            class="title text-left font-weight-regular title-biru-muda"
                                                        >
                                                            Sebesar:
                                                        </div>
                                                        <div
                                                            class="display-1 ml-3 subtitle-purple pb-0 mb-0"
                                                        >
                                                            Rp
                                                            {{
                                                                this.team.harga
                                                            }}.00
                                                        </div>

                                                        <div
                                                            class="col-12 mx-0 my-0 pb-0 "
                                                        ></div>
                                                        <v-container
                                                            class=" d-flex flex-column justify-content-between py-0"
                                                        >
                                                            <v-row
                                                                class="py-0 my-0"
                                                            >
                                                                <v-col
                                                                    class="col-md-10 col-xs-12 my-0 py-0  px-0"
                                                                >
                                                                    <v-alert
                                                                       v-if="this.isLunas"
                                                                        dense
                                                                        type="success"
                                                                        class="my-2 alert-card px-4  "
                                                                    >
                                                                        Lunas
                                                                    </v-alert>

                                                                    <v-alert
                                                                        dense
                                                                        type="info"
                                                                         v-if="!this.isLunas"
                                                                        class="my-2 alert-card px-4 alert-biru elevation-1"
                                                                    >
                                                                        Menunggu
                                                                        Pembayaran
                                                                    </v-alert>
                                                                </v-col>
                                                                <v-col
                                                                    class="col-md-2  col-xs-12 my-0 py-0"
                                                                >
                                                                    <div
                                                                        class="text-center ma-2"
                                                                    >
                                                                        <v-progress-circular
                                                                             v-if="!this.isLunas"
                                                                            :indeterminate="
                                                                                true
                                                                            "
                                                                            :size="
                                                                                30
                                                                            "
                                                                            :width="
                                                                                5
                                                                            "
                                                                            color="light-blue my-2"
                                                                        ></v-progress-circular>
                                                                    </div>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-card-text>
                                        <v-card-actions class="pb-2">
                                            <v-spacer></v-spacer>

                                            <v-btn
                                                color="white"
                                                text
                                                rounded
                                                class="biru-button elevation-1"
                                                @click="dialog = false"
                                                >Tutup</v-btn
                                            >
                                        </v-card-actions>
                                       
                                    </v-card>
                                </v-dialog>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
              </v-container>
            </v-app>
    </div>
</template>

<script>

import Axios from 'axios';
import firebase from 'firebase/app';
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
    name: 'Registration',
    props: ['section'],

    data() {
        return {
            myInterval : undefined,
            isBerhasil: false,
            isBelumBayar : false,
            dialogKonfirmasi: false,
            isTersimpan: false, 
            isAlert: false, 
            snackbar: false,
            isDisabled : false,
            absolute: true,
            isMemberKetua: false,
            isMemberOne: false,
            isMemberTwo: false,
            overlay: false,
            isLunas: false,
            dialog: false,
            components: [1, 2, 3],
            profils: {
              nama: '',
              email: '',
              nomor: '',
              instansi: '',
                
            },
            team: {
              nama_1: '',
              nama_2: '', 
              ktm_ketua: null,
              ktm_1: null,
              ktm_2: null,
              nama_tim: '',
              harga: '',
              status: '',
              isSingle: false
            },
            
            jumlahAnggota: null
            
            
        };
    },
    
    computed:{ 
              // ...mapState(['profils']),
              ...mapGetters(['profilsData', 'competitions'])}

                ,
    created() {
      //dispatch profil ketua data;
    this.$store.dispatch('getProfilDataVuex'),
    this.$store.watch(
        (state, getters ) => getters.profilsData,
        (newValue, oldValue) => {
          // console.log(`Updating from ${oldValue} to ${newValue}`);
          this.getDataDiluarEmail()
        }
      ),
     //dispatch for Competitions Data;  
    this.$store.dispatch('getTeamDataVuex'),
    this.$store.watch(
        (state, getters ) => getters.competitions,
        (newValue, oldValue) => {
          // console.log(`Updating from ${oldValue} to ${newValue}`);
          this.getTeamData()
        },
        
      )
    },
   
    mounted() {
      this.getDataDiluarEmail()
      this.getEmailVuex();
      this.getStatusData();
      this.intervalGetData()
    },
    methods: {
          submitAllFunc(){
          this.submitProfils()
          this.submitTeamData()
          this.getTeamData() 
          this.dialog = true 
          this.dialogKonfirmasi = false 
        },
         async submitProfils() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const bodyParameters = {
                nama: this.profils.nama,
                email: this.$store.state.user.data.email,
                nomor: this.profils.nomor,
                instansi: this.profils.instansi
            };
            this.$store.commit('SET_PROFIL', this.profils)
            this.intervalGetData();
            const BASE_URL = 'https://api.joints.id';
            Axios.post(BASE_URL + '/biodata', bodyParameters, config)
                .then(response => {
                 
                    // console.log(response);
                    // console.log('berhasil');
                })
                .catch(error => {
                    console.log(error);
                });
            
        },
        async getStatusData() {
        let token = await firebase.auth().currentUser.getIdToken(true);
        const config = {
            headers: { Authorization: 'Bearer ' + token }
        };
        const competitions = {};
        const BASE_URL = 'https://api.joints.id';
        Axios.get(BASE_URL + '/competition', config)
            .then(response => {
              // console.log(response);
                 response.data.competitions.forEach((value, index) => {
                    competitions[value.competition] = value;
                    
                    
                });
                // console.log(competitions);

                if(competitions.pcs != undefined){
                  
                // console.log('ini dari getstatusdata; ADA COMPETITION.PCS');
                  if (competitions.pcs.status == 'menunggu_pembayaran') {
                    //    console.log('ga lunas menunggu pembayaran');
                      this.overlay = false;
                      this.isLunas = false;
                      this.isBelumBayar = true 

                  } else if (competition.pcs.status == 'lunas') {
                    //   console.log('lunas dari === lunas');
                      this.isLunas = true;
                      this.overlay = true;
                      this.isBelumBayar = true;
                     clearInterval(this.myInterval)
                  } else {
                      // console.log('lunas dari else');
                      this.isLunas = true;
                      // this.overlay = true;
                  }
                }

              
            })
            .catch(error => {
                console.log(error);
            });
        },


          intervalGetData() {
          clearInterval(this.myInterval)
        //  console.log('set interval dari competition ');
            this.myInterval =  setInterval(() => {
              this.getStatusData();
          }, 4000);
        },
        
        overlayAndDialog() {
            this.overlay = false;
            this.dialog = true;
            this.submitTeamData()
        },
        getTeamData(){
        if(this.$store.getters.competitions.pcs == null ||
            this.$store.getters.competitions.pcs == undefined ){
            // console.log(' competitions harus di isi');
            
          } else {
            // console.log(' C1 competitions ngefetch dulu; ');
            // console.log(this.$store.getters.competitions);
            
                this.team.nama_tim= this.$store.getters.competitions.pcs.nama_tim,
                this.team.nama_1= this.$store.getters.competitions.pcs.nama_1,
                this.team.nama_2 = this.$store.getters.competitions.pcs.nama_2,
                this.team.ktm_ketua = this.$store.getters.competitions.pcs.ktm_ketua,
                this.team.ktm_1= this.$store.getters.competitions.pcs.ktm_1,
                this.team.ktm_2= this.$store.getters.competitions.pcs.ktm_2,
                this.team.harga=  this.formatHarga(this.$store.getters.competitions.pcs.harga),
                this.team.status = this.$store.getters.competitions.pcs.status
                this.team.isSingle = this.$store.getters.competitions.pcs.single

                if(this.$store.getters.competitions.pcs.ktm_2 != undefined){
                      this.isMemberTwo = true;
                      this.isMemberOne = true;
                      this.isMemberKetua = true
                      this.jumlahAnggota = 3
                } else if (this.$store.getters.competitions.pcs.ktm_1 != undefined){
                      this.isMemberOne = true;
                      this.isMemberKetua = true
                      this.jumlahAnggota = 2
                } else if (this.$store.getters.competitions.pcs.ktm_ketua != undefined){
                      this.isMemberKetua = true;
                      this.jumlahAnggota = 1
                }

                if (
                      this.$store.getters.competitions.pcs.status == 'menunggu_pembayaran'
                  ) {
                      // console.log('ga lunas menunggu pembayaran');
                      this.overlay = false;
                      this.isLunas = false;
                      this.isBelumBayar = true;
                  } else if (
                      this.$store.getters.competition.pcs.status == 'lunas'
                  ) {
                      // console.log('lunas dari === lunas');
                      this.isLunas = true;
                      this.overlay = true;
                      this.isBelumBayar = true;
                      this.stopIntervalGetData()
                  } else {
                      // console.log('lunas dari else');
                      this.isLunas = true;
                      // this.overlay = true;
                  }

            
            // console.log(this.team);
          }
      },
      formatHarga(number) {
            let hargaIndo = Intl.NumberFormat(['ban', 'id']).format(number);
            return hargaIndo;
        },
        getDataDiluarEmail(){
        if(this.$store.getters.profilsData == null ||
          this.$store.getters.profilsData == undefined ||
          this.$store.getters.profilsData.nama == null  &&
          this.$store.getters.profilsData.nomor == null &&
          this.$store.getters.profilsData.instansi == null){
            // console.log(' biodata harus di isi');
            //  this.getProfilData()
          } else {
            // console.log(' data di profils ngefetch dulu; ');
            this.profils.nama = this.$store.getters.profilsData.nama
            this.profils.nomor =  this.$store.getters.profilsData.nomor
            this.profils.instansi = this.$store.getters.profilsData.instansi

          }
      },
      getEmailVuex(){
        this.profils.email = this.$store.state.user.data.email;
       
      },
      
    

        async submitTeamData() {
            let formData = new FormData();
            for (let [key, value] of Object.entries(this.team)) {
              // console.log(key, value);
              formData.append(key, value);
              
            }
            // console.log(formData);
             this.intervalGetData()

            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token,
                'Content-Type': 'multipart/form-data' }
            };
            
            let URL_API = `daftar/pcs`
            const BASE_URL = 'https://api.joints.id';
            Axios.post(BASE_URL +  `/${URL_API}`, formData, config)
                .then(response => {
                    // console.log(response);
                    // console.log('berhasil');
                     this.$store.dispatch('getTeamDataVuex')
                })
                .catch(error => {
                    console.log(error);
                });
        },

        warningBeforeSend() {
            if (this.formIsFullfiled() == true) {
                this.dialogKonfirmasi = true 
                return true;
            } else {
                this.isAlert = true;
                return false;
            }
        },
        
       formValidation() {
            let returnValue = null;
            if (
                this.profils.nama &&
                this.profils.email &&
                this.profils.nomor &&
                this.profils.instansi &&
                this.nama_1 &&
                this.nama_2 && 
                this.ktm_ketua &&
                this.ktm_1 &&
                this.ktm_2 &&
                this.nama_tim 
            ) {
                // console.log('ada nama ')
                this.isDisabled = false;
                returnValue = true;
            } else {
                // console.log('ga ada nama');
                returnValue = false;
                this.isDisabled = true;
            }
            return returnValue;
        },
        formatHarga(number) {
          let hargaIndo = Intl.NumberFormat(['ban', 'id']).format(number);
          return hargaIndo;
         }
    },
    beforeDestroy () {
        clearInterval(this.myInterval)
    },
};
</script>

<style>
.v-text-field fieldset {
    border-radius: 5px;
}

.profil-team-title {
    top: 2px;
}

.subtitle-daftar {
    font-size: 16px;
}
</style>
