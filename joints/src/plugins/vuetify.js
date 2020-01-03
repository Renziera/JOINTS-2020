import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opts = {
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        dark: {
          background: '#ffffff',
        },
      },
        dark: false,
    },
  }
export default new Vuetify(opts);
