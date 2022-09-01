<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Types</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="Category">
                                                <div class="form-group mb-0 row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 pl-0 pl-lg-4 pl-md-4 pl-xl-4 col-sm-4 mb-0">Select Category :</label>
                                                    <v-select name="Category" placeholder="Select Type" v-model="type.category_id" class="col-xl-8 col-sm-7 pl-0 pl-lg-4 pl-md-4 pl-xl-2" :options="getCategoryList.data" :reduce="(c) => c.id" label="name" index="id"></v-select>
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-2 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="type name">
                                                <div class="form-group m-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Type Name :</label>
                                                    <input name="type name" v-model="type.type_name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" placeholder="Type Name" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-2 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4"></label>
                                            <button type="button" @click="addType" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">
                                                Add
                                            </button>
                                            <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/type')">
                                                Discard
                                            </button>
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
} from "vuex";
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
    data() {
        return {
            type: {
                type_name: "",
                category_id: "",
            },
        };
    },
    computed: {
        ...mapState("category", ["Category"]),
        getCategoryList() {
            const CategoryArray = this.Category;
            if (CategoryArray.length != 0) {
                return CategoryArray;
            } else {
                this.getCategory();
                return CategoryArray;
            }
        },
    },
    methods: {
        ...mapActions({
            setTypes: "types/setType",
            getCategory: "category/getCategory",
        }),
        addType() {
            this.setTypes(this.type).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add type Successfully..!");
                    this.$router.push('/admin/type')
                }
            });
        },
    },
};
</script>


