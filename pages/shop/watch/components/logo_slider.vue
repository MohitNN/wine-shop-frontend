<!-- <template>
  <div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="slide-6 no-arrow">
              <div v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <div>
                      <div class="logo-block text-center">
                        <a href="#">
                          <img :src="item.imagepath" alt />
                        </a>
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
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        freeMode: true,
        breakpoints: {
          1199: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 4
          },
          420: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2,
          }
        }
      },
      items: [
        {
          imagepath: require('@/assets/images/logos/1.png')
        },
        {
          imagepath: require('@/assets/images/logos/2.png')
        },
        {
          imagepath: require('@/assets/images/logos/3.png')
        },
        {
          imagepath: require('@/assets/images/logos/4.png')
        },
        {
          imagepath: require('@/assets/images/logos/5.png')
        },
        {
          imagepath: require('@/assets/images/logos/6.png')
        },
        {
          imagepath: require('@/assets/images/logos/7.png')
        },
        {
          imagepath: require('@/assets/images/logos/8.png')
        }
      ]
    }
  }
}
</script> -->
