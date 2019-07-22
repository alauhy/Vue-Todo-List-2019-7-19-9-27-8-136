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
const store = new Vuex.Store({
  state:{
    todolist: []
  },
  mutations:{
    toSetList(state,list){
      state.todolist = list
    },
    addToList(state,event) {
      state.todolist.push(event)
    },
    setStatusFalse(state,index) {
        state.todolist.status[index] = false;
    },
    setStatusTrue(state,index) {
      state.todolist.status[index] = true;
    },
    atAll (state){
     state.todolist.map(e => e.isShow = true);
    },
    atActive(state) {
      state.todolist.map(e => {
        e.status ? e.isShow = false : e.isShow = true
      });

    },
    atComplete(state) {
      state.todolist.map(e => {
        e.status ? e.isShow = true : e.isShow = false
      });

    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
