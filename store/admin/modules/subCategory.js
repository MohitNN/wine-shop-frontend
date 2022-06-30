import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    SubCategory: []
}
const getters = {
    getSubCategory: (state) => {
        return state.SubCategory;
    },
}
const actions = {
    setSubCategory: (context, items) => {
        const URl = `${baseURL}api/admin/add-sub-category`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getSubCategory');
            }
        });
        return resp;
    },

    getSubCategory: (context) => {
        const URl = `${baseURL}api/admin/get-sub-category`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setCategoryValue', response.data.data.data);
            }
        });
    },

    getSubCategorys: (context, items) => {
        context.commit('setCategoryValue', items);
        console.log(items)
    },

}
const mutations = {
    setCategoryValue: (state, items) => {
        state.SubCategory = items;
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