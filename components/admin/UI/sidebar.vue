<template>
  <div>
    <!-- Page Sidebar Start-->
    <div class="page-sidebar">
      <div class="main-header-left d-none d-lg-block">
        <div class="logo-wrapper">
          <router-link to="/"
            ><img
              class="blur-up lazyloaded"
              src="../../../assets/admin/images/dashboard/multikart-logo.png"
              alt=""
          /></router-link>
        </div>
      </div>
      <div class="sidebar custom-scrollbar">
        <div class="sidebar-user text-center">
          <div>
            <img
              class="img-60 rounded-circle lazyloaded blur-up"
              src="../../../assets/admin/images/dashboard/man.png"
              alt="#"
            />
          </div>
          <h6 class="mt-3 f-14">JOHN</h6>
          <p>general manager.</p>
        </div>
        <ul
          class="sidebar-menu"
          id="myDIV"
        >
           <li
            v-for="(menuItem, index) in menuItem"
            :key="index"
            :class="{ active: menuItem.active }"
          >
            <!-- Sub -->
            <a
              href="javascript:void(0)"
              class="sidebar-header"
              v-if="menuItem.type == 'sub'"
              @click="setNavActive(menuItem, index)"
            >
             <feather :type="menuItem.icon"> </feather>
              <span @click="dashboardClick(menuItem.title)">
                {{ menuItem.title }}
              </span>

              <span
                :class="'badge badge-pill badge-' + menuItem.badgeType"
                v-if="menuItem.badgeType"
                >{{ menuItem.badgeValue }}</span
              >
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </a>
            <router-link
              :to="menuItem.path"
              class="sidebar-header"
              v-if="menuItem.type == 'link'"
              router-link-exact-active
            >
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ menuItem.title }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ menuItem.badgeValue }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </router-link>
            <!--</span>
            </span>-->
            <!-- External Link -->
            <a
              :href="menuItem.path"
              class="sidebar-header"
              v-if="menuItem.type == 'extLink'"
              @click="setNavActive(menuItem, index)"
            >
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ menuItem.title }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ menuItem.badgeValue }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </a>
            <!-- External Tab Link -->
            <a
              :href="menuItem.path"
              target="_blank"
              class="sidebar-header"
              v-if="menuItem.type == 'extTabLink'"
              @click="setNavActive(menuItem, index)"
            >
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ menuItem.title }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ menuItem.badgeValue }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"
              ></i>
            </a>
            <!-- 2nd Level Menu -->
            <ul
              class="sidebar-submenu"
              v-if="menuItem.children"
              :class="{ 'menu-open': menuItem.active }"
            >
              <li
                v-for="(childrenItem, index) in menuItem.children"
                :key="index"
                :class="{ active: childrenItem.active }"
              >
                <!-- Sub -->
                <a
                  href="javascript:void(0)"
                  v-if="childrenItem.type == 'sub'"
                  @click="setNavActive(childrenItem, index)"
                >
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-right pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </a>
                <!-- Link -->
                <!--{{ childrenItem.children }}-->
                <!--{{ childrenItem.path }}-->
                <span
                  v-for="(item, index) in childrenItem.children"
                  :key="index"
                >
                </span>

                <router-link
                  :to="childrenItem.path"
                  v-if="childrenItem.type == 'link'"
                  router-link-exact-active
                >
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </router-link>
                <!-- External Link -->
                <a
                  :href="childrenItem.path"
                  v-if="childrenItem.type == 'extLink'"
                >
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </a>
                <!-- External Tab Link -->
                <a
                  :href="childrenItem.path"
                  target="_blank"
                  v-if="childrenItem.type == 'extTabLink'"
                >
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"
                  ></i>
                </a>
                <!-- 3rd Level Menu -->
                <ul class="sidebar-submenu" v-if="childrenItem.children">
                  <li
                    v-for="(childrenSubItem, index) in childrenItem.children"
                    :key="index"
                  >
                    <!-- Link -->
                    <router-link
                      :to="childrenSubItem.path"
                      v-if="childrenSubItem.type == 'link'"
                      router-link-exact-active
                    >
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                            childrenSubItem.badgeType +
                            ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"
                      ></i>
                    </router-link>
                    <!-- External Link -->
                    <a
                      :href="childrenSubItem.path"
                      v-if="childrenSubItem.type == 'extLink'"
                    >
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                            childrenSubItem.badgeType +
                            ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"
                      ></i>
                    </a>
                    <!-- External Tab Link -->
                    <a
                      :href="childrenSubItem.path"
                      target="_blank"
                      v-if="childrenSubItem.type == 'extTabLink'"
                    >
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                            childrenSubItem.badgeType +
                            ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"
                      ></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- Page Sidebar Ends-->
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      width: 0,
      height: 0,
      menuItems_:[
        { "title": "Dashboard", "icon": "home", "type": "sub", "badgeType": "primary", "active": false },
        {
            "title": "Products",
            "icon": "box",
            "type": "sub",
            "active": false,
            "children": [{
                    "title": "Physical",
                    "type": "sub",
                    "active": false,
                    "children": [
                        { "path": "/physical/category", "title": "Category", "type": "link" },
                        { "path": "/physical/sub-category", "title": "Sub Category", "type": "link" },
                        { "path": "/physical/product-list", "title": "Product List", "type": "link" },
                        { "path": "/physical/product-detail", "title": "Product Detail", "type": "link" },
                        { "path": "/physical/add-product", "title": "Add Product", "type": "link" }
                    ]
                },
                {
                    "title": "Digital",
                    "type": "sub",
                    "active": false,
                    "children": [
                        { "path": "/digital/category", "title": "Category", "type": "link" },
                        { "path": "/digital/sub-category", "title": "Sub Category", "type": "link" },
                        { "path": "/digital/product-list", "title": "Product List", "type": "link" },
                        { "path": "/digital/add-product", "title": "Add Product", "type": "link" }
                    ]
                }
            ]
        },
        {
            "title": "Sales",
            "icon": "image",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/sales/order", "title": "Orders", "type": "link" },
                { "path": "/sales/transactions", "title": "Transactions", "type": "link" }
            ]
        },
        {
            "title": "Coupons",
            "icon": "tag",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/coupons/coupon-list", "title": "List Coupons", "type": "link" },
                { "path": "/coupons/add-coupon", "title": "Create Coupons ", "type": "link" }
            ]
        },
        {
            "title": "Pages",
            "icon": "clipboard",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/pages/page-list", "title": "List Page", "type": "link" },
                { "path": "/pages/create-page", "title": "Create Page", "type": "link" }
            ]
        },
        {
            "title": "Media",
            "path": "/app/media",
            "icon": "camera",
            "type": "link",
            "active": false

        },
        {
            "title": "Menus",
            "icon": "align-left",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/menus/menu-list", "title": "Menu list", "type": "link" },
                { "path": "/menus/create-menu", "title": "Create Menu", "type": "link" }
            ]
        },
        {
            "title": "Users",
            "icon": "user-plus",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/users/user-list", "title": "User List", "type": "link" },
                { "path": "/users/create-user", "title": "Create User", "type": "link" }
            ]
        },
        {
            "title": "Vendors",
            "icon": "users",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/vendors/vendor-list", "title": "Vendor List", "icon": "box", "type": "link" },
                { "path": "/vendors/create-vendor", "title": "Create Vendor", "icon": "box", "type": "link" }
            ]
        },

        {
            "title": "Localization",
            "icon": "chrome",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/localization/translations", "title": "Translations", "type": "link" },
                { "path": "/localization/currency-rates", "title": "Currency Rates", "type": "link" },
                { "path": "/localization/taxes", "title": "Taxes", "type": "link" }
            ]
        },
        {
            "path": "/app/reports",
            "title": "Reports",
            "icon": "bar-chart",
            "type": "link",
            "bookmark": true
        },
        {
            "title": "Settings",
            "icon": "settings",
            "type": "sub",
            "active": false,
            "children": [
                { "path": "/settings/profile", "title": "Profile", "type": "link" }
            ]
        },
        {
            "path": "/app/invoice",
            "title": "Invoice",
            "icon": "archive",
            "type": "link",
            "bookmark": true
        },
        {
            "path": "/auth/login",
            "title": "Login",
            "icon": "log-in",
            "type": "link",
            "bookmark": true
        }
    ]
    };
  },
  computed: {
    // ...mapState({
    //   menuItems: state => state.menu.data
    // })
    menuItem(){
      return this.menuItems_;
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (this.width < 991) {
      // this.layout.settings.sidebar.type = "default";
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.menuItem.filter(items => {
      if (items.path === this.$route.path)
        this.$store.dispatch("menu/setActiveRoute", items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === this.$route.path)
          this.$store.dispatch("menu/setActiveRoute", subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === this.$route.path)
            this.$store.dispatch("menu/setActiveRoute", subSubItems);
        });
      });
    });
  },
  methods: {
    dashboardClick(title) {
      if (title == "Dashboard") {
        this.$router.push("/");
      }
    },
    setNavActive(item) {
      this.$store.dispatch("admin_menu/setNavActive", item);
    },
    handleResize() {
      this.width = window.innerWidth - 310;
    }
  }
};
</script> 
<style scoped>

</style>
