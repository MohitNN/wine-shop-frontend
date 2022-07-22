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
                                                <img :src="getImageUrl(item.product_images[0].image)" class="img-fluid bg-img" style="height: 250px;" alt />
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
            items: [{
                    imagepath: require('@/assets/images/watch/cat1.png'),
                    title: 'Gold Wine',
                    description: '<ul class="category-link"><li><a href="#">Winemaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio Wines</a></li><li><a href="#">Citizen Watch</a></li></ul>',
                    button: 'view more'
                },
                {
                    imagepath: require('@/assets/images/watch/cat2.png'),
                    title: 'Red Wine',
                    description: '<ul class="category-link"><li><a href="#">Winemaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio Wines</a></li><li><a href="#">Citizen Watch</a></li></ul>',
                    button: 'view more'
                },
                {
                    imagepath: require('@/assets/images/watch/cat3.png'),
                    title: 'Black Wine',
                    description: '<ul class="category-link"><li><a href="#">Winemaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio Wines</a></li><li><a href="#">Citizen Watch</a></li></ul>',
                    button: 'view more'
                },
                {
                    imagepath: require('@/assets/images/watch/cat4.png'),
                    title: 'Wine models',
                    description: '<ul class="category-link"><li><a href="#">Winemaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio Wines</a></li><li><a href="#">Citizen Watch</a></li></ul>',
                    button: 'view more'
                },
                {
                    imagepath: require('@/assets/images/watch/cat1.png'),
                    title: 'Wine watch',
                    description: '<ul class="category-link"><li><a href="#">Winemaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio Wines</a></li><li><a href="#">Citizen Watch</a></li></ul>',
                    button: 'view more'
                }
            ]
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
