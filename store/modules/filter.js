
const state = {
  filters: {
    brand_id: [],
    category_id: [],
    sub_category_id: [],
    price: [0, 9999]
  }
}
// getters
const getters = {
}
// mutations
const mutations = {
  CLEAR_FILTER: (state) => {
    state.filters = {
      brand_id: [],
      category_id: [],
      sub_category_id: [],
      price: [0, 9999]
    }
  },
}
// actions
const actions = {
  clearFilter: (context, payload) => {
    context.commit('CLEAR_FILTER')
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
