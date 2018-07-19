import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Detect from '@/components/pages/Detect.vue';
import DetectGuide from '@/components/pages/DetectGuide.vue';
import HelpServiceGuide from '@/components/pages/HelpServiceGuide.vue';
import RankGuide from '@/components/pages/RankGuide.vue';
import ComparisonGuide from '@/components/pages/ComparisonGuide.vue';
import BaseGuideLayout from '@/components/pages/BaseGuideLayout.vue';
import Try from '@/components/pages/Try.vue';
import BaseLayout from '../components/pages/BaseLayout.vue';
import FileUpload from '@/components/common/FileUploader.vue';
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
        path: 'detect',
        component: Detect
      },
      {
        path: 'guide',
        component: BaseGuideLayout,
        children: [
          {
            path: 'detect',
            component: DetectGuide
          },
          {
            path: 'help',
            component: HelpServiceGuide
          },
          {
            path: 'rank',
            component: RankGuide
          },
          {
            path: 'comparison',
            component: ComparisonGuide
          }
        ]
      },
      {
        path: 'file',
        component: FileUpload
      },
      {
        path: 'admin',
        component: AdminHome
      },
      {
        path: 'try',
        component: Try
      },
    ]
  }
];

Vue.component('base-layout', BaseLayout);

export default new Router({
  routes
});
