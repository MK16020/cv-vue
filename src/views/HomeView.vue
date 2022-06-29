<template>
  <div class="Home ma-16">
    <v-container fluid>
    <v-row dense>
      <v-col col="12">
        <v-card elevation="0" class="Intro">
          <span>I'm</span>
          <h3>Maryam Alkhamis</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            tempora
          </p>
          <v-icon>mdi-account-circle</v-icon>
        </v-card>
      </v-col>
      <v-col style="background-color: red" >

      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <v-col v-for="information in info" :key="information.title" :cols="information.flex">
            <v-card>
              <v-card-title> {{information.title}} </v-card-title>
            </v-card>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.Intro span {
  color: #e91e63;
  font-size: 50px;
}
.Intro h3 {
  font-size: 350%;
}
@media only screen and (max-width: 600px) {
  .Intro h3 {
  font-size: 200%;
}
}
</style>

<script>
export default {
  name: "Home-page",
   data:() => ({
    Info: [
        { title: 'About me', flex: 3 },
        { title: 'Resume', flex: 3 },
        { title: 'Projects', flex: 3},
        { title: 'Contact me', flex: 3},
      ],
   }),
};
</script>
