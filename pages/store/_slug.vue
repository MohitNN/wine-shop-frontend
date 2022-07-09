<template>
<div>
    <!-- {{productData}} -->
    <Breadcrumbs :title="slug" />
<section class="section-b-space ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col-10">
            <div v-swiper:mySwiper="swiperOption">
              <div class="row">
                <div
                  class="swiper-slide col-3 my-3"
                  v-for="(product,index) in productData"
                  :key="index"
                >
                  <div class="product-box">
                    <productBox1
                        @opencartmodel="showCart"
                        @showCompareModal="showCoampre"
                        @openquickview="showQuickview"
                        @showalert="alert"
                        @alertseconds="alert"
                        :product="product"
                        :index="index"
                        />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <quickviewModel v-if="quickviewproduct" :openModal="showquickviewmodel" :productData="quickviewproduct" />
    <cartModel :openCart="showcartmodal" :productData="cartproduct" @closeCart="closeCartModal" :products="productslist" />
    <Footer />
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Header from '@/components/header/header1'
import Footer from '@/components/footer/footer1'
import Breadcrumbs from '@/components/widgets/breadcrumbs'
import quickviewModel from '@/components/widgets/quickview'
import compareModel from '@/components/widgets/compare-popup'
import cartModel from '@/components/cart-model/cart-right-model'
import productBox1 from '@/components/product-box/product-list'
export default {
  props: ['products'],
  components: {
    Header,
    Footer,
    Breadcrumbs,
    productBox1,
    quickviewModel,
    compareModel,
    cartModel
  },
  data() {
    return {
        slug:this.$route.params.slug,
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      comapreproduct: {},
      cartproduct: {},
      dismissCountDown: 0,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: false,
        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist
    }),
    ...mapState("products", ["productData"])
  },
  mounted () {
    this.allProduct()
  },
  methods: {
    ...mapActions("products", ["allProduct"]),
    alert(item) {
      this.dismissCountDown = item
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item
      this.quickviewproduct = productData
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item
      this.comapreproduct = productData
    },
    closeCompareModal(item) {
      this.showcomparemodal = item
    },
    showCart(item, productData) {
        console.log('item', item)
        console.log('productData', productData)
      this.showcartmodal = item
      this.cartproduct = productData
    },
    closeCartModal(item) {
      this.showcartmodal = item
    }
  }
}
</script>
