<template>
    <div>
        <v-container>
            <v-app class="white">
                <v-row>
                    <v-col md="6" lg="6" xs="12">
                        <div>
                            <div class="subtitle">Name:</div>
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

                        <div class="subtitle">Email:</div>
                        <v-text-field
                            ref="address"
                            :rules="[
                                () => !!address || 'This field is required',
                                
                            ]"
                            v-model="address"
                            counter="25"
                            required
                            outlined
                            dense
                            placeholder="Email"
                        ></v-text-field>

                        <div class="subtitle">Nomor Handphone:</div>
                        <v-text-field
                            ref="city"
                            :rules="[
                                () => !!city || 'This field is required',
                                addressCheck
                            ]"
                            v-model="city"
                            required
                            outlined
                            dense
                            placeholder="No. Handphone"
                        ></v-text-field>

                        <div class="subtitle">Universitas/Sekolah:</div>
                        <v-text-field
                            ref="state"
                            v-model="state"
                            :rules="[() => !!state || 'This field is required']"
                            required
                            outlined
                            dense
                            placeholder="Universitas/Sekolah"
                        ></v-text-field>


                        <v-menu
                            v-model="fromDateMenu"
                            :close-on-content-click="false"
                          
                            
                            offset-y
                            max-width="290px"
                            min-width="290px"
                            >
                            <template v-slot:activator="{on}">
                                <v-text-field
                                label="From Date"
                              
                                :value="fromDateDisp"
                                v-on="on"
                                required
                                outlined
                                dense
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                locale="en-in"
                                v-model="fromDateVal"
                                no-title
                                @input="fromDateMenu = false"
                            ></v-date-picker>
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

    data() {
      return {
        fromDateMenu: false,
        fromDateVal: null,

        minDate: "2019-07-04",
        maxDate: "2021-08-30"
      };
    },
    computed: {
      fromDateDisp() {
        return this.fromDateVal;
        // format date, apply validations, etc. Example below.
        // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
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
