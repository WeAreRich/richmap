import Vue from 'vue'
import Vuex from 'vuex'
import search from './modules/search'
import layout from './modules/layout'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    search: search,
    layout: layout
  }
});

export default store;
