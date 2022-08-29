<template>
  <div>
    <!-- Sample menu definition -->
    <div class="main-navbar">
      <div id="mainnav">
        <div class="toggle-nav" :class="leftSidebarVal ? 'toggle-button' : ''" @click="openmobilenav=true">
          <i class="fa fa-bars sidebar-bar"></i>
        </div>
        <ul class="nav-menu" :class="{ opennav: openmobilenav }" >
        <li v-for="(menuItem, index) in categories.slice(0, 4)" :key="index" :class="categories.length ? 'mega-menu' : 'dropdown'" v-show="openmobilenav">
            <a  style="cursor: pointer;" href="javascript:void(0)" class="nav-link" @click="setActive('Brands') ">
             Brands
              <span class="sub-arrow" v-if="menuItem.types"></span>
            </a>
            <ul class="nav-submenu" :class="{ opensubmenu: isActive('Brands') }" v-if="menuItem.types"  >
              <li v-for="(childrenItem, index) in brand" :key="index">
                <a href="javascript:void(0)" style="cursor: pointer;" @click="setActiveChild(childrenItem.type_name)" v-if="childrenItem.subcategories">
                  {{childrenItem.name}}
                  <span class="sub-arrow" v-if="childrenItem.subcategories"></span>
                </a>
                <a v-else @click="setActiveChild(childrenItem.name),loadProduct('brand', childrenItem.slug,[])" style="cursor: pointer;">
                  {{childrenItem.name}}
                </a>
              </li>
            </ul>
          </li>

          <li class="dropdown" v-if="!openmobilenav">
            <a  style="cursor: pointer;" href="javascript:void(0)" class="nav-link" >
              Brands
              <span class="sub-arrow" v-if="brand && brand.length"></span>
            </a>
            <ul class="nav-submenu"  v-if="brand">
              <li v-for="(childrenItem, index) in brand" :key="index">
                <a href="javascript:void(0)" style="cursor: pointer;" @click="setActiveChild(childrenItem.name) , loadProduct('brand', childrenItem.slug,[])">
                  {{childrenItem.name}}
                </a>
              </li>
            </ul>
          </li>

          
          <li class="back-btn">
            <div class="mobile-back text-right">
              <span @click="openmobilenav=false">Back</span>
              <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
            </div>
          </li>
          <li v-for="(menuItem, index) in categories.slice(0, 4)" :key="index" :class="categories.length ? 'mega-menu' : 'dropdown'">
            <a  style="cursor: pointer;" href="javascript:void(0)" class="nav-link" @click="setActive(menuItem.name) ">
              {{menuItem.name}}
              <span class="sub-arrow" v-if="menuItem.types"></span>
            </a>
            <ul class="nav-submenu" :class="{ opensubmenu: isActive(menuItem.name) }" v-if="menuItem.types" v-show="openmobilenav" >
              <li v-for="(childrenItem, index) in menuItem.types" :key="index">
                <a href="javascript:void(0)" style="cursor: pointer;" @click="setActiveChilds(childrenItem.type_name)" v-if="childrenItem.subcategories">
                  {{childrenItem.type_name}}
                  <span class="sub-arrow" v-if="childrenItem.subcategories"></span>
                </a>
                <a v-else @click="setActiveChild(childrenItem.type_name),loadProduct('type', childrenItem.type_name)" style="cursor: pointer;">
                  {{childrenItem.type_name}}
                </a>
                <ul class="nav-sub-childmenu" :class="{ opensubchild: isActiveChild(childrenItem.type_name) }" v-if="childrenItem.subcategories">
                  <li v-for="(childrenSubItem, index) in childrenItem.subcategories" :key="index">
                    <a @click="setActiveChild(childrenItem.name) , loadProduct('sub_category', childrenSubItem.slug,[])" style="cursor: pointer;">
                      {{childrenSubItem.name}}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div class="mega-menu-container" :class="{ opensubmenu: isActive('portfolio') }" v-if="menuItem.types">
              <div class="container">
                <div class="row">
                  <div class="col mega-box"  v-for="(childrenItem, index) in menuItem.types" :key="index">
                    <div class="link-section">
                      <div class="menu-title" @click="setActivesubmega('portfolio')">
                        <h5>{{childrenItem.type_name}}
                          <span class="sub-arrow"></span>
                        </h5>
                      </div>
                      <div class="menu-content" :class="{ opensubmegamenu: isActivesubmega('portfolio') }">
                        <ul v-if="childrenItem.subcategories">
                          <li v-for="(childrenSubItem, index) in childrenItem.subcategories" :key="index">
                            <a @click="loadProduct('sub_category', childrenSubItem.slug,[])">
                              {{childrenSubItem.name}}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          
          <li class="dropdown" v-if="categories.length > 3">
            <a  style="cursor: pointer;" href="javascript:void(0)" class="nav-link" >
              Other
              <span class="sub-arrow" v-if="categories && categories.length"></span>
            </a>
            <ul class="nav-submenu">
              <li v-for="(childrenItem, index) in categories.slice(4)" :key="index">
                <a href="javascript:void(0)" style="cursor: pointer;" @click="setActiveChild(childrenItem.name) , loadProduct('brand', childrenItem.slug,[])">
                  {{childrenItem.name}}
                </a>
                <!-- :to="{ path: childrenItem.path}" -->
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
    ...mapState({
      menulist: state => state.menu.data
    }),
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
    setActiveChilds: function (menuChildItem) {
      console.log(menuChildItem);
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = "";
      } else {
        this.activeChildItem = menuChildItem;
      }
    },
    setActiveChild: function (menuChildItem) {
      console.log(menuChildItem);
      if (this.activeChildItem === menuChildItem) {
        this.activeChildItem = "";
      } else {
        this.activeChildItem = menuChildItem;
        this.openmobilenav = false;
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
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-nav {
  &.toggle-button {
    z-index: 1;
  }
}
</style>