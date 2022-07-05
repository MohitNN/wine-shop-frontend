<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Category</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input class="form-control col-xl-8 col-sm-7" placeholder="Name" id="validationCustom01" type="text" v-model="category.name" required="" />
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-md-4">Description :</label>
                                            <textarea class="form-control col-xl-8 col-sm-7" v-model="category.description" required=""></textarea>
                                        </div>
                                    </div>
                                    <div class="offset-xl-3 offset-sm-4">
                                        <button type="button" @click="saveCategory" class="btn btn-primary">Add</button>
                                        <button type="button" @click="$router.push('/admin/category')" class="btn btn-light ml-1">
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
import { mapActions } from 'vuex';
export default {
    components: {
        layout
    },
    data() {
        return{
            category:{
                name:'',
                description : ''
            }
        }
    },
    methods: {
        ...mapActions({
            setCategory: "category/setCategory",
        }), 
        saveCategory(){
            this.setCategory(this.category).then(Response=>{
                if(Response.data.status){
                   this.$toast.success("Add Category Successfully..!");
                   this.$router.push('/admin/category')                   
                }                
            })
        },
    }
};
</script>
