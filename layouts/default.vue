<template>
  <div>
    <Header />
    <nuxt id="body-content" />
    <Footer />
    <layoutSetting />
    <div class="tap-top top-cls" v-scroll-to="'#body-content'">
      <div>
        <i class="fa fa-angle-double-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
import layoutSetting from "../components/widgets/layout-setting";
import Header from "@/components/header/header1";
import Footer from "@/components/footer/footer4";
export default {
  head() {
    return {
      title: "Black Wine Shop",
    };
  },
  components: {
    layoutSetting,
    Header,
    Footer,
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>
