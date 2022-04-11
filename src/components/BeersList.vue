<template>
  <div>
  <v-container class="grey lighten-5 card-container">
    <v-row>
      <v-col
        v-for="beer in beersList"
        :key="beer.id"
        cols="3"
      >
        <v-card
        max-width="360"
        elevation="5"
        >
        <v-img
          :src="beer.image_url"
          height="300px"
          contain
        ></v-img>

        <v-card-title>
           {{ beer.name }}
        </v-card-title>

        <v-card-subtitle>
          {{ beer.tagline }}
        </v-card-subtitle>

      </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name:"BeersList",
  props: {
    beersList: Array
  },
  data: () => ({
      show: false,
  }), 
}
</script>

<style scoped>
.card-container {
  margin-top: 50px;  
}

</style>