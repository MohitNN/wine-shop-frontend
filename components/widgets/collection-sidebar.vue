<template>
  <div>
     <div class="row">
        <div class="col-xl-12">
          <div class="filter-main-btn"  @click="filter = !filter">
            <span class="filter-btn btn btn-theme">
              <i class="fa fa-filter" aria-hidden="true"></i> Filter
            </span>
          </div>
        </div>
      </div>
      <div class="collection-filter" :class="{ 'openFilterbar' : filter }">
    <!-- side-bar colleps block stat -->
  
              <!-- side-bar single product slider start -->
        <div class="theme-card">
          <h5 class="title-border">new products</h5>
          <div class="offer-slider ">
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
            <!-- side-bar single product slider end -->
            <!-- side-bar banner start here -->
            <div class="collection-sidebar-banner">
              <a href="#">
                <img :src="bannerimagepath" class="img-fluid" />
              </a>
            </div>
            <!-- side-bar banner end here -->
    </div>
    <!-- silde-bar colleps block end here -->
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  data() {
    return {
      bannerimagepath: require('@/assets/images/side-banner.png'),
      value: [50, 550],
      selectedcolor: [],
      selectedbrand: [],
      selectedsize: [],
      applyFilter: [],
      activeItem: 'category',
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
  components: {
    VueSlider
  },
  computed: {
    ...mapState({
      productslist: state => state.products.productslist,
      currency: state => state.products.currency
    }),
    ...mapGetters({
      filterbyCategory: 'filter/filterbyCategory',
      filterbyBrand: 'filter/filterbyBrand',
      filterbycolor: 'filter/filterbycolor',
      filterbysize: 'filter/filterbysize'
    })
  },
  mounted() {
    this.$emit('priceVal', this.value)
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
    appliedFilter(val) {
      this.$emit('allFilters', this.applyFilter)
    },
    sliderChange(event) {
      this.$emit('priceVal', event)
    },
    toggleSidebarBlock() {
      this.openBlock = !this.openBlock
    },
    getCategoryFilter(category) {
      this.$store.dispatch('filter/getCategoryFilter', category)
    }
  }
}
</script>