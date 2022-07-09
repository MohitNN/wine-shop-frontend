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
                                                <label for="validationCustom0" class="col-xl-3 col-md-4">Coupon name : </label>
                                                <input v-model="coupon.coupon_name" class="form-control col-md-7" placeholder="Coupaon name" id="validationCustom0" type="text" required="" />
                                            </div>
                                            <div class="form-group row">
                                                <label for="validationCustom1" class="col-xl-3 col-md-4">Coupon Code : </label>
                                                <input v-model="coupon.coupon_code" class="form-control col-md-7" placeholder="Coupon Code" id="validationCustom1" type="text" required="" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Start Date</label>
                                                <input v-model="coupon.start_date" class="datepicker-here form-control digits col-md-7" type="date" data-language="en" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">End Date</label>
                                                <input v-model="coupon.end_date" class="datepicker-here form-control digits col-md-7" type="date" data-language="en" />
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4">Status</label>
                                                <label class="d-block" for="chk-ani">
                                                    <input v-model="coupon.status" true-value="1" false-value="0" class="checkbox_animated" id="chk-ani" type="checkbox" />
                                                    Enable the Coupon
                                                </label>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4"></label>
                                                <button type="button" @click="savacoupon" class="btn btn-primary">Save</button>
                                                <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/coupon')">
                                                    Discard
                                                </button>
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
import {
    mapActions
} from 'vuex';
export default {
    components: {
        layout
    },
    data() {
        return {
            image: '',
            coupon: {
                coupon_name: "",
                coupon_code: "",
                status: 0,
                start_date: "",
                end_date: ""
            }
        }
    },
    methods: {
        savacoupon() {
            this.setCoupon(this.coupon).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add Coupon Successfully..!");
                    this.$router.push('/admin/coupon')
                }
            })
        },
        ...mapActions({
            setCoupon: "coupon/setCoupon",
        }),
    }
};
</script>
