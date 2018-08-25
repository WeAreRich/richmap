import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import MapHome from '@/components/pages/MapHome.vue';
import Try from '@/components/pages/Try.vue';
import BaseLayout from '../components/pages/BaseLayout.vue';
import AdminHome from '../components/pages/AdminHome.vue';
import RankHome from '../components/pages/RankHome.vue';
import HelpHome from '../components/pages/HelpHome.vue';
import ComparisonHome from '../components/pages/ComparisonHome.vue';
import SearchPage from '../components/pages/SearchPage.vue';

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
        path: 'rank',
        component: RankHome
      },
      {
        path: 'help',
        component: HelpHome
      },
      {
        path: 'comparison',
        component: ComparisonHome
      },
      {
        path: 'search',
        component: SearchPage
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
