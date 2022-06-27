import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blueGrey.lighten5, // #E53935
                secondary: colors.lightGreen.lighten2, // #FFCDD2
                accent: colors.orange.accent2, // #3F51B5
            },
            dark:{
                primary: colors.blueGrey.darken4, // #E53935
                secondary: colors.pink.darken2, // #FFCDD2
                accent: colors.orange.accent4, // #3F51B5
            },
        },
    },
})
