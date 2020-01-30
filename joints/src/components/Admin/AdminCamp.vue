<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row>
                    <v-col>
                        <h1>Joints Camp</h1>
                    </v-col>
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
                                    <v-toolbar-title>Joints Kemp</v-toolbar-title>
                                    <v-divider class="mx-4" inset vertical></v-divider>
                                    <v-spacer></v-spacer>
                                </v-toolbar>
                            </template>
                            <template v-slot:item.resume="{ item }">
                                <a :href="item.resume" target="_blank">
                                    <v-btn
                                        small
                                        outlined
                                        rounded
                                        color="blue-grey darken-2"
                                        dark
                                    >klik</v-btn>
                                </a>
                            </template>

                            <template v-slot:item.linked_in="{ item }">
                                <a :href="item.linked_in" target="_blank">
                                    <v-btn small outlined rounded color="primary" dark>klik</v-btn>
                                </a>
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
        dialog: false,
        headers: [
            { text: 'Waktu Daftar', value: 'waktu_daftar' },
            { text: 'Nama', value: 'nama' },
            { text: 'No. HP', value: 'nomor', sortable: false },
            { text: 'Email', value: 'email' },
            { text: 'Instansi', value: 'instansi' },
            { text: 'Resume', value: 'resume', sortable: false },
            { text: 'Linkedin', value: 'linked_in', sortable: false },
            { text: 'Acara', value: 'event', sortable: false }
            // { text: 'Nominal', value: 'nominal' },
            // { text: 'Status', value: 'status' },
            // { text: 'Aksi', value: 'action', sortable: false }
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            waktu_daftar: '',
            nama: '',
            nomor: 0,
            email: '',
            instansi: '',
            resume: '',
            linked_in: '',
            event: ''
            // nominal: '',
            // status: ''
        },
        defaultItem: {
            nama: '',
            nomor: 0,
            email: '',
            instansi: '',
            resume: '',
            linked_in: '',
            event: ''
        }
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },

    created() {
        this.initialize();
        this.getCampDataAll();
    },

    methods: {
        async getCampDataAll() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            // let isKonfirmasi = null;
            // let waktuDaftar = null;
            // let statusBayar = null;
            // let konfirmasiAdmin = null;

            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';

            // Axios.get(BASE_URL + '/admin/pembayaran', config)
            Axios.get(BASE_URL + '/admin/joints_camp', config)
                .then(response => {
                    response.data.results.forEach((value, index) => {
                        // if (value.event == 'joints_camp') {
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

                        let editedItem = {
                            waktu_daftar: new Date(
                                value.waktu_daftar._seconds * 1000
                            ).toLocaleDateString(),
                            nama: value.nama,
                            nomor: value.nomor,
                            email: value.email,
                            instansi: value.instansi,
                            resume: value.resume,
                            linked_in: value.linked_in,
                            event: value.event
                        };
                        this.desserts.push(editedItem);
                        // }
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initialize() {
            this.desserts = [
                {
                    waktu_daftar: '01/01/2020',
                    nama: 'Dummy Yusfi Abcde',
                    nomor: '08123456',
                    email: 'yusfiabcde@gmail.com',
                    instansi: 'UGM',
                    resume:
                        'https://storage.googleapis.com/joints-ugm.appspot.com/993540de-48b5-4478-9c4d-dc505b71d638?GoogleAccessId=joints-ugm%40appspot.gserviceaccount.com&Expires=1578597975&Signature=bpsePHXeB8QWUsAE%2B2mkBdgO1uKgSUR7C490wwqLDktcBFxfCmv14mZCskZRACEQbP9LroXc1qC5dL8lrCEFeplRJta65o7GkRJIiP%2FLNU1%2Fsw3lpwSJ2BJAI9Kiic5RX7ob5ciwKU8xNnLo9hyKzPc8RclVFsfRlnIe2B7gCR4YH5H58Icogwxg%2FRYjSTbzOQd6sSZrP4rvJxdaC0uo4nK2QQhTF9gomZCD6W%2Fyx%2BqVcXie7cRZIxuEB5ly7C%2BhX7baQ%2FZTBoC3gmLUrhfjLOT9qOabNfSOBGYlNk4bMmWtUj0n0yVpo1goKXN80BqtsWU8CxbPjAao9tJKynRkAQ%3D%3D',
                    linked_in: 'https://www.linkedin.com',
                    event: 'joints_camp'
                },
                {
                    waktu_daftar: '03/02/2020',
                    nama: 'Dummy Yzabc Adi',
                    nomor: '081111',
                    email: 'abcde@gmail.com',
                    instansi: 'UGM',
                    resume:
                        'https://storage.googleapis.com/joints-ugm.appspot.com/993540de-48b5-4478-9c4d-dc505b71d638?GoogleAccessId=joints-ugm%40appspot.gserviceaccount.com&Expires=1578597975&Signature=bpsePHXeB8QWUsAE%2B2mkBdgO1uKgSUR7C490wwqLDktcBFxfCmv14mZCskZRACEQbP9LroXc1qC5dL8lrCEFeplRJta65o7GkRJIiP%2FLNU1%2Fsw3lpwSJ2BJAI9Kiic5RX7ob5ciwKU8xNnLo9hyKzPc8RclVFsfRlnIe2B7gCR4YH5H58Icogwxg%2FRYjSTbzOQd6sSZrP4rvJxdaC0uo4nK2QQhTF9gomZCD6W%2Fyx%2BqVcXie7cRZIxuEB5ly7C%2BhX7baQ%2FZTBoC3gmLUrhfjLOT9qOabNfSOBGYlNk4bMmWtUj0n0yVpo1goKXN80BqtsWU8CxbPjAao9tJKynRkAQ%3D%3D',
                    linked_in: 'https://www.linkedin.com',
                    event: 'joints_camp'
                }
            ];
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
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
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            } else {
                this.desserts.push(this.editedItem);
            }
            this.close();
        }
    }
};
</script>

<style scoped></style>
