import axios from "axios";
import { baseURL } from "@/config/urls";
axios.defaults.baseURL = baseURL.API_URL;

const state = {
  saveAddress: [],
}

// getters
const getters = {
    getSaveAddress: (state) => {
        return state.saveAddress;
    },
}

// mutations
const mutations = {
  SET_SAVE_ADDRESS(state , value) {
    state.saveAddress = value
  },
}

// actions
const actions = {
  async userSaveAddress({ commit, dispatch }, data) {
    const resp = await axios.post("/api/user/add-address", data);
    if (resp.data.status) {
        dispatch("getUserAddress")
    }
    return resp;
  },
  async getUserAddress({ commit, dispatch }, data) {
    const resp = await axios.get("/api/user/get-address", data);
    if (resp.data.status) {
      commit('SET_SAVE_ADDRESS',resp.data.data)
    }
    return resp;
  },
  async deteleAddress({ commit, dispatch }, data) {
    const resp = await axios.post("/api/user/delete-address", data);
    if (resp.data.status) {
        dispatch("getUserAddress")
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
