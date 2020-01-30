<template>
    <div class="camp-page">
        <Navbar accessFrom="camp" colorKind="gradient-camp"></Navbar>
        <section class="header">
            <b-container class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12">
                        <h1 class="header-title">
                            Joints Camp
                        </h1>
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
                class="header-camp-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 200"
            >
                <defs>
                    <linearGradient id="header-camp-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,160L120,138.7C240,117,480,75,720,64C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>

        <section class="about">
            <b-container>
                <b-row>
                    <b-col
                        lg="3"
                        cols="12"
                        class="d-flex align-items-center justify-content-center"
                    >
                        <img
                            src="@/assets/camp.png"
                            alt="JOINTS 2020"
                            class="about-image"
                        />
                    </b-col>
                    <b-col
                        lg="8"
                        cols="12"
                        class="d-flex flex-column justify-content-center about-desc"
                    >
                        <h3 class="about-title">
                            Apa itu Joints Camp?
                        </h3>
                        <p class="about-subtitle">
                            JOINTS Camp merupakan suatu pelatihan atau bootcamp
                            dengan tema Web Development. Diselenggarakan selama
                            4 minggu dengan pertemuan intensif 1 kali di setiap
                            minggu nya, pelatihan ini terkonsep dari pembentukan
                            mindset, pemahaman alur, pengembangan perangkat
                            lunak, hingga cara membangun sebuah produk digital.
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <div class="wave-container mentor-top-wave">
            <svg
                class="mentor-camp-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 200"
            >
                <defs>
                    <linearGradient id="mentor-camp-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,149.3C840,160,960,160,1080,149.3C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>
        <section class="mentor">
            <b-container>
                <div class="mentor-wrapper">
                    <h2 class="mentor-title">
                        Mentor
                    </h2>
                    <b-row class="mentor-row-top">
                        <b-col cols="12" lg="6" class="mentor-left">
                            <div class="mentor-profile-wrapper">
                                <div class="mentor-image-wrapper">
                                    <img
                                        src="@/assets/Ardian-Franindo.jpg"
                                        class="mentor-image"
                                    />
                                </div>
                                <div class="mentor-profile">
                                    <span class="mentor-week">
                                        Minggu ke-1
                                    </span>
                                    <br>
                                    <span class="mentor-name">
                                        Bapak Lorem Ipsum
                                    </span>
                                    <br />
                                    <span class="mentor-job">
                                        "Apps Innovation"
                                    </span>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12" lg="6" class="mentor-right">
                            <div class="mentor-profile-wrapper">
                                <div class="mentor-image-wrapper">
                                    <img
                                        src="@/assets/Ardian-Franindo.jpg"
                                        class="mentor-image"
                                    />
                                </div>
                                <div class="mentor-profile">
                                    <span class="mentor-week">
                                        Minggu ke-2
                                    </span>
                                    <br>
                                    <span class="mentor-name">
                                        Ibu Dolor Sit Amet
                                    </span>
                                    <br />
                                    <span class="mentor-job">
                                        "UX Design Application"
                                    </span>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mentor-row-bottom">
                        <b-col cols="12" lg="6" class="mentor-left">
                            <div class="mentor-profile-wrapper">
                                <div class="mentor-image-wrapper">
                                    <img
                                        src="@/assets/Ardian-Franindo.jpg"
                                        class="mentor-image"
                                    />
                                </div>
                                <div class="mentor-profile">
                                    <span class="mentor-week">
                                        Minggu ke-3
                                    </span>
                                    <br>
                                    <span class="mentor-name">
                                        Bapak Lorem Ipsum
                                    </span>
                                    <br />
                                    <span class="mentor-job">
                                        "Apps Innovation"
                                    </span>
                                </div>
                            </div>
                        </b-col>
                        <b-col cols="12" lg="6" class="mentor-right">
                            <div class="mentor-profile-wrapper">
                                <div class="mentor-image-wrapper">
                                    <img
                                        src="@/assets/Ardian-Franindo.jpg"
                                        class="mentor-image"
                                    />
                                </div>
                                <div class="mentor-profile">
                                    <span class="mentor-week">
                                        Minggu ke-4
                                    </span>
                                    <br>
                                    <span class="mentor-name">
                                        Ibu Dolor Sit Amet
                                    </span>
                                    <br />
                                    <span class="mentor-job">
                                        "UX Design Application"
                                    </span>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
        <div class="wave-container mentor-bottom-wave">
            <svg
                class="mentor-camp-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 250"
            >
                <defs>
                    <linearGradient id="mentor-camp-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,192L60,170.7C120,149,240,107,360,90.7C480,75,600,85,720,101.3C840,117,960,139,1080,138.7C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>

        <section id="timeline-camp">
            <Timeline accessFrom="Camp" title="Timeline"></Timeline>
        </section>

        <section class="faq">
            <b-container class="d-flex justify-content-center flex-column">
                <h3 class="faq-title">
                    Frequently Asked Question
                </h3>
                <div class="faq-content">
                    <Faq accessFrom="camp"></Faq>
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
import Timeline from '@/components/Landing/Timeline.vue';
import Faq from '@/components/Landing/Faq.vue';

