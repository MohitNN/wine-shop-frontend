<template>
<div>
    <Breadcrumbs title="Cart" />
    <!-- {{cart}} -->
    <section class="cart-section section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <table class="table cart-table table-responsive-xs" v-if="cart.length">
                        <thead>
                            <tr class="table-head">
                                <th scope="col">image</th>
                                <th scope="col">product name</th>
                                <th scope="col">price</th>
                                <th scope="col">quantity</th>
                                <th scope="col">action</th>
                                <th scope="col">total</th>
                            </tr>
                        </thead>
                        <tbody v-for="(item,index) in cart" :key="index">
                            <tr>
                                <td>
                                    <nuxt-link :to="{ path: '/page/account/cart'}">
                                        <img v-if="item.product_images" :src="getImgUrl(item.product_images[0].image)" alt />
                                    </nuxt-link>
                                </td>
                                <td>
                                    <nuxt-link :to="{ path: '/page/account/cart'}">{{item.product_name}}</nuxt-link>
                                    <div class="mobile-cart-content row">
                                        <div class="col-xs-3">
                                            <div class="qty-box">
                                                <div class="input-group">
                                                    <span class="input-group-prepend">
                                                        <button type="button" class="btn quantity-left-minus" data-type="minus" data-field @click="decrement(item)">
                                                            <i class="ti-angle-left"></i>
                                                        </button>
                                                    </span>
                                                    <input type="text" name="quantity" class="form-control input-number" :disabled="item.quantity > item.max_quantity" v-model="item.quantity" />
                                                    <span class="input-group-prepend">
                                                        <button type="button" class="btn quantity-right-plus" data-type="plus" data-field :disabled="item.quantity >= item.max_quantity" @click="increment(item)">
                                                            <i class="ti-angle-right"></i>
                                                        </button>
                                                    </span>
                                                    <b-alert :show="item.quantity >= item.max_quantity" variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="alert">
                                                        <p>This Item Has Been Finished.</p>
                                                    </b-alert>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-3">
                                            <h2 class="td-color">RM {{ item.price }}</h2>
                                        </div>
                                        <div class="col-xs-3">
                                            <h2 class="td-color">
                                                <a class="icon" @click="removeCartItem(item)">
                                                    <i class="ti-close"></i>
                                                </a>
                                            </h2>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2>RM {{ item.price }}</h2>
                                </td>
                                <td>
                                    <div class="qty-box">
                                        <div class="input-group">
                                            <span class="input-group-prepend">
                                                <button type="button" class="btn quantity-left-minus" data-type="minus" data-field @click="decrement(item)">
                                                    <i class="ti-angle-left"></i>
                                                </button>
                                            </span>
                                            <input type="text" name="quantity" class="form-control input-number" :disabled="item.quantity > item.max_quantity" v-model="item.quantity" />
                                            <span class="input-group-prepend">
                                                <button type="button" class="btn quantity-right-plus" data-type="plus" data-field :disabled="item.quantity >= item.max_quantity" @click="increment(item)">
                                                    <i class="ti-angle-right"></i>
                                                </button>
                                            </span>
                                        </div>
                                        <h4 class="text-danger mt-3" v-if="item.quantity == item.max_quantity">
                                            This Item Has Been Finished.
                                        </h4>
                                    </div>
                                </td>
                                <td>
                                    <a class="icon" @click="removeCartItem(item)">
                                        <i class="ti-close"></i>
                                    </a>
                                </td>
                                <td>
                                    <h2 class="td-color">RM {{ item.price  * item.quantity }}</h2>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table cart-table table-responsive-md" v-if="cart.length">
                        <tfoot>
                            <tr>
                                <td>total price :</td>
                                <td>
                                    <h2 class="text-center pl-4">&nbsp;RM {{ cartTotal }}</h2>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="col-sm-12 empty-cart-cls text-center" v-if="!cart.length">
                        <img :src='"@/assets/images/icon-empty-cart.png"' class="img-fluid" alt="empty cart" />
                        <h3 class="mt-3">
                            <strong>Your Cart is Empty</strong>
                        </h3>
                        <h4 class="mb-3">Add something to make me happy :)</h4>
                        <div class="col-12">
                            <nuxt-link :to="{ path: '/'}" class="btn btn-solid">continue shopping</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row cart-buttons" v-if="cart.length">
                <div class="col-6">
                    <nuxt-link :to="{ path: '/'}" :class="'btn btn-solid'">continue shopping</nuxt-link>
                </div>
                <div class="col-6">
                    <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'btn btn-solid'">check out</nuxt-link>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
import config from '@/config.json'

export default {
    data() {
        return {
            counter: 1,
            dismissCountDown: 0
        }
    },
    components: {
        Header,
        Footer,
        Breadcrumbs
    },
    computed: {
        ...mapGetters({
            cart: 'cart/cartItems',
            cartTotal: 'cart/cartTotalAmount',
            curr: 'products/changeCurrency'
        })
    },
    methods: {
        alert(item) {
          this.dismissCountDown = item
        },
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        removeCartItem: function (product) {
            this.$store.dispatch('cart/removeCartItem', product)
        },
        increment(product, qty = 1) {
            this.$store.dispatch('cart/updateCartQuantity', {
                product: product,
                qty: qty
            })
        },
        decrement(product, qty = -1) {
            this.$store.dispatch('cart/updateCartQuantity', {
                product: product,
                qty: qty
            })
        }
    }
}
</script>
