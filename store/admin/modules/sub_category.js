const state = {
    getSubCategory : []
}
const getters = {
    
}
const actions = {
      setSubCategory: (context, items) => {
        context.commit('setCategoryValue', items);
        console.log(items)
      },
}
const mutations = {
    setCategoryValue: (state, items) => {
        state.getSubCategory.push(items);
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