<template>
    <div class="competitionlist-component">
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
                            <CarouselCardItem class="carousel-item-jointscamp">
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
                                            to="/jointscamp"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >Joints Camp</b-button
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
                    <b-col
                        cols="12"
                        lg="6"
                        id="events-desc-jointscamp"
                        class="flex-column events-desc justify-content-center text-left events-desc-jointcamp"
                    >
                        <h2 class="events-title">
                            Joints Camp
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
    </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card';
import 'vue-carousel-card/styles/index.css';

export default {
    name: 'CompetitionList',
    data() {
        return {};
    },
    components: {
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
            } else if(newIndex == 2) {
                gl.style.display = 'none';
                talk.style.display = 'none';
                competition.style.display = 'flex';
                camp.style.display = 'none';
            }
            else{
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


.competitionlist-component .carousel-card {
    width: 100%;
}

.competitionlist-component .carousel-card .carousel-card-item {
    height: auto;
}

.competitionlist-component .carousel-card .card-image img {
    width: 100px;
}

.competitionlist-component .carousel-card .card {
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

.competitionlist-component .carousel-card .carousel-item-grandlaunching .card {
    background-image: linear-gradient(-135deg, #b41a1a, #f65959);
    border: none;
}

.competitionlist-component .carousel-card .carousel-item-talk .card {
    background-image: linear-gradient(-135deg, #7ea2c4, #5b99b6);
    border: none;
}

.competitionlist-component .carousel-card .carousel-item-competition .card {
    background-image: linear-gradient(-135deg, #8e45d9, #b797db);
    border: none;
}

.competitionlist-component .carousel-card .carousel-item-jointscamp .card {
    background-image: linear-gradient(-135deg, #b41a1a, #f65959);
    border: none;
}

.competitionlist-component .carousel-card .carousel-card-button {
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

#events-desc-jointscamp {
    display: none;
}

.competitionlist-component .events-desc .events-title {
    color: white;
    margin-bottom: 25px;
}

.competitionlist-component .events-desc .events-subtitle {
    color: white;
    margin-bottom: 25px;
}

.competitionlist-component .events-desc .events-button {
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


@media (max-width: 575.98px) {

    .competitionlist-component .carousel-card .card {
        width: 100%;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .competitionlist-component
        .carousel-card
        .carousel-item-grandlaunching
        .card
        .carousel-card-button {
        font-size: 14px;
    }

    .competitionlist-component .carousel-card .card .carousel-card-button {
        padding-right: 5px;
        padding-left: 5px;
    }
}

@media (max-width: 767.98px) {
    .competitionlist-component .carousel-card .card .carousel-card-button {
        width: 100% !important;
    }
}

@media (max-width: 991.98px) {

    .competitionlist-component .carousel-card .card .carousel-card-button {
        width: 65%;
    }

    .competitionlist-component
        .carousel-card
        .carousel-item-grandlaunching
        .card
        .carousel-card-button {
        padding-right: 12px;
        padding-left: 12px;
    }

    .competitionlist-component .events-desc .events-title {
        text-align: center;
    }

    .competitionlist-component .events-desc .events-subtitle {
        text-align: center;
    }

    .competitionlist-component .events-desc .events-button {
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 1199.98px) {
    .competitionlist-component
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
.competitionlist-component .carousel-card-mask {
    background-color: transparent !important;
}
</style>
