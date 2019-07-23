import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style.css';
import store from './store'
import router from './router/router.js'


Vue.config.productionTip = false;
Vue.use(iView);


new Vue({
    router,
    store,
    components: { App },
    template: '<App/>'
})
