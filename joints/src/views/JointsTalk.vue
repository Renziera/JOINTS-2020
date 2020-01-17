<template>
    <div>
        <Navbar accessFrom="talk" colorKind="gradient-talk"></Navbar>
        <section class="header">
            <b-container class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12">
                        <h1 class="header-title">
                            IT DAY
                        </h1>
                        <br />
                        <p class="header-subtitle ml-auto mr-auto">
                            TechTalk merupakan seminar yang ditujukan untuk berbagi 
                            wawasan terkait beberapa bidang penting dalam dunia teknologi (IT) 
                            yang hanya membutuhkan sedikit bahkan nyaris tidak sama sekali kemampuan coding. 
                            TechTalk diadakan dalam serangkaian acara IT Day tanggal 18-19 April 2020. Adapun 
                            topik utama TechTalk di tahun 2020 adalah IoT (Internet of Things) dengan sub-topik yaitu AI 
                            (Artificial Intelligence) dan Big Data. 
                        </p>
                        <br />
                        <b-button class="header-button" variant="primary">
                            Yuk Daftar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <div class="wave-container header-bottom-wave">
            <svg
                class="header-talk-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient id="header-talk-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,128L34.3,117.3C68.6,107,137,85,206,69.3C274.3,53,343,43,411,64C480,85,549,139,617,144C685.7,149,754,107,823,85.3C891.4,64,960,64,1029,80C1097.1,96,1166,128,1234,133.3C1302.9,139,1371,117,1406,106.7L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>

        <div class="wave-container about-top-wave">
            <svg
                class="about-talk-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient id="about-talk-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,160L60,154.7C120,149,240,139,360,149.3C480,160,600,192,720,181.3C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>

        <section class="about">
            <b-container class="d-flex align-items-center">
                <div class="about-wrapper">
                    <b-row>
                        <b-col cols="12" lg="4" class="about-pembicara">
                            <div class="img-wrapper w-1">
                                <div class="image-container">
                                    <img />
                                </div>
                                <span class="img-title">Pembicara 1</span>
                                <hr />
                                <span class="img-subtitle">Jabatan 2</span>
                            </div>
                            <div class="img-wrapper w-2 ml-auto">
                                <div class="image-container">
                                    <img />
                                </div>
                                <span class="img-title">Pembicara 2</span>
                                <hr />
                                <span class="img-subtitle">Jabatan 2</span>
                            </div>
                        </b-col>
                        <b-col
                            cols="12"
                            lg="8"
                            class="d-flex flex-column justify-content-center text-left about-desc"
                        >
                            <h2 class="about-title">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit
                            </h2>
                            <p class="about-subtitle">
                                Techtalk merupakan sebuah seminar yang ditujukan untuk berbagi wawasan terkait berbagai beberapa bidang penting dalam dunia teknologi (IT) yang hanya membutuhkan sedikit atau nyaris tidak sama sekali kemampuan coding. Dengan tujuan untuk menghapus stigma dan momok pada dunia teknologi (IT) sehingga dapat meningkatkan kesadaran, ketertarikan, dan antusiasme masyarakat pada dunia teknologi (IT).
                            </p>
                            <b-button
                                class="about-button"
                                variant="light"
                                to="/"
                            >
                                Daftar
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
        <div class="wave-container about-bottom-wave">
            <svg
                class="about-talk-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient id="about-talk-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,96L48,101.3C96,107,192,117,288,106.7C384,96,480,64,576,53.3C672,43,768,53,864,74.7C960,96,1056,128,1152,122.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>
        
        <section id="timeline-talk">
            <Timeline accessFrom="Talk" title="Timeline"></Timeline> 
        </section>
        <Footer accessFrom="talk" footerKind="gradient-talk-footer"></Footer>
    </div>
</template>

<script>
import Navbar from '@/components/Landing/Navbar.vue';
import Footer from '@/components/Landing/Footer.vue';
import Timeline from '@/components/Landing/Timeline.vue';

export default {
    components: {
        Navbar,
        Footer,
        Timeline
    }
};
</script>

<style scoped>
* {
    transition: 0.3s ease-in-out !important;
}

.header {
    padding-top: 130px;
    min-height: 65vh;
    background-image: linear-gradient(-90deg, #82c9fb, #18cebe);
}

.header-title {
    color: black !important;
    font-size: 80px;
    font-weight: 700;
}

.header-subtitle {
    color: white;
    max-width: 80%;
    margin-top: -30px;
    font-size: 20px;
}

.header-button {
    background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    margin-top: -40px;
    border-radius: 10px;
    color: white;
    border: none;
    font-size: 22px;
}

.header-button:hover {
    color: white;
    font-size: 25px;
}

.image-container {
    border-radius: 100px;
    background: #e5e5e5;
    width: 200px;
    height: 200px;
    margin-bottom: 10px;
}

.about {
    background-image: linear-gradient(90deg, #82c9fb, #18cebe);
}

.img-wrapper {
    width: 200px;
}

.about-desc {
    padding-left: 50px;
    padding-right: 50px;
}

.about-title {
    color: white;
}

.about-subtitle {
    font-size: 20px;
    color: white;
    font-weight: 400;
}

.about-button {
    width: 140px;
    color: white;
    border: 1.5px solid white;
    background: transparent !important;
    border-radius: 15px;
    font-size: 25px;
    font-weight: 600;
}

.about-button:hover {
    color: #82c9fb;
    background: white !important;
    border: 1px solid white;
}

hr {
    margin: 0;
    width: 170px;
    margin-left: auto;
    margin-right: auto;
    border-color: white;
}

.img-title {
    font-weight: 600;
    color: white;
    font-size: 20px;
}

.img-subtitle {
    color: white;
    font-size: 20px;
}

@media (max-width: 991.98px) {
    .header{
        padding-top: 80px;
    }
    .about-pembicara {
        display: flex;
    }

    .about-desc {
        margin-top: 30px;
    }
    
    .header-subtitle{
        font-size: 16px;
    }
}

@media (max-width: 767.98px) {
    .about-pembicara {
        display: flex;
        flex-direction: column !important;
    }

    .img-wrapper {
        margin-left: auto;
        margin-right: auto;
    }

    .w-2 {
        margin-top: 20px;
    }

    .header-bottom-wave {
        margin-bottom: 50px;
    }

    .about-bottom-wave {
        margin-bottom: 50px;
    }

    .about-desc {
        margin-top: 0px;
    }
}

@media (max-width: 575.98px) {
    .header-title{
        font-size: 50px;
    }

    .header-button{
        font-size: 18px;
    }

    .header-button:hover{
        font-size: 20px;
    }
}


.about-talk-gradient path {
    fill: url('#about-talk-gradient');
}

#about-talk-gradient {
    --color-stop-3: #18cebe;
    --color-stop-1: #82c9fb;
}

.header-talk-gradient path {
    fill: url('#header-talk-gradient');
}

#header-talk-gradient {
    --color-stop-1: #18cebe;
    --color-stop-3: #82c9fb;
}
</style>
