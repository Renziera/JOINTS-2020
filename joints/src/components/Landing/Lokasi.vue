<template>
    <div class="lokasi-component">
        <b-container>
            <b-row>
                <b-col
                    cols="12"
                    lg="6"
                    offset-lg="3"
                    class="d-flex align-items-center justify-content-center flex-column"
                >
                    <h3 class="lokasi-title">
                        Lokasi
                    </h3>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Sinergi%20gejayan&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                            >
                            </iframe>
                        </div>
                    </div>
                    <p class="lokasi-subtitle">
                        <b>Sinergi coworking space, </b>Jl. Cenderawasih No.32b,
                        Mrican, Demangan, Kec. Depok, Kabupaten Sleman, Daerah
                        Istimewa Yogyakarta 55281
                    </p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style>
.mapouter {
    position: relative;
    text-align: right;
    height: 500px;
    width: 600px;
}
.gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 500px;
    width: 600px;
}

.gmap_canvas iframe {
    width: 600px;
    height: 500px;
}

/*
.mapouter{
    position:relative;
    text-align:center;
    width:100%;
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
}*/
</style>

<style scoped>
.lokasi-title {
    color: #707070;
    margin-bottom: 30px;
}

.lokasi-subtitle {
    margin-top: 25px;
    margin-bottom: 0;
}

@media (max-width: 767.98px) {
    .mapouter {
        position: relative;
        text-align: right;
        height: 400px;
        width: 500px;
    }
    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 400px;
        width: 500px;
    }

    .gmap_canvas iframe {
        width: 500px;
        height: 400px;
    }
}

@media (max-width: 575.98px) {
    .mapouter {
        position: relative;
        text-align: right;
        height: 400px;
        width: 100%;
    }
    .gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 400px;
        width: 100%;
    }

    .gmap_canvas iframe {
        width: 100%;
        height: 400px;
    }
}
</style>
