<template>
    <div>
        <v-container>
            <v-app class="white ">
            <v-row class="d-flex align-content-start">

                <v-col cols='12' class="pb-0 mb-0 profil-team-title">
                      <h4 style="text-align: left" class="mb-0 pb-0"> Profil Anda: </h4>
                      <div class="subtitle mt-1 ml-0 subtitle-daftar">Lengkapi profil anda dibawah ini</div>
                </v-col>
                
              <v-col md='8' lg='8' xs='12' sm='12' class="col-xs-12 align-self-start" >
                  <v-card
                      
                      outlined
                      class="mx-auto pt-0 regis-card elevation-4 outlined-blue-card"
                      > 
                      <div class=" ma-4 d-flex flex-column">
                      <div class="subtitle">Nama:</div>
                       <v-text-field
                          class="mt-1 pb-0 "
           
                          v-model="profils.nama"
                          :rules="[
                             formValidation,
                              () => !! profils.nama || 'This field is required'
                          ]"
 
                          required
                          outlined
                          dense
                          placeholder="Nama"
                         
                      ></v-text-field>

                       <div class="subtitle">Email</div>
                       <v-text-field
                          class="mt-1 pb-0 mb-0"
            
                          v-model="profils.email"
                          :rules="[
                            formValidation,
                              () => !! profils.email || 'This field is required'
                          ]"
                          
                          required
                          outlined
                          dense
                          placeholder="Nama"
                    
                        ></v-text-field>

                    <div class="subtitle">Nomor HP:</div>
                    <div>
                     <v-text-field
                          class="mt-1"
                          ref="name"
                          v-model="profils.nomor"
                          :rules="[
                            formValidation,
                              () => !! profils.nomor || 'This field is required'
                          ]"
                      
                          required
                          outlined
                          dense
                          placeholder="Nama"
                       
                      ></v-text-field>
                    </div>


                     <div class="subtitle">Universitas/Sekolah:</div>
                      <v-text-field
                          class="mt-1"
                          ref="instansi"
                          v-model="profils.instansi"
                          :rules="[
                            formValidation,
                              (v) => !!v || 'This field is required',
                     
                          ]"
                          required
                          outlined
                          dense
                          placeholder="Universitas/ Sekolah ....."
            
                      ></v-text-field>

                      <div class="d-flex justify-content-end daftar-section ">
                      <v-alert 
                      class="alert-form px-4"
                      type="error" 
                      dense

                      v-model="isAlert"
                      transition="scale-transition"
                      dismissible
                      
                      >
                        Form Harus Dilengkapi 
                      </v-alert>
                          <v-spacer></v-spacer>

                          
                        <v-btn color="white elevation-2" rounded  class=" daftar-button " max-width="100" v-bind:disabled="false" v-on:click.native="warningBeforeSend" >Save </v-btn>
                      </div>
                      </div>
	        
                    </v-card>

              </v-col>


              <v-col class="col-sm-12 col-lg-4 col-xs-12 col-md-4 " md='4' lg='4' xs='12' sm='12' >

                <v-card
                outlined
                class="mx-4 ml-0 elevation-4  outlined-blue-card"
                min-width="300"

                >

                	<v-overlay
										:absolute= "absolute"
										:value="overlay"
                   
										>
                     <v-btn
                        dense
												color="success"
												@click="overlay = false"
										>
												Status : Belum Lunas
										</v-btn>
										<div class="text-center ma-12">
                   
										<v-progress-circular
												:indeterminate="true"
												:size="80"
												:width="12"
												color="light-blue"
										></v-progress-circular>
										</div>
										<v-btn
                        dense
												color="success"
												@click="overlay = false"
										>
												Pembayaran Sedang Diprocess
										</v-btn>
										</v-overlay>

                <v-container class="">
                 
      

                    
                    <p><v-checkbox
											label="Do you agree?"
											required
										></v-checkbox>
                    Dengan mengklik tombol ini, Anda mengakui bahwa Anda telah membaca dan menyetujui Syarat & Ketentuan dan Kebijakan Privasi Joints </p>

                    <v-divider class="mt-0 mb-0 card-divider"></v-divider>

                </v-container >
                <v-card-actions class="pt-0 daftar-action "> 
                    <v-btn 
                    color="white elevation-2" 
                    rounded  
               
                    class="mt-0 daftar-payment btn-block text-white" 
                    min-width="300" v-bind:disabled="this.isDisabled" 
                    v-on:click.native="submitProfils && (dialog = true) && (overlay = !overlay)"  >Daftar</v-btn>
              <div>


                <v-dialog v-model="dialog" persistent max-width="600px">
            
                <v-card>
		
                            <v-card-title class="card-title">
                            	<span class="headline dialog-title mt-5 pb-1 font-weight-medium ">Pembayaran</span>
                            </v-card-title>
                            <v-card-text>
                                
                  	<v-container class="">

									



										<div class=" pa-0">
                          <img
                              src="@/assets/joints.png"
                              alt="JOINTS 2020"
                              class="header-image d-lg-none"
                          />
                          <div class="d-flex flex-column ">
                              <div class="title text-left font-weight-regular title-biru-muda">Harap Lakukan Pembayaran Sebelum:</div>
                                      <div class="title text-leftubtitle-purple"> Jumat, 3 Januari  2020 14.00 WIB</div>
                              <div class="title text-left font-weight-regular title-biru-muda ">Yuk Lakukan Tranfers ke:</div>
                                      <div class="title text-leftsubtitle-purple">OVO(082112663311/Putri Rizki) </div>
                          <div class="title text-left font-weight-regular title-biru-muda"> 
                            Sebesar:
                          </div>

                          <div 
                            class="title text-left ml-3 subtitle-purple"> Rp {{this.payment.harga}}.00 </div>
                            <div class="overline text-left mt-3">*Sistem kami akan otomatis mendeteksi hasil pembayaran anda</div>   
                          </div>
                    </div>

	

								</v-container >
                            </v-card-text>

                            <v-card-actions>
                            <v-spacer></v-spacer>
															<v-btn  text color="blue darken-1"  @click="dialog = false">Close</v-btn>
                              
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                  </div>
                </v-card-actions>
                
                </v-card>

              </v-col>
 
          </v-row>

           


          </v-app>
      
      </v-container>

        

   </div>
