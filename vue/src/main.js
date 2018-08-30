// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css'
import "@babel/polyfill";

import {Message, Spin} from 'iview';

Vue.config.productionTip = false;


Vue.prototype.$Message = Message;
Vue.prototype.$Spin = Spin;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
});
