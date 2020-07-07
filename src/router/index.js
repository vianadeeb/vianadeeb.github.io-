import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import("@/pages/main"),
  },
  {
    path: "/posts",
    component: () => import("@/pages/Posts")
  },
  {
    path: "/post/:id",
    component: () => import("@/pages/post")
  },
  {
    path: "/pagetwo",
    component: () => import("@/pages/pagetwo")
  },
  {
    path: "/scroll",
    component: () => import("@/pages/scroll")
  },
  {
    path: "/aboutme",
    component: () => import("@/pages/Aboutme")
  }
  ,
  {
    path: "/login",
    component: () => import("@/pages/Login")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
