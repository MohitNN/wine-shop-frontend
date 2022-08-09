<template>
  <div>
    <header style="background: #FFD391;">
      <div class="mobile-fix-option"></div>
      <TopBar/>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="main-menu">
              <div class="menu-left">
                <div class="navbar">
                  <a @click="left_sidebar">
                    <div class="bar-style">
                    </div>
                  </a>
                </div>
                <div class="brand-logo">
                  <nuxt-link :to="{ path: '/'}">
                    <img :src='"@/assets/images/icon/LogoSIte.png"' height="75" style="height:75px" class="img-fluid" alt />
                  </nuxt-link>
                </div>
              </div>
              <div class="menu-right pull-right">
                  <Nav/>
                  <HeaderWidgets/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import TopBar from '../widgets/topbar'
import LeftSidebar from '../widgets/left-sidebar'
import Nav from '../widgets/navbar'
import HeaderWidgets from '../widgets/header-widgets'
export default {
  data() {
    return {
      leftSidebarVal: true
    }
  },
  components: {
    TopBar,
    LeftSidebar,
    Nav,
    HeaderWidgets
  },
  methods: {
    left_sidebar() {
      this.leftSidebarVal = true
    },
    closeBarValFromChild(val) {
      this.leftSidebarVal = val
    }
  }
}
</script>
