<template lang="pug">
  v-container
    v-flex(sm4 offset-sm4)
      v-card.pa-2
        h3 New account
        v-text-field(v-model="signUpModel.email",
        label="Email")
        v-text-field(v-model="signUpModel.password",
        label="Password",
        type="password")

        v-btn.primary(@click="signUp")
          span Sign up
        div
          router-link(to="/login") Back to login
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    signUpModel: {
      email: null,
      password: null
    },
    feedback: null
  }),

  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.signUpModel.email, this.signUpModel.password).then(
        (user) => {
          this.$router.replace('hello')
        },
        (err) => {
          this.feedback = err.message
        })
    }
  }
}
</script>
