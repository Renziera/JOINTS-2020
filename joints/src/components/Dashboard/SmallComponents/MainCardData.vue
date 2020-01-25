<template>
    <div>
        <v-app class="white">
            <v-container class="ma-0 pa-0">
                <v-row class="pa-0 ">
                    <v-col
                        md="8"
                        lg="8"
                        xs="12"
                        sm="12"
                        class="col-xs-12 align-self-start"
                    >
                        <v-card
                            outlined
                            class="mx-auto pt-0 regis-card elevation-4 outlined-blue-card col-12"
                            height="50%"
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
                                        v-bind:disabled="this.isDisabled"
                                        v-on:click.native="warningBeforeSend"
                                        >Save
                                    </v-btn>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row></v-container
            >
        </v-app>
    </div>
</template>

<script>
import Axios from 'axios';
import firebase from 'firebase/app';

export default {
    props: {},

    data: () => ({
        isAlert: false,
        isDisabled: false,
        profils: {
            nama: null,
            email: null,
            nomor: null,
            instansi: null
        }
    }),
    methods: {
        formValidation() {
            let returnValue = null;
            if (
                this.profils.nama &&
                this.profils.email &&
                this.profils.nomor &&
                this.profils.instansi
            ) {
                console.log('ada nama ');
                this.isDisabled = false;
                returnValue = true;
            } else {
                console.log('ga ada nama');
                returnValue = false;
                this.isDisabled = true;
            }
            return returnValue;
        },
        warningBeforeSend() {
            if (this.formIsFullfiled() == true) {
                this.submitProfils();
                return true;
            } else {
                console.log(' dari warning before send; harus diisni');
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
                console.log(' murni form isfullfiled harus diisni');
                this.isAlert = true;
                return false;
            }
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
    }
};
</script>

<style>
.daftar-button {
    background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    color: white;
    border: none !important;
}

.outlined-blue-card {
    border: solid 3px !important;
    border-color: #3b89e6 !important;
    border-radius: 22px !important;
}
</style>
