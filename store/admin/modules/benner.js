import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    getBanner: [],
}
const getters = {
    getBanner: (state) => {
        return state.getBanner;
    },
}
const mutations = {
    setBrandValue: (state, items) => {
        state.getBanner = items;
    },
}

const actions = {
    getBanners: (context, page = 1) => {
        const URl = `${baseURL}api/admin/get-banner?page=${page}`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setBrandValue', response.data.data);
            }
        });
    },

    setBanner: (context, items) => {
        const URl = `${baseURL}api/admin/add-banner`
        let formData = new FormData();
        formData.append('name', items.bannerName);
        formData.append('detail', items.bannerDescription);
        formData.append('image', items.logo);
        const resp = axios.post(URl, formData);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getBanners');
            }
        });
        return resp;
    },

    get_single_banner: (context, id) => {
        const URl = `${baseURL}api/admin/get-banner-single/${id}`
        const resp = axios.get(URl)
        return resp;
    },

    updateBanner: (context, items) => {
        const URl = `${baseURL}api/admin/add-banner`
        let formData = new FormData();
        formData.append('name', items.name);
        formData.append('detail', items.detail);
        formData.append('image', items.logo);
        formData.append('id', items.id);

        const resp = axios.post(URl, formData);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getBanners');
            }
        });
        return resp;
    },
    deleteBanner: (context, BannerId) => {
        const URl = `${baseURL}api/admin/delete-banner`
        const resp = axios.post(URl, { id: BannerId });
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getBanners');
            }
        });
        return resp;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}