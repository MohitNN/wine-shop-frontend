import config from '@/config.json'
import axios from "axios";

const baseURL = config.baseUrl

const state = {
    getAdminProfile:[],
    getUserProfile:[]
}
const actions = {
    updateProfile: (context,data) => {
        const URl = `${baseURL}api/update-profile`
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email',data.email);
        if(data.image) {
            formData.append('image', data.image);  
        }
        const resp = axios.post(URl,formData);
        resp.then(response => {
            console.log(response)
            if(response.data.status){       
                context.dispatch('getProfile');
            }
         });
        return resp;   
      }, 
      getProfile: (context) => {        
        const URl = `${baseURL}api/admin/get-user`
        const resp = axios.post(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('GET_PROFILE', response.data.data);               
            }
         });  
         return resp;   
      },
      updateUserProfile: (context,data) => {
        const URl = `${baseURL}api/update-profile`
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('email',data.email);
        if(data.image) {
            formData.append('image', data.image);  
        }
        const resp = axios.post(URl,formData);
        resp.then(response => {
            console.log(response)
            if(response.data.status){       
                context.dispatch('getUserProfile');
            }
         });
        return resp;   
      },
      getUserProfile: (context) => {        
        const URl = `${baseURL}api/user/get-user`
        const resp = axios.post(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('GET_USER_PROFILE', response.data.data);               
            }
         });  
         return resp;   
      },
}
const mutations = {
    GET_PROFILE: (state, items) => { 
        state.getAdminProfile = items;   
    },
    GET_USER_PROFILE: (state, items) => { 
        state.getUserProfile = items;   
    },
}
const getters = {
    getProfileData: (state) => {
       return state.getAdminProfile;
    },
    getProfileUserData: (state) => {
       return state.getUserProfile;
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}