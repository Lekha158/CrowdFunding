import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Funds from '../components/Funds.vue'
import FundDetails from '../components/fundDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/fund',
      name: 'fund',
      component: Funds
    },
    {
      path: '/fundDetails',
      name: 'fundDetails',
      component: FundDetails
    },
  ]
})

export default router
