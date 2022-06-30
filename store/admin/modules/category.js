import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    Category: [],
}
const getters = {
    getCategory: (state) => {
        return state.Category;
    },
}
const actions = {
    setCategory: (context, items) => {
        const URl = `${baseURL}api/admin/add-category`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getCategory');
            }
        });
        return resp;
    },
    getCategory: (context) => {
        const URl = `${baseURL}api/admin/get-category`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setCategoryValue', response.data.data.data);
            }
        });
    },
    get_single_category: (context, id) => {
        const URl = `${baseURL}api/admin/get-category-single/${id}`
        const resp = axios.get(URl)
        return resp;
    },

    updateCategory: (context, items) => {
        const URl = `${baseURL}api/admin/add-category`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getCategory');
            }
        });
        return resp;
    },

    deleteCategory: (context, CategoryId) => {
        const URl = `${baseURL}api/admin/delete-category`
        const resp = axios.post(URl, { id: CategoryId });
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getCategory');
            }
        });
        return resp;
    }

}
const mutations = {
    setCategoryValue: (state, items) => {
        state.Category = items;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}