export default {
    components: {
        Navbar,
        Footer,
        Timeline,
        Faq
    }
};
</script>

<style scoped>
.header {
    padding-top: 130px;
    background-image: linear-gradient(90deg, #6753a8, #18c6ba);
}

.header-title {
    color: white;
    font-size: 80px;
    font-weight: 700;
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

.about-title {
    color: #00cab6;
}

.about-image {
    width: 100%;
}

.about-desc {
    text-align: left;
}

.mentor {
    background-image: linear-gradient(-90deg, #6753a8, #18c6ba);
}

.mentor-row-top{
    margin-bottom: 50px;
}

.mentor-profile-wrapper {
    width: 200px;
}

.mentor-left .mentor-profile-wrapper {
    margin-left: auto;
    margin-right: 80px;
}

.mentor-right .mentor-profile-wrapper {
    margin-left: 80px;
    margin-right: auto;
}

.mentor-image-wrapper {
    background: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
}

.mentor-image {
    width: 200px;
}

.mentor-profile {
    text-align: center;
    margin-top: 10px;
}

.mentor-title {
    color: white;
    margin-bottom: 40px;
}

.mentor-week{
    color: white;
    font-size: 14px;
}

.mentor-name {
    font-weight: 500;
    font-size: 22px;
    color: white;
}

.mentor-job {
    font-weight: 300;
    font-size: 18px;
    color: #444444;
}

.faq {
    margin-top: 50px;
}

.faq-title {
    margin-bottom: 30px;
    color: #707070;
}

@media (max-width: 991.98px) {
    .header {
        padding-top: 80px;
    }

    .about-image {
        width: 200px;
    }

    .about-desc {
        text-align: center;
    }

    .mentor-left .mentor-profile-wrapper {
        margin-left: auto;
        margin-right: auto;
    }

    .mentor-right .mentor-profile-wrapper {
        margin-left: auto;
        margin-right: auto;
    }

    .faq {
        margin-top: 30px;
    }

    .mentor-title {
        color: white;
        margin-bottom: 20px;
    }

    .mentor-row-top .mentor-left{
        margin-bottom: 10px;
    }

    .mentor-row-bottom .mentor-left{
        margin-bottom: 10px;
    }

    .mentor-row-top{
        margin-bottom: 10px;
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

.header-camp-gradient path {
    fill: url('#header-camp-gradient');
}

#header-camp-gradient {
    --color-stop-1: #6753a8;
    --color-stop-3: #18c6ba;
}

.mentor-camp-gradient path {
    fill: url('#mentor-camp-gradient');
}

#mentor-camp-gradient {
    --color-stop-3: #6753a8;
    --color-stop-1: #18c6ba;
}

#mentor-camp-gradient {
    --color-stop-3: #6753a8;
    --color-stop-1: #18c6ba;
}
</style>
