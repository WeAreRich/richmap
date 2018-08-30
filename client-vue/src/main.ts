import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {Spin, Message} from 'iview';
import 'babel-polyfill'
import Promise from 'promise-polyfill';

// To add to window
// if (!window.Promise) {
//   window.Promise = Promise;
// }

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
