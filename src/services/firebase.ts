import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_FIREBASE_APIKEY,
   authDomain: import.meta.env.VITE_API_FIREBAS_EAUTHDOMAIN,
   projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
   storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_API_FIREBASE_APPID,
   measurementId: import.meta.env.VITE_API_FIREBASE_MEASUREMENTID
}

firebase.initializeApp(firebaseConfig)

const DB = firebase.firestore()

export { DB }
