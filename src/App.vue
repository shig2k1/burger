<template lang="pug">
  v-app
    router-view
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="sass">
// Vuetify
@import '../node_modules/vuetify/dist/vuetify.css'
// material icons
@import '../node_modules/material-design-icons/iconfont/material-icons.css'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
