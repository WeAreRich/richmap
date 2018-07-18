import Vue from 'vue'
import Router from 'vue-router'
import FileUpload from '@/components/admin/FileUploader.vue'
import AdminHome from '../components/admin/AdminHome.vue'
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'file',
      component: FileUpload
    }, {
          path: '/admin',
          name: 'admin',
          component: AdminHome
    },

  ]
})
