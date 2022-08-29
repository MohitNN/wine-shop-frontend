<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Payment Data</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="" enctype="multipart/form-data">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="acc_name">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Account Name :</label>
                                                    <input v-model="Payment.acc_name" class="form-control col-xl-8 col-sm-7" name="acc_name" placeholder="Account Name" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="bank_name">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Bank Name :</label>
                                                    <input v-model="Payment.bank_name" class="form-control col-xl-8 col-sm-7" name="bank_name" placeholder="Bank Name" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="branch">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Branch :</label>
                                                    <input v-model="Payment.branch" class="form-control col-xl-8 col-sm-7" name="branch" placeholder="Branch" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="acc_no">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Account No. :</label>
                                                    <input v-model="Payment.acc_no" class="form-control col-xl-8 col-sm-7" name="acc_no" placeholder="Name" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-md-4"></label>
                                                <button type="button" @click="submit()" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">Add</button>
                                                <button type="button" @click="$router.push('/admin/brand')" class="btn btn-light ml-1">
                                                    Discard
                                                </button>
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
    mapActions,
    mapState
} from 'vuex';
import {
    ValidationProvider,
    ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";

export default {
    components: {
        layout,
        ValidationProvider,
        ValidationObserver,
    },
    middleware: ["auth"],
    data() {
        return {
            Payment: {
                acc_name:"",
                bank_name:"",
                branch:"",
                acc_no:"",
                id:'',
            }
        }
    },
    mounted() {
        this.init()
    },
    computed: {        
        ...mapState('payment', ['getPayment']),
    },
    methods: {
        ...mapActions({
            setPayment: "payment/setPayment",
            getPaymentData: "payment/getPayment",
        }),
        init() {
           this.getPaymentData().then((res) => {
              if(res.data.status ) {
                 this.Payment.acc_no = res.data.data.acc_no;
                 this.Payment.acc_name = res.data.data.acc_name;
                 this.Payment.branch = res.data.data.branch;
                 this.Payment.bank_name = res.data.data.bank_name;
                 this.Payment.id = res.data.data.id;
              }
           })
        },
        submit() {
            this.setPayment(this.Payment).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add Payment Detail Successfully..!");
                    // this.$router.push('/admin/PaymentDetails')
                    this.init()
                }
            })
        },

    }
};
</script>
