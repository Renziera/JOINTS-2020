<template>
    <div class="competitionlist-component">
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    Champion
                                    <br />
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br />
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br />
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    Champion
                                    <br />
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br />
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br />
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    Champion
                                    <br />
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br />
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br />
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit
                        </p>
                        <h4 class="list-detail-title text-left">
                            Prize:
                        </h4>
                        <div class="list-detail">
                            <div class="list-prizes">
                                <div class="first-place">
                                    iCohanpm
                                    <br />
                                    Rp10.000.000
                                </div>
                                <div class="second-place">
                                    Runner Up
                                    <br />
                                    Rp8.000.000
                                </div>
                                <div class="third-place">
                                    Third place
                                    <br />
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
    name: 'CompetitionList',
    data() {
        return {};
    }
};
</script>

<style>
.competitionlist-component .card {
    border: none;
    border-radius: 0;
    background: transparent;
}

.competitionlist-component .card .card-header {
    background: white;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 24px;
    padding-top: 0;
}

.competitionlist-component .card .tab-content {
    padding-left: 20px;
    background-image: linear-gradient(90deg, #e750a4, #fc9ed2);
}

.competitionlist-component .card .nav-item .nav-link {
    color: #13cebb;
    border-radius: 0;
    padding-top: 20px;
    padding-bottom: 20px;
}

.competitionlist-component .card .nav-item .nav-link.active {
    color: black;
    background: #e750a4;
}

.competitionlist-component #__BVID__9 {
    border: none;
    border-radius: 0;
}

.competitionlist-component .list-title {
    color: black;
}

.competitionlist-component .list-subtitle {
    color: white;
}

.competitionlist-component .list-detail-title {
    color: white;
}

.competitionlist-component .list-detail {
    display: flex;
    align-items: stretch;
    justify-content: left;
}

.competitionlist-component .first-place,
.competitionlist-component .second-place,
.competitionlist-component .third-place {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    width: 150px;
}

.competitionlist-component .first-place {
    background-image: linear-gradient(135deg, #f8f187, #fec111);
    color: black;
    font-weight: 600;
}

.competitionlist-component .second-place {
    background-image: linear-gradient(135deg, #f0f0f0, #a2a2a2);
    color: black;
    font-weight: 600;
    margin-left: 15px;
}

.competitionlist-component .third-place {
    background-image: linear-gradient(135deg, #faad51, #fe7e0c);
    color: black;
    font-weight: 600;
    margin-left: 15px;
}

.competitionlist-component .list-prizes {
    display: flex;
}

.competitionlist-component .list-buttons button {
    display: block !important;
    width: 200px;
    background: rgba(0, 0, 0, 0.5) !important;
    color: white !important;
    font-size: 20px;
    border: none;
    border-radius: 15px !important;
    margin-left: 20px !important;
}

.competitionlist-component .list-button:nth-child(1) {
    margin-bottom: 7px;
}

.competitionlist-component .list-button:nth-child(2) {
    margin-top: 7px;
}

.competitionlist-component .list-buttons button:hover {
    background: rgba(0, 0, 0, 0.8) !important;
    color: white !important;
}
</style>
