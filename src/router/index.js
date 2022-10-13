import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/Navbar.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'
import Popup from '../views/Popup.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Navbar',
    name:'Navbar',
    component: Navbar
  },
  {
    path:'/Projects',
    name:'Projects',
    component: Projects
  },
  {
    path:'/Team',
    name:'Team',
    component: Team
  },
  {
    path:'/Popup',
    name:'Popup',
    component: Popup
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
