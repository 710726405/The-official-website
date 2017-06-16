import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import AboutMe from '@/components/AboutMe'
import Cooperation from '@/components/Cooperation'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/content',
      name: 'Body',
      component: Content
    },
    {path: '/about_me', name: 'AboutMe', component: AboutMe},
    {path: '/cooperation', name: 'Cooperation', component: Cooperation}
  ]
})
