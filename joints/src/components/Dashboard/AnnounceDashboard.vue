<template>
    <div>
        <v-app class="white">
        <v-container>
          <v-row class="flex-column">
            <v-col 
              v-for="i in 4"
              :key="i">
              <v-card
              class=" display-block"
              >
              
              <div >
                <div class=" mx-auto pl-2">
              <v-card-actions>
                <v-card-title class="pa-0">
                Pengumunan Pemenang kompetisi {{pengumuman.judul}}
                </v-card-title>

                <v-spacer></v-spacer>

              <v-btn
                  icon
                  @click="show = !show"
              >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>

              </v-card-actions>
                </div>
              <v-expand-transition>
              <div v-show="show">
                  <v-divider class="my-0"></v-divider>
                  <v-card-text class="text-justify" >
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam, pariatur ipsa eaque eos cupiditate similique totam culpa atque ad omnis neque minus aspernatur ipsum? Rerum amet tempora asperiores cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto atque quibusdam minima asperiores, excepturi cupiditate sit! Rem nemo nostrum praesentium autem voluptas iste, culpa, non facere dolores qui nisi inventore.
                  </v-card-text>
              </div>
              </v-expand-transition>
              </div>
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
        show: false,
        pengumuman: [ {judul: 'Judul', konten: ' '}]

    

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
