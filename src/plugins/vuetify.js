import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blueGrey.lighten5, 
                secondary: colors.lightGreen.lighten2, 
                accent: colors.orange.accent2, 
            },
            dark:{
                primary: colors.blueGrey.darken4, 
                secondary: colors.pink.darken2, 
                accent: colors.orange.accent4, 
            },
        },
    },
})
