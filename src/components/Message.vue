<template lang="pug">
  li(@click="edit")
    div(v-if="!editing") {{ message.text }}
    v-layout(v-if="editing")
      v-text-field(v-model="editedMessage",
      hide-detail)
      v-btn(icon,
      @click="save")
        v-icon check
      v-btn(icon,
      @click="cancel")
        v-icon cancel
</template>

<script>
export default {
  name: 'Message',

  props: {
    message: Object
  },

  data: () => ({
    editing: false,
    editedMessage: null
  }),

  methods: {
    edit () {
      if (!this.editing) {
        this.editing = true
        this.editedMessage = this.message.text
      }
    },

    save () {
      this.$emit('update', {
        text: this.editedMessage,
        id: this.message.id
      })
      this.$nextTick(() => {
        this.editing = false
      })
    },

    cancel () {
      console.log('Hi')
      this.$nextTick(() => {
        this.editing = false
      })
    }
  }
}
</script>
