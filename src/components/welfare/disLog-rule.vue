<template>
     <article>
          <tab
               :line-width="3"
               active-color="#0080ff"
               disabled-color="#979797"
               custom-bar-width="1.5rem"
          >
               <tab-item @on-item-click="fn_itemClick" selected>4999元使用规则</tab-item>
               <tab-item @on-item-click="fn_itemClick">1000元使用规则</tab-item>
          </tab>
          <section class="g-disrule-list-con">
               <ul v-if="ruleListIndex == 0">
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_1.png" alt>
                         </i>
                         <p>本券适合于齐家推荐的装修公司的装修服务，领券用户享受网站推荐装修公司的设计师免费上门量房、出初步平面图等服务。签署装修合同前，出示优惠券码，合同金额10万以上者，可享受价值4999元的减免优惠；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_2.png" alt>
                         </i>
                         <p>本券不用于现金抵扣，不兑现，不找零，不与装修公司及齐家网站任何优惠叠加使用；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_3.png" alt>
                         </i>
                         <p>本券有效期至2019年12月31日，有效期内签订装修合同(合同单笔金额10万以上)即生效；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_4.png" alt>
                         </i>
                         <p>一个装修地点限用一张优惠券，请在签订合同前至齐家个人中心查看并出示使用，合同签订后使用无效。</p>
                    </li>
               </ul>
               <ul v-if="ruleListIndex == 1">
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_1.png" alt>
                         </i>
                         <p>本券适合于齐家推荐的装修公司的装修服务，领券用户享受网站推荐装修公司的设计师免费上门量房、出初步平面图等服务。签署装修合同前，出示优惠券码，合同金额4万以上者，可享受价值1000元的减免优惠；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_2.png" alt>
                         </i>
                         <p>本券不用于现金抵扣，不兑现，不找零，不与装修公司及齐家网站任何优惠叠加使用；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_3.png" alt>
                         </i>
                         <p>本券有效期至2019年12月31日，有效期内签订装修合同(合同单笔金额4万以上)即生效；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_4.png" alt>
                         </i>
                         <p>一个装修地点限用一张优惠券，请在签订合同前至齐家个人中心查看并出示使用，合同签订后使用无效；</p>
                    </li>
                    <li class="displayFlex flexAlignJustifyStart">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_5.png" alt>
                         </i>
                         <p>本券不适用局部装修及工装。</p>
                    </li>
               </ul>
          </section>
     </article>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
     data() {
          return {
               ruleListIndex: 0
          }
     },
     computed: {

     },
     components: {
          Tab,
          TabItem
     },
     methods: {
          fn_itemClick(index) {
               this.ruleListIndex = index;
          }
     }
}
</script>

<style lang="scss" scoped>
.vux-tab .vux-tab-item {
     font-size: 0.24rem;
     color: #8b949e;
     letter-spacing: 0;
     line-height: 0.24rem;
}
.vux-tab-wrap {
     padding-top: 0.44rem;
}
.g-disrule-list-con {
     background: #fff;
     height: 7.03rem;
     ul {
          padding: 0.45rem 0.45rem 0.5rem 0.45rem;
          li {
               text-align: left;
               font-size: 0.24rem;
               color: #8b949e;
               letter-spacing: 0;
               line-height: 0.38rem;
               p {
                    max-width: 5rem;
               }
               i {
                    display: inline-block;
                    margin-top: 0.08rem;
                    margin-right: 0.16rem;
                    width: 0.25rem;
                    height: 0.25rem;
                    background: #b9c0c8;
                    border-radius: 0.25rem;
                    font-size: 0.144rem;
                    color: #ffffff;
                    letter-spacing: 0.0128rem;
                    text-align: center;
                    line-height: 0.25rem;
               }
          }
     }
}
.marginBottom {
     margin-bottom: 0.3rem;
}
</style>
<style>
.vux-tab-container {
     background: #fff;
     padding: 0.15rem 0.6rem 0 0.6rem;
     height: 0.44rem !important;
}
.vux-tab {
     height: 0.44rem !important;
     background: #fff;
     z-index: 1000;
}
.vux-tab .vux-tab-item {
     background: #fff !important;
}
</style>
