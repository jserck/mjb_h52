<template>
     <article class="m-swiper">
          <section>
               <div v-if="isShow">
                    <swiper
                         dots-position="center"
                         :show-desc-mask="false"
                         :list="pagesList"
                         auto
                         :loop="true"
                         :aspect-ratio="650/750"
                    ></swiper>
               </div>
               <div v-else class="vr_back" :style="'background-image:url('+bannerImageUrl+')'"></div>
          </section>
     </article>
</template>
<script>
import { Swiper, SwiperItem } from 'vux'
export default {
     props: {
          pagesList: {
               type: Array,
               default: []
          },
          isShow: {
               type: Boolean,
               default: false
          },
          bannerImageUrl: {
               type: String,
               default: ''
          }
     },
     components: {
          Swiper,
          SwiperItem
     },
     data() {
          return {

          }
     },
     created() {
          // setTimeout(() => {
          //      this.isS = true;
          // }, 1000)
          // console.log(this.pagesList);
     }
}
</script>
<style lang="scss" scoped>
.m-swiper {
}
</style>
<style >
.m-swiper .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
     background-color: #fff;
}

.m-swiper .vux-slider > .vux-indicator > a > .vux-icon-dot,
.vux-slider .vux-indicator-right > a > .vux-icon-dot {
     background: rgba(0, 0, 0, 0.2);
}
</style>
