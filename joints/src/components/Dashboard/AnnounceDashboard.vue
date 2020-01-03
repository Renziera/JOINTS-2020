<template>
    <div>
        <h4>Tab announcement</h4>
        <div class="container">
        <v-app class="white">
    

            <v-row >
                <v-col md="12" lg="12" xs="12">
                
                    <div class="announce">
                        <v-expansion-panels
                            v-model="panel"
                            multiple
                            flat 
                            tile 

                    
                            >
                                <v-expansion-panel
                                    v-for="(item,i) in items"
                                    :key="i"
                                >
                                    <v-expansion-panel-header
                                    
                                    
                                    > Header {{ item }} </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </v-expansion-panel-content>
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
import 'firebase/firestore';

export default {
    data: () => {
        return {
            announcements: [],
            panel: [],
            items: 5,
        };
    },
    mounted() {
        firebase
            .firestore()
            .collection('announcement')
            .orderBy('waktu', 'desc')
            .onSnapshot(snapshot => {
                this.announcements = [];
                snapshot.forEach(doc => this.announcements.push(doc.data()));
            });
    }
};
</script>

<style></style>
