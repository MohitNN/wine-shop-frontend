import axios from "axios";
import config from "../../../config.json";
import { setAuthToken, resetAuthToken } from "@/config/auth";

const Api = axios.create({
  baseURL: config.baseUrl,
});
const state = {
  user: {
    bearerToken: null,
    isAuthenticated: false,
  },
};
const getters = {};
const actions = {
  async login({ commit , dispatch}, data) {
    const resp = await Api.post("/api/login", data);
    if(resp.data.status) {
      dispatch("setCurrentUser",resp.data)
    }
    return resp;
  },
  setCurrentUser({ commit }, data) {
    if (data) {
      commit("SET_USER",data.data);
      setAuthToken(data.access_token);
      localStorage.setItem("x-access-token", data.access_token);
      localStorage.setItem("user_data", JSON.stringify(data.data));
    }
  },
  reset({ commit }) {
    commit("RESET_USER");
    resetAuthToken();
    // cookies.remove('x-access-token')
    localStorage.removeItem("x-access-token");
    // localStorage.removeItem("vuex");
    return Promise.resolve();
  },
};
const mutations = {
  SET_USER(state, data) {
    state.user = {
      bearerToken: data.access_token,
      user: data.user,
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
