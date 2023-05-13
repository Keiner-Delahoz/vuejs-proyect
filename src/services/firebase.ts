import { initializeApp } from "firebase/app";
// import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_FIREBASE_APIKEY,
   authDomain: import.meta.env.VITE_API_FIREBAS_EAUTHDOMAIN,
   projectId: import.meta.env.VITE_API_FIREBASE_PROJECTID,
   storageBucket: import.meta.env.VITE_API_FIREBASE_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_API_FIREBASE_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_API_FIREBASE_APPID,
   measurementId: import.meta.env.VITE_API_FIREBASE_MEASUREMENTID
}

const firebaseApp  = initializeApp(firebaseConfig);

const DB = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export { firebaseApp, DB, auth }

// export { ,  };

// Pinia: es un manejador de estados globales
// Tiene una caracteristica bastante interesante y es que permite nos permite crear metodos
// que podemos utilizar en cualquier lugar de nuestra aplicación
