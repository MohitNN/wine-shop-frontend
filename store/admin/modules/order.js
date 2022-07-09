import config from '@/config.json'
import axios from "axios";

const  baseURL = config.baseUrl

const state = {
    order : [],
    orderDetails:[]
}
const getters = {
    getOrders: (state) => {
        return state.order;
    },
}
const mutations = {
    setOrderValue: (state, items) => {   
        state.order = items;   
    },
    setOrderDetailsValue: (state, items) => {
        state.orderDetails = items;
        console.log(items)
    },
}

const actions = {
    getOrder: (context,page=1) => {        
        const URl = `${baseURL}api/admin/get-order?page=${page}`
        const resp = axios.get(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('setOrderValue', response.data.data);               
            }
         });         
    },

    setBrand: (context, items) => {
        const URl = `${baseURL}api/admin/add-order`      
        let formData = new FormData();
        formData.append('name', items.brandName);
        formData.append('detail',items.brandDescription);
        formData.append('image', items.logo);
        const resp = axios.post(URl,formData);
        resp.then(response => {
            if(response.data.status){       
                context.dispatch('getOrder');               
            }
         });
        return resp;   
      },

      get_single_order: (context , item) => {        
        context.commit('setOrderDetailsValue', item);
      },
     
      updateOrder: (context,id) => { 
        const URl = `${baseURL}api/admin/add-order`      
        const resp = axios.post(URl,id);
        resp.then(response => {
            if(response.data.status){       
                context.dispatch('getOrder');               
            }
         });
        return resp;   
      },
      deleteOrder:(context,OrderID) => {
        const URl = `${baseURL}api/admin/delete-order`        
        const resp = axios.post(URl,{id: OrderID});
        resp.then(response => {          
            if(response.data.status){       
                context.dispatch('getOrder');
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