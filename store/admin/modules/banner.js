import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    getBanner: [],
    setBanner:[],
    bannerList:[],
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
    SetBannerDetail: (state, items) => {
        state.setBanner = items;
    },
    SET_BANNER(state , item) {
        state.bannerList = item
    }
}

const actions = {
    getBanners: (context) => {
        const URl = `${baseURL}api/admin/get-banner`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setBrandValue', response.data.data);
            }
        });
    },
    getBannersfRONT: (context) => {
        const URl = `${baseURL}api/get-banner`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('SET_BANNER', response.data.data);
            }
        });
    },

    setBanner: (context, items) => {
        const URl = `${baseURL}api/admin/add-banner`
        let formData = new FormData();
        formData.append('title', items.title);
        formData.append('description', items.description);
        formData.append('image', items.logo);
        const resp = axios.post(URl, formData);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getBanners');
            }
        });
        return resp;
    },

    get_single_banner: (context, item) => {
        context.commit('SetBannerDetail', item);
    },

    updateBanner: (context, items) => {
        const URl = `${baseURL}api/admin/update-banner`
        let formData = new FormData();
        formData.append('title', items.title);
        formData.append('description', items.description);
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