<template>
<div>
    <section class="section-b-space ratio_portrait">
        <div class="container">
            <div class="">
                <div class="title4">
                    <h2 class="title-inner4">This Item Is One The Best Wines</h2>
                    <img src="@/assets/images/Vector.png" style="width: 312px;height: 20.33px;margin-bottom: 31px;" />
                    <!-- <div class="line">
                        <span></span>
                    </div> -->
                    <div v-if="topProductList && topProductList.length">
                        <div class="col-12" v-swiper:mySwiper="swiperOption">
                            <div class="swiper-wrapper category-m">
                                <div class="col-12 col-lg-4 col-md-6 swiper-slide m-0" v-for="(item, index) in topProductList" :key="index">
                                    <div class="category-wrapper" @click="redirectPage(item.id)">
                                        <div>
                                            <div v-if="item.product_images && item.product_images.length">
                                                <img :src="getImageUrl(item.product_images[0].image)" class="img-fluid bg-img img-blow" alt />
                                            </div>
                                            <h4>{{item.product_name}}</h4>
                                            <div v-html="item.description">
                                            </div>
                                            <a href="javascript:void(0)" @click="redirectPage(item.id)" class="btn btn-outline">view more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { mapGetters, mapActions , mapState } from "vuex";
import config from "@/config.json";

export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 4,
                freeMode: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    586: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    0: {
                        slidesPerView: 1,
                    },
                }
            },
        }
    },
    computed: {
        ...mapState('products', ['topProductList'])
    },
    methods: {
        getImageUrl(path) {
            return config.baseUrl + "products/" + path;
        },
        redirectPage(id) {
            this.$router.push({ path: '/product/' + id })
        }
    }
}
</script>
<style scoped>
.img-blow{
    height: 250px !important;
}
</style>