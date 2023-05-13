import { initializeApp } from "firebase/app";
// import 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_FIREBASE_APIKEY,
   authDomain: import.meta.env.VITE_API_FIREBAS_EAUTHDOMAIN,
   projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
   storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_API_FIREBASE_APPID,
   measurementId: import.meta.env.VITE_API_FIREBASE_MEASUREMENTID
}

const DB = initializeApp(firebaseConfig);

const auth = getAuth(DB)

export { DB }

export { auth }

// Pinia: es un manejador de estados globales
// Tiene una caracteristica bastante interesante y es que permite nos permite crear metodos
// que podemos utilizar en cualquier lugar de nuestra aplicación
