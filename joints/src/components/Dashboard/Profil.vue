<template>
    <div>
        <v-container>
            <v-app class="white">           
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="headline">Edit Profil</span>
                        </v-card-title>
                        <v-card-text>
                  
                            <v-row>
                                    <v-col md="12" lg="12" xs="12">
                                        <div>
                                            <div class="subtitle">Name: *</div>
                                            <v-text-field
                                                class="mt-1"
                                                ref="name"
                                                :value='name'
                                                v-model="profilData.nama"
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



                                        <div class="subtitle">Email: *</div>
                                        <v-text-field
                                            ref="address"
                                            :rules="[
                                                () => !!email || 'This field is required',
                                                
                                            ]"
                                            v-model="profilData.email"
                                            counter="25"
                                            :value='value'
                                            required
                                            outlined
                                            dense
                                            placeholder="Email"
                                        ></v-text-field>

                                        <div class="subtitle">Nomor Handphone: *</div>
                                        <v-text-field
                                            ref="nomorHp"
                                            :rules="[
                                                () => !!nomorHp || 'This field is required',
                                                addressCheck
                                            ]"
                                            v-model="profilData.nomor"
                                            required
                                            :value='nomor'
                                            outlined
                                            dense
                                            placeholder="No. Handphone"
                                        ></v-text-field>

                                        <div class="subtitle">Universitas/Sekolah: *</div>
                                        <v-text-field
                                            ref="state"
                                            v-model="profilData.instansi"
                                            :rules="[() => !!instansi || 'This field is required']"
                                            required
                                            outlined
                                            :value='instansi'
                                            dense
                                            placeholder="Universitas/Sekolah"
                                        ></v-text-field>
                                        <div> <small>*indicates required field</small></div>

                                        <v-btn flat @click="submitProfil">Submit</v-btn>
                                        
                                    </v-col>

                        
                                     

                                </v-row>

                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-row>
            </v-app>
        </v-container>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {

    data() {
      return {
        fromDateMenu: false,
        fromDateVal: null,
        minDate: "2019-07-04",
        maxDate: "2021-08-30",
        profilData: {nama:'', email: '', nomor:'', instansi:''},
        dialog: false
      };
    },
    computed: {
      fromDateDisp() {
        return this.fromDateVal;
        // format date, apply validations, etc. Example below.
        // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
      },
      ...mapGetters({
          nama: 'nama',
          email: 'email',
          instansi: 'instansi',
          nomor: 'instansi'
      })

    },
    methods: {
       

        onInputChange(evt){
            const element = evt.target
            this.$store.commit(`UPDATE_${element.name}`, value);
        },

        submitProfil(){
            this.$store.submitProfil(profilData)
            
        }
    }
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
