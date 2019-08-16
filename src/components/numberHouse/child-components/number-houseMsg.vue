<template>
     <article class="m-house">
          <HandleDislog :isShowDislog="isShowDislog" @close="dislogClose" @next="dislogNext">
               <section class="g-nvText-con">
                    <p class="g-nvText">{{nvText1}}</p>
                    <p class="g-nvText">{{nvText2}}</p>
               </section>
          </HandleDislog>
          <section class="g-house-con">
               <div class="g-top-con displayFlex flexJustifybetween flexAlignItemsCenter">
                    <div class="u-r">
                         <h1>{{houseItem.propertyName}}</h1>
                         <h2>{{houseItem.price}}</h2>
                    </div>
                    <div class="u-btn displayFlex" @click="seeHouse">
                         <span>查看楼盘详情</span>
                    </div>
               </div>
               <div class="g-img-con" @click="isShowDislog = true">
                    <NumberAnimation :bgUrl="houseItem.webImgUrl"></NumberAnimation>
               </div>
               <div class="g-foot-con displayFlex flexJustifybetween">
                    <div class="g-text-con displayFlex flexColumn">
                         <h2 class="u-t1">全景航拍</h2>
                         <h2 class="u-t2">已监控 {{houseItem.vrMonthCount}} 个月</h2>
                    </div>
                    <div class="g-text-con displayFlex flexColumn">
                         <h2 class="u-t1">全景航拍</h2>
                         <h2 class="u-t2">已覆盖项目 {{houseItem.stageNum}} 大阶段</h2>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
import NumberAnimation from './number-animation'
import HandleDislog from '../../common/dislog'
import { mapState } from 'vuex'
import SetupWebViewJavascriptBridgeinit from '@/assets/js/setupWebViewJavascriptBridgeinit';
export default {
     components: {
          NumberAnimation,
          HandleDislog
     },
     props: {
          houseItem: {
               default() {
                    return null;
               }
          }
     },
     data() {
          return {
               isShowDislog: false,
               nvText1: '空间旅行需要消耗大量流量，建议您',
               nvText2: '在wifi环境下开启旅程哦'
          }
     },
     computed: {
          ...mapState({
               isTypeApp: 'isTypeApp'
          })
     },
     methods: {
          seeHouse() {
               if (!this.isTypeApp) {
                    window.location = this.houseItem.propertyInfoUrl;
                    return;
               }
               let options = {
                    iphData: { propertyId: this.houseItem.propertyId },
                    azData: this.houseItem.propertyId,
                    iphFn: 'hrefHouse',
                    azFn: 'hrefHouse'
               };
               SetupWebViewJavascriptBridgeinit.jsToNative(options);
          },
          fn_hrefRealView() {
               let url = this.houseItem.webUrl;
               window.location = url;
          },
          dislogClose() {
               this.isShowDislog = false;
          },
          dislogNext() {
               this.fn_hrefRealView();
          }
     }
}
</script>

<style lang="scss" scoped>
.m-house {
     .g-nvText-con {
          padding: 0.2rem 0.2rem;
          font-size: 0.3rem;
          color: #8b949e;
          line-height: 0.5rem;
          text-align: center;
     }
     .g-nvText {
          font-size: 0.3rem;
          color: #8b949e;
          line-height: 0.5rem;
          text-align: center;
     }
     padding: 0.4rem 0.3rem;
     .g-house-con {
          background: #ffffff;
          height: 5.46rem;
          .g-top-con {
               .u-r {
                    h1 {
                         font-size: 0.4rem;
                         color: #212832;
                         line-height: 0.4rem;
                    }
                    h2 {
                         margin-top: 0.2rem;
                         font-size: 0.3rem;
                         color: #f84c47;
                         line-height: 0.3rem;
                    }
               }
               .u-btn {
                    width: 2.08rem;
                    height: 0.56rem;
                    box-sizing: border-box;
                    border: 0.02rem solid #0080ff;
                    border-radius: 0.04rem;
                    // line-height: 0.56rem;
                    text-align: center;
                    span {
                         display: block;
                         margin: auto;
                         font-size: 0.28rem;
                         color: #0080ff;
                         line-height: 0.5rem;
                    }
               }
          }
          .g-img-con {
               margin: 0.3rem 0;
               width: 100%;
               height: 3.2rem;
          }
          .g-foot-con {
               padding: 0 0.3rem;
               .g-text-con {
                    text-align: center;
                    .u-t1 {
                         font-size: 0.32rem;
                         color: #212832;
                         line-height: 0.32rem;
                    }
                    .u-t2 {
                         margin-top: 0.2rem;
                         font-size: 0.24rem;
                         color: #8b949e;
                         line-height: 0.24rem;
                    }
               }
          }
     }
}
</style>

