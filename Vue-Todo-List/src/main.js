import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../src/assets/style.css';
import Axios from 'axios';
import VueAxios from 'vue-axios'
import store from './store'
import VueRouter from 'vue-router'

const header ={tempIndex:'<div>header</div>' }
const list ={tempIndex:'<div>active</div>' }
Vue.use(VueAxios,Axios)
Vue.config.productionTip = false
Vue.use(iView);
Vue.use(VueRouter)
const routes= [
  {path:'/header',component:header},
  {path:'/list',component:list},
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
