<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Add Brand</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-7">
                                <form class="needs-validation add-product-form" novalidate="" enctype="multipart/form-data">
                                    <div class="form">
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input v-model="brand.brandName" class="form-control col-xl-8 col-sm-7" placeholder="Name" id="validationCustom01" type="text" required="" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Logo :</label>
                                            <input class="form-control col-xl-8 col-sm-7" id="validationCustom02" ref="file" type="file" required=""  @change="fileselected"  />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0"></label>
                                            <img v-if="image" :src="image" width="100px" height="100px" />
                                        </div>
                                        <div class="form-group d-flex">
                                            <label class="col-xl-3 col-sm-4">Detail :</label>
                                            <div  class=" col-xl-8 col-sm-7 editor-vue">
                                                <vue-editor v-model="brand.brandDescription"></vue-editor>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="offset-xl-3 offset-sm-4">
                                        <button type="button" @click="submit()" class="btn btn-primary">Add</button>
                                        <button type="button" @click="$router.push('/admin/brand')" class="btn btn-light ml-1">
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
     middleware: ["auth"],
    data() {
        return{
            image: '',
            brand:{
                brandName:'',
                brandDescription : '',
                logo:null
            }
        }
    },
    methods: {
        ...mapActions({
            setBrand: "brand/setBrand",
        }), 
        
        fileselected(e) {
            this.brand.logo = this.$refs.file.files[0];
            const file = e.target.files.item(0);
            const reader = new FileReader();
            reader.addEventListener('load', this.imageloaded);
            reader.readAsDataURL(file);
        },

        imageloaded(e) {
            this.image = e.target.result;
        },

        submit(){
            this.setBrand(this.brand).then(Response=>{
                if(Response.data.status){
                   this.$toast.success("Add Brand Successfully..!");
                   this.$router.push('/admin/brand')                   
                }                
            })
        },
      
    }
};
</script>
