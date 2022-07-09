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
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Type Name :</label>
                                            <input v-model="type.type_name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" placeholder="Name" />
                                        </div>
                                        <div class="form-group row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Select Type :</label>
                                            <select v-model="type.category_id" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option value="">Select Type</option>
                                                <option v-for="item in getCategoryList.data" :key="item.id" :value="item.id">
                                                    {{ item.name }}
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-md-4"></label>
                                        <button type="button" @click="addType" class="btn btn-primary">
                                            Add
                                        </button>
                                        <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/type')">
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
