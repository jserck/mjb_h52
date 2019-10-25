<template>
     <article class="m-obshare" v-if="isShow">
          <section class="tableBar">
               <TableBar
                    :nums="nums"
                    :obj="abShareData"
                    :isUpdate="abShareData.property.isVRUpdate"
                    v-if="tableBarClose"
               />
          </section>
          <section id="anchor-0" v-scroll="scroolHand" class="g-obshare-con" data-name="顶部轮播">
               <Swiper
                    :pagesList="pages"
                    :isShow="abShareData.property.bannerList.length > 1"
                    :bannerImageUrl="abShareData.property.bannerList[0].bannerImageUrl"
               ></Swiper>
               <VrUpdate
                    :isVR="abShareData.property.isVR"
                    :isVRUpdate="abShareData.property.isVRUpdate"
               ></VrUpdate>
          </section>
          <section class="g-obshare-houseMsg-con" data-name="楼盘信息">
               <HouseMsg :abShareData="abShareData"></HouseMsg>
          </section>
          <section
               class="g-worksProgramme marTop2"
               v-if="abShareData.qualityMonitor.status == '1'"
               data-name="业主圈"
          >
               <ObContainer :totalCount="0" :isShow="false" tit="业主圈">
                    <WorksProgramme :abShareData="abShareData"></WorksProgramme>
               </ObContainer>
          </section>
          <section class="g-banner" data-name="Banner" v-if="abShareData.adData">
               <Banner :src="abShareData.adData.adImageUrl" :href="abShareData.adData.adWebUrl" />
          </section>
          <section
               id="anchor-1"
               v-if="Object.keys(abShareData.buildingRealView).length > 0"
               class="g-house-live-action"
               data-name="楼盘实景"
          >
               <ObContainer :totalCount="0" :isShow="false" tit="楼盘实景">
                    <div class="g-live-action">
                         <ObLiveAction :buildingRealView="abShareData.buildingRealView"></ObLiveAction>
                    </div>
               </ObContainer>
          </section>
          <section
               class="g-queryClass marTop2"
               v-if="abShareData.panoramaSite.panoramaList && abShareData.panoramaSite.panoramaList.length !=0"
               data-name="航拍监控"
          >
               <ObContainer
                    :totalCount="abShareData.panoramaSite.totalCount"
                    :isShow="true"
                    tit="航拍监控"
               >
                    <QueryClass :abShareData="abShareData"></QueryClass>
               </ObContainer>
          </section>

          <section class="g-queryClass marTop2" data-name="质量金字塔">
               <ObContainer
                    :totalCount="'?'"
                    :isShow="true"
                    tit="质量金字塔"
                    :webUrl="abShareData.qualityPyramid.webUrl"
               >
                    <Pyramid :abShareData="abShareData"></Pyramid>
               </ObContainer>
          </section>
          <section class="g-queryClass marTop2" data-name="管理仪表盘">
               <ObContainer
                    :totalCount="'?'"
                    :isShow="true"
                    tit="管理仪表盘"
                    :webUrl="abShareData.projectManageRisk.webUrl"
               >
                    <InstrumentPanel :abShareData="abShareData"></InstrumentPanel>
               </ObContainer>
          </section>

          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.constructionSite.totalCount!=0"
               data-name="工程实况"
          >
               <ObContainer
                    :totalCount="abShareData.constructionSite.totalCount"
                    :isShow="true"
                    tit="工程实况"
               >
                    <SiteOpen :abShareData="abShareData"></SiteOpen>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.qualityMonitor.status != ''"
               data-name="质量监控"
          >
               <ObContainer :totalCount="0" :isShow="false" tit="质量监控">
                    <QualityMonitoring :abShareData="abShareData"></QualityMonitoring>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               id="anchor-2"
               v-if="abShareData.propertyComment.commentList.length !=0"
               data-name="鹰眼探盘"
          >
               <ObContainer
                    :totalCount="abShareData.propertyComment.totalCount"
                    :isShow="true"
                    tit="鹰眼探盘"
               >
                    <GroundPlate :abShareData="abShareData"></GroundPlate>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.hawkEyeEvaluation.score"
               data-name="鹰眼评测"
          >
               <ObContainer :totalCount="0" :isShow="false" tit="鹰眼评测">
                    <Appraisal :abShareData="abShareData"></Appraisal>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.propertyReport.reportList.length !=0"
               data-name="专业报告"
          >
               <ObContainer
                    :totalCount="abShareData.propertyReport.reportList.length"
                    :isShow="false"
                    tit="专业报告"
               >
                    <Professional :abShareData="abShareData"></Professional>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.apartmentType.typeList.length != 0"
               data-name="户型介绍"
          >
               <ObContainer
                    :totalCount="abShareData.apartmentType.totalCount"
                    :isShow="true"
                    tit="户型介绍"
               >
                    <ModelIntroduced :abShareData="abShareData"></ModelIntroduced>
               </ObContainer>
          </section>
          <section class="g-siteOpen marTop2" data-name="鹰眼问答">
               <ObContainer
                    :totalCount="abShareData.hawkEyeFQA.totalCount"
                    :isShow="true"
                    tit="鹰眼问答"
               >
                    <QuestionsAndAnswers :abShareData="abShareData"></QuestionsAndAnswers>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.propertyMotion.motionList.length != 0"
               data-name="楼盘动态"
          >
               <ObContainer
                    :totalCount="abShareData.propertyMotion.totalCount"
                    :isShow="true"
                    tit="楼盘动态"
               >
                    <DynamicCondition :abShareData="abShareData"></DynamicCondition>
               </ObContainer>
          </section>
          <section
               class="g-siteOpen marTop2"
               v-if="abShareData.priceTrends.priceList.length != 0"
               data-name="楼盘价格走势"
          >
               <ObContainer :totalCount="0" :isShow="false" tit="楼盘价格走势">
                    <PriceTrend :abShareData="abShareData"></PriceTrend>
               </ObContainer>
          </section>
     </article>
