<template>
     <article class="m-animation">
          <section class="g-animation-con">
               <div class="pos-abs g-src-con" :style="bg"></div>
               <div class="pos-abs g-zhezhao-con"></div>
               <div class="pos-abs g-text-con">
                    <div class="g-text">
                         <div>
                              <span class="u-img">
                                   <img
                                        src="@/assets/img/number_house/housingesta_icon_vr@3x.png"
                                        alt
                                   />
                              </span>
                         </div>
                         <span class="u-text">数字化售楼部</span>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          bgUrl: {
               type: String,
               default() {
                    return ''
               }
          }
     },
     computed: {
          bg() {
               return `background:url(${this.bgUrl})`
          }
     }
}
</script>
<style lang="scss" scoped>
.m-animation {
     position: relative;
     width: 100%;
     height: 100%;
     .pos-abs {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
     }
     .g-src-con {
          width: 100%;
          background-repeat: no-repeat !important;
          background-size: 150% 100% !important;
          z-index: 10;
          background-position-x: 0;
          animation: houseAnimation 10s infinite;
          animation-direction: alternate;
          animation-timing-function: linear;
          /* Safari and Chrome */
          -webkit-animation: houseAnimation 10s infinite;
          -webkit-animation-direction: alternate;
          -webkit-animation-timing-function: linear;
          @keyframes houseAnimation {
               from {
                    background-position-x: 100%;
               }
               to {
                    background-position-x: 0;
               }
          }

          @-webkit-keyframes houseAnimation /*Safari and Chrome*/ {
               from {
                    background-position-x: 100%;
               }
               to {
                    background-position-x: 0;
               }
          }
     }
     .g-zhezhao-con {
          background: rgba(0, 0, 0, 0.5);
          z-index: 11;
     }
     .g-text-con {
          display: table;
          z-index: 12;
          .g-text {
               display: table-cell;
               vertical-align: middle;
               width: 100%;
               height: 100%;
               text-align: center;
               .u-img {
                    width: 0.6rem;
               }
               .u-text {
                    margin-top: 0.15rem;
                    font-size: 0.24rem;
                    color: #ffffff;
                    line-height: 0.24rem;
               }
          }
     }
}
</style>
