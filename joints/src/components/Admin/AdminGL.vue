<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row>
                    <v-col> <h1>grand launching</h1> </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            :items="desserts"
                            sort-by="nama"
                            class="elevation-1"
                        >
                            <template v-slot:top>
                                <v-toolbar flat color="white">
                                    <v-toolbar-title
                                        >Grand Loncing</v-toolbar-title
                                    >
                                    <v-divider
                                        class="mx-4"
                                        inset
                                        vertical
                                    ></v-divider>
                                    <v-spacer></v-spacer>

                                    <v-dialog
                                        v-model="dialog"
                                        max-width="500px"
                                    >
                                        <template v-slot:activator="{ on }">
                                        </template>

                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">{{
                                                    formTitle
                                                }}</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row class="d-flex ">
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nomor
                                                                "
                                                                label="No"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.waktu_daftar
                                                                "
                                                                label="Waktu Daftar"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nama
                                                                "
                                                                label="Nama"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nomorhp
                                                                "
                                                                label="Nomor HP"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.acara
                                                                "
                                                                label="Acara"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nominal
                                                                "
                                                                label="Nominal"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col
                                                            cols="12"
                                                            sm="12"
                                                            md="6"
                                                        >
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
                                                    >Confirm</v-btn
                                                >
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="close"
                                                    >NO</v-btn
                                                >
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
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
                                >
                                    Confirmed
                                </v-alert>

                                <v-btn
                                    v-else
                                    class="mr-2"
                                    small
                                    @click="editItem(item)"
                                >
                                    Konfirmasi
                                </v-btn>
                            </template>

                            <template v-slot:no-data>
                                <v-btn color="primary" @click="initialize"
                                    >Reset</v-btn
                                >
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
        listKonfirmasi: [],
        dialog: false,
        headers: [
            {
                text: 'Nomor',
                align: 'left',
                sortable: false,
                value: 'nomor'
            },
            { text: 'Nama', value: 'nama' },
            { text: 'Waktu Daftar', value: 'waktu_daftar' },
            { text: 'Nomor HP', value: 'nomorhp' },
            { text: 'Acara', value: 'acara' },
            { text: 'Nominal', value: 'nominal' },
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
            nomorhp: '',
            acara: '',
            nominal: '',
            status: '',
            konfirmasiAdmin: false
        },
        defaultItem: {
            nomor: 0,
            waktu_daftar: '',
            nama: '',
            nomorhp: '',
            acara: '',
            nominal: '',
            status: '',
            konfirmasiAdmin: false
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
        this.getGLData();
    },

    methods: {
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
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/admin/grand_launching', config)
                .then(response => {
                    // console.log('berhasil');
                    console.log(response);

                    response.data.results.forEach((value, index) => {
                        console.log(value);
                        this.editedIndex = this.desserts.indexOf(value);
                        let editedItem = {
                            nomor: value.id_pembayaran,
                            waktu_daftar: new Date(
                                value.waktu_daftar._seconds * 1000
                            ).toLocaleDateString(),
                            nama: value.nama,
                            nomorhp: value.nomor,
                            acara: value.event,
                            nominal: value.harga,
                            status: value.status,
                            konfirmasiAdmin: value.dilunasi_admin
                        };
                        this.desserts.push(editedItem);
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
                    nama: ' Dummy Nurrizky ',
                    nomorhp: '08323627323',
                    acara: ' Dummy Grandlaunching',
                    nominal: 42909,
                    status: 'Lunas',
                    konfirmasiAdmin: true
                },
                {
                    nomor: 'Dummy number',
                    nama: ' Dummy Nurrizky Imani',
                    nomorhp: '08323627323',
                    acara: ' Dummy Grandlaunching',
                    nominal: 42500,
                    status: 'Lunas',
                    konfirmasiAdmin: true
                }
            ];
        },

        editItem(item) {
            console.log(item.nomor);
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
