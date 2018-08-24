export interface SearchState {
  kw: string
}

let state: SearchState = {
  kw: ''
};

const mutations = {
  keyword(state, value) {
    state.kw = value;
  }
};

const getters = {
  kw: state => state.kw
};

export default {
  state,
  mutations,
  actions: {},
  getters
};