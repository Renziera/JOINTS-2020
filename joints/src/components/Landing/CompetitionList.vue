<template>
    <div>
        <b-card no-body>
            <b-tabs pills card vertical justified>
                <b-tab>
                    <template v-slot:title>
                        Title 1
                    </template>
                    <b-card-text>
                        <h2 class="list-title text-left">
                            Programming Competition
                        </h2>   
                        <p class="list-subtitle text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    Champion
                                    <br>
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br>
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br>
                                    Rp6.000.000
                                </div>
                            </div>
                            <div class="list-buttons">
                                <b-button class="list-button" variant="warning">
                                    Daftar
                                </b-button>
                                <b-button class="list-button" variant="warning">
                                    Guide Book
                                </b-button>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        Title 2
                    </template>
                    <b-card-text>
                        <h2 class="list-title text-left">
                            Programming Competition
                        </h2>
                        <p class="list-subtitle text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    Champion
                                    <br>
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br>
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br>
                                    Rp6.000.000
                                </div>
                            </div>
                            <div class="list-buttons">
                                <b-button class="list-button" variant="warning">
                                    Daftar
                                </b-button>
                                <b-button class="list-button" variant="warning">
                                    Guide Book
                                </b-button>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        Title 3
                    </template>
                    <b-card-text>
                        <h2 class="list-title text-left">
                            Programming Competition
                        </h2>
                        <p class="list-subtitle text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    Champion
                                    <br>
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br>
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br>
                                    Rp6.000.000
                                </div>
                            </div>
                            <div class="list-buttons">
                                <b-button class="list-button" variant="warning">
                                    Daftar
                                </b-button>
                                <b-button class="list-button" variant="warning">
                                    Guide Book
                                </b-button>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
                <b-tab>
                    <template v-slot:title>
                        Title 4
                    </template>
                    <b-card-text>
                        <h2 class="list-title text-left">
                            Programming Competition
                        </h2>
                        <p class="list-subtitle text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                            in reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    iCohanpm
                                    <br>
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br>
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br>
                                    Rp6.000.000
                                </div>
                            </div>
                            <div class="list-buttons">
                                <b-button class="list-button" variant="warning">
                                    Daftar
                                </b-button>
                                <b-button class="list-button" variant="warning">
                                    Guide Book
                                </b-button>
                            </div>
                        </div>
                    </b-card-text>
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: "CompetitionList",
        data() {
            return {
                
            }
        }
    }
</script>

<style>

    #__BVID__9{
        border: none;
        border-radius: 0;
    }

    #__BVID__9__BV_tab_controls_{
        padding-left: 0;
        padding-right: 0;
        margin-left: 50px;
        margin-right: 50px;
        background: transparent;
        justify-content: center;
    }

    #__BVID__9__BV_tab_controls_ li{
        background: transparent;
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
    }

    #__BVID__9__BV_tab_controls_ li a{
        background: transparent;
        border-bottom-right-radius: 50px;
        border-top-right-radius: 50px;
        color: white;
    }

    #__BVID__9__BV_tab_controls_ li .active{
       background: white;
       color: black;
       border-radius: 50px;
    }

    .list-title{
        color: black;
    }

    .list-subtitle{
        color: white;
    }

    .list-detail-title{
        color: white;
    }

    .list-detail{
        display: flex;
        align-items: stretch;
        justify-content: left;
    }

    .first-place, .second-place, .third-place{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        width: 150px;
    }

    .first-place{
        background-image: linear-gradient(135deg, #F8F187, #FEC111);
        color: black;
        font-weight: 600;
    }

    .second-place{
        background-image: linear-gradient(135deg, #F0F0F0, #A2A2A2);
        color: black;
        font-weight: 600;
        margin-left: 15px;
    }

    .third-place{
        background-image: linear-gradient(135deg, #FAAD51, #FE7E0C);
        color: black;
        font-weight: 600;
        margin-left: 15px;
    }

    .list-prizes{
        display: flex;
    }

    .list-buttons button{
        display: block !important;
        width: 200px;
        background: rgba(0, 0, 0, 0.5) !important;
        color: white !important;
        font-size: 20px;
        border: none;
        border-radius: 15px !important;
        margin-left: 20px !important;
    }

    .list-button:nth-child(1){
        margin-bottom: 7px;
    }

    .list-button:nth-child(2){
        margin-top: 7px;
    }

    .list-buttons button:hover{
        background: rgba(0, 0, 0, 0.8) !important;
        color: white !important;
    }

</style>