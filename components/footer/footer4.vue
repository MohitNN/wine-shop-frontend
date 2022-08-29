<template>
<div>
    <footer>
        <section class="section-b-space darken-layout">
            <div class="container">
                <div class="row footer-theme partition-f">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-title footer-mobile-title">
                            <h4>about</h4>
                        </div>
                        <div class="footer-contant">
                            <div class="footer-logo">
                                <img :src="'_nuxt/assets/images/icon/LogoSIte.png'" height="75" style="height: 75px" class="img-fluid" alt />
                            </div>
                            <p>
                                Welcome to Langkawi Liquor, order duty free liquor online and have it delivered to your doorstep anywhere in Langkawi!
                            </p>
                        </div>
                    </div>
                    <div class="col offset-xl-1">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>Category</h4>
                            </div>
                            <div class="footer-contant" v-for="(item , index) in categories.slice( 0, 5)" :key="index">
                                <ul>
                                    <li>
                                        <a @click="loadProduct('category', item.slug,[])" >{{item.name}}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>Quick Links</h4>
                            </div>
                            <div class="footer-contant">
                                <ul>
                                    <li>
                                        <NuxtLink to="/page/about-us">
                                            About Us
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/page/contact-us">
                                            Contact Us
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/page/location">
                                            Location
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>store information</h4>
                            </div>
                            <div class="footer-contant">
                                <ul class="contact-list">
                                    <li>
                                        <i class="fa fa-map-marker"></i>Langkawi, Kedah
                                    </li>
                                    <li><i class="fa fa-phone"></i>Call Us: +60 109488352</li>
                                    <li>
                                        <i class="fa fa-envelope-o"></i>Email Us:
                                        <a href="#">Langkawiliquor@gamil.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</div>
</template>

<script>
import {
    mapState
} from "vuex";
export default {
  name : "footer",
  computed:{
    ...mapState('menu',['categories']),
    
  }
};
</script>
