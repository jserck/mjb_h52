<template>
     <article class="m-instrumentPanel">
          <section class="g-instrumentPanel">
               <div class="g-instrumentPanel-top displayFlex flexJustifybetween">
                    <div class="g-instrumentPanel-from">
                         <div class="u-img" v-if="abShareData.projectManageRisk.riskLevel == '1'">
                              <img :src="yw" alt />
                         </div>
                         <div class="u-img" v-if="abShareData.projectManageRisk.riskLevel == '2'">
                              <img :src="yd" alt />
                         </div>
                         <div class="u-img" v-if="abShareData.projectManageRisk.riskLevel == '3'">
                              <img :src="yz" alt />
                         </div>
                         <div class="u-img" v-if="abShareData.projectManageRisk.riskLevel == '4'">
                              <img :src="yg" alt />
                         </div>
                    </div>
                    <div class="g-instrumentPanel-lv">
                         <div class="g-instrumentPanel-lv-tit displayFlex">
                              <h3>风险提示：</h3>
                              <div
                                   class="u-img"
                                   v-if="abShareData.projectManageRisk.riskLevel == '1'"
                              >
                                   <img :src="fw" alt />
                              </div>
                              <div
                                   class="u-img"
                                   v-if="abShareData.projectManageRisk.riskLevel == '2'"
                              >
                                   <img :src="fd" alt />
                              </div>
                              <div
                                   class="u-img"
                                   v-if="abShareData.projectManageRisk.riskLevel == '3'"
                              >
                                   <img :src="fz" alt />
                              </div>
                              <div
                                   class="u-img"
                                   v-if="abShareData.projectManageRisk.riskLevel == '4'"
                              >
                                   <img :src="fg" alt />
                              </div>
                         </div>
                         <div class="g-instrumentPanel-lv-ul">
                              <li
                                   class="displayFlex flexAlignItemsCenter flexAlignJustifyStart"
                                   v-for="(item,index) in abShareData.projectManageRisk.scoreList"
                                   :key="index"
                              >
                                   <span class="u-title">{{item.title}}</span>
                                   <span>{{item.content}}</span>
                              </li>
                         </div>
                    </div>
               </div>
               <div class="g-problem-list">
                    <ul class="displayFlex flexJustifybetween">
                         <li
                              v-for="(item,index) in abShareData.projectManageRisk.problemList"
                              :key="index"
                         >
                              <h3>{{item.title}}</h3>
                              <span>{{item.content}}</span>
                         </li>
                    </ul>
               </div>
          </section>
     </article>
</template>
<script>
import yw from '../../../../static/obshare/pyramid/png_yibiaopan_wufengxian@3x.png'
import yd from '../../../../static/obshare/pyramid/png_yibiaopan_difengxian@3x.png'
import yz from '../../../../static/obshare/pyramid/png_yibiaopan_zhongfengxian@3x.png'
import yg from '../../../../static/obshare/pyramid/pic_gaofengixna@3x.png'

import fw from '../../../../static/obshare/pyramid/png_wufengxian@3x.png'
import fd from '../../../../static/obshare/pyramid/png_difengxian@3x.png'
import fz from '../../../../static/obshare/pyramid/png_zhongfengxian@3x.png'
import fg from '../../../../static/obshare/pyramid/png_gaofengxian@3x.png'
export default {
     props: ['abShareData'],
     data() {
          return {
               yw,
               yd,
               yz,
               yg,
               fw,
               fd,
               fz,
               fg
          }
     },
     methods: {

     }
}
</script>
<style lang="scss" scoped>
.m-instrumentPanel {
     padding: 0 0.3rem 0.4rem 0.3rem;
     background: #fff;
     .g-instrumentPanel {
          .g-instrumentPanel-top {
               .g-instrumentPanel-from {
                    margin-left: 0.2rem;
                    width: 2.9rem;
                    height: 2.68rem;
               }
               .g-instrumentPanel-lv {
                    padding-top: 0.38rem;
                    .g-instrumentPanel-lv-tit {
                         h3 {
                              display: inline-block;
                              font-size: 0.28rem;
                              color: #000000;
                              letter-spacing: 0.0076rem;
                         }
                         .u-img {
                              width: 1.19rem;
                         }
                    }
                    .g-instrumentPanel-lv-ul {
                         width: 3.25rem;
                         font-size: 0.24rem;
                         color: #000000;
                         letter-spacing: 0.0065rem;
                         line-height: 0.24rem;
                         li {
                              display: block;
                              margin-top: 0.2rem;
                              .u-title {
                                   // width: 1.5rem;
                                   margin-right: 0.1rem;
                              }
                         }
                    }
               }
          }
          .g-problem-list {
               padding-top: 0.2rem;
               ul {
                    li {
                         width: 1.6rem;
                         height: 1.08rem;
                         text-align: center;
                         h3 {
                              margin-top: 0.13rem;
                              color: #212832;
                              font-size: 0.28rem;
                         }
                         span {
                              margin-top: 0.15rem;
                              color: #4d535d;
                              font-size: 0.24rem;
                         }
                    }
               }
          }
     }
}
</style>

