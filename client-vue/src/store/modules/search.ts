import { SearchResult } from '@/models/SearchResult';

export interface SearchState {
  isSearch: boolean,
  kw: string,
  searchTuplesAndKind: SearchResult[]
}

let state: SearchState = {
  isSearch: true,
  kw: '',
  searchTuplesAndKind: []
};

const mutations = {
  toSearch(state) {
    state.isSearch = true;
  },
  notSearch(state) {
    state.isSearch = false;
  },
  keyword(state, value) {
    state.kw = value;
  },
  searchResult(state, value) {
    state.searchTuplesAndKind = value;
  }
};

const getters = {
  kw: state => state.kw,
  isSearch: state => state.isSearch,
  searchResult: state => state.searchTuplesAndKind
};

export default {
  state,
  mutations,
  actions: {},
  getters
};