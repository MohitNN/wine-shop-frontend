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
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <div class="form-group row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Category :</label>
                                            <select v-model="subcategory.category_id" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option value="">Select Category</option>
                                                <option v-for="item in getCategoryList.data" :key="item.id" :value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Type :</label>
                                            <select v-model="subcategory.type_id" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option selected value="">Select Type</option>
                                                <option v-for="type in getTypeList.data" :key="type.id" :value="type.id">
                                                    {{ type.type_name }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input v-model="subcategory.name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" placeholder="Name" />
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4">Description :</label>
                                            <textarea v-model="subcategory.description" placeholder="Description" rows="4" class="col-xl-8 col-md-7"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-md-4"></label>
                                        <button type="button" @click="getSubCategorys" class="btn btn-primary">
                                            Add
                                        </button>
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
    mapActions,
    mapState
} from "vuex";
export default {
    components: {
        layout,
    },
    data() {
        return {
            image: "",
            subcategory: {
                name: "",
                description: "",
                category_id: "",
                type_id:""
            },
        };
    },
    computed: {
        ...mapState("category", ["Category"]),
        ...mapState("types", ["Type"]),
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
                this.getType();
                return TypeArray;
            }
        }
    },
    methods: {
        ...mapActions({
            setSubCategory: "subCategory/setSubCategory",
            getCategory: "category/getCategory",
            getType : "types/getType",
        }),
        getSubCategorys() {
            this.setSubCategory(this.subcategory).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add SubCategory Successfully..!");
                    this.$router.push('/admin/sub_category')
                }
            });
        },
    },
};
</script>
