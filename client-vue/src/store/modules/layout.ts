export interface LayoutState {
  isPC: boolean;
}

let state: LayoutState = {
  isPC: true
};

const mutations = {
  toPC(state) {
    state.isPC = true;
  },
  toMobile(state) {
    state.isPC = false;
  }
};

const getters = {
  isPC: state => state.isPC
};

export default {
  state,
  mutations,
  actions: {},
  getters
};