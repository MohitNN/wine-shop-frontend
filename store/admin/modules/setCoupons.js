const state = {
    getCoupon : []
}
const getters = {
    
}
const actions = {
    setCoupon: (context, items) => {
        context.commit('setCouponValue', items);
        console.log(items)
      },
}
const mutations = {
    setCouponValue: (state, items) => {
        state.getCoupon.push(items);
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