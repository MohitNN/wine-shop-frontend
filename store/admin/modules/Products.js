const state = {
    getProducts : []
}
const getters = {
    
}
const actions = {
    setProducts: (context, items) => {
        context.commit('setProductsValue', items);
        console.log(items)
      },
}
const mutations = {
    setProductsValue: (state, items) => {
        state.getProducts.push(items);
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