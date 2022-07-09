import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    Coupon: [],
}
const getters = {
    getCoupon: (state) => {
        return state.Coupon;
    },
}
const actions = {
    setCoupon: (context, items) => {
        const URl = `${baseURL}api/admin/add-coupon`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getCoupon');
            }
        });
        return resp;
    },
    getCoupon: (context,page=1) => {     
        const URl = `${baseURL}api/admin/get-coupon?page=${page}`
        const resp = axios.get(URl);   
        resp.then(response => {            
            if (response.data.status) {
                context.commit('setCouponValue', response.data.data);
            }
        });
    },
    get_single_coupon: (context, id) => {
        const URl = `${baseURL}api/admin/get-coupon-single/${id}`
        const resp = axios.get(URl)
        return resp;
    },


    updateCoupon: (context, items) => {
        const URl = `${baseURL}api/admin/add-Coupon`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getCoupon');
            }
        });
        return resp;
    },

    deleteCoupon: (context, CouponId) => {
        const URl = `${baseURL}api/admin/delete-coupon`
        const resp = axios.post(URl, { id: CouponId });
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getCoupon');
            }
        });
        return resp;
    }

}
const mutations = {
    setCouponValue: (state, items) => {
        state.Coupon = items;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}