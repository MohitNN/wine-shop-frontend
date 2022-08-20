<template>
<layout>
    <template v-slot:content>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Edit Product</h5>
                        <!-- {{products}} -->
                    </div>
                    <div class="card-body">
                        <div class="row product-adding">
                            <div class="col-xl-5">
                                <div class="add-product">
                                    <div class="row">
                                        <div class="col-xl-9 xl-50 col-sm-6 col-9 d-flex justify-content-center">
                                            <!--src="../../assets/images/pro3/33.jpg"-->
                                            <img :src="imageUrlSet + products.product_images[0].image" v-if=" products.product_images && products.product_images.length " id="sawImg" class="img-fluid image_zoom_1 blur-up lazyloaded" />
                                            <img src="@/assets/images/imgPerview.png" style="object-fit: contain !important" v-else id="sawImg" class="img-fluid image_zoom_1 blur-up lazyloaded" />
                                        </div>
                                        <div class="col-xl-3 xl-50 col-sm-6 col-3">
                                            <ul class="file-upload-product">
                                                <!-- <ul v-if="products.product_images && products.product_images.length && products.product_images != undefined" class="file-upload-product"> -->
                                                <li v-for="(i, index) in products.product_images" :key="index">
                                                    <img @click="preview(i)" :src="imageUrlSet + i.image" class="box-input-file" />
                                                    <feather style="cursor: pointer" type="x" stroke-width="1" size="20px" class="icon" @click="removeImage(i)"></feather>
                                                </li>
                                                <li style="cursor: pointer">
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
                                <ValidationObserver v-slot="{ invalid }">
                                    <form class="needs-validation add-product-form" novalidate="">
                                        <div class="form">
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                                <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Name :</label>
                                                    <input name="name" placeholder="Product Name" v-model="products.product_name" class="form-control col-xl-8 col-sm-7" id="validationCustom01" type="text" />
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="brand">
                                                <div class="form-group row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Brand :</label>
                                                    <v-select placeholder="Select Brand" v-model="products.brand_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="brand" name="brand" label="name" :reduce="(c) => c.id" index="id"></v-select>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="category">
                                                <div class="form-group row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Category :</label>
                                                    <v-select name="category" placeholder="Select Category" v-model="products.category_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="category" :reduce="(c) => c.id" @input="getCategoryTotype" label="name" index="id"></v-select>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="type">
                                                <div class="form-group row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Type :</label>
                                                    <v-select name="type" placeholder="Select Category" v-model="products.type_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="type_List" :reduce="(c) => c.id" label="type_name" index="id"></v-select>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <ValidationProvider rules="required" v-slot="{ errors }" name="subcategory">
                                                <div class="form-group row">
                                                    <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Sub Category :</label>
                                                    <v-select name="subcategory" placeholder="Select Sub Category" v-model="products.sub_category_id" class="col-xl-8 col-sm-7 pr-0 pl-0" :options="subCategory" :reduce="(c) => c.id" :disabled="subCategory.length > 0 ? false : true" label="name"></v-select>
                                                    <span class="validate-error">{{ errors[0] }}</span>
                                                </div>
                                            </ValidationProvider>
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-sm-4 mb-0">Total Products :</label>
                                                <fieldset class="qty-box col-xl-9 col-xl-8 col-sm-7 pl-0 qty-responsive">
                                                    <div class="input-group flex-nowrap">
                                                        <b-input-group-prepend>
                                                            <b-btn variant="primary" @click="decrement">-</b-btn>
                                                        </b-input-group-prepend>
                                                        <b-input type="text" name="quantity" class="form-control input-number" v-model="products.quantity" />
                                                        <b-input-group-append>
                                                            <b-btn variant="primary" @click="products.quantity++">+</b-btn>
                                                        </b-input-group-append>
                                                    </div>
                                                </fieldset>
                                            </div>
                                            <div class="form-group mb-0 row">
                                                <label class="col-xl-3 col-md-4">Description :</label>
                                                <textarea name="description" class="form-control col-xl-8 col-sm-7" v-model="products.description" required=""></textarea>
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0"></label>
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Price :</label>
                                                <input class="form-control col-xl-8 col-sm-7" placeholder="Price" v-model="products.price" id="validationCustom02" type="text" required="" />
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">Fake Price :</label>
                                                <input class="form-control col-xl-8 col-sm-7" placeholder="Fake Price" id="validationCustom02" v-model="products.fake_price" type="text" required="" />
                                            </div>
                                            <div class="form-group mb-3 row">
                                                <label for="validationCustom02" class="col-xl-3 col-sm-4 mb-0">discount :</label>
                                                <input class="form-control col-xl-8 col-sm-7" placeholder="discount" id="validationCustom02" v-model="products.discount" type="text" required="" />
                                            </div>
                                            <div class="form-group mb-3 row"></div>
                                            <div class="form-group row dd d-block">
                                                <label for="exampleFormControlSelect1" class="col-xl-3 col-sm-4 mb-0">Status :</label>
                                                <input id="validationCustom02" type="checkbox" required="" v-model="products.onsell" />
                                                On Sale
                                            </div>
                                        </div>
                                        <div class="offset-xl-3 offset-sm-4">
                                            <button type="button" @click="sawProduct" class="btn btn-primary" :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'" :disabled="invalid">
                                                Update
                                            </button>
                                            <button type="button" class="btn btn-light ml-1" @click="$router.push('/admin/product')">
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
import config from "@/config.json";

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
    computed: {
        ...mapState("Products", [
            "category",
            "brand",
            "subCategory",
            "singleProduct",
            "type_List",
        ]),
        productSingle() {
            return this.singleProduct;
        },
    },
    data() {
        return {
            image: [],
            imageFile: [],
            productsData: null,
            imageUrlSet: config.baseUrl + "products/",
            imageUrl: "../../assets/images/pro3/33.jpg",
            getImgUrl: "@assets/images/",
            products: {
                product_name: "",
                category_id: null,
                type_id: null,
                sub_category_id: null,
                brand_id: null,
                quantity: 0,
                price: 0,
                fake_price: 0,
                discount: 0,
                onsell: true,
                id: null,
                description:""
            },
            img: "@/assets/images/imgPerview.png",
        };
    },
    created() {
        this.getAllCategory();
        this.getBrand();
    },
    mounted() {
        this.init();
    },
    methods: {
        async init() {
            await this.getAllCategory();
            await this.getBrand();
            await this.getSingleProduct(this.$route.params.editProduct)
                .then((resp) => {
                    if (resp.data.status) {
                        this.products = resp.data.data;
                    }
                })
                .catch((error) => {});
        },
        preview(i) {
            document.getElementById("sawImg").src = this.imageUrlSet + i.image;
        },
        sawProduct() {
            var formData = new FormData();
            formData.append("product_name", this.products.product_name);
            formData.append("id", this.$route.params.editProduct);
            formData.append("category_id", this.products.category_id);
            formData.append("type_id", this.products.type_id);
            formData.append(
                "sub_category_id",
                this.products.sub_category_id ? this.products.sub_category_id : null
            );
            formData.append("brand_id", this.products.brand_id);
            formData.append("description", this.products.description);
            formData.append("quantity", this.products.quantity);
            formData.append("price", this.products.price);
            formData.append("fake_price", this.products.fake_price);
            formData.append("discount", this.products.discount);
            formData.append("onsell", this.products.onsell ? true : false);
            this.imageFile.forEach((element, index) => {
                formData.append(`image[${index}]`, element);
            });
            this.saveProduct(formData)
                .then((resp) => {
                    if (resp.data.status) {
                        this.$toast.success("Product added");
                        this.$router.push("/admin/product");
                    }
                })
                .catch((error) => {
                    this.$toast.error("Something went wrong.");
                });
        },
        ...mapActions({
            saveProduct: "Products/EditProduct",
            getAllCategory: "Products/getCategory",
            getBrand: "Products/getBrand",
            getSingleProduct: "Products/getSingleProduct",
            getSubCategory: "Products/getSubCategory",
            getType: "Products/getType",
            productImageDelete: "Products/productImageDelete",
            getTypeFormCategory: "Products/getTypeFormCategory",
        }),
        decrement() {
            if (this.products.quantity > 1) this.products.quantity--;
        },
        getSubCateFromcate(data) {
            this.getSubCategory(data);
        },
        async onFileChange(e) {
            var files = e.target.files;
            console.log(files);
            if (!files.length) return;
            //   this.createImage(files[0]);
            //   this.storeImage(files[0]);
            await this.imageFile.push(files[0]);
            this.products.image = this.imageFile;
            this.products.onsell = this.products.onsell ? true : false;
            await this.saveProduct(this.products).then((resp) => {
                if (resp.data.status) {
                    this.getSingleProduct(this.$route.params.editProduct)
                        .then((resp) => {
                            if (resp.data.status) {
                                this.products = resp.data.data;
                            }
                        })
                        .catch((error) => {});
                }
            });

            //   var reader = new FileReader();
            //   reader.onload = function () {
            //     var output = document.getElementById("sawImg");
            //     output.src = reader.result;
            //   };
            //   reader.readAsDataURL(e.target.files[0]);
        },
        storeImage(file) {
            this.imageFile.push(file);
        },
        createImage(file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.products.product_images.push({
                    image: e.target.result,
                });
            };
            reader.readAsDataURL(file);
        },

        removeImage: function (index) {
            //   this.image.splice(index, 1);
            //   var output = document.getElementById("sawImg");
            //   output.src = "";
            this.productImageDelete(index.id).then((resp) => {
                if (resp.data.status) {
                    this.$toast.success("Product delete");
                    this.init();
                }
            });
        },
        getCategoryTotype(data) {
            this.products.type_id = "";
            this.products.sub_category_id = "";
            this.getTypeFormCategory(data);
        },
    },
};
</script>
