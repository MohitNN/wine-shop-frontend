<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
        </div>
        <div class="col-lg-6 text-right">
          <ul class="header-dropdown">
            <li class="mobile-wishlist">
              <nuxt-link :to="{ path: '/page/account/wishlist' }">
                <i class="fa fa-heart" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li class="onhover-dropdown mobile-account">
              <i class="fa fa-user" aria-hidden="true"></i> My Account
              <ul class="onhover-show-div">
                <li>
                  <a v-if="isLogin" @click="logout"> Logout </a>
                  <nuxt-link v-if="!isLogin" :to="{ path: '/page/account/login' }">Login</nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="{ path: '/page/account/dashboard' }">Dashboard</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import UserAuth from '../../pages/page/account/auth/auth'
export default {
  data() {
    return {
      isLogin: false
    }
  },
  created() {
    if (process.client) {
      this.isLogin = localStorage.getItem('userlogin')
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        UserAuth.Logout()
        this.$router.replace('/page/account/login-firebase')
      })
    }
  }
}
</script>
