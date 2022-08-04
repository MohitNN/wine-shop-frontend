<template>
  <div>
    <!-- <Header /> -->
    <Breadcrumbs title="Dashboard" />
    <section
      class="section-b-space"
      style="background-color: #ffffff"
      v-if="user && user.user"
    >
      <div class="container">
        <div class="row">
          <b-card
            no-body
            v-bind:class="'dashboardtab'"
            style="box-shadow: none !important"
          >
            <b-tabs pills card vertical>
              <b-tab title="Account Info" active>
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My Dashboard</h2>
                      </div>
                      <div class="welcome-msg">
                        <p>Hello, {{ user.user.name }} !</p>
                        <p>
                          From your My Account Dashboard you have the ability to
                          view a snapshot of your recent account activity and
                          update your account information. Select a link below
                          to view or edit information.
                        </p>
                      </div>
                      <div class="box-account box-info">
                        <div class="box-head">
                          <h2>Account Information</h2>
                        </div>
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="box">
                              <div class="box-title">
                                <h3>Account Information</h3>
                                <a
                                  href="javascript:void(0)"
                                  v-b-modal.modal-prevent-closing
                                  >Edit</a
                                >
                              </div>
                              <div class="box-content">
                                <h6>{{ user.user.name }}</h6>
                                <h6>{{ user.user.email }}</h6>
                                <!-- <h6>
                                  <a role="button" @click="openChangePassword()">Change Password</a>
                                </h6> -->
                              </div>
                              <b-modal
                                id="modal-prevent-closing"
                                ref="modal"
                                title="Submit Your Name"
                                @show="resetModal"
                                @hidden="resetModal"
                                @ok="handleOk"
                              >
                                <form
                                  ref="form"
                                  @submit.stop.prevent="handleSubmit"
                                >
                                  <b-form-group
                                    label="Name"
                                    label-for="name-input"
                                    invalid-feedback="Name is required"
                                    :state="nameState"
                                  >
                                    <b-form-input
                                      id="name-input"
                                      v-model="name"
                                      :state="nameState"
                                      placeholder="Name"
                                      required
                                    ></b-form-input>
                                  </b-form-group>
                                </form>
                              </b-modal>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="My Orders">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title">
                        <h2>My orders</h2>
                      </div>
                      <orderdetails />
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Change Password" ref="changePass">
                <b-card-text>
                  <div class="dashboard-right">
                    <div class="dashboard">
                      <div class="page-title mb-5">
                        <h2>Change password</h2>
                      </div>
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
                                          placeholder="Current Password"
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
                                          placeholder="Change Password"
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
                                          placeholder="Confirm Password"
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
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "../../../components/header/header1";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
import orderdetails from "../../../components/widgets/orderdetails";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  props: ["categoryType"],
  middleware: ["login"],
  data() {
    return {
      password: {
        currentpassword: "",
        newpassword: "",
        confirmpassword: "",
      },
      name: "",
      nameState: null,
      submittedNames: [],
      changePasswordTab: false,
    };
  },
  components: {
    Header,
    Footer,
    Breadcrumbs,
    orderdetails,
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapState("admin_adminauth", ["user"]),
  },
  methods: {
    ...mapActions("order", ["getOrderList"]),
    ...mapActions("admin_adminauth", ["changePassword"]),
    openChangePassword() {
      console.log(this.$refs.changePass, "-------");
    },
    updatePassword() {
      if (this.password.newpassword == this.password.confirmpassword) {
        this.changePassword(this.password)
          .then((resp) => {
            if (resp.data.status) {
              this.$toast.success("Change Password Succesfully.........");
              this.$router.push("/page/account/login");
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
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      bvModalEvent.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.submittedNames.push(this.name);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>
