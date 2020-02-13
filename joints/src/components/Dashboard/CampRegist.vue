<template>
    <div>
        <v-app class="white ">
            <v-container>
                <v-row class="d-flex align-content-start">
                    <v-col cols="12" class="pb-0 mb-0 profil-team-title">
                        <h4 style="text-align: left" class="mb-0 pb-0">
                            Profil Anda:
                        </h4>
                        <div class="subtitle mt-1 ml-0 subtitle-daftar">
                            Lengkapi profil anda untuk mendaftar JointsCamp: 
                        </div>
                    </v-col>

                   

                    <v-col
                        md="8"
                        lg="8"
                        xs="12"
                        sm="12"
                        class="col-xs-12 align-self-start"
                    >
                        <v-card
                            outlined
                            class="mx-auto pt-0 regis-card elevation-1 outlined-blue-card mb-4"
                        >
                            <div class=" ma-4 d-flex flex-column">
                                <div class="subtitle">Nama:</div>
                                <v-text-field
                                    class="mt-1 pb-0 "
                                    v-model="profils.nama"
                                    :rules="[
                                        formValidation,
                                        () =>
                                            !!profils.nama ||
                                            'This field is required'
                                    ]"
                                    required
                                    outlined
                                    dense
                                    placeholder="Nama Anda"
                                ></v-text-field>

                                <div class="subtitle">Email</div>
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
                                    placeholder="example@gmail.com"
                                    append-outer-icon=" mdi-checkbox-marked-circle "
                                ></v-text-field>

                                <div class="subtitle">Nomor HP:</div>
                                <div>
                                    <v-text-field
                                        class="mt-1"
                                        ref="name"
                                        v-model="profils.nomor"
                                        :rules="[
                                            formValidation,
                                            () =>
                                                !!profils.nomor ||
                                                'This field is required'
                                        ]"
                                        required
                                        outlined
                                        dense
                                        placeholder="081234567890"
                                    ></v-text-field>
                                </div>

                                <div class="subtitle">Universitas/Sekolah:</div>
                                <v-text-field
                                    class="mt-1"
                                    ref="instansi"
                                    v-model="profils.instansi"
                                    :rules="[
                                        formValidation,
                                        v => !!v || 'This field is required'
                                    ]"
                                    required
                                    outlined
                                    dense
                                    placeholder="Universitas/ Sekolah ....."
                                ></v-text-field>

                                <div
                                    class="d-flex justify-content-end daftar-section "
                                >
                                     <v-alert
                                        class="alert-card px-4"
                                        type="success"
                                        dense
                                        v-model="isTersimpan"
                                        transition="scale-transition"
                                        dismissible
                                    >
                                        Yay Tersimpan
                                    </v-alert>

                                    <v-alert
                                        class="alert-card px-4"
                                        type="error"
                                        dense
                                        v-model="isAlert"
                                        transition="scale-transition"
                                        dismissible
                                    >
                                        Form Harus Dilengkapi
                                    </v-alert>
                                    <v-spacer></v-spacer>

                                    <v-btn
                                        color="white elevation-2"
                                        rounded
                                        class=" daftar-button "
                                        max-width="100"
                                        v-bind:disabled="!formIsFullfiled"
                                        v-on:click.native="warningBeforeSend"
                                        >Save
                                    </v-btn>
                                </div>
                            </div>
                        </v-card>
                        <h4 style="text-align: left">Linkedin & Resume  :</h4>
                        <div class="subtitle mt-1 ml-0 subtitle-daftar">
                            Cantumkan Profil LinkedIn serta Upload Resume Anda
                        </div>
                        <v-card
                            outlined
                            class="mx-auto pt-2 regis-card elevation-1 outlined-blue-card col-12 mt-4"
                            height="50%"
                        >
                              <div 
                                class=" ma-4 d-flex flex-column">
                                <div class="subtitle">Linkedin:</div>

                                <div 
                                  v-if="isSudahDaftar"
                                  class="d-flex flex-column col-12 pl-2 pr-0">
                                  <div 
                                    class="title font-weight-medium profil-subtitle text-left  "
                                  >
                                      {{ daftarCamps.linked_in }}
                                  </div>
                                  <v-divider class="ma-0 camp-divider"></v-divider>
                              </div>

                                <v-text-field
                                    v-if="!isSudahDaftar"
                                    class="mt-1 pb-0 "
                                    v-model="daftarCamps.linked_in"
                                    :rules="[formValidation,
                                        () =>
                                            !!daftarCamps.linked_in ||
                                            'This field is required'
                                    ]"
                                    required
                                    outlined
                                    dense
                                    v-bind:readonly="false"
                                    placeholder="https://www.linkedin.com/in/contohlinkedin/"
                                ></v-text-field>

                                <div class="subtitle">Upload resume/CV:</div>
                                <v-file-input
                                    v-if="!isSudahDaftar"
                                    v-model="daftarCamps.resume"
                                    counter
                                    dense
                                    placeholder="Select your files"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    accept=".pdf"
                                    :rules="[formValidation,
                                      v => !!v || 'File is required']"
                                    :show-size="1000"
                                ></v-file-input>

                                 <v-alert
                                    v-if="isSudahDaftar"
                                    class=" px-2 "
                                    dense
                                    text
                                    type="success"
                                >Uploaded</v-alert>

                                <div
                                    class="d-flex justify-content-end daftar-section "
                                >
                                    <v-alert
                                        class="alert-card px-4"
                                        type="error"
                                        dense
                                        v-model="daftarCamps.isAlert"
                                        transition="scale-transition"
                                        dismissible
                                    >
                                        Form Harus Dilengkapi
                                    </v-alert>
                                    <v-spacer></v-spacer>

                                   
                                </div>
                     
                                
                            </div>
                        </v-card>
                    </v-col>
                    <v-col
                        class="col-sm-12  col-xs-12 col-12"
                        xs="12"
                        sm="12"
                        md="8"
                        lg="4"
                        col="12"
                    >
                        <v-card
                            outlined
                            class="ml-0 elevation-1 outlined-blue-card  d-flex flex-column justify-content-between pa-3 payment-card"
                            max-height="200"
                        >
                            <div class=" d-flex my-2">
                                <div class="body-2 text-justify">
                                    Dengan mengklik tombol di bawah ini, Anda setuju bahwa semua data yang Anda masukkan sudah benar dan bersedia untuk mengikuti proses seleksi JointsCamp.
                                </div>
                            </div>

                            <div class="card-action mt-auto ">
                                <v-btn
                                    color="white elevation-2"
                                    rounded
                                    class="mt-0 daftar-payment btn-block text-white"
                                    v-bind:disabled="this.isDisabled"
                                    v-on:click.native="
                                       dialog = true
                                    "
                                    >Daftar</v-btn
                                >
                            </div>

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
                                                    ANDA SUDAH TERDAFTAR
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
                                >
                                    <v-card>
                                       
                                        <div class="pa-6 title font-weight-regular">
                                           Apakah Anda sudah yakin dengan data yang Anda masukkan dan bersedia mengikuti proses seleksi JointsCamp? 
                                        </div>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                             <v-btn
                                                text
                                                color="blue darken-1"
                                                @click="dialog = false"
                                                >Tidak</v-btn
                                            >
                                            <v-btn
                                                text
                                                color="blue darken-1"
                                                @click="submitFilesAndLinkedin() && (dialog = false)"
                                                >YA</v-btn
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
    data: () => ({
        isReadOnly: false, 
        isAlert: false,
        isDisabled: true,
        dialog: false,
        absolute: true,
        overlay: false,
        opacity: 1,
        isSudahDaftar: false,
        isTersimpan: false,

        item: {
            link: '/dashboard/events/grandlaunching/payment',
            harga: null,
            menunggu_pembayaran: null,
            image: null,
            src: '@/assets/qrCodePNG.png',
            isAgree: false,
            isCheckbox: false
        },
        profils: {
            nama: null,
            email: null,
            nomor: null,
            instansi: null
        },
        daftarCamps: {
            linked_in: null,
            resume: null,
            status: '',
            isAlert: false,
            linkFiles: null
        },
        payment: {
            harga: null,
            statusBayar: null,
            event: null
        }
    }),

    computed:{ 
              // ...mapState(['profils']),
              ...mapGetters(['profilsData', 'events'])}

                ,
     created() {
      this.$store.dispatch('getProfilDataVuex'),
      this.$store.watch(
        (state, getters ) => getters.profilsData,
        (newValue, oldValue) => {
          // console.log(`Updating from ${oldValue} to ${newValue}`);
          this.getDataDiluarEmail()
        }
      ),
      this.$store.dispatch('getEventDataVuex'),
      this.$store.watch(
        (state, getters ) => getters.events,
        (newValue, oldValue) => {
          // console.log(`Updating from ${oldValue} to ${newValue}`);

          
          this.getEventData()
        },
        
      )
    }, 
      mounted() {
        this.getDataDiluarEmail()
        this.getEmailVuex();
    
      },

    methods: {
      formInputReadOnly(){
        
      },
       getEventData(){
        if(this.$store.getters.events.joints_camp == null ||
          this.$store.getters.events.joints_camp == undefined ){
            // console.log(' events harus di isi');
            this.overlay = false
            
          } else {
            // console.log(' C1 events ngefetch dulu; ');
            // console.log(this.$store.getters.events);
            this.daftarCamps.linked_in = this.$store.getters.events.joints_camp.linked_in
            this.daftarCamps.resume = this.$store.getters.events.joints_camp.resume
            this.daftarCamps.status = this.$store.getters.events.joints_camp.status
            this.overlay = true
            this.isSudahDaftar = true
            
            // console.log('clg this.daftarCamps');
            // console.log(this.daftarCamps);

          }
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
      close(){
          this.dialogs = this.profils
      },
 

        fetchFilesAndLinkedin() {
            this.daftarCamps.linked_in = this.$store.state.events;
        },
        async submitAndValidate() {
            if (this.daftarCamps.resume && this.daftarCamps.linked_in) {
                  this.dialog = true
                  this.overlay = true
            } else {
                // console.log('tidak bisa dikirm');
                this.daftarCamps.isAlert = true;
                return false;
            }
        },

        async submitFilesAndLinkedin() {
            let formData = new FormData();
            formData.append('resume', this.daftarCamps.resume);
            formData.append('linked_in', this.daftarCamps.linked_in);

            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

           
            const BASE_URL = 'https://api.joints.id';
            Axios.post(BASE_URL + '/daftar/joints_camp', formData, config)
                .then(response => {
                    // console.log(response);
                    // console.log('berhasil');
                    if(response.data.status == 'lunas'){
                      this.overlay = true; 
                      this.isSudahDaftar = true;
                    }

                    
                })
                .catch(error => {
                    console.log(error);
                });
        },
        overlayDanStatusBayar() {
            if (this.payment.statusBayar == 'lunas') {
                this.overlay = true;

            } else if (this.payment.statusBayar == 'menunggu_pembayaran') {
                this.overlay = true;
   
                // console.log(this.overlay);
            }
        },
        warningBeforePay() {
            // console.log(this.warningBeforeSend());
            if (this.formIsFullfiled() === true) {
                this.dialog = true;
            } else {
                this.dialog = false;
            }
        },

        warningBeforeSend() {
            if (this.formIsFullfiled() == true) {
                this.submitProfils();
                return true;
            } else {
                // console.log(' dari warning before send; harus diisni');
                this.isAlert = true;
                return false;
            }
        },
        formIsFullfiled() {
            if (
                this.profils.nama &&
                this.profils.email &&
                this.profils.nomor &&
                this.profils.instansi
            ) {
                return true;
                this.isTersimpan = true; 
            } else {
                // console.log(' murni form isfullfiled harus diisni');
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
                this.daftarCamps.linked_in &&
                this.daftarCamps.resume
                

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

        async submitProfils() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const bodyParameters = {
                nama: this.profils.nama,
                email: this.profils.email,
                nomor: this.profils.nomor,
                instansi: this.profils.instansi
            };

            this.$store.commit('SET_PROFIL', this.profils)
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

        formatHarga(number) {
            let hargaIndo = Intl.NumberFormat(['ban', 'id']).format(number);
            return hargaIndo;
        },
        async getPriceData() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/daftar/grand_launching', config)
                .then(response => {
                    this.payment.harga = this.formatHarga(response.data.harga);
                    this.payment.statusBayar = response.data.status;
                    this.payment.event = response.data.event;

                    // console.log(this.payment.statusBayar)
                    // console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        async getProfilData() {
            let token = await firebase.auth().currentUser.getIdToken(true);

            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/biodata', config)
                .then(response => {
                    this.profils = {
                        nama: response.data.biodata.nama,
                        email: response.data.biodata.email,
                        nomor: response.data.biodata.nomor,
                        instansi: response.data.biodata.instansi
                    };
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
   
};
</script>

<style>

.profil-subtitle {
    line-height: 1.4rem !important;
    padding-top: 3px;
    margin-bottom: 0px !important;
}

.camp-divider {
    border: 1px solid #13cebb !important;
    border-radius: 5px;
}

.inside-overlay {
    height: 100%;
    width: 100%;
}

.outlined-blue-card {
    border: solid 1px !important;
    border-color: #3b89e6 !important;
    border-radius: 22px !important;
}

.alert-card {
    border-radius: 22px !important;
    padding: 6px 0 6px 0 !important;
}

.v-text-field fieldset {
    border-radius: 5px;
}

.profil-team-title {
    top: 2px;
}

.subtitle-daftar {
    font-size: 16px;
}

.v-text-field__details {
    margin-bottom: 2px !important;
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 2px !important;
}

.daftar-section .daftar-button {
    background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    color: white;
    border: none !important;
}

.daftar-payment {
    background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    color: white;
    border: none !important;
}

.dialog-header {
    position: absolute;
    top: -20px;
    left: 0px;
    width: 100%;
}

#profil-header-gradient {
    --color-stop-1: #19c4b9;
    --color-stop-3: #90169f;
}

.st0 {
    fill: url('#profil-header-gradient');
}
</style>
