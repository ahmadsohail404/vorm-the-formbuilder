import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuilderView from "../views/BuilderView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/builder',
    name: 'BuilderView',
    component: BuilderView
  }
]

const router = new VueRouter({
  routes
})

export default router
