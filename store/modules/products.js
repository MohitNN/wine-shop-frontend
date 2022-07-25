import products from '../../data/products'
import axios from "axios";
import { baseURL } from "@/config/urls";
axios.defaults.baseURL = baseURL.API_URL;

const state = {
  productslist: products.data,
  productList: [],
  reletedProductList: [],
  products: products.data,
  wishlist: [],
  compare: [],
  currency: {
    curr: 'usd',
    symbol: '$'
  },
  order: [],
  locale: 'en',
  searchProduct: [],
  productData: [],
  topProductList: [],
  productDetail: {},
}
// getters
const getters = {
  getcollectionProduct: (state) => {
    return collection => state.productData.filter((product) => {
      return collection === product.collection
    })
  },

  getProductById: (state) => {
    return id => state.productData.find((product) => {
      return product.id === id
    })
  },
  compareItems: (state) => {
    return state.compare
  },
  wishlistItems: (state) => {
    return state.wishlist
  },
  changeCurrency: (state) => {
    if (state.currency.curr === 'eur') {
      state.currency.curr = 0.90
      return state.currency
    } else if (state.currency.curr === 'inr') {
      state.currency.curr = 70.93
      return state.currency
    } else if (state.currency.curr === 'gbp') {
      state.currency.curr = 0.78
      return state.currency
    } else if (state.currency.curr === 'usd') {
      state.currency.curr = 1
      return state.currency
    }
  },
  getOrder: (state) => {
    return state.order
  }
}
// mutations
const mutations = {
  changeCurrency: (state, payload) => {
    state.currency = payload
  },
  SET_PRODUCT_LIST(state , value) {
    state.productList=value
  },
  RELETED_PRODUCT(state , value) {
    state.reletedProductList = value
  },
  addToWishlist: (state, payload) => {
    const product = state.products.find(item => item.id === payload.id)
    const wishlistItems = state.wishlist.find(item => item.id === payload.id)
    if (wishlistItems) {
    } else {
      state.wishlist.push({
        ...product
      })
    }
  },
  removeWishlistItem: (state, payload) => {
    const index = state.wishlist.indexOf(payload)
    state.wishlist.splice(index, 1)
  },
  addToCompare: (state, payload) => {
    const product = state.products.find(item => item.id === payload.id)
    const compareItems = state.compare.find(item => item.id === payload.id)
    if (compareItems) {
    } else {
      state.compare.push({
        ...product
      })
    }
  },
  removeCompareItem: (state, payload) => {
    const index = state.compare.indexOf(payload)
    state.compare.splice(index, 1)
  },
  searchProduct: (state, payload) => {
    payload = payload.toLowerCase()
    state.searchProduct = []
    if (payload.length) {
      state.products.filter((product) => {
        if (product.title.toLowerCase().includes(payload)) {
          state.searchProduct.push(product)
        }
      })
    }
  },
  createOrder: (state, payload) => {
    state.order = payload
  },
  SET_PRODUCT(state , value) {
    state.productData=value
  },
  SET_TOP_PRODUCT(state , value) {
    state.topProductList=value
  },
  SET_PRODUCT_DETAIL(state , value) {
    state.productDetail=value
  },
}
// actions
const actions = {
  changeCurrency: (context, payload) => {
    context.commit('changeCurrency', payload)
  },
  async getProducts({ commit, dispatch }, data) {
    const resp = await axios.post("/api/get-product-brand", data);
    if (resp.data.status) {
      commit('SET_PRODUCT_LIST',resp.data.data)
    }
    return resp;
  },
  addToWishlist: (context, payload) => {
    context.commit('addToWishlist', payload)
  },
  removeWishlistItem: (context, payload) => {
    context.commit('removeWishlistItem', payload)
  },
  addToCompare: (context, payload) => {
    context.commit('addToCompare', payload)
  },
  removeCompareItem: (context, payload) => {
    context.commit('removeCompareItem', payload)
  },
  searchProduct: (context, payload) => {
    context.commit('searchProduct', payload)
  },
  createOrder: (context, payload) => {
    context.commit('createOrder', payload)
  },
  async allProduct({ commit, dispatch }, data) {
    var url = '';
    if(data.page) {
      url = "/api/product?"+data.page
    } else {
      url = "/api/product"
    }
    const resp = await axios.post(url, data)
    if (resp.data.status) {
      commit('SET_PRODUCT',resp.data.data)
    }
    return resp;
  },
  async makeOrder({ commit, dispatch }, data) {
    const resp = await axios.post("/api/user/order-save", data);
    if (resp.data.status) {
      // commit('SET_PRODUCT',resp.data.data)
    }
    return resp;
  },
  async getTopProduct({ commit, dispatch }, data) {
    const resp = await axios.get("/api/top-product", data);
    if (resp.data.status) {
      commit('SET_TOP_PRODUCT',resp.data.data)
    }
    return resp;
  },
  async getReletedProduct({ commit, dispatch }, data) {
    const resp = await axios.get("/api/getRelatedProduct/"+ data);
    if (resp.data.status) {
      commit('RELETED_PRODUCT',resp.data.data)
    }
    return resp;
  },
  async getSingleProduct ({ commit, dispatch }, data) {
    commit('SET_PRODUCT_DETAIL',{})
    commit('RELETED_PRODUCT',[])
    const resp = await axios.get("/api/getSingleProductData/"+data);
    if (resp.data.status) {
      commit('SET_PRODUCT_DETAIL',resp.data.data.product)
      commit('RELETED_PRODUCT',resp.data.data.reletedProduct)
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
