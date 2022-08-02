<template>
  <div>
    <Breadcrumbs title="Forget Password" />
    <section class="pwd-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <h2>{{ title }}</h2>
            <ValidationObserver v-slot="{ invalid }">
              <form class="theme-form">
                <ValidationProvider
                  rules="required|email"
                  v-slot="{ errors }"
                  name="email"
                >
                  <div v-if="errors.length">
                    <ul
                      class="validation-error mb-3 text-danger font-weight-bold"
                      style="font-size: 18px"
                    >
                      <li v-for="(error, index) in errors" :key="index">
                        {{ error }}
                      </li>
                    </ul>
                  </div>
                  <div class="form-row">
                    <div class="col-md-12">
                      <input
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <input
                      class="btn btn-solid"
                      value="submit"
                      type="button"
                      :disabled="invalid"
                      @click="sendForgotMailLink()"
                    />
                  </div>
                </ValidationProvider>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import { mapActions } from 'vuex';
export default {
  components: {
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      title: "Forget Your Password",
      errors: [],
      email: null,
    };
  },
  methods: {
    ...mapActions('admin_adminauth',['sendMailForForgot']),
    checkForm: function (e) {
      this.errors = [];
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.errors.length) return true;
      e.preventDefault();
    },
    validEmail: function (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendForgotMailLink() {
      this.sendMailForForgot({email:this.email}).then((resp) => {
          if(resp.data.status) {
            this.$toast.success('Reset Link Sent Your Email Id');
          }
      }).catch((error) => {

      })
    }
  },
};
</script>
