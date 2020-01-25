<template>
    <div class="competitionlist-component">
        <section class="competitions">
            <b-container>
                <b-row>
                    <b-col
                        cols="12"
                        lg="6"
                        class="d-flex align-items-center justify-content-center"
                    >
                        <CarouselCard
                            :interval="120000"
                            :autoPlay="false"
                            type="card"
                            arrow="never"
                            @change="changeSlide"
                        >
                            <CarouselCardItem
                                class="carousel-item-pcs"
                            >
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/pcs-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/competitions"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >PCS</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                            <CarouselCardItem class="carousel-item-ctf">
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/ctf-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/competitions"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >CTF</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                            <CarouselCardItem class="carousel-item-dm">
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/dm-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/competitions"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >Data Mining</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                            <CarouselCardItem class="carousel-item-ux">
                                <div>
                                    <b-card>
                                        <b-card-text>
                                            <div class="card-image">
                                                <img
                                                    src="@/assets/ux-dark.png"
                                                    alt="JOINTS 2020"
                                                />
                                            </div>
                                        </b-card-text>
                                        <b-button
                                            to="/competitions"
                                            variant="primary"
                                            class="carousel-card-button"
                                            >UX Design</b-button
                                        >
                                    </b-card>
                                </div>
                            </CarouselCardItem>
                        </CarouselCard>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="competitions-desc-pcs"
                        class="flex-column justify-content-center text-left competitions-desc competitions-desc-pcs"
                    >
                        <h2 class="competitions-title">
                            Programming Competition Session
                        </h2>
                        <p class="competitions-subtitle">
                            Terbagi menjadi sesi logika dan pemrograman. Kedua materi ini menguji 
                            kemampuan nalar dan pemahaman peserta dalam menyelesaikan suatu permasalahan 
                            dalam waktu yang singkat dengan algoritma yang efisien dan tepat. Bahasa 
                            pemrograman yang digunakan antara lain C/C++, Pascal, Java, atau Python. 
                        </p>
                        <h4 class="competition-detail-title">Prize: </h4>
                        <div class="competition-detail-wrapper d-flex">
                            <div class="competition-prize">
                                <div class="competition-prize-1 text-center">
                                    Juara 1
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-2 text-center">
                                    Juara 2
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-3 text-center">
                                    Juara 3
                                    <br>
                                    Rp. 1000000
                                </div>
                            </div>
                            <div class="competition-detail">    
                                <b-button class="competition-detail-button">Guidebook</b-button>
                                <b-button href="#timeline-pcs" class="competition-detail-button">Timeline</b-button>
                            </div>
                        </div>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="competitions-desc-ctf"
                        class="flex-column competitions-desc justify-content-center text-left competitions-desc-ctf"
                    >
                        <h2 class="competitions-title">
                            Capture The Flag
                        </h2>
                        <p class="competitions-subtitle">
                            Materi yang dilombakan:
                            <ul>
                                <li>Binary Exploitation, yaitu melakukan analisis binary dari suatu jaringan</li>
                                <li>Cryptography, yaitu pemahaman kriptografi klasik maupun modern dari jaringan</li>
                                <li>Forensic, yaitu menganalisa dan mengekstrak informasi dari file</li>
                                <li>Reverse Engineering, yaitu membalik algoritma program yang ditentukan</li>
                                <li>Web Exploitation, yaitu melakukan eksploitasi celah keamanan dari suatu aplikasi web</li>
                            </ul>
                        </p>
                        <h4 class="competition-detail-title">Prize: </h4>
                        <div class="competition-detail-wrapper d-flex">
                            <div class="competition-prize">
                                <div class="competition-prize-1 text-center">
                                    Juara 1
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-2 text-center">
                                    Juara 2
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-3 text-center">
                                    Juara 3
                                    <br>
                                    Rp. 1000000
                                </div>
                            </div>
                            <div class="competition-detail">    
                                <b-button class="competition-detail-button">Guidebook</b-button>
                                <b-button href="#timeline-ctf" class="competition-detail-button">Timeline</b-button>
                            </div>
                        </div>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="competitions-desc-dm"
                        class="flex-column competitions-desc justify-content-center text-left competitions-desc-dm"
                    >
                        <h2 class="competitions-title">
                            Data Mining
                        </h2>
                        <p class="competitions-subtitle">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga.
                        </p>
                        <h4 class="competition-detail-title">Prize: </h4>
                        <div class="competition-detail-wrapper d-flex">
                            <div class="competition-prize">
                                <div class="competition-prize-1 text-center">
                                    Juara 1
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-2 text-center">
                                    Juara 2
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-3 text-center">
                                    Juara 3
                                    <br>
                                    Rp. 1000000
                                </div>
                            </div>
                            <div class="competition-detail">    
                                <b-button class="competition-detail-button">Guidebook</b-button>
                                <b-button href="#timeline-dm" class="competition-detail-button">Timeline</b-button>
                            </div>
                        </div>
                    </b-col>
                    <b-col
                        cols="12"
                        lg="6"
                        id="competitions-desc-ux"
                        class="flex-column competitions-desc justify-content-center text-left competitions-desc-ux"
                    >
                        <h2 class="competitions-title">
                            UX Design Competition
                        </h2>
                        <p class="competitions-subtitle">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga.
                        </p>
                        <h4 class="competition-detail-title">Prize: </h4>
                        <div class="competition-detail-wrapper d-flex">
                            <div class="competition-prize">
                                <div class="competition-prize-1 text-center">
                                    Juara 1
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-2 text-center">
                                    Juara 2
                                    <br>
                                    Rp. 1000000
                                </div>
                                <div class="competition-prize-3 text-center">
                                    Juara 3
                                    <br>
                                    Rp. 1000000
                                </div>
                            </div>
                            <div class="competition-detail">    
                                <b-button class="competition-detail-button">Guidebook</b-button>
                                <b-button href="#timeline-ux" class="competition-detail-button">Timeline</b-button>
                            </div>
                        </div>
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
            let pcs = document.getElementById('competitions-desc-pcs');
            let ctf = document.getElementById('competitions-desc-ctf');
            let dm = document.getElementById(
                'competitions-desc-dm'
            );
            let ux = document.getElementById('competitions-desc-ux');

            let timelinePCS =  document.getElementById('timeline-pcs');
            let timelineCTF =  document.getElementById('timeline-ctf');
            let timelineDM =  document.getElementById('timeline-dm');
            let timelineUX =  document.getElementById('timeline-ux');

            if (newIndex == 0) {
                pcs.style.display = 'flex';
                ctf.style.display = 'none';
                dm.style.display = 'none';
                ux.style.display = 'none';

                timelinePCS.style.display = "block";
                timelineCTF.style.display = "none";
                timelineDM.style.display = "none";
                timelineUX.style.display = "none";
            } else if (newIndex == 1) {
                pcs.style.display = 'none';
                ctf.style.display = 'flex';
                dm.style.display = 'none';
                ux.style.display = 'none';

                timelinePCS.style.display = "none";
                timelineCTF.style.display = "block";
                timelineDM.style.display = "none";
                timelineUX.style.display = "none";
            } else if(newIndex == 2) {
                pcs.style.display = 'none';
                ctf.style.display = 'none';
                dm.style.display = 'flex';
                ux.style.display = 'none';

                timelinePCS.style.display = "none";
                timelineCTF.style.display = "none";
                timelineDM.style.display = "block";
                timelineUX.style.display = "none";
            }
            else{
                pcs.style.display = 'none';
                ctf.style.display = 'none';
                dm.style.display = 'none';
                ux.style.display = 'flex';

                timelinePCS.style.display = "none";
                timelineCTF.style.display = "none";
                timelineDM.style.display = "none";
                timelineUX.style.display = "block";
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
    height: 80px;
    opacity: .6;
}

