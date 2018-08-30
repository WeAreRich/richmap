import Vue from 'vue';
import Router from 'vue-router';
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
        component: resolve => require(['@/components/pages/Home.vue'], resolve)
      },
      {
        path: 'map',
        component: resolve => require(['@/components/pages/MapHome.vue'], resolve)
      },
      {
        path: 'rank',
        component: resolve => require(['../components/pages/RankHome.vue'], resolve)
      },
      {
        path: 'help',
        component: resolve => require(['../components/pages/HelpHome.vue'], resolve)
      },
      {
        path: 'comparison',
        component: resolve => require(['../components/pages/ComparisonHome.vue'], resolve)
      },
      {
        path: 'search',
        component: resolve => require(['../components/pages/SearchPage.vue'], resolve)
      }
    ]
  },
  {
    path: '/admin',
    component: AdminHome
  }
];

Vue.component('base-layout', BaseLayout);

export default new Router({
  routes
});
