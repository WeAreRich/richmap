import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import MapHome from '@/components/pages/MapHome.vue';
import Try from '@/components/pages/Try.vue';
import BaseLayout from '../components/pages/BaseLayout.vue';
import AdminHome from '../components/pages/AdminHome.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'map',
        component: MapHome
      },
      {
        path: 'try',
        component: Try
      },
    ]
  },
  {
    path: '/admin',
    component: AdminHome
  },
];

Vue.component('base-layout', BaseLayout);

export default new Router({
  routes
});
