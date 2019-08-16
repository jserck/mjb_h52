<template>
     <article>
          <section
               class="g-eagleEyeLi"
               :style="`background:url(${eyLiData.imgUrl})`"

          >
               <!-- <section
               class="g-eagleEyeLi"
               :style="`background:url('http://activity.cun-tu.cn/bg_yingyanceping_lanse_n@2x.png')`"
               @click="clickHandler"
               >-->
               <section class="g-menban"></section>
               <section class="g-content displayFlex flexColumn flexJustifybetween">
                    <section>
                         <section
                              class="g-title displayFlex flexAlignJustifyStart flexAlignItemsEnd"
                         >
                              <span class="u-name">{{eyLiData.propertyName}}</span>
                              <span class="u-path">{{eyLiData.areaName}}</span>
                         </section>
                         <section class="g-size">
                              <span>{{eyLiData.openingAveragePrice}}</span>
                         </section>
                    </section>
                    <section>
                         <section class="g-grade displayFlex flexAlignItemsEnd">
                              <b>
                                   总分：
                                   <span class="u-num">{{eyLiData.total.replace(/分/g,'')}}</span>
                              </b>
                         </section>
                         <section
                              class="g-appraisal displayFlex flexJustifybetween flexAlignItemsCenter"
                         >
                              <section
                                   class="g-appraisal-1 displayFlex flexAlignItemsCenter"
                                   v-for="(item,index) in eyLiData.sandEvaluatInfo"
                                   :key="index"
                              >
                                   <span class="u-name">{{item.title}}</span>
                                   <span class="u-num">{{item.score}}</span>
                              </section>
                         </section>
                    </section>
               </section>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          eyLiData: {
               default() {
                    return {}
               }
          }
     },
     methods: {

     }
}
</script>

<style lang="scss" scoped>
.g-eagleEyeLi {
     position: relative;
     border-radius: 0.03rem;
     height: 2.88rem;
     background-size: cover !important;
     .g-menban {
          width: 100%;
          height: 100%;
          @include background("~@/assets/img/eagleEye/pic_zhezhao_n@3x.png");
     }
     .g-content {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          z-index: 99;
          color: #fff;
          .g-title {
               padding: 0.3rem 0 0.16rem 0.3rem;
               .u-name {
                    font-size: 0.28rem;
                    line-height: 0.28rem;
               }
               .u-path {
                    margin-left: 0.21rem;
                    font-size: 0.22rem;
                    line-height: 0.22rem;
               }
          }
          .g-size {
               span {
                    padding-left: 0.3rem;
                    font-size: 0.28rem;
                    color: #febf45;
                    line-height: 0.28rem;
               }
          }
          .g-grade {
               // margin-top: 0.3rem;
               padding-left: 0.3rem;
               font-size: 0.32rem;
               font-weight: normal;
               .u-name {
                    font-size: 0.32rem;
                    line-height: 0.32rem;
               }
               .u-num {
                    font-size: 0.6rem;
                    font-weight: normal;
                    // line-height: 0.42rem;
               }
               .u-num2 {
                    font-size: 0.6rem;
                    // line-height: 0.55rem;
               }
          }
          .g-appraisal {
               margin: 0.2rem 0.1rem 0.2rem;
               padding: 0 0.2rem;
               height: 0.44rem;
               border-radius: 0.22rem;
               background: rgba(0, 0, 0, 0.4);
               .u-name {
                    margin-right: 0.1rem;
                    font-size: 0.22rem;
               }
               .u-num {
                    font-size: 0.28rem;
               }
          }
     }
}
</style>
