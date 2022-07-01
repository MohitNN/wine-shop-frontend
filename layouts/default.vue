<template>
  <div>
    <Header v-if="!getrouter" />
      <nuxt id="body-content" />
    <Footer v-if="!getrouter" />
    <layoutSetting />
    
  </div>
</template>

<script>
import layoutSetting from "@/components/widgets/layout-setting";
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
  computed:{
    getrouter(){
      const string = this.$route.fullPath;      
      const substring = "admin";
      return string.includes(substring);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>
