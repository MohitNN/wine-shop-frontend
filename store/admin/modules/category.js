const state = {
    getCategory : []
}
const getters = {
    
}
const actions = {
      setCategory: (context, items) => {
        context.commit('setCategoryValue', items);
        console.log(items)
      },
}
const mutations = {
    setCategoryValue: (state, items) => {
        state.getCategory.push(items);
        console.log(items)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}