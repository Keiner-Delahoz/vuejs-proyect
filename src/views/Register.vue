<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from "../stores/user";

const email = ref("");
const password = ref("");

const userStore = useUserStore()

const register = () => {
   userStore.register(email.value, password.value);
}

</script>

<template>
   <section class="hero is-fullheight">
      <div class="hero-body columns">
         <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
               <div class="box">
                  <h1 class="title is-4">Sign up today</h1>
                  <form @submit.prevent="register">
                     <div class="field">
                        <p class="control has-icons-left has-icons-right">
                           <input class="input is-primary is-medium" type="email" placeholder="Email" v-model="email">
                           <span class="icon is-small is-left">
                              <i class="fas fa-envelope"></i>
                           </span>
                           <span class="icon is-small is-right">
                              <i class="fas fa-check"></i>
                           </span>
                        </p>
                     </div>
                     <div class="field">
                        <p class="control has-icons-left">
                           <input class="input is-primary is-medium" type="password" placeholder="Password" v-model="password">
                           <span class="icon is-small is-left">
                              <i class="fas fa-lock"></i>
                           </span>
                        </p>
                     </div>
                     <button class="button is-block is-primary is-fullwidth is-medium" type="submit">Register</button>
                     <br />
                     <p class="is-size-7"> ¿you already have an account? <a href="#" class="has-text-primary"> <RouterLink to="/login"> Login </RouterLink></a>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>

</template>

<style scoped>
    :root {
      --brandColor: hsl(166, 67%, 51%);
      --background: rgb(247, 247, 247);
      --textDark: hsla(0, 0%, 0%, 0.66);
      --textLight: hsla(0, 0%, 0%, 0.33);
    }

    body {
      background: var(--background);
      height: 100vh;
      color: var(--textDark);
    }

    .columns{
      margin-top: 1;
    }

    .field:not(:last-child) {
      margin-bottom: rem;
    }

    .title {
      font-weight: 800;
      letter-spacing: -2px;
    }

    .hero.is-fullheight .hero-body{
    align-items: center;
    display: flex;
}

    input {
      font-size: 1rem;
    }

    input:focus {
      border-color: var(--brandColor) !important;
      box-shadow: 0 0 0 1px var(--brandColor) !important;
    }

    .fab,
    .fas {
      color: var(--textLight);
      margin-right: 1rem;
    }

  </style>

