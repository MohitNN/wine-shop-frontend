import employee from '../../../data/admin/data/employee.json';


const state = {
    employee: employee.data
}
const getters = {
    getEmployee(state) {
        return state.employee;
    }
}
const actions = {}
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}