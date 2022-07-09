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
            <a href="#" class="nav-link">
              Home
            </a>
          </li>
          <li class="dropdown">
            <a href="#" class="nav-link">
              Brand
              <span class="sub-arrow" v-if="brand"></span>
            </a>
            <ul v-if="brand" class="nav-submenu">
              <li v-for="b in brand" :key="b.id">
                <nuxt-link :to="{ path: '/collection/leftsidebar/'+b.slug , query: {brand_id: b.id} }">
                  {{b.name}}
                </nuxt-link>
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
    ...mapState("menu", ["brand"]),
  },
  created() {
    this.getBrand();
  },
  methods: {
    ...mapActions("menu", ["getBrand"]),
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