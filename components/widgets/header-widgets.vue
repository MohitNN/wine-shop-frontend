<template>
<div>
    <div class="icon-nav">
        <ul>
            <li class="onhover-div mobile-search">
                <div>
                    <img alt :src='"@/assets/images/icon/layout4/search.png"' @click="openSearch()" class="img-fluid">
                    <i class="ti-search" @click="openSearch()"></i>
                </div>
                <div id="search-overlay" class="search-overlay" :class="{ opensearch:search }">
                    <div>
                        <span class="closebtn" @click="closeSearch()" title="Close Overlay">×</span>
                        <div class="overlay-content">
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-12">
                                        <div class="form-group mb-0">
                                            <input type="text" class="form-control" ref="serachBox" v-model="searchString" @keypress.enter="ProductSerachList()" placeholder="Search a Product">
                                        </div>
                                        <button type="button" class="btn btn-primary" @click="ProductSerachList()">
                                            <i class="d-block ti-search " style="color:white;font-weight:1000"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="onhover-div mobile-cart">
                <div>
                    <img alt :src='"@/assets/images/icon/layout4/cart.png"' class="img-fluid">
                    <i class="ti-shopping-cart"></i>
                    <span class="cart_qty_cls">{{cart.length}}</span>
                </div>
                <ul class="show-div shopping-cart" v-if="!cart.length">
                    <li>Your cart is currently empty.</li>
                </ul>
                <ul class="show-div shopping-cart" v-if="cart.length">
                    <li v-for="(item,index) in cart" :key="index">
                        <div class="media">
                            <nuxt-link :to="{ path: '/page/account/cart'}">
                                <img alt class="mr-3" v-if='item.product_images' :src='getImgUrl(item.product_images[0].image)'>
                            </nuxt-link>
                            <div class="media-body">
                                <nuxt-link :to="{ path: '/page/account/cart'}">
                                    <h4>{{item.product_name}}</h4>
                                </nuxt-link>
                                <h4>
                                    <span>{{item.quantity}} x RM{{ item.price }}</span>
                                </h4>
                            </div>
                        </div>
                        <div class="close-circle">
                            <a @click='removeCartItem(item)'>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="total">
                            <h5>
                                subtotal :
                                <span>RM {{ cartTotal }}</span>
                            </h5>
                        </div>
                    </li>
                    <li>
                        <div class="buttons">
                            <nuxt-link :to="{ path: '/page/account/cart'}" :class="'view-cart'">
                                view cart
                            </nuxt-link>
                            <nuxt-link :to="{ path: '/page/account/checkout'}" :class="'checkout'">
                                checkout
                            </nuxt-link>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapActions
} from 'vuex'
import config from '@/config.json'

export default {
    data() {
        return {
            currencyChange: {},
            search: false,
            searchString: ''
        }
    },
    computed: {
        ...mapState({
            searchItems: state => state.products.searchProduct
        }),
        ...mapGetters({
            cart: 'cart/cartItems',
            cartTotal: 'cart/cartTotalAmount',
            curr: 'products/changeCurrency'
        })
    },
    methods: {
        ...mapActions('products', ['getSerchData']),
        getImgUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        openSearch() {
            this.search = true
        },
        closeSearch() {
            this.search = false
        },
        ProductSerachList() {
            const search = this.searchString;
            this.loadProduct('search', search, [])
            this.search = false;
            this.searchString = ""
        },
        removeCartItem: function (product) {
            this.$store.dispatch('cart/removeCartItem', product)
        },
        updateCurrency: function (currency, currSymbol) {
            this.currencyChange = {
                curr: currency,
                symbol: currSymbol
            }
            this.$store.dispatch('products/changeCurrency', this.currencyChange)
        }
    }
}
</script>
