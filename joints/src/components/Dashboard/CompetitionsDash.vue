<template>
    <div>
        <v-app class="white">
            <v-container>
                <v-row dense justify="space-around" align="start">
                    <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        class="col-sm-12 col-lg-6 col-lg-6 col-xs-12"
                    >
                        <v-card max-width="500" outlined class="mb-6">
                            <div class="d-flex flex-no-wrap justify-content-start text-left">
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
                                <div class="d-flex flex-row col-12 pa-0 ma-0">
                                    <div class="col-6 pa-0 px-2">
                                        <v-btn
                                            color="#13CEBB"
                                            rounded
                                            outlined
                                            :href="item.guidebook"
                                            target="_blank"
                                            class="mr-2 daftar-button px-7 elevation-1"
                                        >Guide Book</v-btn>
                                    </div>
                                    <v-spacer></v-spacer>
                                    <div class="col-6 pa-0 px-2">
                                        <v-btn
                                            color="#13CEBB"
                                            rounded
                                            :to="item.link"
                                            outlined
                                            class="mr-2 daftar-button px-7 elevation-1"
                                            :disabled="item.isOpenRegis == 0 || item.isOpenRegis == 2"
                                        >
                                            <div v-if="item.isOpenRegis == 0">Coming Soon</div>
                                            <div v-else-if="item.isOpenRegis == 1">Daftar</div>
                                            <div v-else>Pendaftaran Tutup</div>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                color: '#952175',
                src: 'ctf-dark.png',
                title: 'Capture The Flag',
                guidebook:
                    'https://drive.google.com/file/d/1LznxAnn9LlOI3eGyrUJBgYfdqTMp7_Vu/view',
                link: '/dashboard/competitions/ctf/register',
                artist:
                    'Kompetisi ini mengangkat isu-isu yang berkenaan dengan implementasi aspek analisis dan pemecahan masalah yang biasa dikaji dalam topik sistem keamanan komputer dan jaringan. Kompetisi memiliki mekanisme dimana setiap peserta diminta untuk mengumpulkan flag sebanyak-banyaknya dari masalah-masalah yang diberikan. Kompetisi ini dapat diikuti oleh tim yang terdiri dari 2 - 3 orang yang berasal dari instansi/lembaga pendidikan yang sama.',
                // 0 : Belum open regis
                // 1 : Sudah open regis
                // 2 : close regis
                isOpenRegis: 2
            },
            {
                color: '#952175',
                src: 'dm-dark.png',
                title: 'Data Mining',
                guidebook:
                    'https://drive.google.com/file/d/1-I2lNwVKWsXI94uDrwf4gffkXuP4Bad0/view',
                link: '/dashboard/competitions/datamining/register',
                artist:
                    'Data mining berfokus pada pengolahan data mentah (raw data) dengan cara menemukan pola menarik atau informasi dengan menggunakan metode tertentu yang kemudian divisualisasikan sehingga dapat digunakan sebagai solusi atau pengetahuan lebih lanjut dari sebuah permasalahan data. Lomba ini mengharapkan peserta dapat melakukan proses olah data (Data Mining) terhadap dataset yang diberikan dengan hasil yang memiliki tingkat akurasi setinggi-tingginya.',
                // 0 : Belum open regis
                // 1 : Sudah open regis
                // 2 : close regis
                isOpenRegis: 1
            },
            {
                color: '#952175',
                src: 'pcs-dark.png',
                title: 'Programming Competition Session',
                guidebook:
                    'https://drive.google.com/file/d/1Y-nm-FWB1E3wI3feYTYDm2aGA7-r24Xy/view',
                link: '/dashboard/competitions/pcs/register',
                artist:
                    'Kompetisi ini terbagi menjadi sesi logika dan pemrograman. Kedua materi ini menguji kemampuan nalar dan pemahaman peserta dalam menyelesaikan suatu permasalahan dalam waktu yang singkat dengan algoritma yang efisien dan tepat. Bahasa pemrograman yang digunakan antara lain C/C++, Pascal, Java, atau Python.',
                // 0 : Belum open regis
                // 1 : Sudah open regis
                // 2 : close regis
                isOpenRegis: 2
            },
            {
                color: '#952175',
                src: 'ux-dark.png',
                title: 'UX Design',
                guidebook:
                    'https://drive.google.com/file/d/1pb_mIpXGbdSqj5iuv7dT3L08GUSObq7x/view',
                link: '/dashboard/competitions/uiux/register',
                artist:
                    'Kompetisi UX (user experience) adalah kompetisi pembuatan desain pengalaman pengguna, baik dalam bentuk produk web, aplikasi, maupun PWA (Progressive Web App), yang mengutamakan pengalaman, kenyamanan, kepuasan, dan efisiensi saat pengguna (user) menggunakan produk tersebut.',
                // 0 : Belum open regis
                // 1 : Sudah open regis
                // 2 : close regis
                isOpenRegis: 2
            }
        ]
    }),
    methods: {
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
}

.card-divider {
    color: red;
}
</style>
