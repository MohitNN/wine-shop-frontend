<template>
  <div class="wp-img">
    <vue-element-loading :is-full-screen="true" background-color="rgba(255, 255, 255, 70%)"  :active="isLoading">
      <img :src="loaderImg" height="200" />
    </vue-element-loading>
    <Header v-if="!getrouter" />
    <nuxt id="body-content" />
    <Footer v-if="!getrouter" />
    <layoutSetting />
  </div>
</template>

<script>
import layoutSetting from "@/components/widgets/layout-setting";
import Header from "@/components/header/header1";
import { mapState } from "vuex";
import config from '@/config.json'
import Footer from "@/components/footer/footer4";
import Loader from "@/assets/images/LoaderProcess.gif";
import VueElementLoading from "vue-element-loading";
export default {
  head() {
    return {
      title: "Langkawi Liquor",
    };
  },
  data() {
    return {
      loaderImg: Loader,
    };
  },
  components: {
    layoutSetting,
    Header,
    Footer,
    VueElementLoading,
  },
  methods:{
    getImgUrl(path) {
            return config.baseUrl + "brand/" + path;
    },
  },
  computed: {
    getrouter() {
      const string = this.$route.fullPath;
      const substring = "admin";
      return string.includes(substring);
    },
    ...mapState('gloable',['isLoading']),
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>
<style scoped>
.wp-img{
  position: relative;
}
</style>
