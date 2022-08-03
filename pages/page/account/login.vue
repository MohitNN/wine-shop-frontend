<template>
  <div>
    <!-- <Header /> -->
    <Breadcrumbs title="Login" />
    <section class="login-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3>{{ logintitle }}</h3>
            <div class="theme-card">
              <ValidationObserver v-slot="{ invalid }">
                <form class="theme-form" @submit.prevent="onSubmit">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <ValidationProvider
                      rules="required|email"
                      v-slot="{ errors }"
                      name="email"
                    >
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        name="email"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <ValidationProvider
                      rules="required"
                      v-slot="{ errors }"
                      name="password"
                    >
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        placeholder="Enter your password"
                      />
                      <span class="validate-error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="h6 text-right"> 
                    <a class="fw-bold" role="button"  @click="$router.push('/page/account/forget-password')">Forget Your Password</a>
                  </div>
                  <button
                    type="submit"
                    class="btn"
                    :class="!invalid ? 'btn-solid' : 'btn-solid-disabled'"
                    :disabled="invalid"
                  >
                    Login
                  </button>
                </form>
              </ValidationObserver>
            </div>
          </div>
          <div class="col-lg-6 right-login">
            <h3>{{ registertitle }}</h3>
            <div class="theme-card authentication-right">
              <h6 class="title-font">Create A Account</h6>
              <p>
                Sign up for a free account at our store. Registration is quick
                and easy. It allows you to be able to order from our shop. To
                start shopping click register.
              </p>
              <nuxt-link
                :to="{ path: '/page/account/register' }"
                class="btn btn-solid"
                >Create an Account</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import Header from "../../../components/header/header1";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  middleware: ["loginCheck"],
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      logintitle: "Login",
      registertitle: "New Customer",
      email: "user@gmail.com",
      password: "admin123",
    };
  },
  methods: {
    ...mapActions({
      login:"admin_adminauth/login"
    }),
    onSubmit() {
      this.login({ email: this.email, password: this.password })
        .then((resp) => {
          if (resp.data.status) {
            this.$toast.success("Login Succesfull");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          this.$toast.error("Something went wrong.");
        });
    },
  },
};
</script>
<style >
.btn-solid-disabled {
  padding: 13px 29px;
  color: #ffffff !important;
  letter-spacing: 0.05em;
  border: 2px solid #ff4c3b;
  border: 2px solid var(--theme-deafult);
  background-image: linear-gradient(30deg, #ff4c3b 50%, transparent 50%);
  background-image: linear-gradient(
    30deg,
    var(--theme-deafult) 50%,
    transparent 50%
  );
  background-size: 850px;
  background-repeat: no-repeat;
  background-position: 0;
  cursor: not-allowed;
}
</style>
