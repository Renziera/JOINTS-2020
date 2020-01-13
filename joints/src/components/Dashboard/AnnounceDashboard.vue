<template>
    <div class="container">
        <v-app class="white">

             <v-row align="start">

                <v-expansion-panels
                :accordion="accordion"
                :multiple="multiple"
                :flat="flat"
             
            
                >
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header>Item</v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        
         <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            ></v-img>

            <v-card-title>
            Top western road trips
            </v-card-title>

            <v-card-subtitle>
            1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn
                color="purple"
                text
            >
                Explore
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="show = !show"
            >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
            </v-card-actions>

            <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>  
           
          
            

       
       </v-app>
    
  
    </div>
</template>

<script>



export default {

    data: () => ({
        items: [
            {
                id: 1,
                title: 'Pengumuman 1',
                content: 'lorem ipsum dolor siamet'
            },
             {
                id: 2,
                title: 'Pengumuman 1',
                content: 'lorem ipsum dolor siamet'
            },
             {
                id: 3,
                title: 'Pengumuman 1',
                content: 'lorem ipsum dolor siamet'
            }
        ],
        accordion: true,
 

        multiple: true,
        flat: true,

    

    })
}
</script>

<style>
.v-expansion-panels__content {
    box-shadow: none !important;
}


.v-item-group__content {
    box-shadow: none !important;
}

.v-expansion-panel::before {
  box-shadow: none;
}

</style>
