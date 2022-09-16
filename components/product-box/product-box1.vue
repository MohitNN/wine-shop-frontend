<template>
<div>
    <div class="img-wrapper" style="position: relative;">
        <div class="lable-block">
            <!-- <span class="lable3" v-if="product.new">new</span> -->
            <span class="lable4 badge-primary" v-if="product.onsell">on sale</span>
        </div>
        <div class="front">
            <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                <img :src='imageSrc ? getImgUrl(imageSrc) : getImgUrl(product.product_images[0].image)' v-if="product.product_images" :id="product.id" class="img-fluid bg-img" :alt="product.title" :key="index" />
            </nuxt-link>
        </div>
        <ul class="product-thumb-list">
            <li class="grid_thumb_img" :class="{active: imageSrc === image.image}" v-for="(image,index) in product.product_images" :key="index" @click="productVariantChange(image.image)">
                <a href="javascript:void(0);" v-if="product.product_images">
                    <img :src="getImgUrl(image.image)" />
                </a>
            </li>
        </ul>
       <div class="cart-box " v-if="product.quantity != 0">
            <button data-toggle="modal" data-target="#addtocart" title="Add to cart" @click="addToCart(product)">
                <i class="ti-shopping-cart"></i>
            </button>
            <a href="javascript:void(0)" title="Quick View" @click="showQuickview(product)" v-b-modal.modal-lg variant="primary">
                <i class="ti-search" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters
} from 'vuex'
import config from '@/config.json'
import {
    log
} from 'util'
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
        ...mapState({
            productslist: state => state.products.productslist
        }),
        ...mapGetters({
            curr: 'products/changeCurrency'
        })
    },
    methods: {
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        addToCart: function (product) {
            this.cartval = true
            this.cartProduct = product
            this.cartProduct.quantity = 1
            this.$emit('opencartmodel', this.cartval, this.cartProduct)
            this.$store.dispatch('cart/addToCart', product)
            this.$toast.success("Item has been added to cart");
        },
        addToWishlist: function (product) {
            this.dismissCountDown = this.dismissSecs
            this.$emit('showalert', this.dismissCountDown)
            this.$store.dispatch('Products/addToWishlist', product)
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
        Color(variants) {
            const uniqColor = []
            for (let i = 0; i < Object.keys(variants).length; i++) {
                if (uniqColor.indexOf(variants[i].color) === -1) {
                    uniqColor.push(variants[i].color)
                }
            }
            return uniqColor
        },
        productColorchange(color, product) {
            product.variants.map((item) => {
                if (item.color === color) {
                    product.images.map((img) => {
                        if (img.image_id === item.image_id) {
                            this.imageSrc = img.src
                        }
                    })
                }
            })
        },
        productVariantChange(imgsrc) {
            console.log("I am calll");
            this.imageSrc = imgsrc
        },
        countDownChanged(dismissCountDown) {
            this.dismissCountDown = dismissCountDown
            this.$emit('alertseconds', this.dismissCountDown)
        },
        discountedPrice(product) {
            const price = product.price - (product.price * product.discount / 100)
            return price
        }
    }
}
</script>
