<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Types</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                                <div class="form-group mb-0 row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 pl-4 col-sm-4 mb-0">Select Category :</label>
                                                    <v-select name="Category" placeholder="Select Type" v-model="type.category_id" class="col-xl-8 col-sm-7 p-0" :options="getCategoryList.data" :reduce="(c) => c.id" label="name" index="id"></v-select>
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
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Type Name :</label>
                                                    <input v-model="type.type_name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" name="name" type="text" required="" placeholder="Name" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4"></label>
                                            <button type="button" @click="getType" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">
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
            image: "",
            type: {
                type_name: "",
                category_id: "",
                id: this.$route.params.edittype,
            },
        };
    },
    computed: {
        ...mapState({
            typesDetail: state => state.types.singleType,
        }),
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
        getDataType() {
            return this.typesDetail;
        }
    },
    mounted() {
        this.type.type_name = this.getDataType.type_name
        this.type.category_id = this.getDataType.category_id
    },
    methods: {
        ...mapActions({
            setType: "types/setType",
            getCategory: "category/getCategory",
        }),
        getType() {
            this.setType(this.type).then(Response => {
                if (Response.data.status) {
                    this.$toast.success("Add SubCategory Successfully..!");
                    this.$router.push('/admin/type')
                }
            });
        },
    },
};
</script>
