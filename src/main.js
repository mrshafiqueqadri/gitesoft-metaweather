import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'
import router from './routes'
import {translate, round} from '@/filters'
import WeatherComponent from '@/components/weather'

Vue.component('weather', WeatherComponent)

Vue.filter('translate', translate)
Vue.filter('round', round)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
