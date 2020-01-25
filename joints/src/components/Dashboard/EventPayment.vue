<template>
    <div>
        <v-container>
            <v-app class="white ">
                <v-row>
                    <v-col md="8" lg="8" xs="12" sm="12" class="col-xs-12">
                        <v-card outlined class="mx-auto mb-5 pt-0 regis-card ">
                            <div
                                class="wave-container dialog-header d-none d-lg-block"
                            >
                                <svg
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 1440 320"
                                    xml:space="preserve"
                                >
                                    <defs>
                                        <linearGradient
                                            id="payment-header-gradient"
                                        >
                                            <stop
                                                offset="0%"
                                                stop-color="var(--color-stop-1)"
                                            />
                                            <stop
                                                offset="100%"
                                                stop-color=" var(--color-stop-3)"
                                            />
                                        </linearGradient>
                                    </defs>
                                    2

                                    <path
                                        class="st0"
                                        d="M902,69c-100.5,33.2-247.6,95.8-283,111c-95.8,41.1-85.7,40.4-120,52c-140.5,47.5-263.4,43.1-334,40c-41.4-1.8-98.1-6.7-165-20C0,168,0,84,0,0c430.7,0,861.3,0,1292,0C1117.9,7.8,988.1,40.5,902,69z"
                                    ></path>
                                </svg>
                            </div>

                            <div class="pl-5">
                                <div
                                    class="headline text-left mt-4 font-weight-bold konfirmasi-ungu "
                                >
                                    Konfimasi Pembayaran
                                </div>

                                <div class="d-flex flex-column ml-4">
                                    <div
                                        class="title text-left font-weight-regular title-biru-muda"
                                    >
                                        Harap Lakukan Pembayaran Sebelum:
                                    </div>
                                    <div
                                        class="title text-left ml-3 subtitle-purple"
                                    >
                                        Jumat, 3 Januari 2020 14.00 WIB
                                    </div>
                                    <div
                                        class="title text-left font-weight-regular title-biru-muda "
                                    >
                                        Yuk Lakukan Tranfers ke:
                                    </div>
                                    <div
                                        class="title text-left ml-3 subtitle-purple"
                                    >
                                        OVO(082112663311 an. Putri Rizki)
                                    </div>
                                    <div
                                        class="title text-left font-weight-regular title-biru-muda"
                                    >
                                        Sebesar:
                                    </div>

                                    <div
                                        class="title text-left ml-3 subtitle-purple"
                                    >
                                        00
                                    </div>
                                    <div class="overline text-left mt-3">
                                        *Sistem kami akan otomatis mendeteksi
                                        hasil pembayaran anda
                                    </div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col class="col-xs-12" md="4" lg="4" xs="12" sm="12">
                        <v-card outlined class="mx-4 ml-0 " min-width="300">
                            <v-container class="">
                                <v-overlay :absolute="true" :value="overlay">
                                    <div class="text-center ma-12">
                                        <v-progress-circular
                                            :indeterminate="true"
                                            :size="100"
                                            :width="12"
                                            color="light-blue"
                                        ></v-progress-circular>
                                    </div>
                                    <v-btn
                                        color="success"
                                        @click="overlay = false"
                                    >
                                        Payment is Procecessed;
                                    </v-btn>
                                </v-overlay>

                                <v-card-title class="title pl-0 pt-0 ">
                                    Pembayaran
                                </v-card-title>

                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>

                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>
                                <div class="d-flex flex-no-wrap">
                                    <v-card-title class="title pl-0 "
                                        >Total harga:
                                        {{ payment.hari }} </v-card-title
                                    ><v-spacer></v-spacer>
                                    <v-card-title class="title   ">
                                        Rp{{ payment.harga }}, 00</v-card-title
                                    >
                                </div>

                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>
                                <p>
                                    ()Saya menyutujui semua ketentuan dan
                                    persyaratan yang diberikan
                                </p>

                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>
                            </v-container>
                            <v-card-actions class="pt-0 daftar-action">
                                <v-btn
                                    color="white"
                                    rounded
                                    outlined
                                    class="mt-0 daftar-button btn-block"
                                    min-width="150"
                                    @click="overlay = !overlay"
                                    >BAYAR</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-app>
        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import Axios from 'axios';

export default {
    name: 'Registration',
    props: ['section'],
    data() {
        return {
            dialog: false,
            absolute: true,
            overlay: false,
            payment: {
                harga: null,
                lunas: null,
                hari: null,
                tanggal: null
            }
        };
    },
    methods: {
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
                    this.payment.lunas = response.data.status;
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getDateTommorow() {
            const months = [
                'Januari',
                'Februari',
                'Maret',
                'April',
                'Mei',
                'Juni',
                'Juli',
                'Agustus',
                'September',
                'Oktober',
                'November',
                'Desember'
            ];
            const myDays = [
                'Minggu',
                'Senin',
                'Selasa',
                'Rabu',
                'Kamis',
                'Jumat',
                'Sabtu'
            ];
            const currentDate = new Date();
            const tommorow = currentDate.setDate(currentDate.getDate() + 1);
            this.payment.hari = tommorow;
        }
    },
    created() {
        this.getPriceData();
        this.getDateTommorow();
    }
};
</script>

<style>
.dialog-header {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
}
.st1 {
    fill: red;
}

#payement-header-gradient {
    --color-stop-1: #19c4b9;
    --color-stop-3: #90169f;
}

.st0 {
    fill: url('#payment-header-gradient');
}

.v-card--outlined {
    border-radius: 18px;
    border: solid 6px;
    border-color: #e475b2;
}

.v-text-field fieldset {
    border-radius: 5px;
}
.subtitle-daftar {
    font-size: 16px;
}

.title-biru-muda {
    color: #13cebb;
}

.konfirmasi-ungu {
    color: #6950b5;
}

.subtitle-purple {
    color: #b72795;
}

.daftar-action .daftar-button {
    padding-top: 3% !important;
    background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;

    border: none !important;
}
</style>
