import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Medicines from '@/views/Medicines.vue'
import Login from '../views/Login.vue'
import Informacion from '@/views/Informacion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/medicamentos',
      name: 'medicines',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Medicines
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: Informacion
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
