<template>
    <div class="grandlaunching">
        <Navbar
            accessFrom="dashboardNavbar"
            colorKind="gradient-dashboard"
        ></Navbar>
        <section class="header">
            <b-container class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12">
                        <h1 class="header-title">Grand Launching</h1>
                        <br />
                        <p class="header-subtitle ml-auto mr-auto">
                            Grand Launching ​merupakan opening event dari
                            rangkaian acara​ JOINTS UGM 2020. Grand Launching
                            bertujuan untuk mengajak masyarakat Indonesia untuk
                            lebih bijak serta cerdas dalam memanfaatkan kemajuan
                            dalam bidang Teknologi Informasi.
                            <br /><br />
                            Pada tahun ini, ​Grand Launching​ ​JOINTS UGM​
                            ​2020​ akan mengangkat topik Apps Innovation dengan
                            judul acara “Innovation by Collaboration”. Para
                            pembicara akan memberikan pelatihan singkat berupa
                            workshop dan menyampaikan materi tentang topik dari
                            acara Grand Launching.
                        </p>
                        <br />
                        <b-button
                            class="header-button"
                            variant="primary"
                            to="/login"
                            >Yuk, Daftar!</b-button
                        >
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <div class="wave-container about-top-wave">
            <svg
                class="about-grandlaunching-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
            >
                <defs>
                    <linearGradient id="about-grandlaunching-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill
                    fill-opacity="1"
                    d="M1440,100H0V0c360.9,57.3,761.5,89.9,1194.9,77.1c83.3-2.5,165-6.6,245.1-12C1440,76.7,1440,88.3,1440,100z"
                    data-darkreader-inline-fill
                    style="--darkreader-inline-fill:#007acc;"
                />
            </svg>
        </div>
        <section class="about">
            <b-container class="d-none d-lg-block">
                <div class="about-wrapper">
                    <h2 class="about-title">Our Speakers</h2>
                    <b-row>
                        <b-col cols="12" lg="6" class="about-left-side">
                            <b-row class="about-left-profile text-right">
                                <b-col
                                    cols="12"
                                    lg="6"
                                    class="justify-content-center d-flex flex-column"
                                >
                                    <div class="about-left-profile-name">
                                        <span>Ardian Franindo</span>
                                    </div>
                                    <div class="about-left-profile-work">
                                        <span>Tech Director at Suitmedia</span>
                                    </div>
                                    <!--
                                    <div class="about-left-profile-sosmed d-flex justify-content-end">
                                        <div class="about-profile-item">
                                            <a href="/">I1</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I2</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I3</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I4</a>
                                        </div>
                                    </div>
                                    -->
                                </b-col>
                                <b-col cols="12" lg="6">
                                    <div class="about-left-image-container">
                                        <img
                                            src="@/assets/Ardian-Franindo.jpg"
                                        />
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col cols="12" lg="6" class="about-right-side">
                            <b-row class="about-right-profile text-left">
                                <b-col cols="12" lg="6">
                                    <div class="about-right-image-container">
                                        <img
                                            src="@/assets/Petry-Sianipar.jpg"
                                        />
                                    </div>
                                </b-col>
                                <b-col
                                    cols="12"
                                    lg="6"
                                    class="justify-content-center d-flex flex-column"
                                >
                                    <div class="about-right-profile-name">
                                        <span>Petry Sianipar</span>
                                    </div>
                                    <div class="about-right-profile-work">
                                        <span
                                            >Senior Principal Product Manager at
                                            GDP Labs</span
                                        >
                                    </div>
                                    <!--
                                    <div class="about-right-profile-sosmed d-flex justify-content-start">
                                        <div class="about-profile-item">
                                            <a href="/">I1</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I2</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I3</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I4</a>
                                        </div>
                                    </div>
                                    -->
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
            <b-container class="d-lg-none">
                <div class="about-mobile-wrapper">
                    <h2 class="about-title">Our Speakers</h2>
                    <b-row>
                        <b-col cols="12" lg="6" class="about-mobile-side">
                            <b-row class="about-mobile-profile text-center">
                                <b-col
                                    cols="12"
                                    lg="6"
                                    class="about-mobile-profile-top"
                                >
                                    <div class="about-mobile-image-container">
                                        <img
                                            src="@/assets/Ardian-Franindo.jpg"
                                        />
                                    </div>
                                </b-col>
                                <b-col
                                    cols="12"
                                    lg="6"
                                    class="justify-content-center d-flex flex-column about-mobile-profile-bottom"
                                >
                                    <div class="about-mobile-profile-name">
                                        <span>Ardian Franindo</span>
                                    </div>
                                    <div class="about-mobile-profile-work">
                                        <span>Tech Director at Suitmedia</span>
                                    </div>
                                    <!--
                                    <div class="about-mobile-profile-sosmed d-flex justify-content-center">
                                        <div class="about-profile-item">
                                            <a href="/">I1</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I2</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I3</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I4</a>
                                        </div>
                                    </div>
                                    -->
                                </b-col>
                            </b-row>
                            <b-row class="about-mobile-profile text-center">
                                <b-col
                                    cols="12"
                                    lg="6"
                                    class="about-mobile-profile-top"
                                >
                                    <div class="about-mobile-image-container">
                                        <img
                                            src="@/assets/Petry-Sianipar.jpg"
                                        />
                                    </div>
                                </b-col>
                                <b-col
                                    cols="12"
                                    lg="6"
                                    class="justify-content-center d-flex flex-column about-mobile-profile-bottom"
                                >
                                    <div class="about-mobile-profile-name">
                                        <span>Petry Sianipar</span>
                                    </div>
                                    <div class="about-mobile-profile-work">
                                        <span
                                            >Senior Principal Product Manager at
                                            GDP Labs</span
                                        >
                                    </div>
                                    <!--
                                    <div class="about-mobile-profile-sosmed d-flex justify-content-center">
                                        <div class="about-profile-item">
                                            <a href="/">I1</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I2</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I3</a>
                                        </div>
                                        <div class="about-profile-item">
                                            <a href="/">I4</a>
                                        </div>
                                    </div>
                                    -->
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
        <section id="lokasi-gl">
            <Lokasi></Lokasi>
        </section>
        <section id="timeline-gl">
            <Timeline accessFrom="GL" title="Timeline"></Timeline>
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
import Timeline from '@/components/Landing/Timeline.vue';
import Lokasi from '@/components/Landing/Lokasi.vue';

