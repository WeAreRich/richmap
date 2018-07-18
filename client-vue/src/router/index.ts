import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import Try from '@/components/Try.vue';
import BaseLayout from '../components/pages/BaseLayout.vue';
import FileUpload from '@/components/admin/FileUploader.vue';
import AdminHome from '../components/admin/AdminHome.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/file',
        component: FileUpload
    }, {
        path: '/admin',
        component: AdminHome
    }, {
        path: '/try',
        component: Try
    }
];

Vue.component('base-layout', BaseLayout);

export default new Router({
    routes
});
