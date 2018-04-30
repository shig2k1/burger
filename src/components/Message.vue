<template lang="pug">
  div.message-container
    div(:class="getPosition") {{ message.text }}
</template>

<script>
export default {
  name: 'Message',

  props: {
    message: {
      type: Object,
      required: true
    }
  },

  computed: {
    getPosition () {
      if (this.message.sender === this.$store.state.users.currentUser) {
        return 'my message'
      } else {
        return 'message'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.my.message
  text-align: right

.message-container
  border: 1px solid silver
</style>
