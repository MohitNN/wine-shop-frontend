<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <div class="text-right">
        <ValidationProvider
          rules="required|email"
          v-slot="{ errors }"
          name="email"
        >
          <div class="form-group mb-3 row">
            <h5 for="validationCustom01" class="f-w-600 col-xl-4 col-sm-4 mb-0">
              Email Id :
            </h5>
            <input
              class="form-control col-xl-6 col-sm-7"
              name="email"
              v-model="password.email"
              id="validationCustom01"
              type="text"
            />
            <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
              <span class="validate-error">{{ errors[0] }}</span>
            </div>
          </div>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          name="New Password"
        >
          <div class="form-group mb-3 row">
            <h5 for="validationCustom01" class="f-w-600 col-xl-4 col-sm-4 mb-0">
              New Password :
            </h5>
            <input
              class="form-control col-xl-6 col-sm-7"
              name="newpassword"
              v-model="password.newpassword"
              id="validationCustom01"
              type="password"
            />
            <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
              <span class="validate-error">{{ errors[0] }}</span>
            </div>
          </div>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          v-slot="{ errors }"
          name="Confirm Password"
        >
          <div class="form-group mb-3 row">
            <h5 for="validationCustom01" class="f-w-600 col-xl-4 col-sm-4 mb-0">
              Confirm Password :
            </h5>
            <input
              class="form-control col-xl-6 col-sm-7"
              name="confirmpassword"
              v-model="password.confirmpassword"
              id="validationCustom01"
              type="password"
            />
            <div class="col-xl-8 col-sm-7 p-0 ml-0 validation">
              <span class="validate-error">{{ errors[0] }}</span>
            </div>
          </div>
        </ValidationProvider>
        <div style="display: flex; justify-content: center">
          <b-button
            class=""
            :disabled="invalid"
            style="margin: 25px"
            @click="submitReset()"
            >Reset Password</b-button
          >
        </div>
      </div>
    </ValidationObserver>
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      token: this.$route.params.token,
      password: {
        email: "",
        newpassword: "",
        confirmpassword: "",
        token:'',
      },
    };
  },
  methods: {
    ...mapActions("admin_adminauth", ["resetPassword"]),
    submitReset() {
      if (this.password.newpassword == this.password.confirmpassword) {
        this.password.token = this.token 
        this.resetPassword(this.password).then((resp) => {
            console.log(resp)
             if(resp.data.status) {
                 this.$toast.success('Forgot Password Succesfully');
                 this.$router.push("/page/account/login"); 
             }

        }).catch((error) => {
           if(error.response.data) {
             this.$toast.error(error.response.data.message); 
           } 
        })
      } else {
        this.$swal({
          icon: "success",
          title: "Oops...",
          text: "New Paasword and Confirm password not match",
        });
      }
    },
  },
};
</script>