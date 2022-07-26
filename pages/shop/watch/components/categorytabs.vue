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
                    <div class="row product-tab" v-if="products">
                      <div
                        class="tab-box"
                        v-for="(product, index) in products.slice(0,8)"
                        :key="index"
                      >
                        <!-- {{product}} -->
                        <div class="product-box2">
                          <div class="media col-12">
                            <nuxt-link class="d-flex justify-content-center" :to="{ path: '/product/' + product.id }">
                              <img
                                :src="
                                  getImgUrl(product.product_images[0].image)
                                "
                                v-if="product.product_images"
                                class="img-fluid bg-img col-6"
                                style="width: 200px !important;"
                                alt
                              />
                            </nuxt-link>
                            <div class="media-body align-self-center col-6">
                              <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
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
                                ${{ product.price }}
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

                  <b-tab title="ON SALE">
                    <div class="row product-tab" v-if="products">
                      <div
                        class="tab-box"
                        v-for="(product, index) in products.slice(0,8)"
                        :key="index"
                      >
                        <div class="product-box2">
                          <div class="media">
                            <nuxt-link :to="{ path: '/product/' + product.id }">
                              <img
                                :src="
                                  getImgUrl(product.product_images[0].image)
                                "
                                v-if="product.product_images"
                                class="img-fluid bg-img"
                                style="width: 230px !important"
                                alt
                              />
                            </nuxt-link>
                            <div class="media-body align-self-center">
                              <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                              </div>
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
                                ${{ product.price }}
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
import { mapGetters , mapState } from "vuex";
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
    }),
    productData: (state) => state.products.productData,
    newArrval() {
      const onSell = [];
      if(this.products) {
        this.products.forEach((ele, index) => {
          if (ele.onsell == "1" || ele.onsell == 1) onSell.push(ele);
        });
      }
      return onSell;
    },
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
