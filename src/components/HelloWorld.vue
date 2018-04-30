<template lang="pug">
  v-container

    Initialize

    ConversationContainer(
      v-for="id in convoIds",
      :conversation="conversations[id]",
      :id="id",
      :key="id"
    )

    v-btn(@click="logout") Log out
</template>

<script>
import firebase from 'firebase'

import Initialize from './Initialize'
import ConversationContainer from './ConversationContainer'

import { mapState } from 'vuex'

export default {
  name: 'HelloWorld',

  components: {
    Initialize,
    ConversationContainer
  },

  data () {
    return {
      user: null,
      loading: true,
      cards: []
    }
  },

  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  },

  methods: {
    init () {
      this.$store.dispatch('users/seed')
      this.$store.dispatch('conversations/seed')
    },

    get () {
      // todo
    },

    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
    }
  },

  created () {
    this.user = firebase.auth().currentUser
    console.log(this.$store.state.db)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
