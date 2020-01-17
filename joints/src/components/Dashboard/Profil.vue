<template>
    <div>

            <v-app class="white"> 
                <v-container> 

                <v-row dense class="align-start text-left flex-xs-wrap flex-lg-wrap justify-content-around pa-8">
                    <v-col class=" col-xs-12 col-sm-12 col-lg-4  " cols='12' >
											<div class="d-flex flex-column flex-xs-wrap col-xs-12 ">
													<div class="title font-weight-black profil-title"> Nama </div>
													<div class="title font-weight-medium  profil-subtitle" > {{profils.nama}}</div>
													<v-divider class="ma-0 profil-divider"></v-divider>
											</div>

                    </v-col>
                     <v-col class="col-xs-12 col-sm-12 col-lg-4  ">
											<div class="d-flex flex-column">
													<div class="title font-weight-black profil-title"> Email </div>
													<div class=" title font-weight-medium  profil-subtitle"> {{profils.email}} </div>
													<v-divider class="ma-0 profil-divider"></v-divider>
											</div>

                    </v-col>

                    </v-row>
                    <v-row dense align="star" class="align-start text-left flex-md-wrap flex-lg-wrap justify-content-around pa-8">
                    <v-col class="col-sm-12 col-lg-4  col-xs-12" cols='12'>
                       <div class="d-flex flex-column">
                                    <div class="title font-weight-black profil-title"> Nomor</div>
																			<p class="title font-weight-medium  profil-subtitle"> {{profils.nomor}}</p>
                                    <v-divider class="ma-0 profil-divider"></v-divider>
                                </div>

                    </v-col>
                     <v-col class="col-sm-12 col-lg-4  col-xs-12 ">
                        <div class="d-flex flex-column">
                                    <div class="title font-weight-black profil-title"> Instansi </div>
                                    <p class="title font-weight-medium  profil-subtitle"> {{profils.instansi}}</p>
                                    <v-divider class="ma-0 profil-divider"></v-divider>
                                </div>

                    </v-col>

                    </v-row>


                    <v-row dense align="star" class="align-center justify-content-around ">

                        <v-col class="py-4 dialog-button">
                        <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                    
                        <v-btn color="primary elevation-2" depressed  rounded large v-on="on">Edit Profil</v-btn>
												
                        </template>
                        <v-card>
														
															
														<div class="wave-container dialog-header d-none d-lg-block">
															<svg 
															
															id="Layer_1" 
															xmlns="http://www.w3.org/2000/svg" 
															xmlns:xlink="http://www.w3.org/1999/xlink" 
				
															viewBox="0 0 1440 320" 
														
															xml:space="preserve">
																<defs>
																		<linearGradient id="profil-header-gradient">
																				<stop offset="0%" stop-color="var(--color-stop-1)" />
																				<stop offset="100%" stop-color="var(--color-stop-3)" />
																		</linearGradient>
																</defs>

																<path 
																	class="st0" 
																	d="M902,69c-100.5,33.2-247.6,95.8-283,111c-95.8,41.1-85.7,40.4-120,52c-140.5,47.5-263.4,43.1-334,40c-41.4-1.8-98.1-6.7-165-20C0,168,0,84,0,0c430.7,0,861.3,0,1292,0C1117.9,7.8,988.1,40.5,902,69z">
																</path>
															</svg>
														</div>
                            <v-card-title class="card-title">
                            	<span class="headline dialog-title mt-5 pb-1 font-weight-medium ">Edit Profil</span>
                            </v-card-title>
                            <v-card-text>
                    
                                <v-row>
                                        <v-col md="12" lg="12" xs="12">
                                            <div>
                                                <div class="subtitle">Name: *</div>
                                                <v-text-field
                                                    class="mt-1"
                                                    ref="name"
                                   
                                                    v-model="dialogs.nama"
                                                   
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
                                                v-model="dialogs.email"
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
                                                v-model="dialogs.nomor"
                                                required
                                                :value='nomor'
                                                outlined
                                                dense
                                                placeholder="No. Handphone"
                                            ></v-text-field>

                                            <div class="subtitle">Universitas/Sekolah: *</div>
                                            <v-text-field
                                                ref="state"
                                                v-model="dialogs.instansi"
                                                :rules="[() => !!instansi || 'This field is required']"
                                                required
                                                outlined
                                                :value='instansi'
                                                dense
                                                placeholder="Universitas/Sekolah"
                                            ></v-text-field>
                                            <div> <small>*indicates required field</small></div>

                                      
                                            
                                        </v-col>



                                    </v-row>

                            </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
															<v-btn  text color="blue darken-1"  @click="dialog = false">Close</v-btn>
															<v-btn  text color="blue darken-1" @click="submitProfils">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>

                        </v-col>
                </v-row>

                
                </v-container>        
            </v-app>
       
    </div>
</template>

<script>
import Axios from 'axios'
import firebase from 'firebase/app'
import { mapGetters, mapState } from 'vuex';

export default {

    data() {
      return {  
        profilData: {nama:'', email: '', nomor:'', instansi:''},
        dialog: false,
        profils: {
            nama: '',
            email: '',
            nomor: '',
            instansi: ''
        },
				dialogs: {
            nama: '',
            email: '',
            nomor: '',
            instansi: ''
        },
				fieldsError : {
					nama: undefined,
					email: undefined,
					nomor: undefined,
					instansi: undefined
				}
      };
    },
    computed: {
      

    },
    methods: {
       

         async submitProfils() {
					 	this.dialog = false
            let token =  await firebase.auth().currentUser.getIdToken(true)
            const config = {
                headers: {'Authorization': "Bearer " + token},

            };
            const bodyParameters = {
                nama: this.dialogs.nama,
                email: this.dialogs.email,
                nomor: this.dialogs.nomor,
                instansi : this.dialogs.instansi
            }
            const BASE_URL = 'https://api.joints.id'
            Axios.post( 
                BASE_URL+ '/biodata',
                bodyParameters,
                config
            ).then((response) => {
                console.log(response);
                console.log('berhasil');
								this.profils =  {
										nama: this.dialogs.nama,
										email: this.dialogs.email,
										nomor: this.dialogs.nomor,
										instansi : this.dialogs.instansi
								}

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
                console.log(response);
                
								this.profils =  {
										nama : response.data.biodata.nama,
										email: response.data.biodata.email,
										nomor: response.data.biodata.nomor,
										instansi: response.data.biodata.instansi
								}
								this.dialogs =  {
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
    created() {
		this.getProfilData()
		},
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

.profil-divider{
	border: 2px solid #13CEBB  !important;
	border-radius: 5px;

}

.profil-subtitle{
	line-height: 1.4rem !important;
	padding-top: 3px;
	margin-bottom: 0px !important;
}

.profil-title{
	color: #6950B5;
}


.dialog-button .primary {
	background-image: linear-gradient(90deg, #f6068b, #c9213d) !important;
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

.dialog-title{
	z-index: 1;
	color: #684fb5;
}

</style>
