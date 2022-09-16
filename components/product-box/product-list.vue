<template>
<div>
    <div class="img-wrapper">
        <div class="lable-block">
            <span class="lable3">new</span>
            <span class="lable4 badge-primary" v-if="product.onsell">on sale</span>

            <div class="img-wrapper col-12">
                <div class="lable-block">
                    <span class="lable3" v-if="product.new">new</span>
                    <span class="lable4 badge-primary" v-if="product.sale">on sale</span>
                </div>
                <div class="front text-center">
                    <nuxt-link :to="{ path: '/product/'+product.id}">
                        <img :src='getImgUrl(dataImg ? dataImg :  "165710779030.png")' :id="product.id" class="img-fluid bg-img" :alt="product.title" :key="index" />
                    </nuxt-link>
                </div>
                <div class="back col-12">
                    <nuxt-link :to="{ path: '/product/'+product.id}">
                        <img :src='getImgUrl(dataImg ? dataImg :  "165710779030.png")' :id="product.id" class="img-fluid bg-img" :alt="product.title" :key="index" />
                    </nuxt-link>
                </div>
                <div class="cart-box " v-if="product.quantity != 0">
                    <button data-toggle="modal" data-target="#addtocart" title="Add to cart" @click="addToCart(product)">
                        <i class="ti-shopping-cart"></i>
                    </button>
                    <a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" v-b-modal.modal-lg variant="primary">
                        <i class="ti-search" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div class="product-detail text-center">
                <nuxt-link :to="{ path: '/product/'+product.id}">
                    <h6>{{ product.product_name }}</h6>
                </nuxt-link>
                <p>{{ product.description }}</p>
                <div class="d-flex justify-content-center">
                <h4 class="pr-3">{{$store.state.products.currency.symbol}} {{ product.price }}</h4>
                <h4 class="text-danger" v-if="product.discount != 0">
                    {{ product.discount }} %
                </h4>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
import config from '@/config.json'
export default {
    props: ['product', 'index'],
    data() {
        return {
            imageSrc: '',
            quickviewProduct: {},
            compareProduct: {},
            cartProduct: {},
            showquickview: false,
            showCompareModal: false,
            cartval: false,
            variants: {
                productId: '',
                image: ''
            },
            dismissSecs: 5,
            dismissCountDown: 0
        }
    },
    computed: {
        ...mapGetters({
            curr: 'products/changeCurrency'
        })
    },
    computed: {
        dataImg() {
            if (this.product.product_images && this.product.product_images.length) {
                this.product.product_images.forEach((item) => {
                    if (item.image) {
                        this.imageSrc = item.image
                        return false
                    }
                })
            }
            return this.imageSrc
        }
    },
    methods: {
        ...mapActions("products", ["addToWishlist"]),
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        addToCart: function (product) {
            this.cartval = true
            this.cartProduct = product
            product.max_quantity = product.quantity
            this.cartProduct.quantity = 1;
            this.$emit('opencartmodel', this.cartval, this.cartProduct)
            this.$store.dispatch('cart/addToCart', product)
            this.$toast.success("Item has been added to cart");
        },
        addToWishlist_: function (product) {
            this.dismissCountDown = this.dismissSecs
            this.$emit('showalert', this.dismissCountDown)
            this.addToWishlist(product)
        },
        showQuickview: function (productData) {
            this.showquickview = true
            this.quickviewProduct = productData
            this.$emit('openquickview', this.showquickview, this.quickviewProduct)
        },
        addToCompare: function (product) {
            this.showCompareModal = true
            this.compareProduct = product
            this.$emit('showCompareModal', this.showCompareModal, this.compareProduct)
            this.$store.dispatch('products/addToCompare', product)
        },
        productVariantChange(imgsrc) {
            this.imageSrc = imgsrc
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
            this.$emit('alertseconds', this.dismissCountDown)
        },
        discountedPrice(product) {
            const price = product.price - (product.price * product.discount / 100)
            return price
        },
        curr() {

        }
    }
}
</script>

<style scoped>

</style>
