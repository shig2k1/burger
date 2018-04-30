// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'

import firebase from 'firebase'
import firebaseConfig from '@/db/firebase.config'

firebase.initializeApp(firebaseConfig)

Vue.use(Vuetify)

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
