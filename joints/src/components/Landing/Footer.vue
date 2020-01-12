<template>
    <div>
        <div class="wave-container">
            <svg
                :class="footerKind"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 196"
            >
                <defs>
                    <linearGradient :id="footerKind">
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
        <section :id="accessFrom" class="footer d-lg-block">
            <b-container>
                <b-row>
                    <b-col lg="6">
                        <div class="footer-title">
                            <h3>Contact Us</h3>
                        </div>
                        <div class="footer-content footer-contact">
                            <b-row>
                                <b-col lg="6" md="12" class="footer-logo">
                                    <img src="@/./assets/joints.png" alt="Image not found" />
                                </b-col>
                                <b-col lg="6" md="12" class="d-flex align-items-center footer-alamat-wrapper">
                                    <p class="footer-alamat">
                                        Sekertariat Himakom
                                        <br />
                                        FMIPA Sekip Utara
                                        <br />
                                        PO BOX BLS 21 Bulaksumur,
                                        <br />
                                        Yogyakarta 55281
                                        <br />
                                        Phone: 12345678910(ABCDE)
                                    </p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" cols="4" offset="4" offset-lg="0" class="d-flex justify-content-center align-items-center">
                                    <div class="footer-contact-item ml-auto mr-auto">
                                        <a href="/">I1</a>
                                    </div>
                                    <div class="footer-contact-item ml-auto mr-auto">
                                        <a href="/">I2</a>
                                    </div>
                                    <div class="footer-contact-item ml-auto mr-auto">
                                        <a href="/">I3</a>
                                    </div>
                                    <div class="footer-contact-item ml-auto mr-auto">
                                        <a href="/">I4</a>
                                    </div>
                                </b-col>
                                <b-col lg="6" md="12">
                                    <p class="footer-copyright">
                                        &copy; Copyright JOINTS 2020. All Rights
                                        Reserved
                                        <br />
                                        <b-button
                                            to="/grandlaunching"
                                            class="footer-button"
                                            variant="light"
                                            >Grand
                                            Launching&nbsp;-&nbsp;</b-button
                                        >
                                        <b-button
                                            to="/jointstalk"
                                            class="footer-button"
                                            variant="light"
                                            >Tech Talk&nbsp;-&nbsp;</b-button
                                        >
                                        <b-button
                                            to="/competitions"
                                            class="footer-button"
                                            variant="light"
                                            >Kompetisi</b-button
                                        >
                                    </p>
                                </b-col>
                            </b-row>
                        </div>
                    </b-col>
                    <b-col lg="3" class="d-none d-lg-block">
                        <div class="footer-title text-left">
                            <h3>Sponsorship</h3>
                        </div>
                        <div class="footer-content"></div>
                    </b-col>
                    <b-col lg="3" class="d-none d-lg-block">
                        <div class="footer-title text-left">
                            <h3>Media Partner</h3>
                        </div>
                        <div class="footer-content"></div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        footerKind: String,
        accessFrom: String
    }
};
</script>

<style>
.gradient-dashboard-footer path {
    fill: url('#gradient-dashboard-footer');
}

.gradient-competition-footer path {
    fill: url('#gradient-competition-footer');
}

.gradient-talk-footer path {
    fill: url('#gradient-talk-footer');
}

#gradient-dashboard-footer {
    --color-stop-1: #13cebb;
    --color-stop-3: #6c4da8;
}

#gradient-competition-footer {
    --color-stop-3: #bf5888;
    --color-stop-1: #efa0c9;
}

#gradient-talk-footer {
    --color-stop-1: #18cebe;
    --color-stop-3: #82c9fb;
}

#gradient-horizontal {
    --color-stop-1: #13cebb;
    --color-stop-3: #6b4ea8;
}

#dashboardNavbar {
    background-image: linear-gradient(90deg, #13cebb, #6c4da8);
}

.footer#competition {
    background-image: linear-gradient(-90deg, #bf5888, #efa0c9);
}

.footer#talk {
    background-image: linear-gradient(-90deg, #82c9fb, #18cebe) !important;
}

.footer#default {
    background-image: linear-gradient(135deg, #e475b2, #16cdbb);
}

.footer {
    color: white;
    padding: 20px 20px 0 20px;
}

.footer .footer-title {
    text-align: left;
}

.footer .footer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
}

.footer .footer-alamat {
    font-size: 16px;
    text-align: left;
    margin-bottom: 0;
}

.footer .footer-copyright {
    font-size: 14px;
    text-align: left;
    margin-bottom: 0;
}

.footer .footer-contact .row:nth-child(2) {
    margin-top: -30px;
}

.footer .footer-button {
    padding: 0;
    margin: 0;
    color: white;
    background: transparent;
    font-size: 14px;
    text-align: left;
    border: none;
}

.footer .footer-button:hover{
    background: transparent;
    color: #491fa7 !important;
}
 
.footer .footer-button:focus, .footer .footer-button:active  .footer .footer-button:active:focus{
    background: transparent !important;
    border: none;
    outline: none !important;
    box-shadow: none;
}

.footer .footer-contact .footer-contact-item a{
    color: white;
    text-decoration: none;
}

.footer .footer-contact .footer-contact-item a:hover{
    color: #F0F0F0;
    text-decoration: none;
}

.footer .footer-logo img{
    width: 100%;
}

@media (max-width: 991.98px) {
    .footer .footer-title {
        text-align: center !important;
    }

    .footer .footer-alamat {
        text-align: center !important;
    }

    .footer .footer-alamat-wrapper{
        justify-content: center;
        margin-bottom: 20px;
    }

    .footer .footer-copyright {
        text-align: center !important;
    }

    .footer .footer-logo img{
        width: 200px;
    }
}
</style>
