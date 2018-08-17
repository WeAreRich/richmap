import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import MapHome from '@/components/pages/MapHome.vue';
// import Try from '@/components/pages/Try.vue';
// const Try = r => require(['@/components/pages/Try.vue'], r);
import BaseLayout from '../components/pages/BaseLayout.vue';
// import AdminHome from '../components/pages/AdminHome.vue';


declare var require : (filename,resolve)=>any;

Vue.use(Router);

// Vue.component('Try', () => import('@/components/pages/Try.vue'));

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: resolve => require(['@/components/pages/Home.vue'], resolve)
      },
      {
        path: 'map',
        component: resolve => require(['@/components/pages/MapHome.vue'], resolve)
      },
      {
        path: 'try',
        component: resolve => require(['@/components/pages/Try.vue'], resolve)
      },
    ]
  },
  {
    path: '/admin',
    component: resolve => require(['../components/pages/AdminHome.vue'], resolve)
  },
];

Vue.component('base-layout', BaseLayout);

export default new Router({
  routes
});
