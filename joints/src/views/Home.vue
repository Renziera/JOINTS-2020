<template>
    <div class="home-page">
        <Navbar accessFrom="home" colorKind="gradient-home"></Navbar>
        <div class="wave-container header-background d-none d-lg-block">
            <svg
                class="home-header-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 820"
            >
                <defs>
                    <linearGradient id="home-header-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill
                    fill-opacity="1"
                    d="M1441,0c-0.4,194-0.8,388-1.2,582c-523.8,85.9-747.4,3.5-853.7-92.4c-33.4-30.1-69.3-74.3-146.9-115.2c-159.8-84.3-242.8-20.9-427.8-103.3C7.9,269.5,4,267.8,0,266V0H1441z"
                    data-darkreader-inline-fill
                    style="--darkreader-inline-fill:#007acc;"
                    class="d-xl-block d-lg-none"
                />
                <path
                    fill
                    fill-opacity="1"
                    d="M1441,0c-0.4,257.4-0.8,514.8-1.2,772.2c-523.8,113.9-747.4,4.7-853.7-122.6c-33.4-40-69.3-98.6-146.9-152.9c-159.8-111.9-242.8-27.8-427.8-137c-3.6-2.1-7.5-4.4-11.5-6.9V0H1441z"
                    data-darkreader-inline-fill
                    style="--darkreader-inline-fill:#007acc;"
                    class="d-lg-block d-xl-none"
                />
            </svg>
        </div>
        <section class="header">
            <b-container>
                <b-row>
                    <b-col
                        lg="6"
                        cols="12"
                        class="d-flex align-items-center justify-content-center"
                    >
                        <img
                            src="@/assets/home.png"
                            alt="JOINTS 2020"
                            class="header-image d-none d-lg-block"
                        />
                        <img
                            src="@/assets/joints.png"
                            alt="JOINTS 2020"
                            class="header-image d-lg-none"
                        />
                    </b-col>
                    <b-col
                        lg="6"
                        cols="12"
                        class="d-none d-lg-flex flex-column justify-content-center text-left header-desc"
                    >
                        <h2 class="header-title">Apa itu JOINTS?</h2>
                        <p class="header-subtitle">
                            Jogja Information Technology Session (JOINTS) UGM
                            merupakan acara terbesar yang diselenggarakan oleh
                            Himpunan Mahasiswa Ilmu Komputer Universitas Gadjah
                            Mada. JOINTS UGM mengajak para pengguna teknologi
                            informasi di Indonesia untuk lebih bijak serta
                            cerdas dalam memanfaatkan teknologi yang tersedia.
                        </p>
                        <b-button
                            class="header-button"
                            variant="light"
                            href="#href-events"
                            >More info</b-button
                        >
                    </b-col>
                    <b-col
                        cols="12"
                        class="d-lg-none d-flex align-items-center justify-content-center"
                    >
                        <b-button
                            class="header-button-mobile"
                            variant="success"
                            href="#href-events"
                            >More info</b-button
                        >
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <div class="wave-container events-top-wave" id="href-events">
            <svg
                class="events-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 300"
            >
                <defs>
                    <linearGradient id="events-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill
                    fill-opacity="1"
                    d="M0,256L60,261.3C120,267,240,277,360,266.7C480,256,600,224,720,224C840,224,960,256,1080,256C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    data-darkreader-inline-fill
                    style="--darkreader-inline-fill:#007acc;"
                />
            </svg>
        </div>

        <section class="events">
            <b-container>
                <b-row>
                    <b-col
                        cols="12"
                        lg="6"
                        class="d-flex align-items-center justify-content-center"
                    >
                        <CarouselCard
                            :interval="7000"
                            :autoPlay="false"
                            type="card"
                            arrow="never"
                            @change="changeSlide"
                        >
                            <CarouselCardItem
                                class="carousel-item-grandlaunching"
                            >
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/grand-launching-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/grandlaunching"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >Grand Launching</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                            <CarouselCardItem class="carousel-item-talk">
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/techtalk-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            disabled
                                            to="/techtalk"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >TechTalk</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                            <CarouselCardItem class="carousel-item-competition">
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/competitions-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            disabled
                                            to="/competitions"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >Competitions</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                            <CarouselCardItem class="carousel-item-jointscamp">
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/joints-camp-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/jointscamp"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >JointsCamp</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                        </CarouselCard>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-grandlaunching"
                        class="flex-column justify-content-center text-left events-desc events-desc-grandlaunching"
                    >
                        <h2 class="events-title">Grand Launching</h2>
                        <p class="events-subtitle">
                            Grand Launching merupakan rangkaian acara JOINTS
                            2020 berupa talkshow dan workshop dengan mengangkat
                            topik Apps Innovation yang akan disampaikan oleh
                            beberapa pembicara.
                        </p>
                        <b-button
                            class="events-button"
                            variant="success"
                            to="/login"
                            >Yuk Daftar</b-button
                        >
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-talk"
                        class="flex-column events-desc justify-content-center text-left events-desc-talk"
                    >
                        <h2 class="events-title">TechTalk</h2>
                        <p class="events-subtitle">
                            TechTalk merupakan seminar yang ditujukan untuk
                            berbagi wawasan terkait beberapa bidang penting
                            dalam dunia teknologi (IT) yang hanya membutuhkan
                            sedikit bahkan nyaris tidak sama sekali kemampuan
                            coding. TechTalk diadakan dalam serangkaian acara IT
                            Day tanggal 18-19 April 2020. Adapun topik utama
                            TechTalk di tahun 2020 adalah IoT (Internet of
                            Things) dengan sub-topik yaitu AI (Artificial
                            Intelligence) dan Big Data.
                        </p>
                        <b-button
                            disabled
                            class="events-button"
                            variant="success"
                            to="/"
                            >Coming Soon</b-button
                        >
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-competition"
                        class="flex-column events-desc justify-content-center text-left events-desc-competition"
                    >
                        <h2 class="events-title">Competitions</h2>
                        <p class="events-subtitle">
                            Kompetisi JOINTS 2020 mengajak teman-teman
                            pelajar/mahasiswa untuk mengukur kemampuannya di
                            beberapa bidang khusus seperti : Programming
                            Competition Session, Capture The Flag, Data Mining,
                            dan UX Design. Pengen tau seberapa hebat skill kamu
                            dibanding teman-teman yang lain? Tunggu apa lagi,
                            yuk ikut kompetisi JOINTS UGM 2020!
                        </p>
                        <b-button
                            disabled
                            class="events-button"
                            variant="success"
                            to="/"
                            >Coming Soon</b-button
                        >
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-jointscamp"
                        class="flex-column events-desc justify-content-center text-left events-desc-jointcamp"
                    >
                        <h2 class="events-title">JointsCamp</h2>
                        <p class="events-subtitle">
                            JointsCamp merupakan suatu pelatihan atau bootcamp
                            dengan tema Web Development. Diselenggarakan selama
                            4 minggu dengan pertemuan intensif 1 kali di setiap
                            minggunya, pelatihan ini terkonsep dari pembentukan
                            mindset, pemahaman alur, pengembangan perangkat
                            lunak, hingga cara membangun sebuah produk digital.
                        </p>
                        <b-button
                            class="events-button"
                            variant="success"
                            to="/login"
                            >Yuk Daftar</b-button
                        >
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <div class="wave-container events-bottom-wave">
            <svg
                class="events-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient id="events-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill
                    fill-opacity="1"
                    d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,112C840,128,960,128,1080,112C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    data-darkreader-inline-fill
                    style="--darkreader-inline-fill:#007acc;"
                />
            </svg>
        </div>

        <section class="documentation">
            <b-container>
                <div class="text-center documentation-title-wrapper">
                    <h3 class="documentation-title">Galeri</h3>
                </div>
                <div class="text-center documentation-image-wrapper">
                    <div v-for="(documentation, i) in documentations" :key="i">
                        <img
                            :src="getImgUrl(documentation)"
                            alt="JOINTS 2020"
                        />
                    </div>
                </div>
            </b-container>
        </section>
        <section class="sponsorship d-lg-none">
            <b-container>
                <div class="text-center sponsorship-title-wrapper">
                    <h3 class="sponsorship-title">Sponsorship</h3>
                </div>
                <div class="text-center sponsorship-item-wrapper">
                    <div class="sponsorship-item>"></div>
                </div>
            </b-container>
        </section>

        <section class="mediapartner d-lg-none">
            <b-container>
                <div class="text-center mediapartner-title-wrapper">
                    <h3 class="mediapartner-title">Media Partner</h3>
                </div>
                <div class="text-center mediapartner-item-wrapper">
                    <div class="mediapartner-item>"></div>
                </div>
            </b-container>
        </section>

        <Footer
            accessFrom="dashboardNavbar"
            footerKind="gradient-dashboard-footer"
        ></Footer>
    </div>
