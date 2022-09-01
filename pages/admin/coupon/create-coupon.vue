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
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation" novalidate="">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                                    <div class="form-group row">
                                                        <label for="validationCustom0" class="col-xl-3 col-md-4">Coupon Title : </label>
                                                        <input v-model="coupon.coupon_name" class="form-control col-md-7" placeholder="Coupaon name" name="name" id="validationCustom0" type="text" required="" />
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                </ValidationProvider>
                                                <ValidationProvider rules="required|min:6" v-slot="{ errors }" name="Coupon Code">
                                                    <div class="form-group row">
                                                        <label for="validationCustom1" class="col-xl-3 col-md-4">Coupon Code : </label>
                                                        <input name="Coupon Code" v-model="coupon.coupon_code" class="form-control col-md-7" placeholder="Coupon Code" id="validationCustom1" type="text" required="" />
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                </ValidationProvider>
                                                <ValidationProvider rules="required" v-slot="{ errors }" name="Start Date">
                                                    <div class="form-group row">
                                                        <label class="col-xl-3 col-md-4">Start Date</label>
                                                        <input name="Start Date" v-model="coupon.start_date" class="datepicker-here form-control digits col-md-7" type="date" data-language="en" />
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                </ValidationProvider>
                                                <ValidationProvider rules="required" v-slot="{ errors }" name="end date">
                                                    <div class="form-group row">
                                                        <label class="col-xl-3 col-md-4">End Date</label>
                                                        <input name="end date" v-model="coupon.end_date" class="datepicker-here form-control digits col-md-7" type="date" data-language="en" />
                                                    </div>
                                                    <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                </ValidationProvider>
                                                <div class="form-group row">
                                                    <label class="col-form-label col-xl-3 col-md-4">Status</label>
                                                    <div class="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
                                                        <label class="d-block" for="edo-ani">
                                                            <input class="radio_animated" id="edo-ani" @click="amount" v-model="coupon.selectedType" value="amount" type="radio" name="rdo-ani" />
                                                            Amount
                                                        </label>
                                                        <label class="d-block" for="edo-ani1">
                                                            <input class="radio_animated" id="edo-ani1" @click="discount" v-model="coupon.selectedType" value="discount" type="radio" name="rdo-ani" />
                                                            Discount
                                                        </label>
                                                    </div>
                                                </div>
                                                <div v-if="showAmount">
                                                    <ValidationProvider rules="required" v-slot="{ errors }" name="amount">
                                                        <div class="form-group row">
                                                            <label for="validationCustom1" class="col-xl-3 col-md-4">Amount : </label>
                                                            <input v-model="coupon.amount" class="form-control col-md-7" name="amount"  placeholder="Amount" id="validationCustom1" type="text" required="" />
                                                        </div>
                                                        <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                    </ValidationProvider>
                                                </div>
                                                <div v-else>
                                                    <ValidationProvider rules="required" v-slot="{ errors }" name="discount">
                                                        <div class="form-group row">
                                                            <label for="validationCustom1" class="col-xl-3 col-md-4">Discount : </label>
                                                            <input v-model="coupon.discount" name="discount" class="form-control col-md-7" placeholder="Discount" id="validationCustom1" type="number" min="0" max="100" required="" />
                                                        </div>
                                                        <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                    </ValidationProvider>
                                                </div>
                                                <div >
                                                    <ValidationProvider rules="required" v-slot="{ errors }" name="minOrder">
                                                        <div class="form-group row">
                                                            <label for="validationCustom1" class="col-xl-3 col-md-4">Min Order Value : </label>
                                                            <input v-model="coupon.minOrderValue" class="form-control col-md-7" name="minOrder"  placeholder="Minimum Order Value" id="validationCustom1" type="number"  required="" />
                                                        </div>
                                                        <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                                    </ValidationProvider>
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-xl-3 col-md-4"></label>
                                                    <button type="button" @click="savacoupon" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">Save</button>
                                                    <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/coupon')">
                                                        Discard
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </ValidationObserver>
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
import {
    ValidationProvider,
    ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
export default {
    components: {
        layout,
        ValidationProvider,
        ValidationObserver
    },
    data() {
        return {
            image: '',
            coupon: {
                coupon_name: "",
                coupon_code: "",
                status: 0,
                selectedType:'amount',
                start_date: "",
                end_date: "",
                minOrderValue:'',
                amount: 0,
                discount: 0
            },
            showAmount: true
        }
    },
    methods: {
        ...mapActions({
            setCoupon: "coupon/setCoupon",
        }),
        savacoupon() {
            this.setCoupon(this.coupon).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add Coupon Successfully..!");
                    this.$router.push('/admin/coupon')
                }
            })
        },
        amount() {
            this.showAmount = true
        },
        discount() {
            this.showAmount = false
        }
    }
};
</script>
