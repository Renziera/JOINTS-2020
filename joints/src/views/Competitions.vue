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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
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

        <section class="competition-list">
            <b-container class="d-flex justify-content-center flex-column">
                <CompetitionList></CompetitionList>
            </b-container>
        </section>
        <section class="faq">
            <b-container class="d-flex justify-content-center flex-column">
                <h5 class="faq-title">
                    Frequently Asked Question
                </h5>
                <div class="faq-content">
                    <Faq></Faq>
                </div>
            </b-container>
        </section>
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

export default {
    name: 'compe',
    components: {
        Faq,
        CompetitionList,
        Navbar,
        Footer
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
    background-image: linear-gradient(90deg, #bf5888, #efa0c9);
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

.competition-page .faq {
    margin-top: 10px;
}

.competition-page .faq-title {
    font-weight: 600;
    margin-bottom: 10px;
}

.competition-page .competition-list {
    background-image: linear-gradient(90deg, #e750a4, #e750a4);
    background-repeat: no-repeat;
    background-position: top left;
    background-size: 50%;
    background-color: #fc9ed2;
    margin-top: 30px;
}

.competition-page .competition-list .container {
    padding-top: 0;
    padding-bottom: 0;
}

.competition-page .header-competition-gradient path {
    fill: url('#header-competition-gradient');
}

.competition-page #header-competition-gradient {
    --color-stop-1: #bf5888;
    --color-stop-3: #efa0c9;
}

@media (max-width: 575.98px) {
    .competition-page .header-title{
        font-size: 50px;
    }

    .competition-page .header-subtitle{
        font-size: 18px;
    }

    .competition-page .header-button{
        font-size: 16px;
    }

    .competition-page .header-button:hover{
        font-size: 20px;
    }
}
</style>
