<template>
    <div>
        <section class="header">
            <b-container class="d-flex justify-content-center">
                <b-row>
                    <b-col cols="12">
                        <h1 class="header-title">
                            TECH TALK
                        </h1>
                        <br>
                        <p class="header-subtitle ml-auto mr-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit
                        </p>
                        <br>
                        <b-button class="header-button" variant="warning">
                            Yuk Daftar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <section class="about">
            <b-container class="d-flex align-items-center">
                <div class="about-wrapper">
                    <b-row>
                        <b-col cols="12" md="4">
                            <div class="img-wrapper w-1">
                                <div class="image-container">
                                    <img>
                                </div>
                                <span class="img-title">Pembicara 1</span>
                                <hr>
                                <span class="img-subtitle">Jabatan 2</span>
                            </div>
                            <div class="img-wrapper w-2 ml-auto">
                                <div class="image-container">
                                    <img>
                                </div>
                                <span class="img-title">Pembicara 2</span>
                                <hr>
                                <span class="img-subtitle">Jabatan 2</span>
                            </div>
                        </b-col>
                        <b-col cols="12" md="8" class="d-flex flex-column justify-content-center text-left about-desc">
                            <h2 class="about-title">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                            </h2>
                            <p class="about-subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco. nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                                in reprehenderit
                            </p>
                            <b-button class="about-button" variant="success" to="/">
                                Daftar
                            </b-button>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </section>
    </div>
</template>

<style scoped>
    *{
        transition: .3s ease-in-out !important;
    }

    .header{
        padding-top: 130px;
        min-height: 65vh;
        background-image: linear-gradient(-135deg, #82C9FB, #18CEBE);
    }

    .header-title{
        color: black !important;
        font-size: 80px;
        font-weight: 700;
    }

    .header-subtitle{
        color: white;
        max-width: 80%;
        margin-top: -30px;
        font-size: 20px;
    }

    .header-button{
        background-image: linear-gradient(90deg, #92ABFC, #3587E5) !important;
        margin-top: -40px;
        border-radius: 10px;
        color: white;
        border: none;
        font-size: 22px;
    }

    .header-button:hover{
        color: white;
        font-size: 25px;
    }

    .image-container{
        border-radius: 100px;
        background: #E5E5E5;
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
    }

    .about{
        padding-top: 50px;
        padding-bottom: 50px;
        background-image: linear-gradient(135deg, #82C9FB, #18CEBE);
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .img-wrapper{
        width: 200px;
    }

    .about-desc{
        padding-left: 50px;
        padding-right: 50px;
    }

    .about-title{
        color: white;
    }

    .about-subtitle{
        font-size: 20px;
        color: white;
        font-weight: 100;
    }
    
    .about-button{
        width: 140px;
        color: white;
        border: 1.5px solid white;
        background: transparent !important;
        border-radius: 15px;
        font-size: 25px;
        font-weight: 600;
    }

    .about-button:hover{
        color: #82C9FB;
        background: white !important;
        border: 1px solid white;
    }

    hr{
        margin: 0;
        width: 170px;
        margin-left: auto;
        margin-right: auto;
        border-color: white;
    }

    .img-title{
        font-weight: 600;
        color: white;
        font-size: 20px;
    }

    .img-subtitle{
        color: white;
        font-size: 20px;
    }
</style>
