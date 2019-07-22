import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../src/assets/style.css';
import Axios from 'axios';
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(VueAxios,Axios)
Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.bus = new Vue()

const store = new Vuex.Store({
  state:{
    todolist: []
  },
  mutations:{
    toSetList(state,list){
      state.todolist = list
    },
    addToList(state,event) {
      state.todolist.add(event)
    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
