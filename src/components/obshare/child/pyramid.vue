<template>
     <article class="m-pyramid">
          <section class="g-pyramid">
               <div class="g-pyramid-top displayFlex flexJustifybetween">
                    <div class="g-pyramid-from">
                         <div
                              class="u-one u-on-position"
                              v-for="(item,index) in abShareData.qualityPyramid.scoreList"
                              :key="index"
                         >
                              <img
                                   v-if="item.floor == '1'"
                                   :src="item.level=='1'?Levelone_s:Levelone_n"
                                   alt
                              />
                              <img
                                   v-if="item.floor == '2'"
                                   :src="item.level=='1'?Leveltwo_s:Leveltwo_n"
                                   alt
                              />
                              <img
                                   v-if="item.floor == '3'"
                                   :src="item.level=='1'?Levelthree_s:Levelthree_n"
                                   alt
                              />
                              <img
                                   v-if="item.floor == '4'"
                                   :src="item.level=='1'?Levelfour_s:Levelfour_n"
                                   alt
                              />
                              <img
                                   v-if="item.floor == '5'"
                                   :src="item.level=='1'?Levelfive_s:Levelfive_n"
                                   alt
                              />
                              <img
                                   v-if="item.floor == '6'"
                                   :src="item.level=='1'?Levelsix_s:Levelsix_n"
                                   alt
                              />
                         </div>
                    </div>
                    <div class="g-pyramid-lv">
                         <div class="g-pyramid-lv-tit displayFlex">
                              <h3>风险提示：</h3>
                              <div class="u-img" v-if="abShareData.qualityPyramid.riskLevel == '1'">
                                   <img :src="fw" alt />
                              </div>
                              <div class="u-img" v-if="abShareData.qualityPyramid.riskLevel == '2'">
                                   <img :src="fd" alt />
                              </div>
                              <div class="u-img" v-if="abShareData.qualityPyramid.riskLevel == '3'">
                                   <img :src="fz" alt />
                              </div>
                              <div class="u-img" v-if="abShareData.qualityPyramid.riskLevel == '4'">
                                   <img :src="fg" alt />
                              </div>
                              <div class="u-img" v-if="abShareData.qualityPyramid.riskLevel == '5'">
                                   <img :src="fc" alt />
                              </div>
                         </div>
                         <div class="g-pyramid-lv-ul">
                              <ul class="displayFlex flexWrap">
                                   <li
                                        class="displayFlex flexAlignItemsCenter flexAlignJustifyStart"
                                        v-for="(item,index) in abShareData.qualityPyramid.scoreList"
                                        :key="index"
                                   >
                                        <span class="u-title">{{item.title}}&nbsp;</span>
                                        <span>{{item.content}}</span>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <div class="g-problem-list">
                    <ul class="displayFlex flexJustifybetween">
                         <li
                              v-for="(item,index) in abShareData.qualityPyramid.problemList"
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
import Levelone_s from '../../../../static/obshare/jzt/png_levelone_s@3x.png'
import Leveltwo_s from '../../../../static/obshare/jzt/png_leveltwo_s@3x.png'
import Levelthree_s from '../../../../static/obshare/jzt/png_levelthree_s@3x.png'
import Levelfour_s from '../../../../static/obshare/jzt/png_levelfour_s@3x.png'
import Levelfive_s from '../../../../static/obshare/jzt/png_levelfive_s@3x.png'
import Levelsix_s from '../../../../static/obshare/jzt/png_levelsix_s@3x.png'
import Levelone_n from '../../../../static/obshare/jzt/png_levelone_n@3x.png'
import Leveltwo_n from '../../../../static/obshare/jzt/png_leveltwo_n@3x.png'
import Levelthree_n from '../../../../static/obshare/jzt/png_levelthree_n@3x.png'
import Levelfour_n from '../../../../static/obshare/jzt/png_levelfour_n@3x.png'
import Levelfive_n from '../../../../static/obshare/jzt/png_levelfive_n@3x.png'
import Levelsix_n from '../../../../static/obshare/jzt/png_levelsix_n@3x.png'

import fw from '../../../../static/obshare/pyramid/png_wufengxian@3x.png'
import fd from '../../../../static/obshare/pyramid/png_difengxian@3x.png'
import fz from '../../../../static/obshare/pyramid/png_zhongfengxian@3x.png'
import fg from '../../../../static/obshare/pyramid/png_gaofengxian@3x.png'
import fc from '../../../../static/obshare/pyramid/png_chaogaofengxian@3x.png'
export default {
     props: ['abShareData'],
     data() {
          return {
               Levelone_s,
               Leveltwo_s,
               Levelthree_s,
               Levelfour_s,
               Levelfive_s,
               Levelsix_s,
               Levelone_n,
               Leveltwo_n,
               Levelthree_n,
               Levelfour_n,
               Levelfive_n,
               Levelsix_n,
               fw,
               fd,
               fz,
               fg,
               fc
          }
     },
     methods: {

     }
}
</script>
<style lang="scss" scoped>
.m-pyramid {
     padding: 0 0.3rem 0.4rem 0.3rem;
     background: #fff;
     .g-pyramid {
          .g-pyramid-top {
               .g-pyramid-from {
                    position: relative;
                    margin-left: 0.2rem;
                    width: 2.9rem;
                    height: 2.68rem;
                    .u-on-position {
                         position: absolute;
                    }
               }
               .g-pyramid-lv {
                    padding-top: 0.45rem;
                    .g-pyramid-lv-tit {
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
                    .g-pyramid-lv-ul {
                         width: 3.25rem;
                         font-size: 0.24rem;
                         color: #000000;
                         letter-spacing: 0.0065rem;
                         line-height: 0.24rem;
                         .u-title {
                              width: 1.03rem;
                         }
                         li {
                              width: 1.4rem;
                              margin-top: 0.2rem;
                              margin-right: 0.2rem;
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
