<template>
  <div class="Home ma-16">
    <v-row>
      <v-col>
        <v-card elevation="0" class="primary Intro">
          <span>I'm</span>
          <h3>Maryam Alkhamis</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            tempora
          </p>
          <v-icon>mdi-account-circle</v-icon>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title> Item 1 </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title> Item 2 </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title> Item 3 </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.Intro span{
color: #E91E63;
font-size: 30px;
}
.Intro h3{
  font-size: 50px;
}
</style>

<script>
export default {
  name: "Home-page",
};
</script>
