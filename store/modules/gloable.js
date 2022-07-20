import Config from "../../data/config.json";
const state = {
  layout: Config,
  isLoading : false,
};
// mutations
const mutations = {
  SET_LOADER: (state, payload) => {
    state.isLoading = payload;
  },
};
// actions
const actions = {
  setLoading: (context, payload) => {
    context.commit("SET_LOADER", payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
