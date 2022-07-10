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
                                        <div class="form-group row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Category :</label>
                                            <select v-model="SubCategoryData.category_id" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option value="">Select Category</option>
                                                <option v-for="item in getCategoryList" :key="item.id" :value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Type :</label>
                                            <select v-model="SubCategoryData.type_id" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option selected value="">Select Type</option>
                                                <option v-for="type in getTypeList.data" :key="type.id" :value="type.id">
                                                    {{ type.type_name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input class="form-control col-xl-8 col-sm-7" v-model="SubCategoryData.name" id="validationCustom01" type="text" required="" />
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4">Description :</label>
                                            <textarea rows="4" class="col-xl-8 col-md-7" v-model="SubCategoryData.description"></textarea>
                                        </div>
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
                description: '',
                category_id: '',
                type_id:"",
                id:this.$route.params.editsubcategory,
            }
        }
    },
    computed: {
        ...mapState("types", ["Type"]),
        ...mapState({
            SubCategoryDetail: state => state.subCategory.SubCategoryDetail,
            Category: state => state.category.Category.data,
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
        getTypeList(){
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
        this.SubCategoryData.description = this.getdatasub.description
        this.SubCategoryData.category_id = this.getdatasub.category_id
        this.SubCategoryData.type_id = this.getdatasub.type_id
    },
    methods: {
        ...mapActions({
            getSubCategory: "subCategory/setSubCategory",
            getCategory: "category/getCategory",
            updateSubCategory: "subCategory/updateSubCategory",
            getTypes : "types/getType",
        }),
        update(){
            this.updateSubCategory(this.SubCategoryData).then(response => {
            if(response.data.status){       
                this.$toast.success("Update SubCategory Successfully..!");
                this.$router.push('/admin/sub_category')            
            }
         });
            
        },
    }
};
</script>
