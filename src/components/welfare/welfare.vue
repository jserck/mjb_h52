<template>
     <article class="m-welfare">
          <section class="g-header">
               <Toutu :url="lazyload"></Toutu>
          </section>
          <section class="g-main">
               <img src="@/assets/img/welfare/pic_6.png" alt />
          </section>
     </article>
</template>
<script>
import Toutu from './toutu'
import lazyload from '@/assets/img/welfare/pic_toutu2.png'
export default {
     components: {
          Toutu,
     },
     data() {
          return {
               lazyload,
          }
     },

     methods: {

     }
}
</script>
<style lang="scss" scoped>
.m-welfare {
     width: 100%;
     background-image: linear-gradient(-180deg, #f5faff 0%, #e8f2fe 100%);
     .g-main {
          padding: 0.2rem 0.3rem;
          img {
               box-shadow: 0 0.02rem 0.15rem 0 rgba(206, 227, 254, 0.6);
          }
     }
}
</style>

