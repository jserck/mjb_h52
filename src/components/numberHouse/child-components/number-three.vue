<template>
     <article class="m-three">
          <section class="g-three-con displayFlex flexAlignJustifyCenter">
               <div class="u-img">
                    <img :src="textImgData.src" alt />
               </div>
               <div :class="['u-text-con',wit]">
                    <span :class="['u-t1',mar]">{{textImgData.t1}}</span>
                    <h1 class="u-t2">{{textImgData.t2}}</h1>
                    <p class="u-t3">{{textImgData.t3}}</p>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          textImgData: {
               default() {
                    return {
                         src: '',
                         tit: '',
                         t1: '',
                         t2: ''
                    }
               },
               type: Object
          }
     },
     //  t3margin
     computed: {
          mar() {
               if (this.textImgData.index == '3') {
                    return 't3margin'
               } else {
                    return ''
               }
          },
          wit() {
               if (this.textImgData.index == '2') {
                    return 't2width'
               } else {
                    return ''
               }
          },
     }
}
</script>

<style lang="scss" scoped>
.m-three {
     .g-three-con {
          .u-img {
               width: 3.34rem;
          }
          .u-text-con {
               width: 2.9rem;
               margin-left: 0.3rem;
               .u-t1 {
                    display: inline-block;
                    margin-top: 0.6rem;
                    width: 0.76rem;
                    height: 0.32rem;
                    background: #0080ff;
                    border-radius: 0.02rem;
                    font-size: 0.2rem;
                    color: #ffffff;
                    line-height: 0.34rem;
                    text-align: center;
               }
               .u-t2 {
                    margin-top: 0.13rem;
                    font-size: 0.32rem;
                    color: #21324e;
                    line-height: 0.32rem;
               }
               .u-t3 {
                    margin-top: 0.14rem;
                    font-size: 0.26rem;
                    color: #5f6d7b;
                    line-height: 0.44rem;
               }
          }
     }
     .t3margin {
          margin-top: 0.35rem !important;
     }
     .t2width {
          width: 2.73rem !important;
     }
}
</style>
