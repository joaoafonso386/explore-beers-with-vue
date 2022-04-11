<template>
  <div>
    <div>
      <v-row justify="center">
        <v-col cols="9">
          <v-text-field
            label="Search for beers"
            hide-details="auto"
            v-model="searchTerm"
            class="mt-6"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <BeersList :beersList="filteredBeers"/>
  </div>
</template>

<script>
  import BeersList from "./BeersList.vue";
  import Vue from "vue";
  import axios from "axios";
  import VueAxios from "vue-axios";
  Vue.use(VueAxios, axios);

  export default {
    name: 'SearchContainer',
    components: {
      BeersList
    },
    data: () => ({
      punkBeers: [],
      searchTerm: "",
    }),

    mounted() {
      this.getDataFromPunkApi();
    },

    methods: {
      getDataFromPunkApi: function () {
        this.axios.get("https://api.punkapi.com/v2/beers").then((res) => {
          this.punkBeers = res.data;
        })
      }
    },

    computed: {
      filteredBeers: function () {
        return this.punkBeers.filter((beer) => beer.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      }
    }

  }
</script>
