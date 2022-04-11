<template>
  <v-footer
  padless
  >
    <v-card
      flat
      tile
      class="orange darken-3 mt-16 flex-grow-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="icon.link"
        >
          <v-icon size="24px">
            {{ icon.logo }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Made by @João Afonso using <strong>Vue</strong>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} 
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        { logo:'mdi-linkedin', link: "https://www.linkedin.com/in/joão-cardoso-07/" },
        { logo:'mdi-git', link: "https://github.com/joaoafonso386" }
      ],
    }),
  }
</script>