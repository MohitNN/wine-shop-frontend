import Menu from '../../data/menu'
import axios from "axios";
import { baseURL } from "@/config/urls";
axios.defaults.baseURL = baseURL.API_URL;

const state = {
  data: Menu.data,
  brand : [],
}

// getters
const getters = {
}

// mutations
const mutations = {
  SET_BRAND(state , value) {
    state.brand = value
  }
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
