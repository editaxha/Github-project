// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import Vuex from 'vuex'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import store from './store'
import { routes } from "./routes"
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

Vue.config.productionTip = false
const router = new VueRouter({
  // mode: 'history',
  routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
