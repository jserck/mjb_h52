<template>
     <article class="m-queryClass">
          <section>
               <div
                    class="queryClass"
               >
                    <div class="query_cla">
                         <div class="sweiper_class">
                              <div
                                   v-for="(item,index) in abShareData.panoramaSite.panoramaList"
                                   :key="index"
                                   @click="loadHandler"
                              >
                                   <div
                                        class="PanoramicLi"
                                        :style="`background:url(${item.imageUrl ? item.imageUrl : $url.error_img})`"
                                   >
                                        <span
                                             class="PanoramicLiupdateIcon"
                                             v-if="item.isUpdate ==1"
                                        >更新</span>
                                        <span class="PanoramicIcon">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/obshare/housingesta_icon_vr@3x.png"
                                                  alt
                                             />
                                        </span>
                                   </div>
                                   <span class="PanoramicLiDate">{{item.vrDate}}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style lang="scss" scoped>
.m-queryClass {
     .query_cla {
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          position: relative;
     }

     .queryClass {
          background: #ffffff;
     }

     .query_cla::-webkit-scrollbar {
          display: none;
     }
     .sweiper_class {
          background: #ffffff;
          border-radius: 0.08rem;
          display: flex;
          display: -webkit-box;
          justify-content: center;
          /*position: absolute;*/
          padding-right: 0.15rem;
     }
     .PanoramicLi {
          position: relative;
          margin-left: 0.3rem;
          width: 4.16rem;
          height: 2.6rem;
          background-repeat: no-repeat !important;
          background-size: cover !important;
     }
     .PanoramicLiDate {
          display: inline-block;
          margin: 0.24rem 0 0.4rem 0.3rem;
     }
     .PanoramicLiupdateIcon {
          display: inline-block;
          position: absolute;
          top: 0.3rem;
          right: 0;
          width: 0.54rem;
          height: 0.3rem;
          color: #fff !important;
          text-align: center;
          line-height: 0.3rem !important;
          font-family: PingFangSC-Regular !important;
          font-size: 0.2rem !important;
          background: #f56364;
     }
     .PanoramicIcon {
          display: inline-block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 0.6rem;
          height: 0.6rem;
          margin-left: -0.3rem;
          margin-top: -0.3rem;
     }
     .PanoramicLiDate {
          display: inline-block;
          margin: 0.24rem 0 0.4rem 0.3rem;
          font-size: 0.28rem;
          color: #212832;
          letter-spacing: 0;
          line-height: 0.28rem;
     }
}
</style>