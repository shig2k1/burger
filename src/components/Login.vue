<template lang="pug">
  v-container
    v-flex(sm4 offset-sm4)
      v-card.pa-2
        h3 Sign In

        div.feedback(v-if="feedback") {{ feedback }}

        v-text-field(v-model="loginModel.email",
        label="Email")

        v-text-field(v-model="loginModel.password",
        label="Password",
        type="password")

        v-btn.primary(@click="login")
          span Login

        div
          span.mr-1 Don't have an account?
          router-link(to="/sign-up") Create one
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    loginModel: {
      email: null,
      password: null
    },
    feedback: null
  }),

  methods: {
    login () {
      this.feedback = null
      firebase.auth().signInWithEmailAndPassword(this.loginModel.email, this.loginModel.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          this.feedback = err.message
        })
    }
  },

  created () {
    console.log(this.db)
  }
}
</script>
