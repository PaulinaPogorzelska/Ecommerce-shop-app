import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes.js'
import { store } from './store/store.js'
import ScrollAnimation from './directives/scrollanimation.js'
import VueResource from 'vue-resource'


Vue.directive('scrollanimation', ScrollAnimation);

Vue.use(VueResource);

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
