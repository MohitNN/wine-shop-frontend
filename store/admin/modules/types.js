import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    Type: [],
}
const getters = {
    getType: (state) => {
        return state.Type;
    },
}
const actions = {
    setType: (context, items) => {
        const URl = `${baseURL}api/admin/add-type`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getType');
            }
        });
        return resp;
    },
    getType: (context,page=1) => {     
        const URl = `${baseURL}api/admin/get-type/?page=${page}`
        const resp = axios.get(URl);   
        resp.then(response => {            
            if (response.data.status) {
                context.commit('setTypeValue', response.data.data);
            }
        });
    },
    get_single_type: (context, id) => {
        const URl = `${baseURL}api/admin/get-type-single/${id}`
        const resp = axios.get(URl)
        return resp;
    },

    updateType: (context, items) => {
        const URl = `${baseURL}api/admin/add-type`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getType');
            }
        });
        return resp;
    },

    deleteType: (context, TypeId) => {
        const URl = `${baseURL}api/admin/delete-type`
        const resp = axios.post(URl, { id: TypeId });
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getType');
            }
        });
        return resp;
    }

}
const mutations = {
    setTypeValue: (state, items) => {
        state.Type = items;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}