<template>
    <div class="container">
    <v-app class="white">
        <v-container>
        <v-row  dense justify="space-around" align="start">      
        <v-col
          v-for="(item, i) in items"
          :key="i"
          class="col-sm-12 col-lg-6 col-lg-6 col-xs-12"
        >
          <v-card
            max-width="500"
            outlined 
            class="the-container"
          > 
            <div class="d-flex flex-no-wrap justify-content-start text-left">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave-card">
                    <path fill="#E475B2" fill-opacity="1" d="M0,288L120,240C240,192,480,96,720,48C960,0,1200,0,1320,0L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
            
            </div>
             <v-avatar
                class="compe-avatar ma-3 mr-0 mb-6"
                size="115"
                tile
              >
                <v-img class="border border-dark" :src="item.src"></v-img>
              </v-avatar>

              <div class="justify-content-start">
                <v-card-title 
                  class="pt-1 title "
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle class="caption font-weight-medium text-justify"> {{item.artist}}</v-card-subtitle>
              </div>

            </div>

            <v-divider class="mt-0 mb-0 card-divier"></v-divider>

                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#13CEBB" rounded  outlined class="mr-2 daftar-button btn-block "  :to="item.link" >Daftar</v-btn>
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
          title: 'Grand Launching',
          artist: 'Grand Launching merupakan salah satu rangkaian acara dari JOINTS 2020. Bentuk kegiatan ini adalah seminar dan workshop dengan mengangkat tema besar “Society 5.0” yang difokuskan pada Apps Innovation.',
          link: '/dashboard/events/grandlaunching/register'
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'ITDay',
          artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ',
          link: '/dashboard/events/grandlaunching/register'
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'JointsCamp',
          artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptatum.',
          link: '/dashboard/events/grandlaunching/register'
        },
        
      ],
    }),

};
</script>

<style scoped>


.v-card:not(.v-sheet--tile):not(.v-card--shaped){
    border-radius: 18px;
    border: solid 6px;
    border-color: #E475B2;
}

.compe-avatar{
    border-radius: 18px;
    z-index: 2;
}

.border-dark{
    border-color : #94119F !important; 
     border-width: 6px !important;
}

.content-compe{
    position: relative;

    align-items:left;

}

.content-div {
    
    max-width: 500px;
    top: -30px;
    left: -78px;
    position: relative;
}


.subtitle-wrap{

    width: auto;
    display: inline-block;
    position: inherit;
    
}

.caption {
    color: #841749 !important;
}

.daftar-button{
    border: solid 3px;
    z-index: 3;
  
    
}

.card-divider{
    color: red;
}

.justify-content-start{
    z-index: 1;
}

.wave-card{
    position: absolute;
    float: left;
    z-index: 1;
    top: -1px;
    left: -450px;
   
}

.the-container{
    position: relative;
    overflow: hidden;
}

.daftar-button{
  padding-top: 5px !important;
}
</style>
