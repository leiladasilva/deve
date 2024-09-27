import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productDetailview from '@/views/productDetailview'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product/:id',
      name: 'productDetailview',
      component: productDetailview,
      props:true
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
