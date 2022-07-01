import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    SubCategory: [],
    SubCategoryDetail:[]
}
const getters = {
    getSubCategory: (state) => {
        return state.SubCategory;
    },
}
const actions = {
    setSubCategory: (context, items) => {
        const URl = `${baseURL}api/admin/add-sub-category`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getSubCategory');
            }
        });
        return resp;
    },

    getSubCategory: (context) => {
        const URl = `${baseURL}api/admin/get-sub-category`
        const resp = axios.get(URl);
        resp.then(response => {
            if (response.data.status) {
                context.commit('setCategoryValue', response.data.data.data);
            }
        });
    },

    updateSubCategory: (context, items) => {
        const URl = `${baseURL}api/admin/add-sub-category`
        const resp = axios.post(URl, items);
        resp.then(response => {
            if (response.data.status) {
                context.dispatch('getSubCategory');
            }
        });
        return resp;
    },
    get_single_subcategory: (context, item) => {
        context.commit('setSubCategoryValue', item);
    },
    
    getSubCategorys: (context, items) => {
        console.log(items)
    },

    deleteSubCategory:(context,SubCategoryID) => {
        const URl = `${baseURL}api/admin/delete-sub-category`        
        const resp = axios.post(URl,{id: SubCategoryID});
        resp.then(response => {          
            if(response.data.status){       
                context.dispatch('getSubCategory');
            }
         });
        return resp;  
      }

}
const mutations = {
    setCategoryValue: (state, items) => {
        state.SubCategory = items;
        console.log(items)
    },
    setSubCategoryValue: (state, items) => {
        state.SubCategoryDetail = items;
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