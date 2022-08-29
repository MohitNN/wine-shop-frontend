import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    getAddress: [],
}

const actions = {
    getAddress: (context) => {
        const URl = `${baseURL}api/admin/get-store-location`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setAddressValue', response.data.data);
            }
        });
    },

    setAddress: (context, items) => {
        const URl = `${baseURL}api/admin/store-location`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getAddress');
            }
        });
        return resp;
    },

    get_single_address: (context, id) => {
        const URl = `${baseURL}api/admin/get-store-locationByid/${id}`
        const resp = axios.get(URl)
        return resp;
    },

    updateAddress: (context, items) => {
        const URl = `${baseURL}api/admin/update-location`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getAddress');
            }
        });
        return resp;
    },
    deleteAddress: (context, AddressId) => {
        const URl = `${baseURL}api/admin/delete-location`
        const resp = axios.post(URl, { id: AddressId });
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getAddress');
            }
        });
        return resp;
    }
}

const mutations = {
    setAddressValue: (state, items) => {
        state.getAddress = items;
    },
}

const getters = {
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}