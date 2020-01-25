<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row>
                    <v-col> <h1>Pengumuman</h1> </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers"
                            :items="desserts"
                            sort-by="judul"
                            class="elevation-1"
                        >
                            <template v-slot:top>
                                <v-toolbar flat color="white">
                                    <v-toolbar-title
                                        >Pengumuman</v-toolbar-title
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
                                            <v-btn
                                                color="primary"
                                                dark
                                                class="mb-2"
                                                v-on="on"
                                                >New Item</v-btn
                                            >
                                        </template>

                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">{{
                                                    formTitle
                                                }}</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row
                                                        class="d-flex flex-column"
                                                    >
                                                        <v-col cols="12">
                                                            <v-text-field
                                                                v-model="
                                                                    editedItem.nomor
                                                                "
                                                                label="No"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                                v-model="
                                                                    editedItem.judul
                                                                "
                                                                label="Judul"
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-textarea
                                                                v-model="
                                                                    editedItem.deskripsi
                                                                "
                                                                label="Deskripsi"
                                                                counter
                                                                maxlength="300"
                                                                full-width
                                                                single-line
                                                            ></v-textarea>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>

                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="close"
                                                    >Cancel</v-btn
                                                >
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="save"
                                                    >Save</v-btn
                                                >
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:item.action="{ item }">
                                <v-icon
                                    small
                                    class="mr-2"
                                    @click="editItem(item)"
                                >
                                    edit
                                </v-icon>
                                <v-icon small @click="deleteItem(item)">
                                    delete
                                </v-icon>
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
        dialog: false,

        headers: [
            {
                text: 'Nomor',
                align: 'left',
                sortable: false,
                value: 'nomor'
            },
            { text: 'Judul', value: 'judul' },
            { text: 'Deskripsi', value: 'deskripsi' },
            { text: 'Aksi', value: 'action', sortable: false }
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            nomor: 0,
            judul: '',
            deskripsi: ''
        },
        defaultItem: {
            nomor: 0,
            judul: '',
            deskripsi: ''
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
        this.getGLData();
    },

    methods: {
        async directFetchPengumuman() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };

            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/announcement', config)
                .then(response => {
                    console.log(
                        'ini dari vuex which is fetchPengumuan is berhasil'
                    );
                    console.log(response);
                    // response.data.announcements.forEach((value, index) => {
                    //   let editedItem = {
                    //     nomor:
                    //     judul: value.
                    //     deskripsi:
                    //     isIndex: index,
                    //                 }
                    // })
                    // this.desserts.push(editedItem)
                    console.log(this.pengumumans);
                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    if (this.pengumumans.length <= 0) {
                        this.others.isNoPengumuman = true;
                        // console.log('pengumuman is null')
                    } else {
                        // console.log('pengumuman  is  ada ');
                        this.others.isNoPengumuman = false;
                    }
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

                    response.data.results.forEach((value, index) => {
                        // console.log(value);
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        },
        initialize() {
            this.desserts = [
                {
                    nomor: 1,
                    judul: ' Fake Nurrizky Imani',
                    deskripsi: ' Fake Grandlaunching'
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
