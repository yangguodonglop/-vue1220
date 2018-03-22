// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import indexone from './indexpage/indexone'
import indextwo from './indexpage/indextwo'
import VueRouter from 'vue-router'
import VueSlideMini from 'vue-slide-mini'
import VueJsonp from 'vue-jsonp'
import axios from "axios";
//import router from './router'
Vue.use(VueRouter)
Vue.use(VueSlideMini)
Vue.use( VueJsonp)
Vue.prototype.$axios = axios;
let router =new VueRouter({
//	mode:'history',
	routes:[
			{
				path:'/',
				component: indexone
			}
		]
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
