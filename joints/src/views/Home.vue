<template>
    <div class="home-page">
        <Navbar accessFrom="home" colorKind="gradient-home"> </Navbar>
        <div class="wave-container header-background d-none d-lg-block">
            <svg
                class="events-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 500 1440 1020"
            >
                <defs>
                    <linearGradient id="header-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M1698.3,1218.6c-38.6,8-96.8,18.7-168,26.7c-218.6,24.6-490.6,55.2-726.7-68.9c-194.4-102.2-185-214.9-386.7-271.1c-114.7-32-128.7,1.5-272.5-38.9c-95.1-26.7-276.7-77.8-356.4-234.4c-29.3-57.6-36.2-112.4-37.8-146.7h1948C1698.3,729.7,1698.3,974.1,1698.3,1218.6z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
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
                            src="@/assets/logo.png"
                            alt="JOINTS 2020"
                            class="header-image d-lg-none"
                        />
                    </b-col>
                    <b-col
                        lg="6"
                        cols="12"
                        class="d-none d-lg-flex flex-column justify-content-center text-left header-desc"
                    >
                        <h2 class="header-title">
                            Apa itu Joints?
                        </h2>
                        <p class="header-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco. nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in
                            reprehenderit
                        </p>
                        <b-button
                            class="header-button"
                            variant="success"
                            to="/"
                        >
                            Detail Joints
                        </b-button>
                    </b-col>
                    <b-col
                        cols="12"
                        class="d-lg-none d-flex align-items-center justify-content-center"
                    >
                        <b-button
                            class="header-button-mobile"
                            variant="success"
                            to="/"
                        >
                            Yuk Daftar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <div class="wave-container events-top-wave">
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
                    fill=""
                    fill-opacity="1"
                    d="M0,256L60,261.3C120,267,240,277,360,266.7C480,256,600,224,720,224C840,224,960,256,1080,256C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
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
                                                    src="@/assets/logo.png"
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
                                                    src="@/assets/logo.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/jointstalk"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >Tech Talk</b-button
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
                                                    src="@/assets/logo.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/competitions"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >Kompetisi</b-button
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
                        <h2 class="events-title">
                            Grand Launching
                        </h2>
                        <p class="events-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco.
                        </p>
                        <b-button
                            class="events-button"
                            variant="success"
                            to="/"
                        >
                            Yuk Daftar
                        </b-button>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-talk"
                        class="flex-column events-desc justify-content-center text-left events-desc-talk"
                    >
                        <h2 class="events-title">
                            Tech Talk
                        </h2>
                        <p class="events-subtitle">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit,
                        </p>
                        <b-button
                            class="events-button"
                            variant="success"
                            to="/"
                        >
                            Yuk Daftar
                        </b-button>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-competition"
                        class="flex-column events-desc justify-content-center text-left events-desc-competition"
                    >
                        <h2 class="events-title">
                            Kompetisi
                        </h2>
                        <p class="events-subtitle">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga.
                        </p>
                        <b-button
                            class="events-button"
                            variant="success"
                            to="/"
                        >
                            Yuk Daftar
                        </b-button>
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
                    fill=""
                    fill-opacity="1"
                    d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,112C840,128,960,128,1080,112C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>

        <section class="timeline">
            <b-container>
                <div
                    class="d-flex justify-content-center align-items-center flex-column"
                >
                    <h3 class="timeline-title">
                        Timeline
                    </h3>
                    <template>
                        <v-timeline>
                            <v-timeline-item
                                small
                                fillDot
                                v-for="(timeline, i) in timelines"
                                :key="i"
                            >
                                <div v-if="i % 2 == 0" class="text-left">
                                    <span class="timeline-date">{{
                                        timeline.date
                                    }}</span>
                                    <div class="timeline-desc">
                                        {{ timeline.desc }}
                                    </div>
                                </div>
                                <div v-else-if="i % 2 == 1" class="text-right">
                                    <span class="timeline-date">{{
                                        timeline.date
                                    }}</span>
                                    <div class="timeline-desc">
                                        {{ timeline.desc }}
                                    </div>
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </template>
                </div>
            </b-container>
        </section>

        <section class="documentation">
            <b-container>
                <div class="text-center documentation-title-wrapper">
                    <h3 class="documentation-title">
                        Grand Launching
                    </h3>
                </div>
                <div class="text-center documentation-image-wrapper">
                    <div v-for="(documentation, i) in documentations" :key="i">
                        <img src="@/assets/logo.png" alt="JOINTS 2020" />
                    </div>
                </div>
            </b-container>
        </section>

        <!--
        <img alt="Vue logo" src="@/assets/logo.png" />
        <HelloWorld msg="Ceritanya web JOINTS gan, mantap kimac" />
        <router-link v-if="$store.getters.user.loggedIn" to="/dashboard"
            >Dashboard</router-link
        >
        <router-link v-else to="/login">Login</router-link>
        <br />
        <br />
        <router-link to="/grandlaunching">Grand Launching</router-link>
        <br />
        <router-link to="/jointstalk">JOINTS Talku</router-link>
        <br />
        <router-link to="/jointscamp">JOINTS Camp</router-link>
        <br />
        <router-link to="/competitions">Competitions</router-link>
        -->
        <section class="sponsorship d-lg-none">
            <b-container>
                <div class="text-center sponsorship-title-wrapper">
                    <h3 class="sponsorship-title">
                        Sponsorship
                    </h3>
                </div>
                <div class="text-center sponsorship-item-wrapper">
                    <div class="sponsorship-item>"></div>
                </div>
            </b-container>
        </section>

        <section class="mediapartner d-lg-none">
            <b-container>
                <div class="text-center mediapartner-title-wrapper">
                    <h3 class="mediapartner-title">
                        Media Partner
                    </h3>
                </div>
                <div class="text-center mediapartner-item-wrapper">
                    <div class="mediapartner-item>"></div>
                </div>
            </b-container>
        </section>

        <Footer
            accessFrom="dashboardNavbar"
            footerKind="gradient-dashboard-footer"
        >
        </Footer>
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
            timelines: [
                {
                    date: '11 Desember 2019',
                    desc: 'But I must explain to you how all this mistaken idea'
                },
                {
                    date: '11 Desember 2019',
                    desc: 'But I must explain to you how all this mistaken idea'
                },
                {
                    date: '11 Desember 2019',
                    desc: 'But I must explain to you how all this mistaken idea'
                },
                {
                    date: '11 Desember 2019',
                    desc: 'But I must explain to you how all this mistaken idea'
                },
                {
                    date: '11 Desember 2019',
                    desc: 'But I must explain to you how all this mistaken idea'
                },
                {
                    date: '11 Desember 2019',
                    desc: 'But I must explain to you how all this mistaken idea'
                }
            ],
            documentations: [
                '@/assets/logo.png',
                '@/assets/logo.png',
                '@/assets/logo.png',
                '@/assets/logo.png',
                '@/assets/logo.png'
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
        changeSlide(newIndex) {
            let gl = document.getElementById('events-desc-grandlaunching');
            let talk = document.getElementById('events-desc-talk');
            let competition = document.getElementById(
                'events-desc-competition'
            );
            if (newIndex == 0) {
                gl.style.display = 'flex';
                talk.style.display = 'none';
                competition.style.display = 'none';
            } else if (newIndex == 1) {
                gl.style.display = 'none';
                talk.style.display = 'flex';
                competition.style.display = 'none';
            } else {
                gl.style.display = 'none';
                talk.style.display = 'none';
                competition.style.display = 'flex';
            }
        }
    }
};
</script>

