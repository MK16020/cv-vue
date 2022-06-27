<template>
  <v-app>
    <v-app-bar elevation="0" max-height="60px" class="secondary">
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="primary">
      <router-view />
    </v-main>
    <v-footer style="" class="pa-0" >
      <v-card flat
        tile
        width="100%"
        class="text-center">
          <v-card class="secondary">
            <v-divider></v-divider>

        <v-card-text >
          {{ new Date().getFullYear() }} — <strong>Maryam</strong>
        </v-card-text>
          </v-card>
        </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
