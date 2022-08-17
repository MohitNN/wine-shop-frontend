<template>
  <div>
    <div class="row">
      <div class="col-xl-12">
        
      </div>
    </div>
    <div class="collection-filter" :class="{ openFilterbar: filter }">
      <div class="theme-card">
        <h5 class="title-border">new products</h5>
        <div class="offer-slider slide-1">
          <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div>
                  <div
                    class="media"
                    v-for="(product, index) in newProducts.slice(0,3)"
                    :key="index"
                  >
                    <nuxt-link :to="{ path: '/product/' + product.id }">
                      <img
                        class="img-fluid"
                        v-if="product.product_images"
                        :src="getImgUrl(product.product_images[0].image)"
                        alt
                      />
                    </nuxt-link>
                    <div class="media-body align-self-center">
                      <nuxt-link
                        :to="{ path: '/product/' + product.id }"
                      >
                        
                        <h6>{{ product.product_name }}</h6>
                      </nuxt-link>
                      <h4 >
                        {{$store.state.products.currency.symbol}} {{
                          product.price
                        }}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                v-if="newProducts.length >= 4"
              >
                <div>
                  <div
                    class="media"
                    v-for="(product, index) in newProducts.slice(3, 6)"
                    :key="index"
                  >
                   <nuxt-link :to="{ path: '/product/' + product.id }">
                      <img
                        class="img-fluid"
                        v-if="product.product_images"
                        :src="getImgUrl(product.product_images[0].image)"
                        alt
                      />
                    </nuxt-link>
                    <div class="media-body align-self-center">
                      
                      <nuxt-link
                        :to="{ path: '/product/' + product.id }"
                      >
                        
                        <h6>{{ product.product_name }}</h6>
                      </nuxt-link>
                      <!-- <h4 v-if="product.sale">
                        {{
                          (discountedPrice(product) * currency.curr)
                            | currency(currency.symbol)
                        }}
                        <del>{{
                          (product.price * currency.curr)
                            | currency(currency.symbol)
                        }}</del>
                      </h4> -->
                      <h4 >
                        {{$store.state.products.currency.symbol}} {{
                          product.price
                        }}
                      </h4>
                      <!-- <div class="badge-danger"> 
                        {{product.discount}}
                      </div> -->
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
import { mapState, mapGetters , mapActions} from "vuex";
import config from '@/config.json'
export default {
  data() {
    return {
      openBlock: true,
      filter: false,
      swiperOption: {
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
      currency: (state) => state.products.currency,
      newProducts: (state) => state.products.indexProductsList,
    }),
    ...mapGetters({
      filterbyCategory: "filter/filterbyCategory",
      curr: "products/changeCurrency",
    }),
  },
  created(){
    // this.allProduct();
  },
  mounted() {
    // this.allProduct();
    this.getIndexProducts();

  },
  methods: {
    ...mapActions('products' , ['allProduct','getIndexProducts']),
    getCategoryProduct(collection) {
      return this.productslist.filter((item) => {
        if (item.collection.find((i) => i === collection)) {
          return item;
        }
      });
    },
    getImgUrl(path) {
      // return require("@/assets/images/" + path);
      return config.baseUrl + "products/" + path;
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    isActive(filterItem) {
      return this.applyFilter.indexOf(filterItem) > -1;
    },
    getCategoryFilter(category) {
      this.$store.dispatch("filter/getCategoryFilter", category);
    },
    toggleSidebarBlock() {
      this.openBlock = !this.openBlock;
    },
  },
};
</script>
