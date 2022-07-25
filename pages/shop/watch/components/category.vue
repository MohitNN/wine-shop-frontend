<template>
<div>
    <section class="section-b-space ratio_portrait">
        <div class="container">
            <div class="">
                <div class="title4">
                    <h2 class="title-inner4">This Item Is One The Best Wines</h2>
                    <div class="line">
                        <span></span>
                    </div>
                    <div v-if="topProductList">
                        <div class="col-12" v-swiper:mySwiper="swiperOption">
                            <div class="swiper-wrapper category-m">
                                <div class="col-4 swiper-slide m-0" v-for="(item, index) in topProductList" :key="index">
                                    <div class="category-wrapper">
                                        <div>
                                            <div v-if="item.product_images">
                                                <img :src="getImageUrl(item.product_images[0].image)" class="img-fluid bg-img img-blow" alt />
                                            </div>
                                            <h4>{{item.product_name}}</h4>
                                            <div v-html="item.description">
                                            </div>
                                            <a href="#" class="btn btn-outline">view more</a>
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
        }
    }
}
</script>
<style scoped>
.img-blow{
    height: 250px !important;
    width: 80px !important;
    transition: 0.5s;
}
.category-wrapper:hover .img-blow{
    filter: drop-shadow(1px 2px 3px black);
}
</style>