<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Product</h5>
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-5">
                                <div class="add-product">
                                    <div class="row">
                                        <div class="col-xl-9 xl-50 col-sm-6 col-9">
                                            <!--src="../../assets/images/pro3/33.jpg"-->
                                            <img src="@/assets/admin/images/pro3/33.jpg" class="img-fluid image_zoom_1 blur-up lazyloaded" />
                                        </div>
                                        <div class="col-xl-3 xl-50 col-sm-6 col-3">
                                            <ul class="file-upload-product">
                                                <li v-for="(i, index) in image" :key="index">
                                                    <img :src="i" class="box-input-file" />
                                                    <feather style="cursor: pointer;" type="x" stroke-width="1" size="20px" class="icon" @click="removeImage(index)"></feather>
                                                </li>
                                                <li>
                                                    <div class="box-input-file">
                                                        <input class="upload" type="file" @change="onFileChange" />
                                                        <feather type="plus"></feather>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7">
                                <form class="needs-validation add-product-form" novalidate="">
                                    <div class="form">
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                            <input placeholder="Product Name" v-model="products.ProductName" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" required="" />
                                            <div class="valid-feedback">Looks good!</div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Brand :</label>
                                            <select v-model="products.brand" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option value="">Select Brand</option>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                <option>Extra Large</option>
                                            </select>
                                        </div>
                                        <div class="form-group row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Category :</label>
                                            <select v-model="products.category" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option value="">Select Category</option>
                                                <option>Small</option>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                <option>Extra Large</option>
                                            </select>
                                        </div>
                                        <div class="form-group row">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Sub Category :</label>
                                            <select v-model="products.subCategory" class="form-control digits col-xl-8 col-sm-7" id="exampleFormControlSelect1">
                                                <option value="">Select Sub Category</option>
                                                <option>Small</option>
                                                <option>Medium</option>
                                                <option>Large</option>
                                                <option>Extra Large</option>
                                            </select>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-sm-4">Description :</label>
                                            <div class=" col-xl-8 col-sm-7 editor-vue">
                                                <vue-editor v-model="products.content"></vue-editor>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                                            <fieldset class="qty-box col-xl-9 col-xl-8 col-sm-7 pl-0 qty-responsive">
                                                <div class="input-group flex-nowrap">
                                                    <b-input-group-prepend>
                                                        <b-btn variant="primary" @click="decrement">-</b-btn>
                                                    </b-input-group-prepend>
                                                    <b-input type="text" name="quantity" class="form-control input-number" v-model="products.counter" />
                                                    <b-input-group-append>
                                                        <b-btn variant="primary" @click="products.counter++">+</b-btn>
                                                    </b-input-group-append>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Price :</label>
                                            <input class="form-control col-xl-8 col-sm-7" placeholder="Price" v-model="products.price" id="validationCustom02" type="text" required="" />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Fake Price :</label>
                                            <input class="form-control col-xl-8 col-sm-7" placeholder="Fake Price" id="validationCustom02" v-model="products.fakePrice" type="text" required="" />
                                        </div>
                                        <div class="form-group mb-3 row">
                                            <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Discount :</label>
                                            <input class="form-control col-xl-8 col-sm-7" placeholder="Discount" id="validationCustom02" v-model="products.discount" type="text" required="" />
                                        </div>
                                        <div class="form-group row dd d-block">
                                            <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Status :</label>
                                            <input  id="validationCustom02" type="checkbox" required="" /> On Sell
                                        </div>
                                    </div>
                                    <div class="offset-xl-3 offset-sm-4">
                                        <button type="button" @click="sawProduct" class="btn btn-primary">Add</button>
                                        <button type="button" class="btn btn-light ml-1">
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
        layout,
    },
    data(){
      return{
        image: [],
        imageUrl: "../../assets/images/pro3/33.jpg",
        getImgUrl:"@assets/images/",
        products:{
            ProductName:"",
            category:"",
            subCategory:"",
            brand:"",
            counter: 0,
            content: "",
            price:"",
            fakePrice:"",
            discount:""
        }
      }
    },
    methods: {
    sawProduct(){
            this.setProducts(this.products)
        },
        ...mapActions({
            setProducts: "Products/setProducts",
        }), 
    decrement() {
      if (this.products.counter > 1) this.products.counter--;
    },
    onFileChange(e) {
      var files = e.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.image.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage: function(index) {
      console.log("index", index);
      this.image.splice(index, 1);
    }
    }
};
</script>
