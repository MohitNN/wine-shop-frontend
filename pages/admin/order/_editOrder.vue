<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Order</h5>
                    </div>
                   
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation" novalidate="">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label for="validationCustom0" class="col-xl-3 col-md-4">Product Name : </label>
                                                <p>{{ order.product_id }}</p>
                                            </div>
                                            <div class="form-group row">
                                                <label for="validationCustom1" class="col-xl-3 col-md-4">Order Status : </label>
                                                <select v-model="order.order_status" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                    <option value="">Select Status</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Accept">Accept</option>
                                                    <option value="Delivered">Delivered</option>
                                                    <option value="Cancelled">Cancelled</option>
                                                </select>
                                        </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Payment Status : </label>
                                                <select v-model="order.payment_status" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                    <option value="">Payment Status</option>
                                                    <option value="Paid">Paid</option>
                                                    <option value="Unpaid">Unpaid</option>
                                                </select>
                                            </div>
                                           
                                             <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Total : </label>
                                                <p>{{ order.total }}$</p>
                                            </div>
                                            <div class="float-right" style="width: 76%;">
                                                <button type="button" @click="update" class="btn btn-primary">Update</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import { mapActions , mapState } from 'vuex';
export default {
    components: {
        layout
    },
    data() {
        return {
            image: '',
            order:{
                product_id:"",
                order_status:"",
                payment_status:"", 
                start_date:"",
                end_date:"",               
                total:"",
                id:this.$route.params.editOrder,
            }
        }
    },
     computed: {
        ...mapState({
            orderDetails: state => state.order.orderDetails,
        }),
        getorder() {
            return this.orderDetails;
        }
    },
    mounted() {
        this.order.product_id = this.getorder.product_id
        this.order.order_status = this.getorder.order_status
        this.order.payment_status = this.getorder.payment_status        
        this.order.start_date = this.getorder.start_date        
        this.order.end_date = this.getorder.end_date        
        this.order.total = this.getorder.total
    },
    methods: {
        coupon(){
            this.setCoupon(this.productCoupon)
        },
        ...mapActions({
            updateOrder: "order/updateOrder",
        }), 
         update(){
            this.updateOrder(this.order).then(response => {
            if(response.data.status){       
                this.$toast.success("Update Order Successfully..!");
                this.$router.push('/admin/order')              
            }
         });
        },
    }
};
</script>
