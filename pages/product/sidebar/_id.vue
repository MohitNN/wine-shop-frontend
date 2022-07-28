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
                        <div
                          class="swiper-slide"
                          v-for="(product,index) in getDetail.images"
                          :key="index"
                        >
                          <img
                            :src="getImgUrl(product.src)"
                            :id="product.image_id"
                            class="img-fluid bg-img"
                            :alt="product.alt"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 slider-nav-images">
                        <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper">
                            <div
                              class="swiper-slide"
                              v-for="(product,index) in getDetail.images"
                              :key="index"
                            >
                              <img
                                :src="getImgUrl(product.src)"
                                :id="product.image_id"
                                class="img-fluid bg-img"
                                alt="product.alt"
                                @click="slideTo(index)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 rtl-text">
                    <div class="product-right">
                      <h2>{{ getDetail.title }}</h2>
                      <h4 v-if="getDetail.sale">
                        <span>{{ getDetail.discount }}% off</span>
                      </h4>
                      <h3 v-if="getDetail.sale">{{ discountedPrice(getDetail) * curr.curr | currency(curr.symbol) }}</h3>
                      <h3 v-else>{{ getDetail.price * curr.curr | currency(curr.symbol) }}</h3>
                      <div class="product-description border-product">
                        <h5 class="avalibility" v-if="counter <= getDetail.stock">
                          <span>In Stock</span>
                        </h5>
                        <h5 class="avalibility" v-if="counter > getDetail.stock">
                          <span>Out of Stock</span>
                        </h5>
                        <h6 class="product-title">quantity</h6>
                        <div class="qty-box">
                          <div class="input-group">
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-left-minus"
                                data-type="minus"
                                data-field
                                @click="decrement()"
                              >
                                <i class="ti-angle-left"></i>
                              </button>
                            </span>
                            <input
                              type="text"
                              name="quantity"
                              class="form-control input-number"
                              :disabled="counter > getDetail.stock"
                              v-model="counter"
                            />
                            <span class="input-group-prepend">
                              <button
                                type="button"
                                class="btn quantity-right-plus"
                                data-type="plus"
                                data-field
                                @click="increment()"
                              >
                                <i class="ti-angle-right"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="product-buttons">
                        <nuxt-link :to="{ path: '/page/account/cart'}">
                          <button
                            class="btn btn-solid"
                            title="Add to cart"
                            @click="addToCart(getDetail, counter)"
                            :disabled="counter > getDetail.stock"
                          >Add To Cart</button>
                        </nuxt-link>
                        <button
                            class="btn btn-solid"
                            title="buy now"
                            @click="buyNow(getDetail, counter)"
                            :disabled="counter > getDetail.stock"
                          >Buy Now</button>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <section class="tab-product m-0">
                <div class="row">
                  <div class="col-sm-12 col-lg-12">
                    <b-tabs card>
                      <b-tab title="Description" style="padding: 10px 25px !important;" active>
                        <b-card-text>{{getDetail.description}}</b-card-text>
                      </b-tab>
                    </b-tabs>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <relatedProduct :productTYpe="productTYpe" :productId="productId" />
      <b-modal id="modal-1" size="md" centered hide-footer>
        <template v-slot:modal-title>{{getDetail.title}}</template>
        <img src="../../../assets/images/size-chart.jpg" alt="size-chart" class="img-fluid" />
      </b-modal>
    </section>
   
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'



import Timer from '../../../components/widgets/timer'
import productSidebar from '../../../components/widgets/product-sidebar'
import relatedProduct from '../../../components/widgets/related-products'
import config from '@/config.json'

export default {
  components: {

    Timer,
    productSidebar,
    relatedProduct
  },
  data() {
    return {
      counter: 1,
      activeColor: '',
      selectedSize: '',
      qty: '',
      size: [],
      productTYpe: '',
      productId: '',
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true
      },
      swiperOption1: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        centeredSlides: false
      }
    }
  },
  computed: {
    ...mapState({
      currency: state => state.products.currency
    }),
    ...mapGetters({
      curr: 'products/changeCurrency'
    }),
    getDetail: function () {
      return this.$store.getters['products/getProductById'](
        this.$route.params.id
      )
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // For displaying default color and size on pageload
    this.uniqColor = this.getDetail.variants[0].color
    this.sizeVariant(this.getDetail.variants[0].image_id)
    // Active default color
    this.activeColor = this.uniqColor
    this.changeSizeVariant(this.getDetail.variants[0].size)
    // related product type
    this.relatedProducts()
  },
  methods: {
    priceCurrency: function () {
      this.$store.dispatch('products/changeCurrency')
    },
    addToWishlist: function (product) {
      this.$store.dispatch('products/addToWishlist', product)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    // Related Products display
    relatedProducts() {
      this.productTYpe = this.getDetail.type
      this.productId = this.getDetail.id
    },
    // Display Unique Color
    Color(variants) {
      const uniqColor = []
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color)
        }
      }
      return uniqColor
    },
    // add to cart
    addToCart: function (product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
    },
    buyNow: function (product, qty) {
      product.quantity = qty || 1
      this.$store.dispatch('cart/addToCart', product)
      this.$router.push('/page/account/checkout')
    },
    // Item Count
    increment() {
      this.counter++
    },
    decrement() {
      if (this.counter > 1) this.counter--
    },
    // Change size variant
    changeSizeVariant(variant) {
      this.selectedSize = variant
    },
    getImgUrl(path) {
      return  config.baseUrl + "products/" + path;
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false)
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false)
      this.size = []
      this.activeColor = color
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size)
        }
      })
    }
  }
}
</script>
