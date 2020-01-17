<template>
    <div class="competition-page">
        <Navbar accessFrom="competition" colorKind="gradient-competition">
        </Navbar>
        <section class="header">
            <b-container class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12">
                        <h1 class="header-title">
                            COMPETITION
                        </h1>
                        <br />
                        <p class="header-subtitle ml-auto mr-auto">
                            Kompetisi JOINTS 2020 mengajak teman-teman pelajar/mahasiswa untuk mengukur 
                            kemampuannya di beberapa bidang khusus seperti : Programming Competition 
                            Session, Capture The Flag, Data Mining, dan UX Design. Pengen tau seberapa 
                            hebat skill kamu dibanding teman-teman yang lain? Tunggu apa lagi, yuk ikut kompetisi JOINTS 2020!
                        </p>
                        <br />
                        <b-button class="header-button" variant="danger">
                            Yuk Daftar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <div class="wave-container">
            <svg
                class="header-competition-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient id="header-competition-gradient">
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

        <div class="wave-container competitions-top-wave">
            <svg
                class="competitions-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 300"
            >
                <defs>
                    <linearGradient id="competitions-gradient">
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
        <section class="competition-list">
            <b-container class="d-flex justify-content-center flex-column">
                <CompetitionList></CompetitionList>
            </b-container>
        </section>
        <div class="wave-container competitions-bottom-wave">
            <svg
                class="competitions-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient id="competitions-gradient">
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

        <section id="timeline-pcs">
            <Timeline accessFrom="PCS" title="Timeline Programming Competition Session"></Timeline>
        </section>

        <section id="timeline-ctf">
            <Timeline accessFrom="CTF" title="Timeline Capture The Flag"></Timeline>
        </section>

        <section id="timeline-dm">
            <Timeline accessFrom="DM" title="Timeline Data Mining"></Timeline>
        </section>

        <section id="timeline-ux">
            <Timeline accessFrom="UX" title="Timeline UX Design Competition"></Timeline>
        </section>

        <div class="wave-container faq-top-wave">
            <svg
                class="competitions-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 200"
            >
                <defs>
                    <linearGradient id="competitions-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,170.7C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>
        <section class="faq">
            <b-container class="d-flex justify-content-center flex-column">
                <h3 class="faq-title">
                    Frequently Asked Question
                </h3>
                <div class="faq-content">
                    <Faq accessFrom="competition"></Faq>
                </div>
            </b-container>
        </section>
        <div class="wave-container faq-bottom-wave">
            <svg
                class="competitions-gradient"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 80 1440 320"
            >
                <defs>
                    <linearGradient id="competitions-gradient">
                        <stop offset="0%" stop-color="var(--color-stop-1)" />
                        <stop offset="100%" stop-color="var(--color-stop-3)" />
                    </linearGradient>
                </defs>
                <path
                    fill=""
                    fill-opacity="1"
                    d="M0,192L80,202.7C160,213,320,235,480,240C640,245,800,235,960,208C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:#007acc;"
                ></path>
            </svg>
        </div>
        <Footer
            accessFrom="competition"
            footerKind="gradient-competition-footer"
        ></Footer>
    </div>
</template>

<script>
import Faq from '@/components/Landing/Faq.vue';
import CompetitionList from '@/components/Landing/CompetitionList.vue';
import Navbar from '@/components/Landing/Navbar.vue';
import Footer from '@/components/Landing/Footer.vue';
import Timeline from '@/components/Landing/Timeline.vue';

export default {
    name: 'compe',
    components: {
        Faq,
        CompetitionList,
        Navbar,
        Footer,
        Timeline
    }
};
</script>

<style>
* {
    transition: 0.3s ease-in-out !important;
}

.competition-page .header {
    padding-top: 130px;
    min-height: 65vh;
    background-image: linear-gradient(-90deg, #a729a4, #e273b1);
}

.competition-page .header-title {
    color: white !important;
    font-size: 80px;
    font-weight: 700;
}

.competition-page .header-subtitle {
    color: white;
    max-width: 80%;
    margin-top: -30px;
    font-size: 20px;
}

.competition-page .header-button {
    background-image: linear-gradient(90deg, #f6068b, #c9213d) !important;
    margin-top: -40px;
    border-radius: 10px;
    color: white;
    border: none;
    font-size: 22px;
}

.competition-page .header-button:hover {
    color: white;
    font-size: 25px;
}

.competition-page .faq-title {
    margin-bottom: 30px;
    color: white;
}

.competition-page .competition-list {
    background-image: linear-gradient(90deg, #a729a4, #e273b1);
}

.competition-page .faq {
    background-image: linear-gradient(90deg, #a729a4, #e273b1);
}

.competition-page .header-competition-gradient path {
    fill: url('#header-competition-gradient');
}

.competition-page #header-competition-gradient {
    --color-stop-3: #a729a4;
    --color-stop-1: #e273b1;
}

.competition-page .competitions-gradient path {
    fill: url('#competitions-gradient');
}

.competition-page #competitions-gradient {
    --color-stop-1: #a729a4;
    --color-stop-3: #e273b1;
}

@media (max-width: 991.98px){
    .competition-page .header{
        padding-top: 80px;
    }

    .competition-page .header-subtitle{
        font-size: 16px;
    }
}

@media (max-width: 575.98px) {
    .competition-page .header-title{
        font-size: 50px;
    }

    .competition-page .header-button{
        font-size: 18px;
    }

    .competition-page .header-button:hover{
        font-size: 20px;
    }
}

#timeline-pcs{
    display: block;
}

#timeline-ctf{
    display: none;
}

#timeline-dm{
    display: none;
}

#timeline-ux{
    display: none;
}
</style>
