import Vue from 'vue'
import VueRouter from 'vue-router'

// Page
import MasterLayout from '@/pages/layout'
import Home from '@/pages/home'
import ViewDetail from '@/pages/weather/view'
import SearchResult from '@/pages/weather/search'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: MasterLayout,
      redirect: '/home',
      children:[
        {
          path: '/home',
          component: Home,
          name: 'Home'
        },
        {
          path: '/weather/:woeid',
          component: ViewDetail,
          name: 'ViewDetail'
        },
        {
          path: '/search/:keyword?',
          component: SearchResult,
          name: 'SearchResult'
        },
      ]
    }
  ]
})
