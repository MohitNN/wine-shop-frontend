<template>
  <layout>
    <template v-slot:content>
      <div>
        <div class="container-fluid"></div>
        <div class="col-md-12">
          <div class="card">
            <div
              class="
                card-header
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <h5>Change Password</h5>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-12">
              <div style="height: 100% !important" class="card tab2-card">
                <div class="card-body">
                  <ul
                    class="nav nav-tabs tab-coupon mb-0"
                    id="top-tab"
                    role="tablist"
                  >
                    <div class="tab-content" id="top-tabContent">
                      <b-card-text>
                        <div
                          class="tab-pane fade show active"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="top-profile-tab"
                        >
                          <ValidationObserver v-slot="{ invalid }">
                            <div class="form">
                              <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                name="currentpassword"
                              >
                                <div class="form-group mb-3 row">
                                  <h5
                                    for="validationCustom01"
                                    class="f-w-600 col-xl-4 col-sm-4 mb-0"
                                  >
                                    Current Password :
                                  </h5>
                                  <input
                                    class="form-control col-xl-6 col-sm-7"
                                    name="currentpassword"
                                    v-model="password.currentpassword"
                                    id="validationCustom01"
                                    type="password"
                                  />
                                  <div
                                    class="
                                      col-xl-8 col-sm-7
                                      p-0
                                      ml-0
                                      validation
                                    "
                                  >
                                    <span class="validate-error">{{
                                      errors[0]
                                    }}</span>
                                  </div>
                                </div>
                              </ValidationProvider>
                              <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                name="newpassword"
                              >
                                <div class="form-group mb-3 row">
                                  <h5
                                    for="validationCustom01"
                                    class="f-w-600 col-xl-4 col-sm-4 mb-0"
                                  >
                                    Change Password :
                                  </h5>
                                  <input
                                    class="form-control col-xl-6 col-sm-7"
                                    name="newpassword"
                                    v-model="password.newpassword"
                                    id="validationCustom01"
                                    type="password"
                                  />
                                  <div
                                    class="
                                      col-xl-8 col-sm-7
                                      p-0
                                      ml-0
                                      validation
                                    "
                                  >
                                    <span class="validate-error">{{
                                      errors[0]
                                    }}</span>
                                  </div>
                                </div>
                              </ValidationProvider>
                              <ValidationProvider
                                rules="required"
                                v-slot="{ errors }"
                                name="confirmpassword"
                              >
                                <div class="form-group mb-3 row">
                                  <h5
                                    for="validationCustom01"
                                    class="f-w-600 col-xl-4 col-sm-4 mb-0"
                                  >
                                    Confirm Password :
                                  </h5>
                                  <input
                                    class="form-control col-xl-6 col-sm-7"
                                    name="confirmpassword"
                                    v-model="password.confirmpassword"
                                    id="validationCustom01"
                                    type="password"
                                  />
                                  <div
                                    class="
                                      col-xl-8 col-sm-7
                                      p-0
                                      ml-0
                                      validation
                                    "
                                  >
                                    <span class="validate-error">{{
                                      errors[0]
                                    }}</span>
                                  </div>
                                </div>
                              </ValidationProvider>
                              <div
                                style="
                                  display: flex;
                                  justify-content: flex-end;
                                  width: 448px;
                                "
                              >
                                <b-button
                                  class=""
                                  :disabled="invalid"
                                  style="margin: 25px"
                                  @click="updatePassword()"
                                  >Update</b-button
                                >
                              </div>
                            </div>
                          </ValidationObserver>
                        </div>
                      </b-card-text>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </layout>
</template>

<script>
import layout from "@/components/admin/Body.vue";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components: {
    layout,
    ValidationProvider,
    ValidationObserver,
  },
  props: ["categoryType"],
  data() {
    return {
      password: {
        currentpassword: "",
        newpassword: "",
        confirmpassword: "",
      },
    };
  },
  methods: {
    onFileChange(e) {
      var reader = new FileReader();
      reader.onload = function () {
        var output = document.getElementById("sawImg");
        output.src = reader.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    },
    ...mapActions("admin_adminauth", ["changePassword"]),
    updatePassword() {
      if (this.password.newpassword == this.password.confirmpassword) {
        this.changePassword(this.password)
          .then((resp) => {
            if (resp.data.status) {
              this.$toast.success("Change Password Succesfully.........");
              this.$router.push("/admin/login");
            }
          })
          .catch((error) => {});
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "New Paasword and Confirm password not match",
        });
      }
    },
  },
};
</script>

<style>
</style>
