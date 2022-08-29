<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Address</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="" enctype="multipart/form-data">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <input v-model="address.name" class="form-control col-xl-8 col-sm-7" name="name" placeholder="Name" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="phone">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Phone :</label>
                                                    <input v-model="address.phone" class="form-control col-xl-8 col-sm-7" name="phone" placeholder="Phone" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="address1">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Address 1 :</label>
                                                    <input v-model="address.address1" class="form-control col-xl-8 col-sm-7" name="address1" placeholder="Address 1" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="address2">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Address 2 :</label>
                                                    <input v-model="address.address2" class="form-control col-xl-8 col-sm-7" name="address2" placeholder="Address 2" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="zipcode">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Zipcode :</label>
                                                    <input v-model="address.zipcode" class="form-control col-xl-8 col-sm-7" name="zipcode" placeholder="Zipcode" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="state">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">State :</label>
                                                    <input v-model="address.state" class="form-control col-xl-8 col-sm-7" name="state" placeholder="State" id="validationCustom01" type="text" required="" />
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
        ValidationObserver,
    },
    middleware: ["auth"],
    data() {
        return {
            address: {
                name:"",
                phone:"",
                address1:"",
                address2:"",
                zipcode:"",
                state:""
            }
        }
    },
    methods: {
        ...mapActions({
            setAddress: "storeAddress/setAddress",
        }),

        submit() {
            this.setAddress(this.address).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add Address Successfully..!");
                    this.$router.push('/admin/storeAddress')
                }
            })
        },

    }
};
</script>
