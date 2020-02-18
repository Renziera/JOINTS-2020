<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row class="d-flex align-content-start">
                    <v-col cols="12" class="pb-0 mb-0 profil-team-title">
                        <h4 style="text-align: left" class="mb-0 pb-0">Profil Anda:</h4>
                        <div
                            class="subtitle mt-1 ml-0 subtitle-daftar"
                        >Lengkapi profil anda dibawah ini</div>
                    </v-col>

                    <v-col
                        md="8"
                        lg="8"
                        xs="12"
                        sm="12"
                        cols="12"
                        class="col-xs-12 align-self-start"
                    >
                        <v-card
                            outlined
                            class="mx-auto pt-0 regis-card elevation-4 outlined-blue-card"
                        >
                            <div class="ma-4 d-flex flex-column">
                                <div class="subtitle">Nama:</div>
                                <v-text-field
                                    class="mt-1 pb-0"
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
                                    placeholder="Nama...."
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
                                    disabled
                                    dense
                                    placeholder="Email"
                                    append-outer-icon=" mdi-checkbox-marked-circle "
                                ></v-text-field>

                                <div class="subtitle">No. Handphone:</div>
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
                                        placeholder="No. Handphone....."
                                    ></v-text-field>
                                </div>

                                <div class="subtitle">Instansi</div>
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
                                    placeholder="Instansi"
                                ></v-text-field>

                                <div class="d-flex justify-content-end daftar-section">
                                    <v-alert
                                        class="alert-card px-4"
                                        type="success"
                                        dense
                                        v-model="isTersimpan"
                                        transition="scale-transition"
                                        dismissible
                                    >Yay Tersimpan</v-alert>

                                    <v-alert
                                        class="alert-card px-4"
                                        type="error"
                                        dense
                                        v-model="isAlert"
                                        transition="scale-transition"
                                        dismissible
                                    >Form Harus Dilengkapi</v-alert>

                                    <div class="d-flex justify-content-end daftar-section">
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="white elevation-2"
                                            rounded
                                            class="daftar-button"
                                            max-width="100"
                                            v-bind:disabled="false"
                                            v-on:click.native="
                                                warningBeforeSend
                                            "
                                        >Save</v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col
                        class="col-sm-12 col-lg-4 col-xs-12 col-md-4"
                        xs="12"
                        sm="12"
                        md="8"
                        lg="4"
                        cols="12"
                    >
                        <v-card
                            outlined
                            class="ml-0 elevation-2 outlined-blue-card d-flex flex-column justify-content-between pa-3 payment-card"
                            max-height="200"
                        >
                            <div class="d-flex my-2">
                                <div
                                    class="body-2 text-justify"
                                >Dengan mengklik tombol di bawah ini, Anda setuju bahwa semua data yang Anda masukkan sudah benar dan bersedia untuk melanjutkan proses pendaftaran.</div>
                            </div>

                            <div class="card-action mt-auto">
                                <v-btn
                                    color="white elevation-2"
                                    rounded
                                    class="mt-0 daftar-payment btn-block text-white"
                                    v-bind:disabled="this.isDisabled"
                                    v-on:click.native="
                                        submitProfils && (dialog = true)
                                    "
                                >BAYAR</v-btn>
                            </div>

                            <v-overlay
                                :absolute="absolute"
                                v-if="this.overlay"
                                light
                                color="white"
                                :opacity="1"
                            >
                                <v-container class="d-flex py-0">
                                    <v-row class="py-0 my-0">
                                        <v-col>
                                            <v-card
                                                color="white"
                                                min-width="100"
                                                class="elevation-0"
                                            >
                                                <v-alert
                                                    type="success"
                                                    class="my-2 alert-card px-6 py-2 font-weight-bold"
                                                >LUNAS</v-alert>
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
                                        <v-card-title class="card-title mb-0 pb-0">
                                            <span
                                                class="headline dialog-title mt-5 pb-1 font-weight-medium"
                                            >Pembayaran</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <div
                                                class="title text-left font-weight-regular title-biru-muda"
                                            >Yuk Lakukan Tranfer/Top up ke nomor OVO berikut :</div>
                                            <div
                                                class="title subtitle-purple"
                                            >082112663311 an. Putri Rizki</div>

                                            <div>
                                                <v-avatar class="compe-avatar" size="220" tile>
                                                    <v-img
                                                        :src="
                                                            require('@/assets/qrCodePNG.png')
                                                        "
                                                    ></v-img>
                                                </v-avatar>

                                                <div class="pa-0 mb-0">
                                                    <div class="d-flex flex-column">
                                                        <div
                                                            class="title text-left font-weight-regular title-biru-muda"
                                                        >
                                                            Harap Lakukan
                                                            Pembayaran dalam
                                                        </div>
                                                        <div
                                                            class="headline subtitle-purple"
                                                        >3 x 24 Jam</div>

                                                        <div
                                                            class="title text-left font-weight-regular title-biru-muda"
                                                        >Sebesar:</div>
                                                        <div
                                                            class="display-1 ml-3 subtitle-purple pb-0 mb-0"
                                                        >
                                                            Rp
                                                            {{
                                                            this.payment.harga
                                                            }}.00
                                                        </div>

                                                        <div class="col-12 mx-0 my-0 pb-0"></div>
                                                        <v-container
                                                            class="d-flex flex-column justify-content-between py-0"
                                                        >
                                                            <v-row class="py-0 my-0">
                                                                <v-col
                                                                    class="col-md-10 col-xs-12 my-0 py-0 px-0"
                                                                >
                                                                    <v-alert
                                                                        v-if="
                                                                            payment.isLunas
                                                                        "
                                                                        dense
                                                                        type="success"
                                                                        class="my-2 alert-card px-4"
                                                                    >Lunas</v-alert>

                                                                    <v-alert
                                                                        dense
                                                                        type="info"
                                                                        v-else
                                                                        class="my-2 alert-card px-4 alert-biru elevation-1"
                                                                    >
                                                                        Menunggu
                                                                        Pembayaran
                                                                    </v-alert>
                                                                </v-col>
                                                                <v-col
                                                                    class="col-md-2 col-xs-12 my-0 py-0"
                                                                >
                                                                    <div class="text-center ma-2">
                                                                        <v-progress-circular
                                                                            v-if="
                                                                                !payment.isLunas
                                                                            "
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
                                            >Tutup</v-btn>
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
        isTersimpan: false,
        isAlert: false,
        isDisabled: true,
        dialog: false,
        absolute: true,
        overlay: false,
        opacity: 1,

        item: {
            link: '/dashboard/events/grandlaunching/payment',
            harga: null,
            menunggu_pembayaran: null,
            image: null,
            src: '@/assets/qrCodePNG.png',
            isAgree: false,
            isSudahLunas: false,
            SyaratIsAccept: false,
            isSudahDibayar: false,
            isCheckbox: false
        },
        profils: {
            nama: null,
            email: null,
            nomor: null,
            instansi: null
        },
        payment: {
            harga: null,
            statusBayar: null,
            event: null,
            isLunas: false
        }
    }),
    beforedestroy() {
        clearInterval(this.intervalGetData);
    },
    computed: {
        // ...mapState(['profils']),
        ...mapGetters(['profilsData'])
    },
    created() {
        this.$store.dispatch('getProfilDataVuex'),
            this.$store.watch(
                (state, getters) => getters.profilsData,
                (newValue, oldValue) => {
                    // console.log(`Updating from ${oldValue} to ${newValue}`);
                    this.getDataDiluarEmail();
                }
            );
    },
    mounted() {
        this.getDataDiluarEmail();
        this.getEmailVuex();
        this.getPriceData();
        this.intervalGetData();
    },

    methods: {
        getEmailVuex() {
            this.profils.email = this.$store.state.user.data.email;
        },

        getDataDiluarEmail() {
            if (
                this.$store.getters.profilsData == null ||
                this.$store.getters.profilsData == undefined ||
                (this.$store.getters.profilsData.nama == null &&
                    this.$store.getters.profilsData.nomor == null &&
                    this.$store.getters.profilsData.instansi == null)
            ) {
                // console.log(' biodata harus di isi');
            } else {
                // console.log(' data di profils ngefetch dulu; ');
                this.profils.nama = this.$store.getters.profilsData.nama;
                this.profils.nomor = this.$store.getters.profilsData.nomor;
                this.profils.instansi = this.$store.getters.profilsData.instansi;
            }
        },

        async getStatusData() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/daftar/grand_launching', config)
                .then(response => {
                    this.payment.statusBayar = response.data.status;
                    // console.log(response);
                    if (this.payment.statusBayar == 'menunggu_pembayaran') {
                        this.overlay = false;
                        this.payment.isLunas = false;
                    } else if (this.payment.statusBayar == 'lunas') {
                        // console.log('lunas dari === lunas');
                        this.payment.isLunas = true;
                        this.overlay = true;
                    } else {
                        // console.log('lunas dari else');
                        this.payment.isLunas = true;
                        this.overlay = true;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },

        intervalGetData() {
            setInterval(() => {
                this.getStatusData();
            }, 4000);
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
                this.isTersimpan = true;
                return true;
            } else {
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
                this.profils.instansi
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
            this.$store.commit('SET_PROFIL', this.profils);
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

                    // console.log('harga dan status bayar ++ ');
                    // console.log(this.payment.statusBayar)
                    // console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        // async getProfilData() {
        //     let token = await firebase.auth().currentUser.getIdToken(true);

        //     const config = {
        //         headers: { Authorization: 'Bearer ' + token }
        //     };
        //     const BASE_URL = 'https://api.joints.id';
        //     Axios.get(BASE_URL + '/biodata', config)
        //         .then(response => {
        //             this.profils = {
        //                 nama: response.data.biodata.nama,
        //                 email: this.$store.state.user.data.email,
        //                 nomor: response.data.biodata.nomor,
        //                 instansi: response.data.biodata.instansi
        //             };
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // }
    }
};
</script>

<style>
.blue-textform {
    color: #12cebb;
    border-color: #12cebb;
}

.biru-button {
    background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    color: white;
    border: none !important;
}

.alert-biru {
    background-image: linear-gradient(90deg, #3587e5, #92abfc) !important;
}

.subtitle-purple {
    color: #a51984 !important;
}

.title-biru-muda {
    color: #12ceba !important;
}

.payment-dialog {
    border-radius: 15px !important;
}

.inside-overlay {
    height: 100%;
    width: 100%;
}

.outlined-blue-card {
    border: solid 3px !important;
    border-color: #e475b2 !important;
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