</template>


<script>

import Axios from 'axios'

import firebase from 'firebase/app'


export default {
  
    data: ()=> ({

        isAlert: false,
        isDisabled: true, 
        dialog: false,
				absolute: true,
				overlay: false,
        opacity : 1, 
        formHasError: false, 
        formAdaError: false, 
        item:  {
            link:  '/dashboard/events/grandlaunching/payment',
            harga: null,
            menunggu_pembayaran: null
        },
        profils: { 
            nama: null,
            email: null,
            nomor: null,
            instansi: null
        },
        payment: {
          harga: null,
          lunas: null
        }
        

    }),

    computed: {
     
      form () {
        return {
            nama : this.profils.nama,
            email : this.profils.email,
            nomor: this.profils.nomor,
            instansi: this.profils.instansi
          };
      },
    },


    methods: {

        warningBeforeSend(){
             if( this.profils.nama  && this.profils.email && this.profils.nomor && this.profils.instansi ) {
                 this.submitProfils()
                
             } else {
              console.log('harus diisni');
              this.isAlert = true
             }
        }, 

       formValidation(){

        let returnValue = null
            if( this.profils.nama  && this.profils.email && this.profils.nomor && this.profils.instansi ) {
                console.log('ada nama ')
                this.isDisabled = false
                returnValue = true
          
            } else {
              console.log('ga ada nama');
              returnValue = false
              this.isDisabled = true
            }
            return returnValue

        },

        async submitProfils() {
            let token =  await firebase.auth().currentUser.getIdToken(true)
            const config = {
                headers: {'Authorization': "Bearer " + token},

            };
            const bodyParameters = {
                nama: this.profils.nama,
                email: this.profils.email,
                nomor: this.profils.nomor,
                instansi : this.profils.instansi
            }
            const BASE_URL = 'https://api.joints.id'
            Axios.post( 
                BASE_URL+ '/biodata',
                bodyParameters,
                config
            ).then((response) => {
                console.log(response);
                console.log('berhasil');
            }).catch((error) => {
            console.log(error)
            });
        },

        formatHarga(number){
            let hargaIndo = Intl.NumberFormat(['ban', 'id']).format(number)
            return hargaIndo
        },
        async getPriceData() {
            let token =  await firebase.auth().currentUser.getIdToken(true)
            const config = {
                headers: {'Authorization': "Bearer " + token},
            };

            const BASE_URL = 'https://api.joints.id'
            Axios.get( 
                BASE_URL+ '/daftar/grand_launching',
                config
            ).then((response) => {
                this.payment.harga = this.formatHarga(response.data.harga)
                this.payment.lunas
                console.log(response);
            }).catch((error) => {
            console.log(error)
            });
        },
        async getProfilData(){
            let token =  await firebase.auth().currentUser.getIdToken(true)

            const config = {
                headers: {'Authorization': "Bearer " + token},

            };
            const BASE_URL = 'https://api.joints.id'
            Axios.get( 
                BASE_URL+ '/biodata',
                config
            ).then((response) => {
                this.profils =  {
										nama : response.data.biodata.nama,
										email: response.data.biodata.email,
										nomor: response.data.biodata.nomor,
										instansi: response.data.biodata.instansi
								}

            }).catch((error) => {
            console.log(error)
            });
        }
    },
   mounted() {
    this.getProfilData()
    this.getPriceData()
   
   },
   beforeMount() {
         this.getPriceData()
   }
  }

</script>


<style>


.outlined-blue-card{
   border: solid 3px !important;
  border-color: #3b89e6 !important;
    border-radius: 22px !important;
}




.alert-form {

  border-radius: 22px !important;
  padding: 6px 0 6px  0 !important;
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

.v-text-field__details{
    margin-bottom: 2px !important
}

.v-text-field.v-text-field--enclosed .v-text-field__details {
    margin-bottom: 2px !important
}

.daftar-section  .daftar-button{
		background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    color: white;
    border: none !important;
}

.daftar-payment {
  	background-image: linear-gradient(90deg, #92abfc, #3587e5) !important;
    color: white;
    border: none !important;
}


.dialog-header {
	position: absolute;
    top: -20px;
    left: 0px;    
    width: 100%;
}


#profil-header-gradient {
    --color-stop-1: #19c4b9;
    --color-stop-3: #90169f;
}

.st0{
	fill: url('#profil-header-gradient') ;
}


</style>