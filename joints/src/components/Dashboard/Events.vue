<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row dense class="align-start">
                    <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        class="col-sm-12 col-lg-6 col-lg-6 col-xs-12"
                    >
                        <v-card max-width="500" outlined class="the-container mb-6 elevation-1">
                            <div class="d-flex flex-no-wrap justify-content-start text-left">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1440 320"
                                        class="wave-card"
                                    >
                                        <path
                                            fill="#E475B2"
                                            fill-opacity="1"
                                            d="M0,288L120,240C240,192,480,96,720,48C960,0,1200,0,1320,0L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                                        />
                                    </svg>
                                </div>
                                <v-avatar class="compe-avatar ma-3 mr-0 mb-6" size="115" tile>
                                    <v-img class="border border-dark" :src="getImgUrl(item.src)"></v-img>
                                </v-avatar>

                                <div class="justify-content-start">
                                    <v-card-title class="pt-1 title" v-text="item.title"></v-card-title>

                                    <v-card-subtitle
                                        class="caption font-weight-medium text-justify"
                                    >{{ item.artist }}</v-card-subtitle>
                                </div>
                            </div>

                            <v-divider class="mt-0 mb-0 card-divider"></v-divider>

                            <v-card-actions>
                                <v-alert
                                    v-if="item.isSudahLunas"
                                    dense
                                    type="success"
                                    class="alert-card px-5 ma-0"
                                >LUNAS</v-alert>
                                <v-alert
                                    v-if="item.isBelumLunas"
                                    dense
                                    type="info"
                                    class="alert-card px-4 ma-0"
                                >Belum Lunas</v-alert>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="#13CEBB"
                                    rounded
                                    outlined
                                    class="mr-2 daftar-button px-7 elevation-1"
                                    :to="item.link"
                                    :disabled="!item.isOpenRegis"
                                >
                                    <div v-if="item.isOpenRegis">Daftar</div>
                                    <div v-else>Coming Soon</div>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
export default {
    data: () => ({
        eventsData: {
            joints_camp: null,
            grand_launch: null,
            tech_talk: null
        },
        disabled: 0,
        items: [
            {
                src: 'grand-launching-dark.png',
                title: 'Grand Launching',
                artist:
                    'Grand Launching merupakan salah satu rangkaian acara dari JOINTS 2020. Bentuk kegiatan ini adalah seminar dan workshop dengan mengangkat tema besar “Society 5.0” yang difokuskan pada Apps Innovation.',
                link: '/dashboard/events/grandlaunching/register',
                isSudahLunas: false,
                isBelumLunas: false,
                isOpenRegis: true
            },
            {
                color: '#952175',
                src: 'techtalk-dark.png',
                title: 'TechTalk',
                artist:
                    'TechTalk merupakan seminar yang ditujukan untuk berbagi wawasan terkait beberapa bidang penting dalam dunia teknologi (IT) yang hanya membutuhkan sedikit bahkan nyaris tidak sama sekali kemampuan coding.',
                // link: '/dashboard/events/techtalk/register',
                isSudahLunas: false,
                isBelumLunas: false,
                isOpenRegis: false
            },
            {
                color: '#952175',
                src: 'joints-camp-dark.png',
                title: 'JointsCamp',
                artist:
                    'JointsCamp merupakan suatu pelatihan atau bootcamp dengan tema Web Development. Diselenggarakan selama 4 minggu dengan pertemuan intensif 1 kali di setiap minggu nya, pelatihan ini terkonsep dari pembentukan mindset, pemahaman alur, pengembangan perangkat lunak, hingga cara membangun sebuah produk digital.',
                link: '/dashboard/events/jointscamp/register',
                isSudahLunas: false,
                isBelumLunas: false,
                isOpenRegis: true
            }
        ]
    }),
    computed: {
        // ...mapState(['profils']),
        ...mapGetters(['profilsData', 'events'])
    },

    created() {
        this.$store.dispatch('getEventDataVuex'),
            this.$store.watch(
                (state, getters) => getters.events,
                (newValue, oldValue) => {
                    // console.log(`Updating from ${oldValue} to ${newValue}`);
                    this.getEventData();
                }
            );
    },

    methods: {
        getEventData() {
            if (
                this.$store.getters.events == null ||
                this.$store.getters.events.joints == undefined
            ) {
                // console.log(' events harus di isi');
            } else {
                // console.log(' C1 events ngefetch dulu; ');
                // console.log(this.$store.getters.events);
                this.events.joints_camp = this.$store.getters.events.joints_camp.status;
                this.events.grand_launch = this.$store.getters.events.grand_launching.status;
                this.events.tech_talk = this.$store.getters.events.tech_talk.status;

                if (this.$store.getters.events.joints_camp.status == 'lunas') {
                    this.overlay = true;
                }

                // console.log('clg this.daftarCamps');
                // console.log(this.daftarCamps);
            }
        },
        getImgUrl(img) {
            return require('../../assets/' + img);
        }
    }
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 18px;
    border: solid 6px;
    border-color: #e475b2;
}

.compe-avatar {
    border-radius: 18px;
    z-index: 2;
}

.border-dark {
    border-color: #94119f !important;
    border-width: 6px !important;
}

.content-compe {
    position: relative;

    align-items: left;
}

.content-div {
    max-width: 500px;
    top: -30px;
    left: -78px;
    position: relative;
}

.subtitle-wrap {
    width: auto;
    display: inline-block;
    position: inherit;
}

.caption {
    color: #841749 !important;
}

.daftar-button {
    border: solid 3px;
    z-index: 3;
}

.card-divider {
    color: red;
}

.justify-content-start {
    z-index: 1;
}

.wave-card {
    position: absolute;
    float: left;
    z-index: 1;
    top: -1px;
    left: -450px;
}

.the-container {
    position: relative;
    overflow: hidden;
}
</style>
