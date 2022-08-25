<template>
  <div>
    <section class="section-b-space light-layout">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="success-text">
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              <h2>thank you</h2>
              <p>
                Payment is successfully processsed and your order is on the way
              </p>
              <p>Order ID:{{ orderId ? orderId : '' }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/header/header1";
import Footer from "@/components/footer/footer1";
export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters({
      order: "products/getOrder",
      cartTotal: "cart/cartTotalAmount",
      curr: "products/changeCurrency",
    }),
  },
  data() {
    return {
      orderId : this.$route.query.order_id,
    }
  },
  methods: {
    getImgUrl(path) {
      return require("@/assets/images/" + path);
    },
  },
};
</script>
