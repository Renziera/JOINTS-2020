<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row>
                    <v-col>
                        <h1>Data Mining</h1>
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
                                    <v-toolbar-title>Data Maining</v-toolbar-title>
                                    <v-divider class="mx-4" inset vertical></v-divider>
                                    <v-spacer></v-spacer>

                                    <!-- <v-dialog v-model="dialog" max-width="500px">
                                        <template v-slot:activator></template>

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
                                                                    editedItem.nama_tim
                                                                "
                                                                label="Nama Tim"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="12" md="6">
                                                            <v-text-field
                                                                readonly
                                                                v-model="
                                                                    editedItem.nama
                                                                "
                                                                label="Nama Ketua"
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
                                                                    editedItem.instansi
                                                                "
                                                                label="Instansi"
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
                                    </v-dialog>-->
                                </v-toolbar>
                            </template>

                            <!-- <template v-slot:item.action="{ item }">
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
                            </template>-->
                            <template v-slot:expanded-item="{ headers, item }">
                                <td :colspan="headers.length/4">
                                    Nama Ketua : {{item.nama}}
                                    <br />Ktm :
                                    <a :href="item.ktm_ketua" target="_blank">
                                        <v-btn small outlined rounded color="primary" dark>klik</v-btn>
                                    </a>
                                </td>

                                <td :colspan="headers.length/4">
                                    Anggota 1: {{ item.nama_1 }}
                                    <br />Ktm :
                                    <a :href="item.ktm_1" target="_blank">
                                        <v-btn small outlined rounded color="primary" dark>klik</v-btn>
                                    </a>
                                </td>

                                <td :colspan="headers.length/4">
                                    Anggota 2: {{ item.nama_2 }}
                                    <br />Ktm :
                                    <a :href="item.ktm_2" target="_blank">
                                        <v-btn small outlined rounded color="primary" dark>klik</v-btn>
                                    </a>
                                </td>
                                <td :colspan="headers.length/4">
                                    Makalah :
                                    <a :href="item.makalah" target="_blank">
                                        <v-btn small outlined rounded color="primary" dark>klik</v-btn>
                                    </a>
                                </td>
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
            { text: 'Nama Tim', value: 'nama_tim' },
            { text: 'Nama Ketua', value: 'nama' },
            { text: 'Email', value: 'email' },
            { text: 'Nomor HP', value: 'nomorhp', sortable: false },
            // { text: 'Kompetisi', value: 'kompetisi', sortable: false},
            { text: 'Instansi', value: 'instansi', sortable: false },
            { text: 'Nominal', value: 'nominal', sortable: false },
            { text: 'Status', value: 'status' }
            // { text: 'Aksi', value: 'action', sortable: false }
        ],
        desserts: [],
        idPembayaranItem: null,
        editedIndex: -1,
        editedItem: {
            nomor: 0,
            waktu_daftar: '',
            nama_tim: '',
            email: '',
            nomorhp: '',
            nama: '',
            nama_1: '',
            nama_2: '',
            ktm_ketua: '',
            ktm_1: '',
            ktm_2: '',
            makalah: '',
            instansi: '',
            nominal: '',
            status: ''
            // konfirmasiAdmin: false,
            // isJanganKonfirmasi: null
        },
        defaultItem: {
            nomor: 0,
            waktu_daftar: '',
            nama_tim: '',
            email: '',
            nomorhp: '',
            nama: '',
            nama_1: '',
            nama_2: '',
            ktm_ketua: '',
            ktm_1: '',
            ktm_2: '',
            makalah: '',
            instansi: '',
            kompetisi: '',
            nominal: '',
            status: ''
            // konfirmasiAdmin: false,
            // isJanganKonfirmasi: null
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
    // mounted() {
    //     this.getDatminDataAll();
    // },

    created() {
        this.initialize();
        // this.getGLData();
        this.getDatminDataAll();
    },

    methods: {
        async getDatminDataAll() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            // let isKonfirmasi = null;
            // let waktuDaftar = null;
            // let statusBayar = null;
            // let konfirmasiAdmin = null;

            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            // console.log('ini dari getDataminingAll');

            const BASE_URL = 'https://api.joints.id';

            Axios.get(BASE_URL + '/admin/data_mining', config)
                .then(response => {
                    console.log(response.data.results);
                    response.data.results.forEach((value, index) => {
                        // if (value.event == 'grand_launching') {
                        // console.log(value);

                        // if (
                        //     value.status == 'lunas' ||
                        //     value.dilunasi_admin == true
                        // ) {
                        //     konfirmasiAdmin = true;
                        //     isKonfirmasi = false;
                        // } else if (value.status == 'menunggu_pembayaran') {
                        //     konfirmasiAdmin = false;
                        //     isKonfirmasi = false;
                        //     sma;
                        // }

                        // if (value.waktu_daftar._seconds == undefined ){
                        //    console.log('ga ada cuk');

                        // } else {
                        //      waktuDaftar =   new Date(
                        //         value.waktu_daftar._seconds * 1000
                        //     ).toLocaleDateString()
                        // }

                        let editedItem = {
                            nomor: value.id_pembayaran,
                            waktu_daftar: new Date(
                                value.waktu_daftar._seconds * 1000
                            ).toLocaleDateString(),
                            nama_tim: value.nama_tim,
                            email: value.email,
                            nomorhp: value.nomor,
                            nama: value.nama,
                            nama_1: value.nama_1,
                            nama_2: value.nama_2,
                            ktm_ketua: value.ktm_ketua,
                            ktm_1: value.ktm_1,
                            ktm_2: value.ktm_2,
                            makalah: value.makalah,
                            kompetisi: value.competition,
                            instansi: value.instansi,
                            nominal: value.harga,
                            status: value.status
                            // konfirmasiAdmin: konfirmasiAdmin,
                            // isJanganKonfirmasi: isKonfirmasi
                        };
                        this.desserts.push(editedItem);
                        // }
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },

        // async confirmPeserta(value) {
        //     let token = await firebase.auth().currentUser.getIdToken(true);
        //     let id_pembayaran = null;
        //     const config = {
        //         headers: { Authorization: 'Bearer ' + token }
        //     };

        //     const bodyParameters = {
        //         id_pembayaran: value
        //     };
        //     const BASE_URL = 'https://api.joints.id';
        //     Axios.post(
        //         BASE_URL + '/admin/approve_pembayaran',
        //         bodyParameters,
        //         config
        //     )
        //         .then(response => {
        //             // console.log('berhasil confirm pembayaran');
        //         })
        //         .catch(error => {
        //             console.log(error);
        //             // console.log(id_pembayaran);
        //         });
        // },

        initialize() {
            this.desserts = [
                {
                    nomor: 'Dummy number',
                    nama_tim: 'Nama tim',
                    nama: ' Dummy Nurrizky Imani',
                    email: 'dog@mail.com',
                    nomorhp: '08323627323',
                    nama_1: 'Adi',
                    nama_2: 'Yusfi',
                    ktm_ketua: 'https://google.com',
                    ktm_1: 'https://facebook.com',
                    ktm_2: 'https://instagram.com',
                    waktu_daftar: '12/12/12',
                    makalah: 'https://google.com',
                    kompetisi: 'pcs',
                    instansi: 'UGama',
                    nominal: 42909,
                    status: 'Lunas'
                    // konfirmasiAdmin: true
                },
                {
                    nomor: 'Dummy number',
                    nama_tim: 'Tim name',
                    nama: ' Dummy For Testing konfirmasi',
                    email: 'dog@mail.com',
                    nomorhp: '08323627323',
                    nama_1: 'Yusfi',
                    nama_2: 'Adilaksa',
                    ktm_ketua: 'https://google.com',
                    ktm_1: 'https://facebook.com',
                    ktm_2: 'https://instagram.com',
                    waktu_daftar: '12/12/12',
                    makalah: 'https://google.com',
                    instansi: 'UGM',
                    nominal: 42500,
                    status: 'lunas'
                    // konfirmasiAdmin: false
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
