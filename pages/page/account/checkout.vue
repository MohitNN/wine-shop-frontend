<template>
  <div>
    <Breadcrumbs title="Payment Details " />
    <section class="section-b-space">
      <div class="container">
        <!-- {{cartProducts}} -->
        <div class="checkout-page">
          <div class="checkout-form">
            <ValidationObserver v-slot="{ invalid }">
              <form @submit.prevent="onSubmit">
                <div class="row">
                  <div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-title">
                      <h3>Billing Details</h3>
                    </div>
                    <div class="row check-out">
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">First Name</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="First name"
                        >
                          <input
                            type="text"
                            v-model="user.first_name"
                            name="First name"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">Last Name</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="Last name"
                        >
                          <input
                            type="text"
                            v-model="user.last_name"
                            name="Last name"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <ValidationProvider
                          rules="required|digits:10"
                          v-slot="{ errors }"
                          name="phone Number"
                        >
                          <div class="field-label">Phone</div>
                          <input
                            type="text"
                            v-model="user.phone"
                            name="Phone"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-6 col-sm-6 col-xs-12">
                        <div class="field-label">Email Address</div>
                        <ValidationProvider
                          rules="required|email"
                          v-slot="{ errors }"
                          name="Email"
                        >
                          <input
                            type="text"
                            v-model="user.email"
                            name="Email Address"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">Country</div>
                        <select v-model="user.country">
                          <option>India</option>
                          <option selected>South Africa</option>
                          <option>United State</option>
                          <option>Australia</option>
                        </select>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">Address</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="Address"
                        >
                          <input
                            type="text"
                            v-model="user.address"
                            name="Address"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-12 col-xs-12">
                        <div class="field-label">Town/City</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="City"
                        >
                          <input type="text" v-model="user.city" name="City" />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-6 col-xs-12">
                        <div class="field-label">State / County</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="State"
                        >
                          <input
                            type="text"
                            v-model="user.state"
                            name="State"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-6 col-xs-12">
                        <div class="field-label">Postal Code</div>
                        <ValidationProvider
                          rules="required"
                          v-slot="{ errors }"
                          name="Postal Code"
                        >
                          <input
                            type="text"
                            v-model="user.zipcode"
                            name="Postal Code"
                          />
                          <span class="validate-error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </div>
                      <div class="form-group col-md-12 col-sm-6 col-xs-12">
                        <div class="field-label" style="float:right;">
                          <input
                            type="checkbox"
                            name="saveAddress"
                          /> Save Address ?
                        </div>
                        
                      </div>
                      <!-- <div>
                        <div
                          class="
                            form-group
                            col-lg-12 col-md-12 col-sm-12 col-xs-12
                          "
                        >
                          <nuxt-link :to="{ path: '/page/account/register' }"
                            >Create an Account?</nuxt-link
                          >
                        </div>
                        <div
                          class="
                            form-group
                            col-lg-12 col-md-12 col-sm-12 col-xs-12
                          "
                        >
                          <nuxt-link :to="{ path: '/page/account/login' }"
                            >Login</nuxt-link
                          >
                        </div>
                      </div> -->
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 col-xs-12">
                    <div class="checkout-details">
                      <div class="order-box">
                        <div class="title-box">
                          <div>
                            Product
                            <span>Total</span>
                          </div>
                        </div>
                        <ul class="qty" v-if="cartProducts.length">
                          <li
                            v-for="(item, index) in cartProducts"
                            :key="index"
                          >
                            {{ item.title | uppercase }} X {{ item.quantity }}
                            <span>{{
                              (item.price * curr.curr * item.quantity)
                                | currency(curr.symbol)
                            }}</span>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Subtotal
                            <span class="count">{{
                              (cartTotal * curr.curr) | currency(curr.symbol)
                            }}</span>
                          </li>
                        </ul>
                        <ul class="sub-total">
                          <li>
                            Total
                            <span class="count">{{
                              (cartTotal * curr.curr) | currency(curr.symbol)
                            }}</span>
                          </li>
                          <li v-if="promoData && promoData.promo_value">
                            You have To save 
                            <span class="count">{{
                              promoData.promo_value | currency(curr.symbol)
                            }}</span>
                          </li>
                          <hr/>
                          <li v-if="promoData && promoData.total">
                            Net Amount  
                            <span class="count">{{
                              promoData.total | currency(curr.symbol)
                            }}</span>
                          </li>
                          <li>
                            <div class="shopping-option"></div>
                          </li>
                        </ul>
                        <b-input-group prepend="" class="mt-3 mb-3">
                          <b-form-input
                            class="col-12 col-lg-7 col-xl-7 col-md-7"
                            v-model="promoCode"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button
                              variant="outline-info"
                              @click="applyPromocode(promoCode)"
                            >
                              <b-spinner small v-if="btnLoading"></b-spinner>
                              Apply Coupon Code
                            </b-button>
                          </b-input-group-append>
                          <div v-if="promoData" class="badge badge-glow badge-success mt-2 p-2" style="font-size:18px"> 
                             <span>{{promoCode}}</span><span class="ml-2 " style="cursor: pointer;" @click="removePromocode()"><i class="fa fa-close"></i></span>  
                          </div>
                        </b-input-group>
                        <ul class="sub-total">
                          <li>
                            Bank Name :-
                            <span class="text-primary">
                              Paytm Payment Bank
                            </span>
                          </li>
                          <li>
                            Branch :-
                            <span class="text-primary"> Nodia , India </span>
                          </li>
                          <li>
                            Bank Account No :-
                            <span class="text-primary"> 918488028320 </span>
                          </li>
                          <li>
                            IFSC :-
                            <span class="text-primary"> PYTM0123456 </span>
                          </li>
                          <li>
                            <ValidationProvider
                              rules="required"
                              v-slot="{ errors }"
                              name="file"
                            >
                              <div
                                class="form-group align-items-center mb-0 row"
                              >
                                <label
                                  for="validationCustom02"
                                  class="col-xl-5 col-sm-5 mb-0"
                                  >Upload Payment Screenshot :</label
                                >
                                <input
                                  class="form-control col-xl-7 col-sm-7"
                                  name="file"
                                  id="validationCustom02"
                                  ref="file"
                                  type="file"
                                  @change="fileselected"
                                />
                              </div>
                              <div class="form-group mb-3 row">
                                <label
                                  for="validationCustom01"
                                  class="col-xl-3 col-sm-4 mb-0"
                                ></label>
                                <div
                                  class="col-xl-8 col-sm-7 p-0 ml-0 validation"
                                >
                                  <span class="validate-error">{{
                                    errors[0]
                                  }}</span>
                                </div>
                              </div>
                              <div class="form-group mb-3 row">
                                <label
                                  for="validationCustom02"
                                  class="col-xl-3 col-sm-4 mb-0"
                                ></label>
                                <img
                                  v-if="image"
                                  :src="image"
                                  width="100px"
                                  height="100px"
                                />
                              </div>
                            </ValidationProvider>
                          </li>
                        </ul>
                      </div>

                      <div class="payment-box">
                        <div class="text-right">
                          <button
                            type="submit"
                            class="btn-solid btn"
                            :disabled="invalid"
                          >
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
        
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full.esm";
import { mapGetters, mapActions , mapMutations } from "vuex";
import Loader from "@/assets/images/LoaderProcess.gif";
import Header from "../../../components/header/header1";
import Footer from "../../../components/footer/footer1";
import Breadcrumbs from "../../../components/widgets/breadcrumbs";
export default {
  middleware: ["login"],
  components: {
    Header,
    Footer,
    Breadcrumbs,
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    ...mapGetters({
      cart: "cart/cartItems",
      cartTotal: "cart/cartTotalAmount",
      curr: "products/changeCurrency",
    }),
    cartProducts() {
      return this.cart.map((v) => ({ ...v, amount: v.price * v.quantity }));
    },
  },
  data() {
    return {
      image: "",
      promoCode: "",
      btnLoading: false,
      promoData:null,
      loaderImg: Loader,
      previewimg: {
        preview: null,
      },
      user: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        file:null,
        address: "",
        city: "",
        state: "",
        zipcode: "",
        products: [],
        total: "",
        total_product: "",
      },
      isPaymentBank: false,
      isLogin: false,
      paypal: {
        sandbox: "Your_Sendbox_Key",
      },
      payment: false,
      environment: "sandbox",
      button_style: {
        label: "checkout",
        size: "medium", // small | medium | large | responsive
        shape: "pill", // pill | rect
        color: "blue", // gold | blue | silver | black
      },
      amtchar: "",
    };
  },  
  mounted() {
    // this.updateCartItems();
  },
  methods: {
    ...mapMutations('cart' , ['updateCartItems']),
    ...mapActions("products", ["makeOrder"]),
    ...mapActions("gloable", ["setLoading"]),
    ...mapActions("coupon", ["checkPromoCode"]),
    order() {
      this.isLogin = localStorage.getItem("userlogin");
      if (this.isLogin) {
        this.payWithStripe();
      } else {
        this.$router.replace("/page/account/login-firebase");
      }
    },
    payWithStripe() {
      const handler = window.StripeCheckout.configure({
        key: "PUBLISHBLE_KEY", // 'PUBLISHBLE_KEY'
        locale: "auto",
        closed: function () {
          handler.close();
        },
        token: (token) => {
          this.$store.dispatch("products/createOrder", {
            product: this.cart,
            userDetail: this.user,
            token: token.id,
            amt: this.cartTotal,
          });
          this.$router.push("/page/order-success");
        },
      });
      handler.open({
        name: "Multikart ",
        description: "Reach to your Dream",
        amount: this.cartTotal * 100,
      });
    },
    getamt() {
      return this.cartTotal.toString();
    },
    onPaymentComplete: function (data) {
      this.$store.dispatch("products/createOrder", {
        product: this.cart,
        userDetail: this.user,
        token: data.orderID,
        amt: this.cartTotal,
      });
      this.$router.push("/page/order-success");
    },
    onCancelled() {
      console.log("You cancelled a window");
    },
    onSubmit() {
      if(this.user.file != null) {
        this.setLoading(true);
        this.user.products = this.cartProducts;
        var formData = new FormData();
        formData.append("address", this.user.address);
        formData.append("city", this.user.city);
        formData.append("country", this.user.country);
        formData.append("email", this.user.email);
        formData.append("file", this.user.file);
        formData.append("first_name", this.user.first_name);
        formData.append("last_name", this.user.last_name);
        formData.append("phone", this.user.phone);
        formData.append("total", this.promoData && this.promoData.promo_applye ? this.promoData.total  : this.cartTotal );
        if (this.promoData && this.promoData.promo_code) {
          formData.append("promo_code", this.promoData.promo_code );
        }
        formData.append("total_product", this.cart.length);
        if (this.user.products.length) {
          this.user.products.forEach((element, index) => {
            formData.append("products[" + index + "]", JSON.stringify(element));
          });
        }
        // formData.append("products", this.user.products);
        formData.append("state", this.user.state);
        formData.append("zipcode", this.user.zipcode);
        this.makeOrder(formData)
          .then((resp) => {
            if (resp.data.status) {
              this.setLoading(false);
              this.updateCartItems();
              this.$router.push("order-success?order_id="+ resp.data.data.order_id);
            }
          })
          .catch((error) => {});
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Please add Payment Image",
        });
      }
    },
    applyPromocode(promocode) {
      if (this.promoCode) {
        this.btnLoading = true;
        this.checkPromoCode({ order: this.cartTotal, promocode: promocode })
          .then((resp) => {
             if(resp.data.status) {
               this.btnLoading = false;
              //  this.promoCode = '';
               this.promoData = resp.data.data;
               this.$toast.success("Your Promocode Applye succesfully");
             }
          })
          .catch((error) => {
           if(error.response.data) {
             this.$toast.error(error.response.data.message); 
           }  
           this.promoData = '';
           this.btnLoading = false;
          });
      } else {
        alert("Please Enter Valid Promocode");
      }
    },
    removePromocode() {
       this.promoCode = '';
       this.promoData = null
    },
    fileselected(e) {
      if (this.$refs.file.files[0]) {
        this.previewimg.preview = this.$refs.file.files[0];
        this.user.file = this.$refs.file.files[0];
        const file = e.target.files.item(0);
        const reader = new FileReader();
        reader.addEventListener("load", this.imageloaded);
        reader.readAsDataURL(file);
      }
    },

    imageloaded(e) {
      this.image = e.target.result;
    },
  },
};
</script>
