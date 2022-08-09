import config from '@/config.json'
import axios from "axios";

const  baseURL = config.baseUrl

const state = {
    getAllDataCount : [],
}
const getters = {
    getAllDataCount: (state) => {
        return state.getAllDataCount;
    },
}
const mutations = {
    SetgetAllTotalData: (state, items) => {   
        state.getAllDataCount = items;   
    },
}

const actions = {
    getCountData: (context,page=1) => {        
        const URl = `${baseURL}api/getAllTotalData`
        const resp = axios.get(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('SetgetAllTotalData', response.data.data);               
            }
         });         
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}