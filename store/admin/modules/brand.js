import config from '@/config.json'
import axios from "axios";

const  baseURL = config.baseUrl

const state = {
    getBrand : []
}
const getters = {
    getBrand: (state) => {
        return state.getBrand;
    },
}
const actions = {
      setBrand: (context, items) => {
        const URl = `${baseURL}api/admin/add-brand`      
        let formData = new FormData();
        formData.append('name', items.brandName);
        formData.append('detail',items.brandDescription);
        formData.append('image', items.logo);
         axios.post(URl, formData)
         .then(response => {
             if(response.data.status){
                // context.commit('setBrandValue', response.data.data);               
             }
         });      
      },
      getbrand: (context) => {
        const URl = `${baseURL}api/admin/get-brand`
         axios.get(URl)
         .then(response => {
             if(response.data.status){
                context.commit('setBrandValue', response.data.data.data);               
             }
         });
      },
     
}
const mutations = {
    setBrandValue: (state, items) => {   
       
        state.getBrand = items;   
        // alert(JSON.stringify(state.getBrand))     
    },
    // getbrand: (state, items) => {      
    //     state.getBrand.push(items);   
    //     // alert(JSON.stringify(state.getBrand))     
    // },
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}