</template>

<script>
import Navbar from '@/components/Landing/Navbar.vue';
import Footer from '@/components/Landing/Footer.vue';
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card';
import 'vue-carousel-card/styles/index.css';

export default {
    data() {
        return {
            documentations: [
                'galeri1.jpg',
                'galeri2.jpg',
                'galeri3.jpg',
                'galeri4.jpg',
                'galeri5.jpg',
                'galeri6.jpg'
            ]
        };
    },
    name: 'home',
    components: {
        Navbar,
        Footer,
        CarouselCard,
        CarouselCardItem
    },
    methods: {
        getImgUrl(img) {
            return require('../assets/galeri/' + img);
        },
        changeSlide(newIndex) {
            let gl = document.getElementById('events-desc-grandlaunching');
            let talk = document.getElementById('events-desc-talk');
            let competition = document.getElementById(
                'events-desc-competition'
            );
            let camp = document.getElementById('events-desc-jointscamp');
            if (newIndex == 0) {
                gl.style.display = 'flex';
                talk.style.display = 'none';
                competition.style.display = 'none';
                camp.style.display = 'none';
            } else if (newIndex == 1) {
                gl.style.display = 'none';
                talk.style.display = 'flex';
                competition.style.display = 'none';
                camp.style.display = 'none';
            } else if (newIndex == 2) {
                gl.style.display = 'none';
                talk.style.display = 'none';
                competition.style.display = 'flex';
                camp.style.display = 'none';
            } else {
                gl.style.display = 'none';
                talk.style.display = 'none';
                competition.style.display = 'none';
                camp.style.display = 'flex';
            }
        }
    }
};
</script>

