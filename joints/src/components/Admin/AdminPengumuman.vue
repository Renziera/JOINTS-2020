<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row>
                    <v-col>
                        <h1>Pengumuman</h1>
                    </v-col>
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
                                    <v-toolbar-title>Pengumuman</v-toolbar-title>
                                    <v-divider class="mx-4" inset vertical></v-divider>
                                     <v-toolbar-title>You can post  announcement but you cannot delete it or edit it for now</v-toolbar-title>
                                    <v-spacer></v-spacer>

                                    <v-dialog v-model="dialog" max-width="500px">
                                        <template v-slot:activator="{ on }">
                                            <v-btn
                                                color="primary"
                                                dark
                                                class="mb-2"
                                                v-on="on"
                                            >Add announcement</v-btn>
                                        </template>

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
                                                    <v-row class="d-flex flex-column">
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
                                                >Cancel</v-btn>
                                                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:item.action="{ item }">
                                <v-icon small disabled class="mr-2" @click="editItem(item)">edit</v-icon>
                                <v-icon small disabled @click="deleteItem(item)">delete</v-icon>
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
            return this.editedIndex === -1 ? 'New Pengumuman' : 'Edit Pengumuman';
        }
    },

    watch: {
        dialog(val) {
            val || this.close();
        }
    },

    created() {
    // this.initialize()

    this.$store.dispatch('getPengumumanDataVuex')
    this.$store.watch(
      (state, getters ) => getters.pengumumanDatas,
      (newValue, oldValue) => {
        console.log(`Updating from ${oldValue} to ${newValue}`);
      
      }
    )
    },
   

    mounted() {
        
        this.directFetchPengumuman();
        
        // this.getGLData();
    },

    methods: {
        directFetchPengumuman(){
          const pengumumanBaru = [];
          let indexPengumuman = 1; 
          if(this.$store.getters.pengumumans == null ||
            this.$store.getters.pengumumans == undefined  ){
              console.log(' PENGUMUMAN HARUS DIISI');
              
            } else {
              // console.log(' data di profils ngefetch dulu; ');
              this.$store.getters.pengumumans .forEach((value, index) => {
                // console.log(this.$store.getters.pengumumans);
                pengumumanBaru.push({ nomor: indexPengumuman,
                                      judul: value.pengumumanData.judul,
                                      deskripsi: value.pengumumanData.konten}); 
                // console.log('ini dari vuex pengumuman berhasil');
                indexPengumuman++
                // console.log(indexPengumuman);
              })

              // console.log(pengumumanBaru);

              this.desserts = pengumumanBaru;
              // this.desserts.push(pengumumanBaru)
              // console.log('dibawah pengumumanBaru');
              // console.log(this.pengumumans);
              

            }
        },


         async submitPengumuman(title, deskripsi) {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const bodyParameters = {
                judul: title,
                konten: deskripsi
            };
            
        
            const BASE_URL = 'https://api.joints.id';
            Axios.post(BASE_URL + '/admin/announcement', bodyParameters, config)
                .then(response => {
                    
                    console.log(response);
                    console.log('berhasil submit pengumuman');
                })
                .catch(error => {
                    console.log(error);
                });
            
        },
        // async directFetchPengumuman() {
        //     let token = await firebase.auth().currentUser.getIdToken(true);
        //     const config = {
        //         headers: { Authorization: 'Bearer ' + token }
        //     };

        //     const BASE_URL = 'https://api.joints.id';
        //     Axios.get(BASE_URL + '/announcement', config)
        //         .then(response => {
        //             console.log(
        //                 'ini dari vuex which is fetchPengumuan is berhasil'
        //             );
        //             console.log(response);
        //             // response.data.announcements.forEach((value, index) => {
        //             //   let editedItem = {
        //             //     nomor:
        //             //     judul: value.
        //             //     deskripsi:
        //             //     isIndex: index,
        //             //                 }
        //             // })
        //             // this.desserts.push(editedItem)
        //             console.log(this.pengumumans);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        //         .then(() => {
        //             if (this.pengumumans.length <= 0) {
        //                 this.others.isNoPengumuman = true;
        //                 // console.log('pengumuman is null')
        //             } else {
        //                 // console.log('pengumuman  is  ada ');
        //                 this.others.isNoPengumuman = false;
        //             }
        //         });
        // },

        // async getGLData() {
        //     let token = await firebase.auth().currentUser.getIdToken(true);
        //     const config = {
        //         headers: { Authorization: 'Bearer ' + token }
        //     };

        //     const BASE_URL = 'https://api.joints.id';
        //     Axios.get(BASE_URL + '/admin/grand_launching', config)
        //         .then(response => {
        //             // console.log('berhasil');

        //             response.data.results.forEach((value, index) => {
        //                 // console.log(value);
        //             });
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // },
        initialize() {
            this.desserts = [
                {
                    nomor: 1,
                    judul: ' JANGAN DIPAKE DULU PUT',
                    deskripsi:
                        'Jangan dipake dulu ya, Put, dan anak2mu. Belum bisa hehee'
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
                this.submitPengumuman(this.editedItem.judul, this.editedItem.deskripsi)
            }
            this.close();
        }
    }
};
</script>

<style scoped></style>
