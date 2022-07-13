<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit category</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                                <div class="form-group mb-0 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <input v-model="category.name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" />
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="description">
                                                <div class="form-group mb-0 row">
                                                    <label class="col-xl-3 col-md-4">Description :</label>
                                                    <textarea name="description" class="form-control col-xl-8 col-sm-7" v-model="category.description" required=""></textarea>
                                                </div>
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                                    <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
                                                        <span class="validate-error">{{ errors[0] }}</span>
                                                    </div>
                                                </div>
                                            </ValidationProvider>
                                        </div>
                                        <div class="offset-xl-3 offset-sm-4">
                                            <button type="button" @click="update" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid" class="btn btn-primary">Update</button>
                                            <button type="button" @click="$router.push('/admin/category')" class="btn btn-light ml-1">
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
    mapActions
} from "vuex";
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
            category: {
                name: '',
                description: '',
                id: this.$route.params.editcategory,
            },
        }
    },
    created() {
        this.getCategoryDetails(this.category.id).then((response) => {
            if (response.data.status) {
                const data = response.data.data
                this.category.name = data.name
                this.category.description = data.description
            }
        })
    },
    methods: {
        ...mapActions({
            getCategoryDetails: "category/get_single_category",
            updateCategory: "category/updateCategory",
        }),
        update() {
            this.updateCategory(this.category).then(response => {
                if (response.data.status) {
                    this.$toast.success("Update Brand Successfully..!");
                    this.$router.push('/admin/category')
                }
            });
        },
    }
};
</script>
