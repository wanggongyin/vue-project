import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import CloudReasource from '@/components/CloudReasource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, 
    {
      path: '/cloudReasource',
      name: 'cloudReasource',
      component: CloudReasource
    }
  ]
})
