<template>
  <div>
    <section class="p-0">
      <div class="tab-bg">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="title4">
                <h2 class="title-inner4">{{ title }}</h2>
                <div class="line">
                  <span></span>
                </div>
              </div>
              <div class="theme-tab">
                <b-tabs content-class="mt-3">
                  <b-tab title="NEW ARRIVAL">
                    <div
                      class="row product-tab"
                      v-if="products && products.length"
                    >
                      <div
                        class="tab-box"
                        v-for="(product, index) in products.slice(0, 8)"
                        :key="index"
                      >
                        
                        <div class="product-box2">
                          <div class="media col-12">
                            <nuxt-link
                              class="w-100 col-6"
                              :to="{ path: '/product/' + product.id }"
                            >
                              <img
                                :src="
                                  getImgUrl(product.product_images[0].image)
                                "
                                v-if="
                                  product.product_images &&
                                  product.product_images.length
                                "
                                class="img-fluid bg-img"
                                alt
                              />
                            </nuxt-link>
                            <div class="media-body align-self-center col-6">
                              <nuxt-link
                                :to="{ path: '/product/' + product.id }"
                              >
                                <h6>{{ product.product_name }}</h6>
                              </nuxt-link>
                              <h4>RM/MYR {{ product.price }}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>

                  <b-tab title="ON SALE">
                    <div
                      class="row product-tab"
                      v-if="topDiscount && topDiscount.length"
                    >
                      <div
                        class="tab-box"
                        v-for="(product, index) in topDiscount.slice(0, 8)"
                        :key="index"
                      >
                        

                        <div class="product-box2">
                          <div class="media">
                            <nuxt-link
                              class="w-100 col-6"
                              :to="{ path: '/product/' + product.id }"
                            >
                              <img
                                :src="
                                  getImgUrl(product.product_images[0].image)
                                "
                                v-if="
                                  product.product_images &&
                                  product.product_images.length
                                "
                                class="img-fluid bg-img"
                                style="width: 200px !important"
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
                                  (discountedPrice(product) * curr.curr)
                                    | currency(curr.symbol)
                                }}
                                <del>{{
                                  (product.price * curr.curr)
                                    | currency(curr.symbol)
                                }}</del>
                              </h4> -->
                              <h4>
                                <!-- {{
                                   (product.price * curr.curr)
                                    | currency(curr.symbol) 
                                }} -->
                                RM/MYR {{ product.price }}
                              </h4>
                              <h4 class="text-danger">
                                {{ product.discount }} %
                              </h4>
                              <!-- <ul class="color-variant">
                                <li
                                  v-for="(variant, index) in Color(
                                    product.variants
                                  )"
                                  :key="index"
                                >
                                  <a
                                    :class="[variant]"
                                    v-bind:style="{
                                      'background-color': variant,
                                    }"
                                  ></a>
                                </li>
                              </ul> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import config from "@/config.json";

export default {
  props: ["products", "category"],
  data() {
    return {
      title: "trending products",
    };
  },
  computed: {
    ...mapGetters({
      curr: "products/changeCurrency",
      onSellData: "products/onSellData",
    }),
    ...mapState('products' , ['topDiscount']),
    productData: (state) => state.products.productData,
    // discountProduct: (state) => state.products.topDiscount,
    // sortedArray() {
    //   if (this.products) {
    //     return this.products?.sort((a, b) => (parseInt(a.discount) > parseInt(b.discount) ? -1 : 1))
    //   }
    // },
    
  },
  methods: {
    getImgUrl(path) {
      return config.baseUrl + "products/" + path;
    },
    getCategoryProduct(collection) {
      return this.products.filter((item) => {
        if (item.collection.find((i) => i === collection)) {
          return item;
        }
      });
    },
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    discountedPrice(product) {
      return product.price - (product.price * product.discount) / 100;
    },
  },
};
</script>
