// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/store.js'
import filters from './util/filter'
import $ from 'jquery'
import axios from 'axios'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: { App }
})
Object.keys(filters).forEach(function (key, index, arr) {
  Vue.filter(key, filters[key]);
})