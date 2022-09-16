import config from '@/config.json'
import axios from "axios";

const  baseURL = config.baseUrl

const state = {
    order : [],
    orderDetails:[],
    orderList:[]
}
const getters = {
    getOrders: (state) => {
        return state.order;
    },
    getOrdersList: (state) => {
        return state.orderList;
    },
}
const mutations = {
    setOrderValue: (state, items) => {   
        state.order = items;   
    },
    setOrderList: (state, items) => {   
        state.orderList = items;   
    },
    setOrderDetailsValue: (state, items) => {
        state.orderDetails = items;
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

    getOrderList: (context,page=1) => {        
        const URl = `${baseURL}api/user/get-order-lists?page=${page}`
        const resp = axios.get(URl);
        resp.then(response => {
            if(response.data.status){  
                context.commit('setOrderList', response.data.data);               
            }
         });         
    },

    updateOrderStatus: (context,data) => {   
        alert(JSON.stringify(data));     
        const URl = `${baseURL}api/admin/update-status`
        const resp = axios.post(URl , data);
        resp.then(response => {
            if(response.data.status){  
                context.dispatch('getOrder', 1);               
            }
         });      
        return resp;   

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