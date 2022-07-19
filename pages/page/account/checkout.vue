<template>
<div>
    <Breadcrumbs title="Checkout" />
    <section class="section-b-space">
        <div class="container">
            <div class="checkout-page">
                <div class="checkout-form">
                    <form @submit.prevent="onSubmit">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-sm-12 col-xs-12">
                                <div class="checkout-title">
                                    <h3>Transaction Form</h3>
                                </div>
                                <div class="row check-out justify-content-flex-start">
                                    <div class="form-group col-md-8 col-sm-8 col-xs-12">
                                        <div class="field-label">Name : </div>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="name">
                                            <input type="text" name="name" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-8 col-sm-8 col-xs-12">
                                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }" name="account no.">
                                            <div class="field-label">Account No. : </div>
                                            <input type="text" name="account no." />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-8 col-sm-8 col-xs-12">
                                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }" name="bank name">
                                            <div class="field-label">Bank Name : </div>
                                            <input type="text" name="bank name" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-8 col-sm-8 col-xs-12">
                                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }" name="amount">
                                            <div class="field-label">Amount</div>
                                            <input type="text" name="amount" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-8 col-sm-8 col-xs-12">
                                        <ValidationProvider rules="required|digits:10" v-slot="{ errors }" name="translation id">
                                            <div class="field-label">Translation Id</div>
                                            <input type="text" name="translation id" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">Email Address</div>
                                        <ValidationProvider rules="required|email" v-slot="{ errors }" name="Email">
                                            <input type="text" v-model="user.email" name="Email Address" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                        <div class="field-label">Country</div>
                                        <select>
                                            <option>India</option>
                                            <option selected>South Africa</option>
                                            <option>United State</option>
                                            <option>Australia</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                        <div class="field-label">Address</div>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="Address">
                                            <input type="text" v-model="user.address" name="Address" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                        <div class="field-label">Town/City</div>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="City">
                                            <input type="text" v-model="user.city" name="City" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                        <div class="field-label">State / County</div>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="State">
                                            <input type="text" v-model="user.state" name="State" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                        <div class="field-label">Postal Code</div>
                                        <ValidationProvider rules="required" v-slot="{ errors }" name="Postal Code">
                                            <input type="text" v-model="user.pincode" name="Postal Code" />
                                            <span class="validate-error">{{ errors[0] }}</span>
                                        </ValidationProvider>
                                    </div>
                                    <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <nuxt-link :to="{ path: '/page/account/login'}">Create an Account?</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
    ValidationObserver
} from 'vee-validate/dist/vee-validate.full.esm'
import {
    mapGetters
} from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
    components: {
        Header,
        Footer,
        Breadcrumbs,
        ValidationProvider,
        ValidationObserver
    },
    computed: {
        ...mapGetters({
            cart: 'cart/cartItems',
            cartTotal: 'cart/cartTotalAmount',
            curr: 'products/changeCurrency'
        })
    },
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: '',
                city: '',
                state: '',
                pincode: ''
            },
            isLogin: false,
            paypal: {
                sandbox: 'Your_Sendbox_Key'
            },
            payment: false,
            environment: 'sandbox',
            button_style: {
                label: 'checkout',
                size: 'medium', // small | medium | large | responsive
                shape: 'pill', // pill | rect
                color: 'blue' // gold | blue | silver | black
            },
            amtchar: ''
        }
    },
    methods: {
        order() {
            this.isLogin = localStorage.getItem('userlogin')
            if (this.isLogin) {
                this.payWithStripe()
            } else {
                this.$router.replace('/page/account/login-firebase')
            }
        },
        payWithStripe() {
            const handler = (window).StripeCheckout.configure({
                key: 'PUBLISHBLE_KEY', // 'PUBLISHBLE_KEY'
                locale: 'auto',
                closed: function () {
                    handler.close()
                },
                token: (token) => {
                    this.$store.dispatch('products/createOrder', {
                        product: this.cart,
                        userDetail: this.user,
                        token: token.id,
                        amt: this.cartTotal
                    })
                    this.$router.push('/page/order-success')
                }
            })
            handler.open({
                name: 'Multikart ',
                description: 'Reach to your Dream',
                amount: this.cartTotal * 100
            })
        },
        getamt() {
            return this.cartTotal.toString()
        },
        onPaymentComplete: function (data) {
            this.$store.dispatch('products/createOrder', {
                product: this.cart,
                userDetail: this.user,
                token: data.orderID,
                amt: this.cartTotal
            })
            this.$router.push('/page/order-success')
        },
        onCancelled() {
            console.log('You cancelled a window')
        },
        onSubmit() {
            console.log('Form has been submitted!')
        }
    }
}
</script>
