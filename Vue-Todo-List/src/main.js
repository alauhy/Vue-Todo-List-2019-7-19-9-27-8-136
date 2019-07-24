import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/style.css';
import store from './store'
import router from './router'
import AntD from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(AntD)

new Vue({
    el:"#app",
    store,
    router,
    render:h=>h(App),
    components: { App },
})
