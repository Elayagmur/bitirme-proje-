import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import MovieDetail from '../views/MovieDetail.vue';
import Contact from '../views/Contact.vue';
import About from '../views/About.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
