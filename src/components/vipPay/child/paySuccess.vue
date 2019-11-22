<template>
     <article class="m-paySuccess">
          <section>
               <div class="g-paySuccess" @touchmove.prevent>
                    <div class="g-body-con">
                         <div class="g-mes-con">
                              <div class="u-img">
                                   <img
                                        class="flexImg"
                                        src="@/assets/img/vipPay/png_zhifuchenggong.png"
                                        alt
                                   />
                              </div>
                              <h1>支付成功</h1>
                              <p class="text-font">您已成功购买12个月的鹰眼数据包</p>
                              <div class="g-time-con">
                                   <span class="u-text text-font">有效期截止到</span>
                                   <span class="u-time text-font">2019-99-99</span>
                              </div>
                         </div>
                         <div class="g-btn-con">
                              <div class="u-btn1" @click="backHome">
                                   <x-button type="default">返回首页</x-button>
                              </div>
                              <div class="u-btn2" @click="back">
                                   <x-button type="default">返回</x-button>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
import { XButton } from 'vux'
export default {
     components: {
          XButton
     },
     data() {
          return {

          }
     },
     methods: {
          backHome() {
               this.$emit('backHome');
          },
          back() {
               this.$emit('back');
          }
     }
}
</script>
<style scoped lang="scss">
.g-paySuccess {
     position: fixed;
     top: 0;
     bottom: 0;
     width: 100%;
     height: 100vh;
     background: #fff;
}
.g-body-con {
     width: 100%;
     height: 100%;
     .g-mes-con {
          margin-top: 16%;
          text-align: center;
          .u-img {
               margin: auto;
               width: 1.3rem;
          }
          .text-font {
               font-size: 0.28rem;
               letter-spacing: 0;
               text-align: center;
               line-height: 0.4rem;
          }
          .g-time-con {
               margin-top: 0.1rem;
               .u-text {
                    color: #888888;
               }
               .u-time {
                    color: #0080ff;
               }
          }
          h1 {
               margin-top: 0.2rem;
               font-size: 0.4rem;
               color: #333333;
               text-align: center;
               line-height: 0.4rem;
          }
          p {
               margin-top: 0.3rem;
               color: #888888;
          }
     }
     .g-btn-con {
          padding: 0 0.4rem;
          margin-top: 42%;
          .u-btn1 {
               margin-bottom: 0.2rem;
          }
     }
}
</style>
<style>
.weui-btn {
     line-height: 0.88rem !important;
     font-size: 0.32rem !important;
}
.u-btn1 .weui-btn_default {
     color: #fff !important;
     background-color: #0080ff !important;
}
.u-btn2 .weui-btn_default {
     color: #0080ff !important;
     background-color: #fff !important;
     border: 0.02rem solid #0080ff;
     border-radius: 0.04rem;
}
</style>