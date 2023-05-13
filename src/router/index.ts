import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Medicines from '@/views/Medicines.vue'
import Login from '../views/Login.vue'
import Informacion from '../views/Informacion.vue'
import Register from '../views/Register.vue'
import { auth } from '@/services/firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
         auth: true
      }
    },
    {
      path: '/medicamentos',
      name: 'medicines',
      component: Medicines,
      meta: {
         auth: true
      }
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: Informacion,
      meta: {
         auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
         hideNavBar: true,
         hideFooter: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
         hideNavBar: true,
         hideFooter: true,
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
   if(to.path === '/login' && auth.currentUser){
      next("/")
   } else if (to.matched.some((record) => record.meta.auth) && !auth.currentUser) {
      next("/login");
   } else {
      next();
   }
})

export default router
