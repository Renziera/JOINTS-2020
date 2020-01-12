<template>
    <div class="container">
  
        <template>
            <v-expansion-panels
             outlined

             multiple
             accordion 
            
            >
                <v-expansion-panel
                v-for="item in items"
                :key="title"
               
                >

                <v-expansion-panel-header>Item</v-expansion-panel-header>
                <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </template>
            
       
    
  
    </div>
</template>

<script>
export default {

    data: () => ({
      items: [
        {
          
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Hackathon',
          artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptatum. maMinima quisquam libero dolorem blanditiis sequi eius',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Datathon',
          artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Wathon',
          artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptatum.',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Muthon',
          artist: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam maxime culpa inventore aut corrupti possimus assumenda, deleniti ab necessitatibus dolorem impedit voluptat',
        },
      ],
       accordion: false,
      popout: false,
      inset: false,
      multiple: false,
      disabled: false,
      readonly: false,
      focusable: false,
      flat: false,
      hover: false,
      tile: false,
    }),

};
</script>

<style>
.v-expansion-panels {
    z-index: -1;
}

</style>
