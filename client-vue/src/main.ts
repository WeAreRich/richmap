import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import 'iview/dist/styles/fonts/ionicons.eot'
import 'iview/dist/styles/fonts/ionicons.svg'
import 'iview/dist/styles/fonts/ionicons.ttf'
import 'iview/dist/styles/fonts/ionicons.woff'


import {Spin, Message} from 'iview';

Vue.config.productionTip = false;
Vue.prototype.$Message = Message;
Vue.prototype.$Spin = Spin;


// Vue.use(iview);
export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
