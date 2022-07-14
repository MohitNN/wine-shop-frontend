<template>
  <div>
    <div class="main-navbar">
      <div id="mainnav">
        <div
          class="toggle-nav"
          :class="leftSidebarVal ? 'toggle-button' : ''"
          @click="openmobilenav = true"
        >
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }">
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav = false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div>
          </li>
          <li class="dropdown">
            <nuxt-link to="/">Home</nuxt-link>
            <!-- <a href="#" class="nav-link">
              Home
            </a> -->
          </li>
          <li v-for="(category, key) in  categories" class="dropdown" v-if="key < 4" :key="key">
            <!-- <a href="#" class="nav-link" @click.self="loadProduct('category', category.name)"> -->
            <span class="nav-link category-title" @click.self="loadProduct('category', category.slug)">
              {{category.name}}
                <i class="fa fa-angle-down" id="angle-down" v-if="category.sub_category && category.sub_category.length"></i>
            </span>
            <ul v-if="category.sub_category && category.sub_category.length" class="nav-submenu" style="width: 100vh !important">
              <li v-for="sub_category, key in category.sub_category" :key="key" @click="loadProduct('sub-category', sub_category.slug)">
                <span class="sub-category-title">
                  {{sub_category.name}}
                </span>
              </li>
            </ul>
           
          </li>
          <li class="dropdown" >
             <span class="nav-link category-title" @click.self="loadProduct('brands', '')">
              Other
                <!-- <i class="fa fa-angle-down" id="angle-down" v-if="brand && brand.length"></i> -->
            </span>
            <ul v-if="brand" class="nav-submenu"  style="width: 100vh !important">
              <li v-for="(category, key) in  categories" v-if="key > 4" :key="key">
                <span class="sub-category-title">
                  {{category.name}}
                </span>
              </li>
            </ul>
          </li>
          <li class="dropdown">
            <!-- <a href="#" class="nav-link">
              Brand
              <span class="sub-arrow" v-if="brand"></span>
            </a> -->
            <span class="nav-link category-title" @click.self="loadProduct('brands', '')">
              Brands
                <i class="fa fa-angle-down" id="angle-down" v-if="brand && brand.length"></i>
            </span>
            <ul v-if="brand" class="nav-submenu"  style="width: 100vh !important">
              <li v-for="b in brand" :key="b.id"  @click="loadProduct('brand', b.slug)">
                <span class="sub-category-title">
                  {{b.name}}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["leftSidebarVal"],
  data() {
    return {
      openmobilenav: false,
      subnav: false,
      activeItem: "home",
      activeChildItem: "fashion 1",
      activemegaChild: "portfolio",
    };
  },
  computed: {
    // ...mapState({
    //   menulist: state => state.menu.data
    // })
    ...mapState("menu", ["brand", "categories"]),
  },
  created() {
    this.getBrand();
    this.getCategory();
  },
  methods: {
    ...mapActions("menu", ["getBrand", "getCategory"]),
      mobilenav: function () {
      this.openmobilenav = !this.openmobilenav;
    },
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      if (this.activeItem === menuItem) {
        this.activeItem = "";
      } else {
        this.activeItem = menuItem;
      }
    },
    isActiveChild: function (menuChildItem) {
      return this.activeChildItem === menuChildItem;
    },
    setActiveChild: function (menuChildItem) {
      console.log(menuChildItem);
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = "";
      } else {
        this.activeChildItem = menuChildItem;
      }
    },
    isActivesubmega: function (megaChildItem) {
      return this.activemegaChild === megaChildItem;
    },
    setActivesubmega: function (megaChildItem) {
      if (this.activemegaChild === megaChildItem) {
        this.activemegaChild = "";
      } else {
        this.activemegaChild = megaChildItem;
      }
    }
  },
};
</script>
<style scoped>
.category-title {
      display: block;
    padding-right: 45px;
    color: #222222;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    text-decoration: none;
    text-transform: uppercase;
    padding-top: 42px;
    padding-bottom: 42px;
    padding-left: 0;
    letter-spacing: 0.07em;
    position: relative;
    cursor: pointer;
}
.sub-category-title {
    border: 0 !important;
    background: transparent;
    color: #222222;
    border-radius: 0 !important;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    padding: 5px 35px;
    display: block;
    letter-spacing: 0.07em;
    line-height: 1.9;
    cursor: pointer;
}
.sub-category-title:hover {
  color: #df0007;
  transition: 0.3s;
}
#angle-down {
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
</style>
<style lang="scss" scoped>
.toggle-nav {
  &.toggle-button {
    z-index: 1;
  }
}
</style>
