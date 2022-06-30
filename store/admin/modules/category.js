import config from '@/config.json'
import axios from "axios";

const  baseURL = config.baseUrl
const state = {
    getCategory : []
}
const getters = {
    
}
const actions = {
    //   setCategory: (context, items) => {
    //     context.commit('setCategoryValue', items);
    //     console.log(items)
    //   },
      async setCategory({ commit , dispatch}, data) {
        const resp = await axios.post("/api/admin/add-category", data);
        if(resp.data.status) {
        }
        return resp;
      },
}
const mutations = {
    setCategoryValue: (state, items) => {
        state.getCategory.push(items);
        console.log(items)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}