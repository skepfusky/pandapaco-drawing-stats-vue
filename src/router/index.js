import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routeDatShit = '../views/'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(routeDatShit + 'About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let siteTitle = `${to.name} | ${process.env.VUE_APP_TITLE}`
  document.title = siteTitle
  next()
})

export default router