export default {
    components: {
        Navbar,
        Footer,
        Timeline,
        Lokasi
    }
};
</script>

<style scoped>
.header {
    padding-top: 130px;
}

.header-title {
    color: #576aac;
    font-size: 80px;
    font-weight: 700;
}

.header-subtitle {
    color: black;
    max-width: 80%;
    margin-top: -30px;
    font-size: 20px;
}

.header-button {
    background: #576aac;
    margin-top: -40px;
    border-radius: 10px;
    color: white;
    border: none;
    font-size: 22px;
}

.header-button:hover {
    color: white;
    background: #576aac;
    font-size: 25px;
}

.about {
    background-image: linear-gradient(90deg, #6753a8, #18c6ba);
    padding-bottom: 30px;
}

.about-left-side {
    border-right: 1px solid white;
}

.about-right-side {
    border-left: 1px solid white;
}

.about-title {
    color: white;
    margin-bottom: 30px;
}

.about-left-profile-name,
.about-right-profile-name {
    color: white;
    font-weight: 500;
    font-size: 22px;
}

.about-left-profile-work,
.about-right-profile-work {
    color: #444444;
    font-weight: 300;
    font-size: 22px;
}

.about-mobile-profile-name {
    color: white;
}

.about-mobile-profile-name,
.about-mobile-profile-work {
    font-size: 20px;
}

.about-mobile-profile-top {
    padding-bottom: 10px;
}

.about-mobile-profile-bottom {
    padding-top: 0;
}

.about-left-image-container,
.about-right-image-container,
.about-mobile-image-container {
    border-radius: 100px;
    background: #e5e5e5;
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-left-image-container img,
.about-right-image-container img,
.about-mobile-image-container img {
    width: 200px;
}

.about-profile-item a {
    margin-left: 5px;
    margin-right: 5px;
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.about-profile-item a:hover {
    color: white;
    text-decoration: none;
}

#lokasi-gl {
    margin-top: 100px;
}

#timeline-gl {
    margin-top: 50px;
}

@media (max-width: 991.98px) {
    .header {
        padding-top: 80px;
    }

    .about {
        padding-bottom: 0;
    }

    .about-title {
        margin-bottom: 0;
    }

    #lokasi-gl {
        margin-top: 50px;
    }

    #timeline-gl {
        margin-top: 30px;
    }

    .header-subtitle {
        font-size: 16px;
    }
}

@media (max-width: 575.98px) {
    .header-title {
        font-size: 50px;
    }

    .header-button {
        font-size: 18px;
    }

    .header-button:hover {
        font-size: 20px;
    }
}

.about-grandlaunching-gradient path {
    fill: url('#about-grandlaunching-gradient');
}

#about-grandlaunching-gradient {
    --color-stop-1: #6753a8;
    --color-stop-3: #18c6ba;
}
</style>
