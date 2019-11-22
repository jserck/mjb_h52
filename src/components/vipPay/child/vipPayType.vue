<template>
     <article class="m-vipPayType">
          <section>
               <div class="g-vipPayType">
                    <group>
                         <radio title="title" :options="options" v-model="value">
                              <template slot-scope="props" slot="each-item">
                                   <div class="displayFlex flexAlignItemsCenter">
                                        <img :src="props.icon" class="vux-radio-icon" />
                                        <div class="displayFlex flexColumn flexAlignJustifyStart">
                                             <span
                                                  :class="['g-tit1',indexNum===props.index?'g-tit1-active':'']"
                                             >{{props.label.sec}}</span>
                                             <span class="g-tit2">{{props.label.sec2}}</span>
                                        </div>
                                   </div>
                              </template>
                         </radio>
                    </group>
               </div>
          </section>
     </article>
</template>
<script>
import { Radio, Group } from 'vux'
import WxIcon from '@/assets/img/vipPay/wx.png'
import ZfbIcon from '@/assets/img/vipPay/zfb.png'
export default {
     components: {
          Radio,
          Group
     },
     data() {
          return {
               value: 0,
               indexNum: 0,
               options: [{
                    icon: WxIcon,
                    key: 0,
                    value: {
                         val: '1',
                         sec: '微信支付',
                         sec2: '微信安全支付'
                    },

               }, {
                    icon: ZfbIcon,
                    key: 1,
                    value: {
                         val: '2',
                         sec: '支付宝支付',
                         sec2: '支付宝安全支付'
                    },

               }]
          }
     },
     watch: {
          value(newValue, old) {
               this.indexNum = newValue;
               this.$emit('payTypeHandler', newValue);
          }
     },
     methods: {

     }
}
</script>
<style lang="scss" scoped>
.m-vipPayType {
     .g-vipPayType {
          padding: 0.3rem 0 0.4rem 0;
          text-align: left;
          .g-tit1 {
               font-size: 0.32rem;
               color: #8b949e;
               line-height: 0.3rem;
          }
          .g-tit2 {
               margin-top: 0.1rem;
               font-size: 0.24rem;
               color: #8b949e;
               line-height: 0.24rem;
          }
          .g-tit1-active {
               color: #000000;
          }
     }
}
</style>
<style>
.weui-icon-checked {
     width: 0.4rem;
     height: 0.4rem;
     background: url("~@/assets/img/vipPay/icon_bunengxuanze.png") no-repeat
          center;
     background-size: cover;
}
.weui-cells_radio .weui-check:checked + .weui-icon-checked:before {
     content: "" !important;
     display: block;
     margin: 0;
     width: 0.4rem;
     height: 0.4rem;
     background: url("~@/assets/img/vipPay/icon_xuanze_s.png") no-repeat center;
     background-size: cover;
}
</style>