</template>
<script>
import Scroll from '../../assets/js/scroll'
import TableBar from "./child/tabber";
import Swiper from './child/swiper'
import VrUpdate from './child/vrUpdate'
import HouseMsg from './child/houseMsg'
import ObContainer from './child/container'
import WorksProgramme from './child/worksProgramme'
import Banner from './child/banner'
import ObLiveAction from "./child/ob-liveAction"
import QueryClass from './child/queryClass'
import SiteOpen from './child/siteOpen'
import QualityMonitoring from './child/qualityMonitoring'
import GroundPlate from './child/groundPlate'
import Appraisal from './child/eyesAppraisal'
import Professional from './child/professional'
import ModelIntroduced from './child/modelIntroduced'
import QuestionsAndAnswers from './child/questionsAndAnswers'
import DynamicCondition from './child/dynamicCondition'
import PriceTrend from './child/priceTrend'
import Pyramid from './child/pyramid'
import InstrumentPanel from './child/instrumentPanel'
export default {
     components: {
          TableBar,
          Swiper,
          VrUpdate,
          HouseMsg,
          ObContainer,
          WorksProgramme,
          Banner,
          ObLiveAction,
          QueryClass,
          SiteOpen,
          QualityMonitoring,
          GroundPlate,
          Appraisal,
          Professional,
          ModelIntroduced,
          QuestionsAndAnswers,
          DynamicCondition,
          PriceTrend,
          Pyramid,
          InstrumentPanel
     },
     data() {
          return {
               abShareData: null,
               pages: [],
               isShow: false,
               tableBarClose: false,
               nums: 0
          }
     },
     created() {
          this.get_http();
     },
     methods: {
          scroolHand() {
               let _ss = document.body;
               let scr_top =
                    parseInt(document.body.scrollTop) ||
                    parseInt(document.documentElement.scrollTop);
               let inner_height = parseInt(window.innerHeight);
               let cl_height = parseInt(_ss.clientHeight);
               let tar = document.getElementById("anchor-0");
               let tar1 = document.getElementById("anchor-1");
               let tar2 = document.getElementById("anchor-2");
               let tarbar = $(".tableBar").height() + 5;
               let _bottomFaVal = _ss.scrollHeight - _ss.offsetHeight;
               let tarSp = tar ? tar.offsetTop - tarbar : "";
               let tarSp1 = tar1 ? tar1.offsetTop - tarbar : "";
               let tarSp2 = tar2 ? tar2.offsetTop - tarbar : "";

               if (tarSp && scr_top >= tarSp + 350) {
                    this.tableBarClose = true;
                    this.nums = 0;
               } else {
                    this.tableBarClose = false;
               }
               if (tarSp1 && scr_top >= tarSp1 && this.nums != 1) {
                    this.nums = 1;
               }
               if (tarSp2 && scr_top >= tarSp2 && this.nums != 2) {
                    this.nums = 2;
               }
          },
          get_http() {
               let this_ = this;
               let url = "maijiabangService-1.0-SNAPSHOT/buiding/buidingSurver1_7_0";
               let id = this.$route.params.id;
               let platform = this.$route.params.platform || 3;
               let body = {
                    propertyId: id
               };
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    platform
               };
               this.$vux.loading.show({
                    text: '加载中'
               });
               this.$http(options)
                    .then(res => {
                         this.$vux.loading.hide();
                         this.isShow = true;
                         this_.abShareData = res.response.data;
                         console.log(res.response.data);
                         // //配置轮播图数据
                         try {
                              this_.abShareData.scoreData.stars = this_
                                   .abShareData.scoreData.stars
                                   ? this_.abShareData.scoreData.stars * 1
                                   : 0;
                         } catch (error) { }

                         if (this_.abShareData.property.bannerList) {
                              let len =
                                   this_.abShareData.property.bannerList.length;
                              for (let b = 0; b < len; b++) {
                                   let obj = {
                                        url: 'javascript:',
                                        img: '',
                                        title: ''
                                   };
                                   obj.img = this_.abShareData.property.bannerList[b].bannerImageUrl;
                                   this_.pages.push(obj);
                                   continue;
                              }
                         }
                    })
                    .catch(err => {
                         console.log(err);
                    });
          },
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style lang="scss" scoped>
.m-obshare {
     .tableBar {
          width: 100%;
          max-width: 7.5rem;
          position: fixed;
          top: 0;
          z-index: 9999;
     }
     // padding-bottom: 1.2rem;
     overflow: hidden;
     margin: auto;
     // margin-top: 0.7rem;
     max-width: 750px;
     width: 100%;
     background: #f7f7f7;
     .g-obshare-con {
          position: relative;
     }
     .g-banner {
          overflow: hidden;
     }
     .g-house-live-action {
          .g-live-action {
               padding-bottom: 0.4rem;
               background: #fff;
          }
     }
     .g-siteOpen {
          background: #fff;
     }
}
</style>
