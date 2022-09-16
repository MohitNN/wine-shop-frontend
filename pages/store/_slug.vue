<template>
  <div>
    <Breadcrumbs :title="slug" />
    <section class="section-b-space ratio_asos">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <sidebar @allFilters="allfilter" />
          </div>
          <div class="col-lg-9 collection-content" style="padding: 0 !important;">
            <div v-swiper:mySwiper="swiperOption">
              <div class="row" v-if="productData.data && productData.data.length">
                <div
                  class="swiper-slide col-12 col-lg-3 col-xl-3 col-md-4"
                  v-for="(product, index) in productData.data"
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
              <div v-else class="row justify-content-center">
                  <h2>No Products Available</h2>
              </div>

              <b-col
                md="12"
                v-if="productData && productData.current_page > 1"
                class="my-1 p-0 d-flex align-items-center pagination-justify justify-content-center"
              >
                <b-pagination
                  v-model="productData.current_page"
                  :total-rows="productData.total"
                  @input="updateData"
                  :per-page="productData.per_page"
                  aria-controls="my-table"
                  class="mt-4"
                ></b-pagination>
              </b-col>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p>Product Is successfully added to your wishlist.</p>
    </b-alert>
    <quickviewModel
      v-if="quickviewproduct"
      :openModal="showquickviewmodel"
      :productData="quickviewproduct"
    />
    <cartModel
      :openCart="showcartmodal"
      :productData="cartproduct"
      @closeCart="closeCartModal"
      :products="productslist"
    />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "@/components/header/header1";
import Footer from "@/components/footer/footer1";
import Breadcrumbs from "@/components/widgets/breadcrumbs";
import quickviewModel from "@/components/widgets/quickview";
import compareModel from "@/components/widgets/compare-popup";
import cartModel from "@/components/cart-model/cart-right-model";
import productBox1 from "@/components/product-box/product-list";
import sidebar from "@/components/widgets/collection-sidebar";
export default {
  props: ["products"],
  components: {
    Header,
    Footer,
    Breadcrumbs,
    productBox1,
    quickviewModel,
    compareModel,
    cartModel,
    sidebar,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      name: this.$route.query.name,
      type: this.$route.query.type,
      showquickviewmodel: false,
      showcomparemodal: false,
      showcartmodal: false,
      quickviewproduct: {},
      current: 5,
      paginate: 12,
      paginateRange: 3,
      pages: [],
      paginates: "",
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
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
    ...mapState("products", ["productData"]),
  },
  mounted() {
    this.getBrand();
    this.getCategory();
    this.getSubCategory();
    this. getAllProduct();
  },
  created(){
    this.getBrand();
    this.getCategory();
    this.getSubCategory();
  },
  methods: {
    ...mapActions("products", ["allProduct"]),
    ...mapActions("filter", ["clearFilter"]),
    ...mapActions("menu", ["getBrand", "getCategory", "getSubCategory"]),
    getAllProduct() {
      this.$route.query.name
      const type = this.type;
      const name = this.name;
      const multipleCollection  = [];
      this.clearFilter();
      this.allProduct({ type, name,multipleCollection,pageIndex: "page=1" });
    },
    alert(item) {
      this.dismissCountDown = item;
    },
    showQuickview(item, productData) {
      this.showquickviewmodel = item;
      this.quickviewproduct = productData;
    },
    showCoampre(item, productData) {
      this.showcomparemodal = item;
      this.comapreproduct = productData;
    },
    closeCompareModal(item) {
      this.showcomparemodal = item;
    },
    showCart(item, productData) {
      this.showcartmodal = item;
      this.cartproduct = productData;
    },
    closeCartModal(item) {
      this.showcartmodal = item;
    },
    updateData(page) {
      const type = this.slug;
      const name = this.name;
      this.allProduct({ type, name, pageIndex: "page=" + page });
    },
    allfilter(data) {
      const type = data.selected_name.type;
      const name = data.selected_name.slug;
      const slug = data.selected_name.slug;
      const multipleCollection = data.selected_name.multipleCollection;
      this.loadProduct(type , slug,multipleCollection)
      // this.allProduct({ ...data, type, name, pageIndex: "page=1" });
    },
  },
};
</script>
