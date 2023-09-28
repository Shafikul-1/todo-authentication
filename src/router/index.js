import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashBoard from '../views/DashBoard.vue'
import LoginView from '../views/LoginView.vue'
import SignUp from '../views/SignUp.vue'
import ToDo from '../views/ToDo.vue'
import { userStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: {
        isAuth : true
      }
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDo,
    }
  ]
})



router.beforeEach((to, from, next) => {
  if (to.meta.isAuth == true && !userStore.isAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
