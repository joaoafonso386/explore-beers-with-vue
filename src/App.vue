<template>
  <v-app>
    <AppHeader/>  
    <v-main>
      <SearchContainer/>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import SearchContainer from "./components/SearchContainer.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: 'App',

  components: {
    SearchContainer,
    AppHeader,
    AppFooter
  },

  data: () => ({
    //
  }),
};
</script>
