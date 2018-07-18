import Vue from 'vue';
import Router from 'vue-router';

/* components import */
import Try from '@/components/Try.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/try',
    component: Try
  }]
});
