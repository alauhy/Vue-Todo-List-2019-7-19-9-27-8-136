import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../src/assets/style.css';

Vue.config.productionTip = false
Vue.use(iView);
Vue.prototype.bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
