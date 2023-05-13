import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VCalendar from 'v-calendar'
import VueGoodTablePlugin from 'vue-good-table-next'

import 'vue-good-table-next/dist/vue-good-table-next.css'
import 'v-calendar/style.css'
import './assets/main.css'

const app = createApp(App)

const pinia = createPinia();

pinia.use(({store}) => {
   store.$router = markRaw(router)
})

app.use(pinia)
app.use(router).use(VCalendar).use(VueGoodTablePlugin)

app.mount('#app')
