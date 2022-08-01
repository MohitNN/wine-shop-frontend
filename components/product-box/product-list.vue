<template>
<div>
    <div>
    <div class="img-wrapper col-12">
      <div class="lable-block">
        <span class="lable3" v-if="product.new">new</span>
        <span class="lable4" v-if="product.sale">on sale</span>
      </div>
      <div class="front text-center">
        <nuxt-link :to="{ path: '/product/'+product.id}">
          <img
            :src='getImgUrl(imageSrc ? imageSrc :  "165710779030.png")'
            :id="product.id"
            class="img-fluid bg-img"
            :alt="product.title"
            :key="index"
            style="height: 270px !important;"
          />
        </nuxt-link>
      </div>
      <div class="back ">
        <nuxt-link :to="{ path: '/product/'+product.id}">
          <img
            :src='getImgUrl(imageSrc ? imageSrc :  "165710779030.png")'
            :id="product.id"
            class="img-fluid bg-img"
            :alt="product.title"
            :key="index"
            style="height: 270px !important;"
          />
        </nuxt-link>
      </div>
      <div class="cart-box">
        <button
          data-toggle="modal"
          data-target="#addtocart"
          title="Add to cart"
          @click="addToCart(product)"
        >
          <i class="ti-shopping-cart"></i>
        </button>
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
        </a>
        <a
          href="javascript:void(0)"
          title="Quick View"
          @click="showQuickview(product)"
          v-b-modal.modal-lg
          variant="primary"
        >
          <i class="ti-search" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="product-detail text-center">
      <!-- <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div> -->
      <nuxt-link :to="{ path: '/product/'+product.id}">
        <h6>{{ product.product_name }}</h6>
      </nuxt-link>
      <p>{{ product.description }}</p>
      <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
      <!-- <ul class="color-variant" v-if="product.variants[0].color">
        <li v-for="(variant,variantIndex) in Color(product.variants)" :key="variantIndex">
          <a
            @click="productColorchange(variant, product, index)"
            :class="[variant]"
            v-bind:style="{ 'background-color' : variant}"
          ></a>
        </li>
      </ul> -->
    </div>
  </div>
    <!-- <div class="img-wrapper" >
        <div class="lable-block">
            <span class="lable3">new</span>
            <span class="lable4" v-if="product.onsell">on sale</span>
        </div>
        <div class="front text-center">
        <nuxt-link :to="{ path: '/product/'+product.id}">
          <img
            :src='getImgUrl(imageSrc ? imageSrc :  "165710779030.png")'
            :id="product.id"
            class="img-fluid bg-img"
            :alt="product.title"
            :key="index"
          />
        </nuxt-link>
      </div>
      <ul class="product-thumb-list">
            <li class="grid_thumb_img" :class="{active: imageSrc === image.image}" v-for="(image,index) in product.product_images" :key="index" @click="productVariantChange(image.image)">
                <a href="javascript:void(0);">
                    <img :src="getImgUrl(image.image)" />
                </a>
            </li>
        </ul>
      <div class="cart-info cart-wrap">
        <a href="javascript:void(0)" title="Wishlist">
          <i class="ti-heart" aria-hidden="true" @click="addToWishlist(product)"></i>
        </a>
        <a
          href="javascript:void(0)"
          title="Quick View"
          @click="showQuickview(product)"
          v-b-modal.modal-lg
          variant="primary"
        >
          <i class="ti-search" aria-hidden="true"></i>
        </a>
      </div>
      <div class="addtocart_btn">
        <button
          data-toggle="modal"
          data-target="#addtocart"
          class="add-button add_cart"
          @click="addToCart(product)"
        >
          add to cart
        </button>
      </div>
        <ul class="product-thumb-list">
            <li class="grid_thumb_img" :class="{active: imageSrc === image.image}" v-for="(image,index) in product.product_images" :key="index" @click="productVariantChange(image.image)">
                <a href="javascript:void(0);">
                    <img :src="getImgUrl(image.image)" />
                </a>
            </li>
        </ul>
    </div>
    <div class="product-detail text-center">
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
      </div>
      <nuxt-link :to="{ path: '/product/'+product.id}">
        <h6>{{ product.title }}</h6>
      </nuxt-link>
      <p>{{ product.description }}</p>
      <h4 v-if="product.sale">
        {{ discountedPrice(product) * curr.curr | currency(curr.symbol) }}
        <del>{{ product.price * curr.curr | currency(curr.symbol) }}</del>
      </h4>
      <h4 v-else>{{ product.price * curr.curr | currency(curr.symbol) }}</h4>
    </div> -->
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
        ...mapGetters({
            curr: 'products/changeCurrency'
        })
    },
    mounted() {
        if(this.product.product_images && this.product.product_images.length) {
            this.product.product_images.forEach((item)=> {
                if(item.image) {
                    this.imageSrc = item.image
                    return false
                }
            })
        }


    },
    methods: {
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        addToCart: function (product) {
            this.cartval = true
            this.cartProduct = product
            this.cartProduct.quantity = 1;
            this.$emit('opencartmodel', this.cartval, this.cartProduct)
            this.$store.dispatch('cart/addToCart', product)
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
            // product.variants.map((item) => {
            //     if (item.color === color) {
            //         product.images.map((img) => {
            //             if (img.image_id === item.image_id) {
            //                 this.imageSrc = img.src
            //             }
            //         })
            //     }
            // })
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
        }
    }
}
</script>
<style scoped>
.img-jpg{
    height: 270px !important;
}
</style>
