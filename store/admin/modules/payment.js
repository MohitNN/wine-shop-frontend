import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    getPayment: [],
}

const actions = {
    getPayment: (context) => {
        const URl = `${baseURL}api/admin/get-payment-detaile`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setPaymentValue', response.data.data);
            }
        });
        return resp;
    },

    setPayment: (context, items) => {
        const URl = `${baseURL}api/admin/payment-detail-store`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                console.log(response.data.status)
                context.dispatch('getPayment');
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
    setPaymentValue: (state, items) => {
        state.getPayment = items;
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