import Vue from 'vue';
import Vuex from 'vuex';
import search from '@/store/modules/search';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    search: search,
  }
});

export default store;
