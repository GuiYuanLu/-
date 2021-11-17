import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import category from '../views/category.vue'
import ball from '../views/ball.vue'
import product from '../views/product.vue'
import cart from '../views/cart.vue'
import user from '../views/user.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ball',
    name: 'ball',
    component: ball
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/product/:id',
    name: 'product',
    component: product
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
]

const router = new VueRouter({
  routes
})

export default router
