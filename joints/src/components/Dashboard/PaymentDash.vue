<template>
    <div>
        <v-container>
            <v-app class="white ">
                <v-row>
                    <v-col md="8" lg="8" xs="12" sm="12" class="col-xs-12">
                        <v-card
                            outlined
                            class="mx-auto px-4 pt-4 mb-5 pt-0 regis-card"
                        >
                            <div class="headline text-left mt-5 mb-5">
                                Konfimasi Pembayaran
                            </div>

                            <div class="title text-left">
                                Lakukan Pembayaran Sebelum:
                            </div>

                            <div class="title text-left">
                                Yuk Tranfers ke Nomor Berikut:
                            </div>
                            <div class="subtitle-1 text-left">
                                Sistem kami akan otomati mendeteksi hasil
                                pembayaran anda:
                            </div>
                        </v-card>
                    </v-col>

                    <v-col class="col-xs-12" md="4" lg="4" xs="12" sm="12">
                        <v-card outlined class="mx-4 ml-0 " min-width="300">
                            <v-container class="">
                                <v-btn
                                    color="success"
                                    class="mt-12"
                                    @click="overlay = !overlay"
                                >
                                    Show Overlay
                                </v-btn>

                                <v-overlay
                                    :absolute="absolute"
                                    :value="overlay"
                                >
                                    <div class="text-center ma-12">
                                        <v-progress-circular
                                            :indeterminate="true"
                                            :size="90"
                                            :width="12"
                                            color="light-blue"
                                            >{{ value }}</v-progress-circular
                                        >
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
                                <p class="justify-left">Jumlah 2 orang ya</p>

                                <v-divider
                                    class="mt-0 mb-0 card-divider"
                                ></v-divider>
                                <div class="d-flex flex-no-wrap">
                                    <v-card-title class="title pl-0 "
                                        >Total harga: </v-card-title
                                    ><v-spacer></v-spacer>
                                    <v-card-title class="title  "
                                        >$12</v-card-title
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
                            <v-card-actions class="pt-0">
                                <v-btn
                                    color="#13CEBB"
                                    rounded
                                    outlined
                                    class="mt-0 daftar-button btn-block"
                                    min-width="150"
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
export default {
    name: 'Registration',
    props: ['section'],
    data() {
        return {
            components: [1, 2, 3],
            absolute: true,
            overlay: false
        };
    }
};
</script>

<style>
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
</style>
