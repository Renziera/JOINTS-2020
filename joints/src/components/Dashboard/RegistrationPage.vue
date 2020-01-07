<template>
    <div>
        <v-container>
            <v-app class="white">
            <v-row>
                
              <v-col md='7' lg='8' >

                  <v-card
                      outlined
                      class="mx-auto px-4 pt-4 mb-5"

                      >

                      <h4 style="text-align: left"> Data Ketua : </h4>
                  <div>
                      
                      <div class="subtitle">Nama Ketua:</div>
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

                      <div class="subtitle">Email Ketua:</div>
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

                      <div class="subtitle">No Hp. Ketua: </div>
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
                  </div>
                  
                  </v-card>

                  
             
                  <v-card
                      outlined
                      class="mx-auto px-4 pt-4"
                      max-width="800"
                      >
                  <div>
                      
                      <div class="subtitle">Nama Ketua:</div>
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

                      <div class="subtitle">Email Ketua:</div>
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

                      <div class="subtitle">No Hp. Ketua: </div>
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
                  </div>  
                  </v-card>
                  
              </v-col>

              <v-co md='4' lg='4' style="border-style: solid; " >
              <div >
                <h4> Halo </h4>
              </div>
              </v-co>
 
          </v-row>


          </v-app>
      
      </v-container>

        

   </div>
</template>

<script>
export default {
    name: 'Registration',
    props: ['section'],
    
}
</script>

<style>
    
</style>