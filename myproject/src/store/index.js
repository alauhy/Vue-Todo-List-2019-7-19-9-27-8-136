import state from './state'
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'
import Vuex from 'vuex'

import Axios from 'axios'
import VueAxios from "vue-axios";


Vue.use(VueAxios,Axios)
Vue.use(Vuex);
export default new Vuex.Store({
    state,
    mutations,
    actions
})
