<template>
  <div>
      <div class="row">
    <div class="col-xl-12">
      <div class="filter-main-btn mb-2 ml-3">
        <span class="filter-btn btn btn-theme" @click="filter = !filter">
          <i class="fa fa-filter" aria-hidden="true"></i> filter
        </span>
      </div>
    </div>
   </div>
     <div class="collection-filter" :class="{'openFilterbar' : filter}">
      
  
      <!-- side-bar single product slider start -->
              <div class="theme-card">
            <h5 class="title-border">new products</h5>
            <div class="offer-slider slide-1">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div>
                      <div class="media" v-for="(product,index) in getCategoryProduct('new products').splice(0,3)" :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                            <h6>{{product.title}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ discountedPrice(product) * currency.curr | currency(currency.symbol) }}
                            <del>{{ product.price * currency.curr | currency(currency.symbol) }}</del>
                          </h4>
                          <h4 v-else>{{ product.price * currency.curr | currency(currency.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                   <div class="swiper-slide" v-if="getCategoryProduct('new products').length >= 4">
                    <div>
                      <div class="media" v-for="(product, index) in getCategoryProduct('new products').splice(3,3)" :key="index">
                        <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                          <img class="img-fluid" :src="getImgUrl(product.images[0].src)" alt>
                        </nuxt-link>
                        <div class="media-body align-self-center">
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                          <nuxt-link :to="{ path: '/product/sidebar/'+product.id}">
                            <h6>{{product.title}}</h6>
                          </nuxt-link>
                          <h4 v-if="product.sale">
                            {{ discountedPrice(product) * currency.curr | currency(currency.symbol) }}
                            <del>{{ product.price * currency.curr | currency(currency.symbol) }}</del>
                          </h4>
                          <h4 v-else>{{ product.price * currency.curr | currency(currency.symbol) }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div class="swiper-button-prev" slot="button-prev">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              <div class="swiper-button-next" slot="button-next">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
              </div>
            </div>
          </div>
                </div>
              <!-- side-bar single product slider end -->
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      openBlock: true,
      filter: false,
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      currency: state => state.products.currency
    }),
    ...mapGetters({
      filterbyCategory: 'filter/filterbyCategory',
      curr: 'products/changeCurrency'
    })
  },
  methods: {
    getCategoryProduct(collection) {
      return this.productslist.filter((item) => {
        if (item.collection.find(i => i === collection)) {
          return item
        }
      })
    },
    getImgUrl(path) {
      return require('@/assets/images/' + path)
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount / 100)
      return price
    },
    isActive(filterItem) {
      return this.applyFilter.indexOf(filterItem) > -1
    },
    getCategoryFilter(category) {
      this.$store.dispatch('filter/getCategoryFilter', category)
    },
    toggleSidebarBlock() {
      this.openBlock = !this.openBlock
    }
  }
}
</script>