<style scoped>
.home-page .header {
    padding-top: 150px;
    min-height: 65vh;
}

.header-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.home-page .header-button {
    /* margin-left: 100px; */
    border: 1px solid white;
    color: white;
    background: transparent;
    border-radius: 10px;
    width: 120px;
}

.home-page .header-button:hover {
    background: white;
    color: black;
}

.home-page .header .header-button-mobile {
    width: 120px;
    background: #13cebb;
    border-radius: 10px;
    border: none;
}

.home-page .header-image {
    width: 400px;
}

.home-page .header-title {
    color: white;
}

.home-page .header-subtitle {
    color: white;
}

.home-page .events {
    background-image: linear-gradient(90deg, #a729a4, #e273b1);
}

.home-page .carousel-card {
    width: 100%;
}

.home-page .carousel-card .carousel-card-item {
    height: auto;
}

.home-page .carousel-card .card-image img {
    width: 100px;
}

.home-page .carousel-card .card {
    width: 80%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
}

.home-page .carousel-card .carousel-item-grandlaunching .card {
    background-image: linear-gradient(-135deg, #7ea2c4, #5b99b6);
    border: none;
}

.home-page .carousel-card .carousel-item-talk .card {
    background-image: linear-gradient(-135deg, #82c9fb, #18cebe);
    border: none;
}

.home-page .carousel-card .carousel-item-competition .card {
    background-image: linear-gradient(-135deg, #b41a1a, #f65959);
    border: none;
}

.home-page .carousel-card .carousel-item-jointscamp .card {
    background-image: linear-gradient(-135deg, #8e45d9, #b797db);
    border: none;
}

.home-page .carousel-card .carousel-card-button {
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
    border-radius: 10px;
    width: 100%;
    height: auto;
}

#events-desc-grandlaunching {
    display: flex;
}

#events-desc-talk {
    display: none;
}

#events-desc-competition {
    display: none;
}

#events-desc-jointscamp {
    display: none;
}

.home-page .events-desc .events-title {
    color: white;
    margin-bottom: 25px;
}

.home-page .events-desc .events-subtitle {
    color: white;
    margin-bottom: 25px;
}

.home-page .events-desc .events-button {
    width: 120px;
    background: #13cebb;
    border-radius: 10px;
    border: none;
}

.events-gradient path {
    fill: url('#events-gradient');
}

#events-gradient {
    --color-stop-1: #a729a4;
    --color-stop-3: #e273b1;
}

