import config from '@/config.json'
import axios from "axios";

const  baseURL = config.baseUrl

const state = {
    getBrand : [],
}
const getters = {
    getBrand: (state) => {
        return state.getBrand;
    },
}
const mutations = {
    setBrandValue: (state, items) => {   
        state.getBrand = items;   
    },
}

const actions = {
    getbrand: (context,page=1) => {        
        const URl = `${baseURL}api/admin/get-brand?page=${page}`
        const resp = axios.get(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('setBrandValue', response.data.data);               
            }
         });         
    },

    setBrand: (context, items) => {
        const URl = `${baseURL}api/admin/add-brand`      
        let formData = new FormData();
        formData.append('name', items.brandName);
        formData.append('detail',items.brandDescription);
        formData.append('image', items.logo);
        const resp = axios.post(URl,formData);
        resp.then(response => {
            if(response.data.status){       
                context.dispatch('getbrand');               
            }
         });
        return resp;   
      },

      get_single_brand: (context , id) => {        
        const URl = `${baseURL}api/admin/get-brand-single/${id}`
        const resp = axios.get(URl)
        return resp;
      },
     
      updatebrand: (context,items) => { 
        const URl = `${baseURL}api/admin/add-brand`      
        let formData = new FormData();
        formData.append('name', items.name);
        formData.append('detail',items.detail);
        formData.append('image', items.logo);
        formData.append('id', items.id);

        const resp = axios.post(URl,formData);
        resp.then(response => {
            if(response.data.status){       
                context.dispatch('getbrand');               
            }
         });
        return resp;   
      },
      deleteBrand:(context,BrandId) => {
        const URl = `${baseURL}api/admin/delete-brand`        
        const resp = axios.post(URl,{id: BrandId});
        resp.then(response => {          
            if(response.data.status){       
                context.dispatch('getbrand');
            }
         });
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