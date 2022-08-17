<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Sub Category</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="Category">
                                                <div class="form-group mb-0 row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Category :</label>
                                                    <v-select name="Category" placeholder="Select Category" v-model="subcategory.category_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="getCategoryList.data" :reduce="(c) => c.id" label="name" index="id" @input="getCategoryTotype"></v-select>
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="Type">
                                                <div class="form-group mb-0 row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Type :</label>
                                                    <v-select name="type" placeholder="Select Type" v-model="subcategory.type_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="type_List" :reduce="(c) => c.id" label="type_name" index="id"></v-select>
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <input v-model="subcategory.name" name="name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" placeholder="Name" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <!-- <div class="form-group mb-0 row">
                                                <label class="col-xl-3 col-md-4">Description :</label>
                                                <textarea v-model="subcategory.description" placeholder="Description" rows="4" class="col-xl-8 col-md-7"></textarea>
                                            </div> -->
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4"></label>
                                            <button type="button" @click="getSubCategorys" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">
                                                Add
                                            </button>
                                            <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/sub_category')">
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
            image: "",
            subcategory: {
                name: "",
                // description: "",
                category_id: "",
                type_id: "",
            },
        };
    },
    computed: {
        ...mapState("category", ["Category"]),
        ...mapState("types", ["Type"]),
        ...mapState("Products", ["type_List"]),
        getCategoryList() {
            const CategoryArray = this.Category;
            if (CategoryArray.length != 0) {
                return CategoryArray;
            } else {
                this.getCategory();
                return CategoryArray;
            }
        },
        getTypeList() {
            const TypeArray = this.Type;
            if (TypeArray.length != 0) {
                return TypeArray;
            } else {
                this.getType();
                return TypeArray;
            }
        },
    },
    methods: {
        ...mapActions({
            setSubCategory: "subCategory/setSubCategory",
            getCategory: "category/getCategory",
            getType: "types/getType",
            getTypeFormCategory: "Products/getTypeFormCategory",
        }),
        getSubCategorys() {
            this.setSubCategory(this.subcategory).then((Response) => {
                if (Response.data.status) {
                    this.$toast.success("Add SubCategory Successfully..!");
                    this.$router.push("/admin/sub_category");
                }
            });
        },
        getCategoryTotype(data) {
            this.getTypeFormCategory(data);
        },
    },
};
</script>
