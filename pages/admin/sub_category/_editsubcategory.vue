<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Sub Category</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="Category">
                                            <div class="form-group row">
                                                <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Category :</label>
                                                <v-select name="Category" placeholder="Select Category" v-model="SubCategoryData.category_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="getCategoryList" :reduce="(c) => c.id" label="name" index="id" @input="getCategoryTotype"></v-select>
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                <div class="col-xl-8 col-sm-7 p-0 validation">
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </div>
                                        </ValidationProvider>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="Type">
                                            <div class="form-group mb-3 row">
                                                <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Type :</label>
                                                <v-select name="Type" placeholder="Select Category" v-model="SubCategoryData.type_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="type_List ? type_List : []" :reduce="(c) => c.id" label="type_name"></v-select>
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                <div class="col-xl-8 col-sm-7 p-0 validation">
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </div>
                                        </ValidationProvider>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="Type">
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                <input class="form-control col-xl-8 col-sm-7" v-model="SubCategoryData.name" id="validationCustom01" type="text" required="" />
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                <div class="col-xl-8 col-sm-7 p-0 validation">
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </div>
                                        </ValidationProvider>
                                        <!-- <div class="form-group row">
                                            <label class="col-xl-3 col-md-4">Description :</label>
                                            <textarea rows="4" class="col-xl-8 col-md-7" v-model="SubCategoryData.description"></textarea>
                                        </div> -->
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-md-4"></label>
                                        <button type="button" @click="update" class="btn btn-primary">Update</button>
                                        <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/sub_category')">
                                            Discard
                                        </button>
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
    mapState,
    mapActions
} from "vuex";
export default {
    components: {
        layout
    },
    data() {
        return {
            image: '',
            SubCategoryData: {
                name: '',
                // description: '',
                category_id: '',
                type_id: "",
                id: this.$route.params.editsubcategory,
            }
        }
    },
    computed: {
        ...mapState("types", ["Type"]),
        // ...mapState("Products", ["type_List"]),

        ...mapState({
            SubCategoryDetail: state => state.subCategory.SubCategoryDetail,
            Category: state => state.category.Category.data,
            type_List: state => state.Products.type_List,
        }),
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
                this.getTypes();
                return TypeArray;
            }
        },
        getdatasub() {
            return this.SubCategoryDetail;
        }
    },
    mounted() {
        this.SubCategoryData.name = this.getdatasub.name
        // this.SubCategoryData.description = this.getdatasub.description
        this.SubCategoryData.category_id = this.getdatasub.category_id
        this.SubCategoryData.type_id = this.getdatasub.type_id
    },
    methods: {
        ...mapActions({
            getSubCategory: "subCategory/setSubCategory",
            getCategory: "category/getCategory",
            updateSubCategory: "subCategory/updateSubCategory",
            getTypes: "types/getType",
            getTypeFormCategory: "Products/getTypeFormCategory",
        }),
        update() {
            this.updateSubCategory(this.SubCategoryData).then(response => {
                if (response.data.status) {
                    this.$toast.success("Update SubCategory Successfully..!");
                    this.$router.push('/admin/sub_category')
                }
            });

        },
        getCategoryTotype(data) {
            // console.log()
            this.getTypeFormCategory(data);
            this.this.SubCategoryData.type_id = null
            // this.SubCategoryData.type_id = null;
        },
    }
};
</script>
