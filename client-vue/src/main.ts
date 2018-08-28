import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false;
// Vue.use(iView);
export default new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
