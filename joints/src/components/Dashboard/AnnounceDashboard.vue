<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row class="flex-column">
                    <v-col
                        v-for="(pengumuman, i) in pengumumans"
                        :key="i"
                        class="py-0"
                    >
                        <v-card
                            v-if="!others.isNoPengumuman"
                            class=" display-block elevation-0 mb-0 py-0 rounded-0 border-top-0  border-left-0 border-right-0 pengumuman-card"
                            outlined
                        >
                            <div class="pengumuman-title">
                                <div
                                    class=" mx-auto pl-2  py-0 pengumuman-title"
                                >
                                    <v-card-actions>
                                        <v-card-title
                                            class="py-0 my-0  subtitle-1 font-weight-bold  px-0  pb-0 "
                                        >
                                            {{ pengumuman.eventsData.judul }}
                                        </v-card-title>

                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="white "
                                            rounded
                                            depressed
                                            x-small
                                            class=" button-announce "
                                            @click="
                                                pengumuman.isExpand = !pengumuman.isExpand
                                            "
                                            >{{
                                                pengumuman.isExpand
                                                    ? 'minimize'
                                                    : 'details'
                                            }}</v-btn
                                        >
                                    </v-card-actions>
                                </div>

                                <v-expand-transition>
                                    <div v-show="pengumuman.isExpand">
                                        <v-divider
                                            class="my-0 ml-4"
                                        ></v-divider>
                                        <v-card-text class="text-justify ml-5">
                                            {{ pengumuman.eventsData.konten }}
                                        </v-card-text>
                                    </div>
                                </v-expand-transition>
                            </div>
                        </v-card>
                        <v-card
                            v-else
                            class="title grey--text font-weight-regular text-left pl-3 border-0 pt-4"
                            outlined
                        >
                            Tidak Ada Pengumuman
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import Axios from 'axios';

export default {
    data: () => ({
        pengumumans: null,
        loading: false,
        others: {
            isNoPengumuman: false
        }
    }),

    mounted() {
      this.initialize()
    },

    methods: {
        async directFetchPengumuman() {
            let token = await firebase.auth().currentUser.getIdToken(true);
            const config = {
                headers: { Authorization: 'Bearer ' + token }
            };
            const pengumumanDatas = null;
            const BASE_URL = 'https://api.joints.id';
            Axios.get(BASE_URL + '/announcement', config)
                .then(response => {
                    // console.log('ini dari vuex which is fetchPengumuan is berhasil')
                    // console.log(response)
                    response.data.announcements.forEach((value, index) => {
                    
                    if(value == null ) {
                         console.log('no pengumuman');
                          this.others.isNoPengumuman = true;
                        
                    } else {
                       pengumumanDatas = {
                            eventsData: value,
                            isIndex: index,
                            isExpand: false
                        };
                        this.pengumumans.push(pengumumanDatas)
                        this.others.isNoPengumuman = false;
                       
                    }
                       
                    });
                    
                    // console.log(this.pengumumans);
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    if (this.pengumumans == null) {
                        this.others.isNoPengumuman = true;
                        // console.log('pengumuman is null')
                    } else {
                        // console.log('pengumuman  is  ada ');
                        this.others.isNoPengumuman = false;
                    }
                });
        },
         initialize() {
            this.pengumumans = [
                {
                    eventsData : {
                      judul : "Lengkapi Biodata Anda Terlebih Dahulu",
                      konten: 'Kelengkapan biodata anda akan otomatis melengkapi berbagai form pada setiap pendaftaran acara Joints 2020.'
                    },
                    isIndex: '098',
                    isExpand: false
                },
               
            ];
        },
    },
    created() {
        this.directFetchPengumuman();
      
    }
};
</script>

<style>
.pengumuman-title .button-announce {
    background-image: linear-gradient(90deg, #30c9bb, #30c9bb) !important;
    color: white !important;
    border: none !important;
}

.v-expansion-panels__content {
    box-shadow: none !important;
}

.v-item-group__content {
    box-shadow: none !important;
}

.v-expansion-panel::before {
    box-shadow: none;
}
</style>
