<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row>
                    <v-col>
                        <h1>Capture The Flag</h1>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            :items="desserts"
                            :single-expand="singleExpand"
                            :expanded.sync="expanded"
                            show-expand
                            item-key="nama"
                            class="elevation-1"
                        >
                            <template v-slot:top>
                                <v-toolbar flat color="white">
                                    <v-toolbar-title>Ce Te Ep</v-toolbar-title>
                                    <v-divider class="mx-4" inset vertical></v-divider>
                                    <v-spacer></v-spacer>

                                    <v-dialog v-model="dialog" max-width="500px">
                                        <template v-slot:activator="{ on }"></template>

                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">
                                                    {{
                                                    formTitle
                                                    }}
                                                </span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row class="d-flex">
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nomor
                                                                "
                                                                label="No"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.waktu_daftar
                                                                "
                                                                label="Waktu Daftar"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nama
                                                                "
                                                                label="Nama"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nomorhp
                                                                "
                                                                label="Nomor HP"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.acara
                                                                "
                                                                label="Acara"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nominal
                                                                "
                                                                label="Nominal"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.status
                                                                "
                                                                label="Status"
                                                            ></v-text-field>
                                                        </v-col>

                                                        <v-col>
                                                            <p class="substite">
                                                                Are you sure
                                                                want to confirm
                                                                this?
                                                            </p>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>

                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="save()"
                                                >Confirm</v-btn>
                                                <v-btn color="blue darken-1" text @click="close">NO</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:expanded-item="{ headers }">
                                <td :colspan="headers.length">Woeoeoee</td>
                            </template>

                            <template v-slot:item.action="{ item }">
                                <v-alert
                                    v-if="
                                        item.konfirmasiAdmin ||
                                            listKonfirmasi[item.nominal]
                                    "
                                    class="py-1 px-2 mt-2"
                                    dense
                                    text
                                    type="success"
                                >Confirmed</v-alert>

                                <v-btn
                                    v-else
                                    class="mr-2"
                                    small
                                    @click="editItem(item)"
                                    v-bind:disabled="item.isJanganKonfirmasi"
                                >
                                    <div v-if="item.isJanganKonfirmasi">Lom Bayar</div>

                                    <div v-else>Konfirmasi</div>
                                </v-btn>
                            </template>

                            <template v-slot:no-data>
                                <v-btn color="primary" @click="initialize">Reset</v-btn>
                            </template>
                        </v-data-table>
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
        expanded: [],
        singleExpand: false,
        listKonfirmasi: [],
        dialog: false,
        headers: [
            { text: 'Waktu Daftar', value: 'waktu_daftar' },
            { text: 'Nama', value: 'nama' },
            { text: 'Email', value: 'email' },
            { text: 'Nomor HP', value: 'nomorhp', sortable: false },
            { text: 'Kompetisi', value: 'kompetisi', sortable: false },
            { text: 'Nominal', value: 'nominal', sortable: false },
            { text: 'Status', value: 'status' },
            { text: 'Aksi', value: 'action', sortable: false }
        ],
        desserts: [],
        idPembayaranItem: null,
        editedIndex: -1,
        editedItem: {
            nomor: 0,
            waktu_daftar: '',
            nama: '',
            email: '',
            nomorhp: '',
            kompetisi: '',
            nominal: '',
            status: '',
            konfirmasiAdmin: false,
            isJanganKonfirmasi: null
        },
        defaultItem: {
            nomor: 0,
            waktu_daftar: '',
            nama: '',
            email: '',
            nomorhp: '',
            acara: '',
            nominal: '',
            status: '',
            konfirmasiAdmin: false,
            isJanganKonfirmasi: null
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Ga Ada' : 'Konfirmasi Peserta';
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },

    created() {
        this.initialize();
        // this.getGLData();
        this.getCtfDataAll();
    },

    methods: {
        async getCtfDataAll() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            let isKonfirmasi = null;
            let waktuDaftar = null;
            let statusBayar = null;
            let konfirmasiAdmin = null;

            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';

            Axios.get(BASE_URL + '/admin/ctf', config)
                .then(response => {
                    response.data.results.forEach((value, index) => {
                        // if (value.event == 'grand_launching') {
                            console.log(value);

                            // if (
                            //     value.status == 'lunas' ||
                            //     value.dilunasi_admin == true
                            // ) {
                            //     konfirmasiAdmin = true;
                            //     isKonfirmasi = false;
                            // } else if (value.status == 'menunggu_pembayaran') {
                            //     konfirmasiAdmin = false;
                            //     isKonfirmasi = false;
                            // }

                            // if (value.waktu_daftar._seconds == undefined ){
                            //    console.log('ga ada cuk');

                            // } else {
                            //      waktuDaftar =   new Date(
                            //         value.waktu_daftar._seconds * 1000
                            //     ).toLocaleDateString()
                            // }

                            // let editedItem = {
                            //     nomor: value.id_pembayaran,
                            //     // waktu_daftar: waktuDaftar,
                            //     nama: value.nama,
                            //     email: value.email,
                            //     nomorhp: value.nomor,
                            //     acara: value.event,
                            //     nominal: value.harga,
                            //     status: value.status,
                            //     konfirmasiAdmin: konfirmasiAdmin,
                            //     isJanganKonfirmasi: isKonfirmasi
                            // };
                            // this.desserts.push(editedItem);
                        // }
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },

        async confirmPeserta(value) {
            let token = await firebase.auth().currentUser.getIdToken(true);
            let id_pembayaran = null;
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const bodyParameters = {
                id_pembayaran: value
            };
            const BASE_URL = 'https://api.joints.id';
            Axios.post(
                BASE_URL + '/admin/approve_pembayaran',
                bodyParameters,
                config
            )
                .then(response => {
                    // console.log('berhasil confirm pembayaran');
                })
                .catch(error => {
                    console.log(error);
                    // console.log(id_pembayaran);
                });
        },

        async getGLData() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            let isKonfirmasi = null;
            let waktuDaftar = null;
            let statusBayar = null;
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/admin/grand_launching', config)
                .then(response => {
                    // console.log('berhasil');
                    // console.log(response);

                    response.data.results.forEach((value, index) => {
                        if (value.event == 'grand_launching') {
                            console.log(value);

                            if (value.status == 'menunggu_pembayaran') {
                                isKonfirmasi = true;
                                statusBayar = 'Tunggu Bayar';
                            } else {
                                isKonfirmasi = false;
                            }

                            // if (value.waktu_daftar._seconds == undefined ){
                            //    console.log('ga ada cuk');

                            // } else {
                            //      waktuDaftar =   new Date(
                            //         value.waktu_daftar._seconds * 1000
                            //     ).toLocaleDateString()
                            // }

                            let editedItem = {
                                nomor: value.id_pembayaran,
                                // waktu_daftar: waktuDaftar,
                                nama: value.nama,
                                email: value.email,
                                nomorhp: value.nomor,
                                acara: value.event,
                                nominal: value.harga,
                                status: statusBayar,
                                konfirmasiAdmin: value.dilunasi_admin,
                                isJanganKonfirmasi: isKonfirmasi
                            };
                            this.desserts.push(editedItem);
                        }
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initialize() {
            this.desserts = [
                {
                    nomor: 'Dummy number',
                    nama: ' Dummy Nurrizky Imani',
                    nomorhp: '08323627323',
                    waktu_daftar: '12/12/12',
                    kompetisi: 'ctf',
                    email: 'dog@mail.com',
                    nominal: 42909,
                    status: 'Lunas',
                    konfirmasiAdmin: true,
                    isJanganKonfirmasi: false
                },
                {
                    nomor: 'Dummy number',
                    nama: ' Dummy For Testing konfirmasi',
                    email: 'dog@mail.com',
                    nomorhp: '08323627323',
                    waktu_daftar: '12/12/12',
                    kompetisi: 'ctf',
                    nominal: 42500,
                    status: 'Lunas',
                    konfirmasiAdmin: true,
                    isJanganKonfirmasi: true
                }
            ];
        },

        editItem(item) {
            // console.log(item.nomor);
            this.listKonfirmasi[item.nominal] = null;
            this.idPembayaranItem = item.nomor;
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
            // console.log('isi item.konfirmasi');
            // console.log(this.isKonfirmasi);
            // console.log(item);
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item);
            confirm('Are you sure you want to delete this item?') &&
                this.desserts.splice(index, 1);
        },

        close() {
            this.dialog = false;
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            }, 300);
        },
        save() {
            this.listKonfirmasi[this.editedItem.nominal] = true;
            // console.log('ini clg item ');
            // console.log(this.editedItem.nominal);

            this.confirmPeserta(this.editedItem.nomor);
            this.close();
        },
        confirmItem(item) {}
    }
};
</script>

<style scoped></style>
