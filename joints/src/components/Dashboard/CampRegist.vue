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
                            Lengkapi profil anda dibawah ini
                        </div>
                    </v-col>

                    <v-col cols="12" class="pb-0 mb-0 profil-team-title">
                        <h4 style="text-align: left" class="mb-0 pb-0">
                            Profil Anda:
                        </h4>
                        <div class="subtitle mt-1 ml-0 subtitle-daftar">
                            Lengkapi profil anda dibawah ini
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
                            class="mx-auto pt-0 regis-card elevation-4 outlined-blue-card"
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
                                    placeholder="Nama"
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
                                    outlined
                                    dense
                                    placeholder="Nama"
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
                                        placeholder="Nama"
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
                                        v-bind:disabled="false"
                                        v-on:click.native="warningBeforeSend"
                                        >Save
                                    </v-btn>
                                </div>
                            </div>
                        </v-card>

                        <v-card
                            outlined
                            class="mx-auto pt-2 regis-card elevation-4 outlined-blue-card col-12 mt-4"
                            height="50%"
                        >
                            <div class=" ma-4 d-flex flex-column">
                                <div class="subtitle">Linkedin:</div>
                                <v-text-field
                                    class="mt-1 pb-0 "
                                    v-model="daftarCamps.linked_in"
                                    :rules="[
                                        () =>
                                            !!daftarCamps.linked_in ||
                                            'This field is required'
                                    ]"
                                    required
                                    outlined
                                    dense
                                    placeholder="Linkedin"
                                ></v-text-field>

                                <div class="subtitle">Upload resume/CV:</div>
                                <v-file-input
                                    v-model="daftarCamps.files"
                                    counter
                                    dense
                                    placeholder="Select your files"
                                    prepend-icon="mdi-paperclip"
                                    outlined
                                    accept=".pdf"
                                    :rules="[v => !!v || 'File is required']"
                                    :show-size="1000"
                                ></v-file-input>

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

                                    <v-btn
                                        color="white elevation-2"
                                        rounded
                                        class=" daftar-button  mt-2"
                                        max-width="100"
                                        v-bind:disabled="false"
                                        v-on:click.native="submitAndValidate"
                                        >Save</v-btn
                                    >
                                </div>
                                {{ events.eventDatas.joints_camp.event }}
                                {{ this.daftarCamps.linked_in }}
                            </div>
                        </v-card>
                    </v-col>
                    <v-col
                        class="col-sm-12 col-lg-4 col-xs-12 col-md-4"
                        xs="12"
                        sm="12"
                        md="4"
                        lg="4"
                        col="12"
                    >
                        <v-card
                            outlined
                            class="ml-0 elevation-2 outlined-blue-card  d-flex flex-column justify-content-between pa-3 payment-card"
                            max-height="200"
                        >
                            <div class=" d-flex my-2">
                                <div class="body-2 text-justify">
                                    Dengan mengklik tombol ini, Anda mengakui
                                    bahwa Anda telah membaca dan menyetujui
                                    Syarat & Ketentuan dan Kebijakan Privasi
                                    Joints
                                </div>
                            </div>

                            <div class="card-action mt-auto ">
                                <v-btn
                                    color="white elevation-2"
                                    rounded
                                    class="mt-0 daftar-payment btn-block text-white"
                                    v-bind:disabled="this.isDisabled"
                                    v-on:click.native="
                                        submitProfils &&
                                            (dialog = true) &&
                                            (this.overlay = !this.overlay)
                                    "
                                    >Daftar</v-btn
                                >
                            </div>

                            <v-overlay
                                :absolute="absolute"
                                v-model="this.overlay"
                                light
                                color="white"
                                :opacity="1"
                            >
                                <div class="col-12 mx-0">
                                    <v-container
                                        class=" d-flex flex-column justify-content-between "
                                    >
                                        <v-alert
                                            v-if="item.isSudahDibayar"
                                            dense
                                            type="success"
                                            class="my-2 alert-card px-4 "
                                        >
                                            Lunas
                                        </v-alert>

                                        <v-alert
                                            dense
                                            type="info"
                                            v-else
                                            class="my-2 alert-card px-4 "
                                        >
                                            Menunggu Pembayaran
                                        </v-alert>

                                        <div class="text-center ma-2">
                                            <v-progress-circular
                                                :indeterminate="true"
                                                :size="30"
                                                :width="5"
                                                color="light-blue my-2"
                                            ></v-progress-circular>
                                        </div>

                                        <v-btn
                                            dense
                                            rounded
                                            min-width="290"
                                            max-width="400"
                                            v-on:click.native="warningBeforePay"
                                            class="daftar-payment my-2 btn-block "
                                        >
                                            Bayar
                                        </v-btn>
                                    </v-container>
                                </div>
                            </v-overlay>

                            <div>
                                <v-dialog
                                    v-model="dialog"
                                    persistent
                                    max-width="600px"
                                >
                                    <v-card>
                                        <v-card-title class="card-title">
                                            <span
                                                class="headline dialog-title mt-5 pb-1 font-weight-medium "
                                                >Pembayaran</span
                                            >
                                        </v-card-title>
                                        <v-card-text>
                                            <div
                                                class="title text-left font-weight-regular title-biru-muda "
                                            >
                                                Yuk Lakukan Tranfers ke
                                            </div>
                                            <div
                                                class="title text-leftsubtitle-purple"
                                            >
                                                OVO(082112663311/Putri Rizki)
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

                                                <div class=" pa-0">
                                                    <div
                                                        class="d-flex flex-column "
                                                    >
                                                        <div
                                                            class="title text-left font-weight-regular title-biru-muda"
                                                        >
                                                            Harap Lakukan
                                                            Pembayaran Sebelum
                                                        </div>
                                                        <div
                                                            class="title text-leftubtitle-purple"
                                                        >
                                                            Jumat, 3 Januari
                                                            2020 14.00 WIB
                                                        </div>
                                                        <div
                                                            class="title text-left font-weight-regular title-biru-muda"
                                                        >
                                                            Sebesar:
                                                        </div>
                                                        <div
                                                            class="title  ml-3 subtitle-purple"
                                                        >
                                                            Rp
                                                            {{
                                                                this.payment
                                                                    .harga
                                                            }}.00
                                                        </div>

                                                        <div
                                                            class="overline text-left mt-3"
                                                        >
                                                            *Sistem kami akan
                                                            otomatis mendeteksi
                                                            hasil pembayaran
                                                            anda
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                text
                                                color="blue darken-1"
                                                @click="dialog = false"
                                                >Close</v-btn
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

