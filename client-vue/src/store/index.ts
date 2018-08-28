import Vue from 'vue';
import Vuex from 'vuex';
import search from '@/store/modules/search';
import layout from '@/store/modules/layout';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search: search,
    layout: layout
  }
});

export default store;
