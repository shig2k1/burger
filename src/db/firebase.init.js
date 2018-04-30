import firebase from 'firebase'
import firebaseConfig from './firebase.config'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