<style scoped>
.home-page .header {
    padding-top: 200px;
    padding-bottom: 200px;
    min-height: 65vh;
}

.header-background{
    position: absolute;
    top: 0;
    left: 0;    
    width: 100%;
}

.home-page .header-button {
    margin-left: 100px;
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
    width: 300px;
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
    -webkit-box-shadow: -5px 5px 11px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: -5px 5px 11px 0px rgba(0, 0, 0, 0.2);
    box-shadow: -5px 5px 11px 0px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
}

.home-page .carousel-card .carousel-item-grandlaunching .card {
    background-image: linear-gradient(-135deg, #b41a1a, #f65959);
    border: none;
}

.home-page .carousel-card .carousel-item-talk .card {
    background-image: linear-gradient(-135deg, #7ea2c4, #5b99b6);
    border: none;
}

.home-page .carousel-card .carousel-item-competition .card {
    background-image: linear-gradient(-135deg, #8e45d9, #b797db);
    border: none;
}

.home-page .carousel-card .carousel-card-button {
    background: transparent;
    border: 1.5px solid rgba(0, 0, 0, 0.8);
    color: rgba(0, 0, 0, 0.8);
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

.header-gradient path {
    fill: url('#header-gradient');
}

#header-gradient {
    --color-stop-1: #a729a4;
    --color-stop-3: #e273b1;
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
