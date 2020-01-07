<template>
    <div>
        <div class="container">
            <v-app class="white">
                <v-row>
                    <v-col md="12" lg="12" xs="12">
                        <div class="announce">
                            <v-expansion-panels multiple flat tile>
                                <v-expansion-panel v-for="(item, i) in announcements" :key="i">
                                    <v-expansion-panel-header>{{ item.judul }}</v-expansion-panel-header>
                                    <v-expansion-panel-content>{{ item.konten }}</v-expansion-panel-content>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-col>
                </v-row>
            </v-app>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
    data: () => {
        return {
            announcements: []
        };
    },
    mounted() {

    }
};
</script>

<style></style>
