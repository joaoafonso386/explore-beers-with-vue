const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/explore-beers-with-vue/',
  transpileDependencies: [
    'vuetify'
  ]
})
