<template lang="pug">
  v-container(dense)

    v-layout
      v-text-field(v-model="message")
      v-btn(icon,
      @click="addMessage")
        v-icon add

    ul(v-if="messages.length > 0")
      Message(v-for="message in messages",
      :key="message.id",
      :message="message",
      @update="updateMessage")
    div(v-else) No messages

    v-btn(@click="logout") Log out
</template>

<script>
import firebase from 'firebase'

import { mapState } from 'vuex'
import Message from './Message'

export default {
  name: 'HelloWorld',

  components: {
    Message
  },

  data () {
    return {
      user: null,
      loading: true,
      cards: [],
      message: null,
      messages: [],

      messagesSub: null
    }
  },

  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  },

  methods: {

    addMessage () {
      if (this.message) {
        let msg = {
          text: this.message,
          ts: Date.now()
        }
        firebase.database().ref('Messages').push(msg)
          .then(data => {
            this.message = null
          }, err => {
            console.log('err', err)
          })
      }
    },

    updateMessage (message) {
      console.log(message)

      // get data ref
      let messageRef = firebase.database().ref('Messages').child(message.id)
      // update transaction
      messageRef.transaction(entry => {
        entry = {
          ...entry,
          text: message.text
        }
        return entry
      }).then(data => {
        console.log('updated')
      }, err => {
        console.log(err)
      })
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

    // subscribe to data
    this.messagesSub = firebase.database().ref('Messages').orderByChild('ts')

    this.messagesSub.on('value', r => {
      this.messages = []
      r.forEach(item => {
        let val = item.val()
        this.messages.push({
          ...val,
          id: item.key
        })
      })
    })
  },

  beforeDestroy () {
    this.messagesSub.off()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