export default {
    data: () => ({
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
        daftarCamps: {
            linked_in: null,
            files: null,
            isAlert: false,
            linkFiles: null
        },
        payment: {
            harga: null,
            statusBayar: null,
            event: null
        }
    }),

    computed: {
        events() {
            // this.daftarCamps.linked_in = this.$store.state.events.eventDatas.joints_camp.linked_in
            // // this.daftarCamps.files = this.$store.state.events.eventDatas.joints_camp.resume
            // console.log(this.daftarCamps.linked_in);
            return this.$store.state.events;
        }
    },

    methods: {
        async fetchEventsData() {
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
                    this.daftarcamp.linked_in =
                        eventsBaru.joints_camp.linked_in;
                    this.daftarcamp.linkFiles = eventsBaru.joints_camp.resume;
                    // console.log('ini adalah event ')
                    // console.log(this.daftarCamps)
                })
                .catch(error => {
                    console.log(error);
                });
        },

        fetchFilesAndLinkedin() {
            this.daftarCamps.linked_in = this.$store.state.events;
        },
        async submitAndValidate() {
            if (this.daftarCamps.files && this.daftarCamps.linked_in) {
                // console.log('file bisa dikirim');
                // console.log(this.daftarCamps.files);
                this.submitFilesAndLinkedin();
            } else {
                // console.log('tidak bisa dikirm');
                this.daftarCamps.isAlert = true;
                return false;
            }
        },

        async submitFilesAndLinkedin() {
            let formData = new FormData();
            formData.append('resume', this.daftarCamps.files);
            formData.append('linked_in', this.daftarCamps.linked_in);

            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const bodyParameters = {
                resume: this.daftarCamps.files,
                linked_in: this.daftarCamps.linked_in
            };
            const BASE_URL = 'https://api.joints.id';
            Axios.post(BASE_URL + '/daftar/joints_camp', bodyParameters, config)
                .then(response => {
                    // console.log(response);
                    // console.log('berhasil');
                })
                .catch(error => {
                    console.log(error);
                });
        },
        overlayDanStatusBayar() {
            if (this.payment.statusBayar == 'lunas') {
                this.overlay = true;
                this.isSudahDibayar = true;
            } else if (this.payment.statusBayar == 'menunggu_pembayaran') {
                this.overlay = true;
                this.isSudahDibayar = false;
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
    mounted() {
        this.getProfilData();
        this.getPriceData();
        this.overlayDanStatusBayar();
        this.$store.dispatch('fetchEventsData');
    },
    beforeMount() {
        this.getPriceData();
    }
};
</script>

<style>
.inside-overlay {
    height: 100%;
    width: 100%;
}

.outlined-blue-card {
    border: solid 3px !important;
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
