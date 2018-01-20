import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bonus from '@/components/Bonus'
import Topic from '@/components/Topic'
import Download from '@/components/Download'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bonus',
      component: Bonus
    },
    {
      path: '/topic',
      component: Topic
    },
    {
      path: '/download',
      component: Download
    },
    {
      path: '/login/:loginWay',
      name: 'login',
      component: Login
    }
  ]
})
