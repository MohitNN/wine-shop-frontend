<template>
  <div>
    {{filters}}
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
    <div class="collection-filter-block">
      <!-- brand filter start -->
      <div class="collection-collapse-block open" v-if="categories.length">
        <h3 class="collapse-block-title"  v-b-toggle.brand >Brands</h3>
         <b-collapse id="brand" visible accordion="myaccordion2" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter">
            <div
              class="custom-control custom-checkbox collection-filter-checkbox"
              v-for="(brand,index) in brand"
              :key="index"
            >
              <input
              type="checkbox"
              class="custom-control-input"
              :value="brand.id"
              :id="'brand'+brand.id"
              v-model="filters.brand_id"
              @change="appliedFilter()" />
              <label class="custom-control-label" v-bind:for="'brand'+brand.id">{{brand.name}}</label>
            </div>
          </div>
        </div>
         </b-collapse>
      </div>

      <!-- category filter start -->
      <div class="collection-collapse-block open" v-if="categories.length">
        <h3 class="collapse-block-title"  v-b-toggle.category >Categories</h3>
         <b-collapse id="category" visible accordion="myaccordion1" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter">
            <div
              class="custom-control custom-checkbox collection-filter-checkbox"
              v-for="(category,index) in categories"
              :key="index"
            >
              <input
              type="checkbox"
              class="custom-control-input"
              :value="category.id"
              :id="'category'+category.id"
              v-model="filters.category_id"
              @change="appliedFilter()" />
              <label class="custom-control-label" v-bind:for="'category'+category.id">{{category.name}}</label>
            </div>
          </div>
        </div>
         </b-collapse>
      </div>

      <!-- sub category filter start -->
      <div class="collection-collapse-block open" v-if="subCategories.length">
        <h3 class="collapse-block-title"  v-b-toggle.subcategory >Sub Category</h3>
         <b-collapse id="subcategory" visible accordion="myaccordion3" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter">
            <div
              class="custom-control custom-checkbox collection-filter-checkbox"
              v-for="(category,index) in subCategories"
              :key="index"
            >
              <input
              type="checkbox"
              class="custom-control-input"
              :value="category.id"
              :id="'subcategory'+category.id"
              v-model="filters.sub_category_id"
              @change="appliedFilter()" />
              <label class="custom-control-label" v-bind:for="'subcategory'+category.id">{{category.name}}</label>
            </div>
          </div>
        </div>
         </b-collapse>
      </div>

      

      <!-- price filter start here -->
      <div class="collection-collapse-block border-0 open">
        <h3 class="collapse-block-title" v-b-toggle.price>price</h3>
         <b-collapse id="price" visible accordion="myaccordion4" role="tabpanel">
        <div class="collection-collapse-block-content">
          <div class="collection-brand-filter price-rangee-picker">
            <vue-slider
            v-model="filters.price"
            :min="0"
            :max="9999"
            ref="slider"
            @change="appliedFilter()">
            </vue-slider>
          </div>
        </div>
         </b-collapse>
      </div>
    </div>
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
import { mapState, mapGetters, mapActions } from 'vuex'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  data() {
    return {
      bannerimagepath: require('@/assets/images/side-banner.png'),
      value: [0, 999998],
      applyFilter: [],
      activeItem: 'category',
      filter: true,
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      // filters: {
      //   brand_id: [],
      //   category_id: [],
      //   sub_category_id: [],
      //   price: [0, 999999]
      // }
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
    ...mapState("menu", ["brand", "categories", "subCategories"]),
    ...mapState("filter", ["filters"]),
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
    appliedFilter() {
      let isFilter = false
      Object.keys(this.filters).forEach(key => {
        if (this.filters[key].length) {
          isFilter = true
          return false;
        }
      });
      this.$emit('allFilters', {filter : this.filters, isFilter})
    }
  }
}
</script>