.competitionlist-component .carousel-card .card {
    width: 80%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
}

.competitionlist-component .carousel-card .carousel-item-pcs .card {
    background-image: linear-gradient(-135deg, #b41a1a, #f65959);
    border: none;
}

.competitionlist-component .carousel-card .carousel-item-ctf .card {
    background-image: linear-gradient(-135deg, #7ea2c4, #5b99b6);
    border: none;
}

.competitionlist-component .carousel-card .carousel-item-dm .card {
    background-image: linear-gradient(-135deg, #8e45d9, #b797db);
    border: none;
}

.competitionlist-component .carousel-card .carousel-item-ux .card {
    background-image: linear-gradient(-135deg, #82c9fb, #18cebe);
    border: none;
}

.competitionlist-component .carousel-card .carousel-card-button {
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, 1);
    border-radius: 10px;
    width: 100%;
    height: auto;
}

#competitions-desc-pcs {
    display: flex;
}

#competitions-desc-ctf {
    display: none;
}

#competitions-desc-dm {
    display: none;
}

#competitions-desc-ux {
    display: none;
}

.competitionlist-component .competitions-desc .competitions-title {
    color: white;
    margin-bottom: 25px;
}

.competitionlist-component .competitions-desc .competitions-subtitle {
    color: white;
    margin-bottom: 25px;
}

