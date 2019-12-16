import Vue from 'vue'
import Router from 'vue-router'

const Cart = () => import ('../views/cart/Cart')
const Category = () => import ('../views/category/Category')
const Home = () => import ('../views/home/Home')
const Profile = () => import ('../views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new Router({
  routes,
  mode: 'history'
})


export default router