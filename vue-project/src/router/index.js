import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import LoginView from '../views/LoginView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TelaInicial',
      name: 'TelaInicial',
      component: TelaInicialView
    },
    {
      path: '/Produtos',
      name: 'Produtos',
      component: ProdutosView
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView
    },
  
  
  ]
})

export default router
