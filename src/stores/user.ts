import { defineStore } from "pinia"
import { auth } from "../services/firebase"

// firebase nos provee de ciertos metodos para poder crear usuarios, iniciar sesion, cerrar sesión, etc.
// Estos metodos nos facilitan estas largas tareas de estar creando un usuario,estar conectandote y todo eso

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, type User } from "firebase/auth"

// creación del estado
export const useUserStore = defineStore("user", {
   state: () => {
      return {
         user: null as User | null
      }
   },
   actions: {
      async register(email: string, password: string){
         try {
            await createUserWithEmailAndPassword(auth, email, password);
         } catch (error: any) {
            switch(error.code){
               case "auth/email-already-in-use":
               alert("Email already in use");
               break;
            case "auth/invalid-email":
               alert("Invalid email");
               break;
            }
         return;
         }
         this.user = auth.currentUser;
         this.$router.push("/")
         console.log("usuario registrado sastisfactoriamente")
      },
      async login(email: string, password: string){
         try {
            await signInWithEmailAndPassword(auth, email, password);
         } catch (error: any) {
            switch(error.code){
               case "auth/user-not-found":
               alert("User not found");
               break;
            case "auth/wrong-password":
               alert("Wrong password");
               break;
            }
         return;
         }
         this.user = auth.currentUser;
         this.$router.push("/")
         console.log("El usuario a ingresado sastisfactoriamente")
      },
      async logout(){
         await signOut(auth)
         this.user = null;
         this.$router.push('/login')
      }
   }
})

//en pinia existe algo conocido como las action o las acciones y esta nos van a permitir tener 
// métodos  que van a poder ser llamados desde cualquier parte de nuestra aplicación.