.competitionlist-component .competitions-desc .competitions-button {
    width: 120px;
    background: #13cebb;
    border-radius: 10px;
    border: none;
}

.competitionlist-component #competitions-desc-ctf ul{
    margin-top: 5px;
    margin-left: 16px;
}

.competitions-gradient path {
    fill: url('#competitions-gradient');
}

#competitions-gradient {
    --color-stop-1: #a729a4;
    --color-stop-3: #e273b1;
}

.competition-prize div{
    display: inline-block;
}

.competition-prize{
    margin-bottom: 15px;
}

.competition-detail{
    width: 150px;
}

.competition-prize-1{
    background-image: linear-gradient(135deg, #F8F693, #FFC211);
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 700;
    border-radius: 15px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.competition-prize-2{
    background-image: linear-gradient(135deg, #F1F1F1, #9C9C9C);
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 700;
    border-radius: 15px;
    margin-left: 15px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.competition-prize-3{
    background-image: linear-gradient(135deg, #FAAE53, #FC7E28);
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 700;
    border-radius: 15px;
    margin-left: 15px;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.competition-detail-title{
    color: white;
}

.competition-detail .competition-detail-button{
    display: block;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
}

.competition-detail .competition-detail-button:hover{
    background: rgba(0, 0, 0, 0.7);
}

.competition-detail .competition-detail-button:nth-child(1){
    margin-bottom: 10px;
}

.competition-detail-wrapper{
    flex-direction: column;
}


@media (max-width: 575.98px) {

    .competitionlist-component .carousel-card .card {
        width: 100%;
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .competitionlist-component
        .carousel-card
        .carousel-item-dm
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
        .carousel-item-dm
        .card
        .carousel-card-button {
        padding-right: 12px;
        padding-left: 12px;
    }

    .competitionlist-component .competitions-desc .competitions-title {
        text-align: center;
    }

    .competitionlist-component .competitions-desc .competitions-subtitle {
        text-align: center;
    }

    .competitionlist-component .competitions-desc .competitions-button {
        margin-left: auto;
        margin-right: auto;
    }

    .competition-detail-title{
        text-align: center;
        margin-bottom: 20px;
    }

    .competition-detail-wrapper{
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .competition-prize-1{
        margin-left: 10px;
        margin-right: 10px;
    }

    .competition-prize-2{
        margin-left: 10px;
        margin-right: 10px;
    }

    .competition-prize-3{
        margin-left: 10px;
        margin-right: 10px;
    }

    .competition-prize{
        text-align: center;
    }

    .competition-detail .competition-detail-button{
        margin-left: auto;
        margin-right: auto;
    }
}

@media (max-width: 1199.98px) {
    .competitionlist-component
        .carousel-card
        .carousel-item-dm
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
