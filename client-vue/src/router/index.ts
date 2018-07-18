
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import BaseLayout from '../components/pages/BaseLayout.vue';
import FileUpload from '@/components/admin/FileUploader.vue'
import AdminHome from '../components/admin/AdminHome.vue'

Vue.use(Router);

const routes = [
    {
        path: '/', component: Home
    },
    {
        path: '/file',
        name: 'file',
        component: FileUpload
      }, {
            path: '/admin',
            name: 'admin',
            component: AdminHome
      },
];

// Vue.component('base-layout', BaseLayout);

export default new Router({
    routes
});