.home-header-gradient path {
    fill: url('#home-header-gradient');
}

#home-header-gradient {
    --color-stop-1: #19c4b9;
    --color-stop-3: #90169f;
}

.home-page .timeline .timeline-title {
    color: #707070;
    margin-bottom: 30px;
}

.home-page .timeline .v-timeline {
    width: 100%;
}

.home-page .timeline .theme--light.v-timeline::before {
    background: #707070 !important;
}

.home-page .timeline .timeline-date {
    color: #707070;
    font-size: 14px;
    font-weight: 500;
}

.home-page .timeline .timeline-desc {
    color: #707070;
    font-weight: 600;
}

.home-page .documentation {
    margin-top: 50px;
}

.home-page .documentation .documentation-title {
    margin-bottom: 20px;
    color: #707070;
}

.home-page .documentation .documentation-image-wrapper {
    margin-bottom: 20px;
}

.home-page .documentation .documentation-image-wrapper div {
    display: inline-block;
}

.home-page .documentation .documentation-image-wrapper div img {
    height: 150px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.home-page .sponsorship .sponsorship-title {
    margin-bottom: 20px;
    color: #707070;
}

.home-page .sponsorship .sponsorship-item-wrapper {
    margin-bottom: 20px;
}

.home-page .sponsorship .sponsorship-item-wrapper div {
    display: inline-block;
}

.home-page .mediapartner .mediapartner-title {
    margin-bottom: 20px;
    color: #707070;
}

.home-page .mediapartner .mediapartner-item-wrapper {
    margin-bottom: 20px;
}

.home-page .mediapartner .mediapartner-item-wrapper div {
    display: inline-block;
}

@media (max-width: 575.98px) {
    .home-page .header {
        padding-top: 60px !important;
    }

    .home-page .carousel-card .card {
        width: 100%;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .home-page
        .carousel-card
        .carousel-item-grandlaunching
        .card
        .carousel-card-button {
        font-size: 14px;
    }

    .home-page .carousel-card .card .carousel-card-button {
        padding-right: 5px;
        padding-left: 5px;
    }

    .header-image {
        width: 200px !important;
    }
}

@media (max-width: 767.98px) {
    .home-page .carousel-card .card .carousel-card-button {
        width: 100% !important;
    }

    .home-page .header {
        padding-top: 80px;
    }
}

@media (max-width: 991.98px) {
    .home-page .header {
        margin-bottom: -250px;
        padding-top: 120px;
        padding-bottom: 200px;
        background-image: linear-gradient(90deg, #19c4b9, #90169f);
    }

    .home-page .carousel-card .card .carousel-card-button {
        width: 65%;
    }

    .home-page
        .carousel-card
        .carousel-item-grandlaunching
        .card
        .carousel-card-button {
        padding-right: 12px;
        padding-left: 12px;
    }

    .home-page .events-desc .events-title {
        text-align: center;
    }

    .home-page .events-desc .events-subtitle {
        text-align: center;
    }

    .home-page .events-desc .events-button {
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 1199.98px) {
    .home-page
        .carousel-card
        .carousel-item-grandlaunching
        .card
        .carousel-card-button {
        padding-right: 5px;
        padding-left: 5px;
    }
}
</style>

<style>
.home-page .carousel-card-mask {
    background-color: transparent !important;
}

.home-page .timeline .v-timeline-item__inner-dot {
    border: 2px solid #707070 !important;
}

.home-page .timeline .v-timeline-item__inner-dot:hover {
    background: #707070 !important;
}
</style>
