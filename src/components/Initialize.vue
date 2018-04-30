<template lang="pug">
  div
    v-btn(@click="init")
      span Initialize
    v-btn(@click="get")
      span Get
</template>

<script>
export default {
  name: 'Initialize',

  methods: {
    /* init () {
      this.$store.dispatch('users/seed')
      this.$store.dispatch('conversations/seed')
    }, */

    get () {
      this.$store.dispatch('users/get')
      this.$store.dispatch('conversations/get')
    }
  },

  created () {
    this.get()
  }
}
</script>
