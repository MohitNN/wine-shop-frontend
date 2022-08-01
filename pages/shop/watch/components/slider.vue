<template>
  <div>
    <section class="p-0">
      <div class="slide-1 home-slider">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in bannerList" :key="index">
              <div
                class="home text-left"
                :class="item.alignclass"
                v-bind:style="{ 'background-image': 'url(' + getUrl(item.image) + ')' , 'background-size' : '100%' }"
              >
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="slider-contain">
                        <div>
                          <!-- <h4>{{ item.title }}</h4>
                          <h1>{{ item.description }}</h1>
                          <nuxt-link :to="{ path: '/collection/left-sidebar'}" class="btn btn-solid">shop now</nuxt-link> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import config from '@/config.json'
export default {
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed:{
     ...mapState("banner", ["bannerList"]),
  },
  methods : {
    getUrl(path) {
       return config.baseUrl + "banner/" + path;
    }
  }
}
</script>
