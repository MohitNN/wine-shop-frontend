import axios from "axios";
import { baseURL } from "@/config/urls";

axios.defaults.baseURL = baseURL.API_URL;
const state = {
  getProducts: [],
  productsList: [],
  category: [],
  subCategory: [],
  brand: [],
  type:[],
  singleProduct:{},
};
const getters = {};
const actions = {
  async saveProduct({ commit, dispatch }, data) {
    const resp = await axios.post("/api/admin/save-product", data);
    if (resp.data.status) {
      //   dispatch("setCurrentUser",resp.data)
    }
    return resp;
  },
  async EditProduct({ commit, dispatch }, data) {
    const resp = await axios.post("/api/admin/edit-product", data);
    if (resp.data.status) {
      //   dispatch("setCurrentUser",resp.data)
    }
    return resp;
  },
  async getCategory({ commit, dispatch }, data) {
    const resp = await axios.get("/api/admin/get-category", data);
    if (resp.data.status) {
      commit('SET_CATEGORY',resp.data.data)
    }
    return resp;
  },
  async getBrand({ commit, dispatch }, data) {
    const resp = await axios.get("/api/admin/get-brand", data);
    if (resp.data.status) {
      commit('SET_BRAND',resp.data.data)
    }
    return resp;
  },
  async getType({ commit, dispatch }, data) {
    const resp = await axios.get("/api/admin/get-type", data);
    if (resp.data.status) {
      commit('SET_TYPE',resp.data.data)
    }
    return resp;
  },
  async getSubCategory({ commit, dispatch }, data) {
    const resp = await axios.get("/api/admin/category-to-subcategory/" + data);
    if (resp.data.status) {
      commit('SET_SUB_CATEGORY',resp.data.data)
    }
    return resp;
  },
  async productImageDelete({ commit, dispatch }, data) {
    const resp = await axios.get("/api/admin/delete-product-image/" + data);
    if (resp.data.status) {
      // commit('SET_SUB_CATEGORY',resp.data.data)
    }
    return resp;
  },
  async getSingleProduct({ commit, dispatch }, data) {
    commit('SET_SINGLE_PRODUCT','');
    const resp = await axios.get("/api/admin/single-product/" + data);
    if (resp.data.status) {
      commit('SET_SINGLE_PRODUCT',resp.data.data)
    }
    return resp;
  },
  async getProducts({ commit, dispatch }, data) {
    const resp = await axios.get("/api/admin/get-product",data);
    if (resp.data.status) {
      commit('PRODUCTS_LIST',resp.data.data)
    }
    return resp;
  },
  async deleteProduct({ commit, dispatch }, data) {
    const resp = await axios.post("/api/admin/delete-product",data);
    if (resp.data.status) {
      // commit('PRODUCTS_LIST',resp.data.data)
      dispatch("getProducts")
    }
    return resp;
  },
};
const mutations = {
  // setProductsValue: (state, items) => {
  //     state.getProducts.push(items);
  //     console.log(items)
  // },
  SET_CATEGORY(state , value) {
    state.category = value
  },
  SET_BRAND(state , value) {
    state.brand = value
  },
  SET_TYPE(state , value) {
    state.type = value
  },
  SET_SUB_CATEGORY(state , value) {
    state.subCategory = value
  },
  PRODUCTS_LIST(state , value) {
    state.productsList = value
  },
  SET_SINGLE_PRODUCT(state , value) {
    state.singleProduct = value
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
