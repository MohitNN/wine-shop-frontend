<template>
  <!-- Page Header Start-->
  <div :class="!sidebar ? 'page-main-header open' : 'page-main-header '">
    <div class="main-header-right row">
      <div class="main-header-left d-lg-none">
        <div class="logo-wrapper">
          <router-link to="/">
            <img
              class="blur-up lazyloaded"
              src="../../../assets/admin/images/dashboard/multikart-logo.png"
              alt=""
          /></router-link>
        </div>
      </div>
      <div class="mobile-sidebar">
        <div class="media-body text-right switch-sm">
          <label class="switch"
            ><a @click="toggle_sidebar"
              ><i id="sidebar-toggle"
                ><feather type="align-left"></feather></i></a
          ></label>
        </div>
      </div>
      <div class="nav-right col">
        <ul class="nav-menus" :class="headerMenu ? 'open' : ''">
          <li class="onhover-dropdown">
            <div class="media justify-content-end align-items-center">
              <img
                class="
                  align-self-center
                  pull-right
                  img-50
                  rounded-circle
                  blur-up
                  lazyloaded
                "
                src="../../../assets/admin/images/dashboard/man.png"
                alt="header-user"
              />
              <div class="dotted-animation">
                <span class="animate-circle"></span
                ><span class="main-circle"></span>
              </div>
            </div>
            <ul
              class="
                profile-dropdown
                onhover-show-div
                p-20
                profile-dropdown-hover
              "
            >
              <li>
                <a><feather type="user"></feather>Edit Profile</a>
              </li>
              <li>
                <a @click="logout"
                  ><feather type="log-out"></feather><span>Log out</span></a
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-lg-none mobile-toggle pull-right" @click="openHeader()">
          <feather type="more-horizontal"></feather>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Header Ends -->
</template>

<script>
// import firebase from "firebase";
// import UserAuth from "../../auth/index.js";
import chatBox from "@/components/admin/chatBox.vue";
// import CountryFlag from "vue-country-flag";
import { localeOptions } from "../../../constants/config";
import { mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    chatBox,
    // CountryFlag
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.resized = this.sidebar_toggle_var;
  },
  data() {
    return {
      chatSidebar: false,
      headerMenu: false,
      opensearch: false,
      localeOptions: localeOptions,
      langIcon: localStorage.getItem("currentLanguageIcon") || "flag-icon-us",
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) {
        return "";
      }
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  watch: {
    // "$i18n.locale"(to, from) {
    //   if (from !== to) {
    //     this.$router.go(this.$route.path);
    //   }
    // }
  },
  computed: {
    sidebar() {
      return this.$store.state.menu.togglesidebar;
    },
  },
  methods: {
    ...mapActions({
      logOutAPi: "admin_adminauth/LogOutApi",
    }),
    // ...mapActions(["setLang"]),
    toggle_sidebar() {
      this.$store.dispatch("admin_menu/opensidebar");
    },
    openHeader() {
      this.headerMenu = !this.headerMenu;
    },
    openChatSidebar() {
      this.$store.dispatch("admin_menu/openChatSidebar", true);
    },
    toggle_search() {
      this.opensearch = !this.opensearch;
    },
    toggle_fullscreen() {
      if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
      ) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    logout: function () {
      this.logOutAPi()
        .then((resp) => {
          this.$router.push("/admin/login");
        })
        .catch((error) => {});
    },
    changeLocale(locale) {
      // this.setLang(locale);
    },
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>
