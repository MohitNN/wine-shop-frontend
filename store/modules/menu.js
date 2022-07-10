import Menu from '../../data/menu'
import axios from "axios";
import { baseURL } from "@/config/urls";
axios.defaults.baseURL = baseURL.API_URL;

const state = {
  data: Menu.data,
  brand : [],
  categories: [],
  subCategories: [],
}

// getters
const getters = {
}

// mutations
const mutations = {
  SET_BRAND(state , value) {
    state.brand = value
  },
  SET_CATEGORY(state , value) {
    state.categories = value
  },
  SET_SUB_CATEGORY(state , value) {
    state.subCategories = value
  },
}

// actions
const actions = {
  async getBrand({ commit, dispatch }, data) {
    const resp = await axios.get("/api/get-brand", data);
    if (resp.data.status) {
      commit('SET_BRAND',resp.data.data)
    }
    return resp;
  },
  async getCategory({ commit, dispatch }, data) {
    const resp = await axios.get("/api/get-all-category", data);
    if (resp.data.status) {
      commit('SET_CATEGORY',resp.data.data)
    }
    return resp;
  },
  async getSubCategory({ commit, dispatch }, data) {
    const resp = await axios.get("/api/get-all-sub-category", data);
    if (resp.data.status) {
      commit('SET_SUB_CATEGORY',resp.data.data)
    }
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
