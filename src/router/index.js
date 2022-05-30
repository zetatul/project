import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Camera from '../components/Camera.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component:  Login
  },
  {
    path: '/camera',
    name: 'camera',
    component: Camera
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
