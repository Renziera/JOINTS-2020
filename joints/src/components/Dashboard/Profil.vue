<template>
    <div> 
        
       
 
        <v-container>

        <v-app class="white">
        
        
        
        <v-row>
                    <v-col md="6" lg="6" xs="12">
                          
                        
                          <div>
                              <div class="subtitle"> Name: </div>
                              <v-text-field class="mt-1"
                                ref="name"
                                v-model="name"
                                :rules="[() => !!name || 'This field is required']"
                                :error-messages="errorMessages"
                                required
                                outlined
                                dense

                                placeholder="Nama"
                                
                                @update:error="updateError()"
                              ></v-text-field>
                          </div>
                        
                          <div class="subtitle"> Alamat: </div>
                          <v-text-field
                            ref="address"
                            :rules="[
                              () => !!address || 'This field is required',
                              () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                              addressCheck,
      
                            ]"
                            v-model="address"
                            
                            counter="25"
                            required
                            outlined
                            placeholder="Email"
                          ></v-text-field>

                          <div class="subtitle"> Nomor Handphone: </div>
                          <v-text-field
                            ref="city"
                            :rules="[() => !!city || 'This field is required', addressCheck]"
                            v-model="city"
                            
                            required 
                             outlined
                            placeholder="No. Handphone"
                          ></v-text-field>

                          <div class="subtitle"> Universitas/Sekolah: </div>
                          <v-text-field
                            ref="state"
                            v-model="state"
                            :rules="[() => !!state || 'This field is required']"
                            
                            required
                            outlined
                            placeholder="Universitas/Sekolah"
                          ></v-text-field>


                          <div class="subtitle"> Name: </div>
                          <v-text-field
                            ref="zip"
                            :rules="[() => !!zip || 'This field is required']"
                            v-model="zip"
                          
                            outlined
                            placeholder="Placeholder"
                          ></v-text-field>

                          <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            full-width
                            max-width="290px"
                            min-width="290px"
                          >
                            <template v-slot:activator="{ on }">
                              <v-text-field
                                v-model="dateFormatted"
                                label="Date"
                                hint="MM/DD/YYYY format"
                                persistent-hint
                                prepend-icon="event"
                                @blur="date = parseDate(dateFormatted)"
                                v-on="on"
                              ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                          </v-menu>
                      
                        <v-btn flat @click="submit">Submit</v-btn>
                    </v-col>

                  
            </v-row>
            </v-app>
            
      </v-container>
       
      
   
        
    </div>
</template>

<script>
export default {
   
  }
</script>

<style>
.subtitle {
  position: static;
  margin: 0 auto;
  margin-left: 10px;
  text-align: left;
  color: rgba(0, 0, 0, 0.6);
}

</style>
