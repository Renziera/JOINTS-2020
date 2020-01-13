<template>
    <div>

        <v-container>
            <v-app class="white ">
            <v-row class="d-flex align-content-start">

                <v-col cols='12' class="pb-0 mb-0 profil-team-title">
                      <h4 style="text-align: left" class="mb-0 pb-0"> Profil Anda: </h4>
                      <div class="subtitle mt-1 ml-0 subtitle-daftar">Lengkapi Profil Anda:</div>
         
                </v-col>
                
              <v-col md='8' lg='8' xs='12' sm='12' class="col-xs-12 align-self-start" >
                  <v-card
                      outlined
                      class="mx-auto px-4 pt-4 mb-5 pt-0 regis-card"
                      > 
                      <div class="subtitle">Nama Tim:</div>
                       <v-text-field
                          class="mt-1 pb-0"
                          ref="name"
                          v-model="name"
                          :rules="[
                              () => !!name || 'This field is required'
                          ]"
                          :error-messages="errorMessages"
                          required
                          outlined
                          dense
                          placeholder="Nama"
                          @update:error="updateError()"
                      ></v-text-field>

                      <div class="subtitle">Universitas/Sekolah:</div>
                      <v-text-field
                          class="mt-1"
                          ref="name"
                          v-model="name"
                          :rules="[
                              () => !!name || 'This field is required'
                          ]"
                          :error-messages="errorMessages"
                          required
                          outlined
                          dense
                          placeholder="Nama"
                          @update:error="updateError()"
                      ></v-text-field>
                    
                    <div class="subtitle">Jumlah Anggota:</div>
                    <div>
                      <v-autocomplete
                        dense
                        placeholder="Nama"
                        outlined
                        :items="components"
                        ></v-autocomplete>
                    </div>
                    </v-card>

                  
              </v-col>


              <v-col class="col-sm-12 col-lg-4 col-xs-12 col-md-4 " md='4' lg='4' xs='12' sm='12' >

                <v-card
                outlined
                class="mx-4 ml-0 "
                min-width="300"
                >
                <v-container class="">

                    <v-card-title class="title pl-0 pt-0 "> Pembayaran </v-card-title>

                     <v-divider class="mt-0 mb-0 card-divider"></v-divider>
                        <p class="justify-left">Jumlah 2 orang ya </p> 
                    
                     <v-divider class="mt-0 mb-0 card-divider"></v-divider>
                    <div class="d-flex flex-no-wrap">
                        <v-card-title class="title pl-0 ">Total harga: </v-card-title><v-spacer></v-spacer> 
                        <v-card-title class="title  ">$12</v-card-title>
                    </div>

                    <v-divider class="mt-0 mb-0 card-divider"></v-divider>
                    <p>()Saya menyutujui semua ketentuan dan persyaratan yang diberikan </p>

                    <v-divider class="mt-0 mb-0 card-divider"></v-divider>

                </v-container >
                <v-card-actions class="pt-0"> 
                    <v-btn color="#13CEBB" rounded  outlined class="mt-0 daftar-button btn-block" min-width="150" >Daftar</v-btn>
                </v-card-actions>
                
                </v-card>

              </v-col>
 
          </v-row>


          </v-app>
      
      </v-container>

        

   </div>
</template>

<script>
export default {
    name: 'Registration',
    props: ['section'],
    data () {
      return {
        components: [
          1,2,3
        ],
      }
    }   
}
</script>

<style>

.v-card--outlined {
    border-radius: 18px;
    border: solid 6px;
    border-color: #E475B2;
}    

.theme--light.v-card.v-card--outlined{
    border: solid 6px;
    border-color: #E475B2;
     border-radius: 18px;
}
.v-text-field fieldset {
    border-radius: 5px;
}

.profil-team-title{
    top: 2px;
}

.subtitle-daftar{
    font-size: 16px;
}


</style>