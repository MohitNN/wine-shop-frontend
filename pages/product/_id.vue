<template>
<div>
    <section class="section-b-space">
        <div class="collection-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <productSidebar />
                    </div>
                    <div class="col-lg-9 col-sm-12 col-xs-12 productdetail">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide" style="display: flex; justify-content: center" v-for="(
                            product, index
                          ) in productDetail.product_images" :key="index">
                                                <img :src="getImgUrl(product.image)" :id="product.image_id" class="img-fluid bg-img" :alt="product.alt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12 slider-nav-images">
                                            <div v-swiper:mySwiper1="swiperOption1">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide" v-for="(
                                product, index
                              ) in productDetail.product_images" :key="index">
                                                        <img :src="getImgUrl(product.image)" :id="product.image_id" class="img-fluid bg-img" alt="product.alt" @click="slideTo(index)" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 rtl-text">
                                    <div class="product-right">
                                        <div class="d-flex justify-content-between">
                                            <h2>{{ productDetail.product_name }}</h2>

                                            <div class="border-product">
                                                <div class="product-icon">
                                                    <form class="d-inline-block">
                                                        <button type="button" class="wishlist-btn" @click="addToWishlist(productDetail)">
                                                            <i class="fa fa-heart"></i>
                                                            <span class="title-font">Add To WishList</span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 v-if="productDetail.onsale">
                                            <span>{{ productDetail.discount }}% off</span>
                                        </h4>
                                        <div class="d-flex align-items-center">
                                            <span class="amount mr-3">RM/MYR {{ productDetail.price }}</span>
                                            <span class="mr-2"><strike>RM/MYR {{ productDetail.fake_price }}</strike></span>
                                            <span class="discount badge">{{ productDetail.discount }} %</span>
                                        </div>

                                        <div class="product-description border-product">
                                            <h5 class="avalibility">
                                                <span>In Stock</span>
                                            </h5>
                                            <h6 class="product-title">quantity</h6>
                                            <div class="qty-box">
                                                <div class="input-group">
                                                    <span class="input-group-prepend">
                                                        <button type="button" class="btn quantity-left-minus" data-type="minus" data-field @click="decrement()">
                                                            <i class="ti-angle-left"></i>
                                                        </button>
                                                    </span>
                                                    <input type="text" :disabled="true" name="quantity" class="form-control input-number" v-model="counter" />
                                                    <span class="input-group-prepend">
                                                        <button type="button" class="btn quantity-right-plus" data-type="plus" data-field @click="increment()">
                                                            <i class="ti-angle-right"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-buttons">
                                            <button class="btn btn-solid" title="Add to cart" @click="addToCart(productDetail, counter)" :disabled="counter > productDetail.stock">
                                                Add To Cart
                                            </button>
                                            <button class="btn btn-solid" title="buy now" @click="buyNow(productDetail, counter)" :disabled="counter > productDetail.stock">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section class="tab-product m-0">
                            <div class="row">
                                <div class="col-sm-12 col-lg-12">
                                    <b-tabs v-if="productDetail.description" card>
                                        <b-tab title="Description" style="padding: 10px 25px !important" active>
                                            <b-card-text v-html="productDetail.description"></b-card-text>
                                        </b-tab>
                                    </b-tabs>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <relatedProduct :products="reletedProductList" :productTYpe="productTYpe" :productId="productId" />
        <b-modal id="modal-1" size="md" centered hide-footer>
            <template v-slot:modal-title>{{ productDetail.title }}</template>
            <img src="@/assets/images/size-chart.jpg" alt="size-chart" class="img-fluid" />
        </b-modal>
    </section>

    <cartModel :openCart="cartval" :productData="cartProduct" @closeCart="cartval = false" />
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions
} from "vuex";

import Timer from "@/components/widgets/timer";
import productSidebar from "@/components/widgets/product-sidebar";
import relatedProduct from "@/components/widgets/related-products";
import config from "@/config.json";
import cartModel from "@/components/cart-model/cart-right-model";

export default {
    components: {
        cartModel,
        Timer,
        productSidebar,
        relatedProduct,
    },
    data() {
        return {
            counter: 1,
            activeColor: "",
            selectedSize: "",
            qty: "",
            size: [],
            productTYpe: "",
            productId: "",
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 20,
                freeMode: true,
            },
            swiperOption1: {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: true,
                centeredSlides: false,
            },
            cartval: false,
            cartProduct: {},
        };
    },
    computed: {
        ...mapState({
            currency: (state) => state.products.currency,
        }),
        ...mapState("products", ["productDetail", "reletedProductList"]),
        ...mapGetters({
            curr: "products/changeCurrency",
        }),
        swiper() {
            return this.$refs.mySwiper.swiper;
        },
    },
    mounted() {
        // For displaying default color and size on pageload
        this.getSingleProduct(this.$route.params.id);
        // this.relatedProducts()
        // this.getReletedProduct(this.$route.params.id)
    },
    methods: {
        ...mapActions("products", ["getSingleProduct", "getReletedProduct"]),
        priceCurrency: function () {
            this.$store.dispatch("products/changeCurrency");
        },
        addToWishlist: function (product) {
            this.$store.dispatch('products/addToWishlist', product)
        },
        discountedPrice(product) {
            const price = product.price - (product.price * product.discount) / 100;
            return price;
        },
        // Related Products display
        relatedProducts() {
            this.productTYpe = this.productDetail.type;
            this.productId = this.productDetail.id;
        },
        // Display Unique Color
        Color(variants) {
            const uniqColor = [];
            for (let i = 0; i < Object.keys(variants).length; i++) {
                if (uniqColor.indexOf(variants[i].color) === -1) {
                    uniqColor.push(variants[i].color);
                }
            }
            return uniqColor;
        },
        // add to cart
        addToCart: function (product, qty) {
            product.quantity = qty || 1;
            // this.$store.dispatch('cart/addToCart', product)

            this.cartval = true;
            this.cartProduct = product;
            this.$store.dispatch("cart/addToCart", product);
        },
        buyNow: function (product, qty) {
            product.quantity = qty || 1;
            this.$store.dispatch("cart/addToCart", product);
            this.$router.push("/page/account/checkout");
        },
        // Item Count
        increment() {
            if (this.counter < 10) {
                this.counter++;
            }
        },
        decrement() {
            if (this.counter > 1) this.counter--;
        },
        // Change size variant
        changeSizeVariant(variant) {
            this.selectedSize = variant;
        },
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        slideTo(id) {
            this.swiper.slideTo(id, 1000, false);
        },
        sizeVariant(id, slideId, color) {
            this.swiper.slideTo(slideId, 1000, false);
            this.size = [];
            this.activeColor = color;
            this.productDetail.variants.filter((item) => {
                if (id === item.image_id) {
                    this.size.push(item.size);
                }
            });
        },
    },
};
</script>

<style scoped>
.amount {
    font-size: 31px;
    color: #292524;
    font-weight: 600;
}

strike {
    font-size: 16px;
    color: grey;
}

.discount {
    font-size: 28px;
    color: #ff4c3b;
}
</style>
