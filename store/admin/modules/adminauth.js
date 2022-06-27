import axios from "axios";
import { baseURL } from "@/config/urls";

import config from "../../../config.json";
import { setAuthToken, resetAuthToken } from "@/config/auth";
axios.defaults.baseURL = baseURL.API_URL;
const state = {
  user: {
    bearerToken: null,
    isAuthenticated: false,
  },
};
const getters = {};
const actions = {
  async login({ commit , dispatch}, data) {
    const resp = await axios.post("/api/login", data);
    if(resp.data.status) {
      dispatch("setCurrentUser",resp.data)
    }
    return resp;
  },
  async LogOutApi({ commit , dispatch}, data) {
    const resp = await axios.post("/api/logout");
    if(resp.data.status) {
           dispatch("reset")   
    }
    return resp;
  },
  setCurrentUser({ commit }, data) {
    if (data) {
      commit("SET_USER",data);
      setAuthToken(data.access_token);
      localStorage.setItem("x-access-token", data.access_token);
    }
  },
  reset({ commit }) {
    commit("RESET_USER");
    resetAuthToken();
    localStorage.removeItem("x-access-token");
    // localStorage.removeItem("vuex");
    return Promise.resolve();
  },
};
const mutations = {
  SET_USER(state, data) {
    state.user = {
      bearerToken: data.access_token,
      user: data.data,
      isAuthenticated: true,
    };
  },
  RESET_USER(state) {
    state.user = {
      bearerToken: null,
      user: null,
      isAuthenticated: false,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
