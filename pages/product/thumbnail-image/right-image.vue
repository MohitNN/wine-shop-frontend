<template>
  <div>
    <Header />
    <Breadcrumbs :title="getDetail.title" />
    <!-- section start -->
    <section>
    <div class="collection-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-10 col-xs-12">
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
                </div>
                <div class="col-lg-1 col-sm-2 col-xs-12">
                    <div class="row">
                        <div class="col-12 p-0">
                            <div v-swiper:mySwiper1="swiperOption1">
                          <div class="swiper-wrapper slider-right-nav">
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
                                v-on:click="slideTo(index)"
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
                        <del>{{ getDetail.price * curr.curr | currency(curr.symbol) }}</del>
                        <span>{{ getDetail.discount }}% off</span>
                      </h4>
                      <h3 v-if="getDetail.sale">{{ discountedPrice(getDetail) * curr.curr | currency(curr.symbol) }}</h3>
                      <h3 v-else>{{ getDetail.price * curr.curr | currency(curr.symbol) }}</h3>
                      <ul class="color-variant">
                        <li
                          v-bind:class="{ active: activeColor == variant}"
                          v-for="(variant,variantIndex) in Color(getDetail.variants)"
                          :key="variantIndex"
                        >
                          <a
                            :class="[variant]"
                            v-bind:style="{ 'background-color' : variant}"
                            v-on:click="sizeVariant(getDetail.variants[variantIndex].image_id, variantIndex, variant)"
                          ></a>
                        </li>
                      </ul>
                      <div class="pro_inventory" v-if="getDetail.stock < 8">
                        <p class="active"> Hurry! We have only {{ getDetail.stock }} product in stock. </p>
                        <div class="inventory-scroll">
                          <span style="width: 95%;"></span>
                        </div>
                      </div>
                      <div class="product-description border-product">
                        <h6 class="product-title size-text">
                          select size
                          <span>
                            <a href="javascript:void(0)" v-b-modal.modal-1>size chart</a>
                          </span>
                        </h6>
                        <div class="size-box">
                          <ul>
                            <li
                              class="product-title"
                              v-bind:class="{ active: selectedSize == size}"
                              v-for="(size,index) in size"
                              :key="index"
                            >
                              <a
                                href="javascript:void(0)"
                                v-on:click="changeSizeVariant(size)"
                              >{{size}}</a>
                            </li>
                          </ul>
                        </div>
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
    </div>
</section>
<section class="tab-product m-0">
      <div class="container">
                <div class="row">
                  <div class="col-sm-12 col-lg-12">
                    <b-tabs card>
                      <b-tab title="Description" active>
                        <b-card-text>{{getDetail.description}}</b-card-text>
                      </b-tab>
                      <b-tab title="Details">
                        <b-card-text>
                          {{getDetail.description}}
                          <div class="single-product-tables">
                            <table>
                              <tbody>
                                <tr>
                                  <td>Febric</td>
                                  <td>Chiffon</td>
                                </tr>
                                <tr>
                                  <td>Color</td>
                                  <td>Red</td>
                                </tr>
                                <tr>
                                  <td>Material</td>
                                  <td>Crepe printed</td>
                                </tr>
                              </tbody>
                            </table>
                            <table>
                              <tbody>
                                <tr>
                                  <td>Length</td>
                                  <td>50 Inches</td>
                                </tr>
                                <tr>
                                  <td>Size</td>
                                  <td>S, M, L .XXL</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="Video">
                        <b-card-text>
                          <div class="mt-3 text-center">
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/BUWzX78Ye_8"
                              allow="autoplay; encrypted-media"
                              allowfullscreen
                            ></iframe>
                          </div>
                        </b-card-text>
                      </b-tab>
                      <b-tab title="Write Review">
                        <b-card-text>
                          <form class="theme-form">
                            <div class="form-row">
                              <div class="col-md-12">
                                <div class="media">
                                  <label>Rating</label>
                                  <div class="media-body ml-3">
                                    <div class="rating three-star">
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                      <i class="fa fa-star"></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <label for="name">Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="name"
                                  placeholder="Enter Your name"
                                  required
                                />
                              </div>
                              <div class="col-md-6">
                                <label for="email">Email</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="email"
                                  placeholder="Email"
                                  required
                                />
                              </div>
                              <div class="col-md-12">
                                <label for="review">Review Title</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="review"
                                  placeholder="Enter your Review Subjects"
                                  required
                                />
                              </div>
                              <div class="col-md-12">
                                <label for="review">Review Title</label>
                                <textarea
                                  class="form-control"
                                  placeholder="Wrire Your Testimonial Here"
                                  id="exampleFormControlTextarea1"
                                  rows="6"
                                ></textarea>
                              </div>
                              <div class="col-md-12">
                                <button class="btn btn-solid" type="submit">Submit YOur Review</button>
                              </div>
                            </div>
                          </form>
                        </b-card-text>
                      </b-tab>
                    </b-tabs>
                  </div>
                </div>
      </div>
              </section>
    <!-- Section ends -->
    <relatedProduct :productTYpe="productTYpe" :productId="productId" />
    <Footer />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import Timer from '../../../components/widgets/timer'
import relatedProduct from '../../../components/widgets/related-products'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs,
    Timer,
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
        direction: 'vertical',
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
      return this.$store.getters['products/getProductById'](1)
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
      return require('@/assets/images/' + path)
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
