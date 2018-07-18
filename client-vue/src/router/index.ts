import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import { BaseLayout } from '@/pages/BaseLayout.vue'

Vue.use(Router);

const routes = [
  {path: '/', component: Home}
];

Vue.component('base-layout', BaseLayout);

export default new Router({
  routes
})
