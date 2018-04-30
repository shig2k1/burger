import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from '@/db/firebase.config'

import users from './users'
import conversations from './conversations'

firebase.initializeApp(firebaseConfig)

Vue.use(Vuex)

const state = {
  db: firebase.firestore()
}

export default new Vuex.Store({
  state,
  modules: {
    users,
    conversations
  }
})
