<template>
    <div class="container">
        <v-app class="white">
            <v-container>
                <v-row dense justify="space-around" align="start">
                    <v-col
                        v-for="(item, i) in items"
                        :key="i"
                        class="col-sm-12 col-lg-6 col-lg-6 col-xs-12"
                    >
                        <v-card max-width="500" outlined>
                            <div
                                class="d-flex flex-no-wrap justify-content-start text-left"
                            >
                                <v-avatar
                                    class="compe-avatar ma-3 mr-0 mb-6"
                                    size="115"
                                    tile
                                >
                                    <v-img
                                        class="border border-dark"
                                        :src="item.src"
                                    ></v-img>
                                </v-avatar>

                                <div class="justify-content-start">
                                    <v-card-title
                                        class="pt-1 title "
                                        v-text="item.title"
                                    ></v-card-title>

                                    <v-card-subtitle
                                        class="caption font-weight-medium text-justify"
                                    >
                                        {{ item.artist }}</v-card-subtitle
                                    >
                                </div>
                            </div>

                            <v-divider
                                class="mt-0 mb-0 card-divier"
                            ></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="#13CEBB"
                                    rounded
                                    outlined
                                    class="mr-2 daftar-button btn-block"
                                    >Daftar</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                title: 'Hackathon',
                artist:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptatum. maMinima quisquam libero dolorem blanditiis sequi eius'
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Datathon',
                artist:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae '
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Wathon',
                artist:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptatum.'
            },
            {
                color: '#952175',
                src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
                title: 'Muthon',
                artist:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptat'
            }
        ]
    })
};
</script>

<style scoped>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 18px;
    border: solid 6px;
    border-color: #e475b2;
}

.compe-avatar {
    border-radius: 18px;
}

.border-dark {
    border-color: #94119f !important;
    border-width: 6px !important;
}

.content-compe {
    position: relative;

    align-items: left;
}

.content-div {
    max-width: 500px;
    top: -30px;
    left: -78px;
    position: relative;
}

.subtitle-wrap {
    width: auto;
    display: inline-block;
    position: inherit;
}

.caption {
    color: #841749 !important;
}

.daftar-button {
    border: solid 3px;
}

.card-divider {
    color: red;
}
</style>
