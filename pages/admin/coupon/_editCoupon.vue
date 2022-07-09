<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Create Coupon</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation" novalidate="">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group row">
                                                <label for="validationCustom0" class="col-xl-3 col-md-4">Coupon name</label>
                                                <input v-model="Coupon.coupon_name" class="form-control col-md-7" id="validationCustom0" type="text" required="" />
                                            </div>
                                            <div class="form-group row">
                                                <label for="validationCustom1" class="col-xl-3 col-md-4">Coupon Code</label>
                                                <input v-model="Coupon.coupon_code" class="form-control col-md-7" id="validationCustom1" type="text" required="" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Start Date</label>
                                                <input v-model="Coupon.startDate" class="datepicker-here form-control digits col-md-7" type="text" data-language="en" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">End Date</label>
                                                <input v-model="Coupon.endDate" class="datepicker-here form-control digits col-md-7" type="text" data-language="en" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Status</label>
                                                <label class="d-block" for="chk-ani">
                                                    <input v-model="Coupon.status" class="checkbox_animated" id="chk-ani" type="checkbox" />
                                                    Enable the Coupon
                                                </label>
                                            </div>
                                            <div class="pull-right">
                                                <button type="button" @click="coupon" class="btn btn-primary">Save</button>
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
import { mapActions } from 'vuex';
export default {
    components: {
        layout
    },
    data() {
        return {
            image: '',
            Coupon:{
                coupon_name:"",
                coupon_code:"",
                status:"",
                startDate:"",
                endDate:""
            }
        }
    },
    methods: {
        coupon(){
            this.setCoupon(this.productCoupon)
        },
        ...mapActions({
            setCoupon: "setCoupons/setCoupon",
        }), 
    }
};
</script>
