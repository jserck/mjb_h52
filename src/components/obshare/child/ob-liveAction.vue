<template>
     <article>
          <HandleDislog :isShowDislog="isShowDislog" @close="dislogClose" @next="dislogNext">
               <section class="g-nvText-con">
                    <p class="g-nvText">{{nvText1}}</p>
                    <p class="g-nvText">{{nvText2}}</p>
               </section>
          </HandleDislog>
          <section class="g-live-animation">
               <div
                    class="g-live-animation-con"
                    @click="fn_hrefRealView(buildingRealView.positionId)"
               >
                    <ObAnimation :bgUrl="buildingRealView.imageUrl"></ObAnimation>
               </div>
          </section>
          <section class="g-live-list">
               <Scroller>
                    <ul class="g-live-list-con displayFlex">
                         <li
                              :class="index != 0?'marginL':''"
                              v-for="(item,index) in buildingRealView.positionList"
                              :key="index"
                              @click="fn_hrefRealView(item.positionId)"
                         >
                              <span>{{item.positionName}}</span>
                         </li>
                    </ul>
               </Scroller>
          </section>
     </article>
</template>
<script>
import ObAnimation from './ob-animation'
import Scroller from '../../common/scroller'
import HandleDislog from '../../common/nvDislog'
export default {
     props: {
          buildingRealView: {
               type: Object,
               default() {
                    return {

                    }
               }
          }
     },
     data() {
          return {
               isShowDislog: false,
               poi: 0,
               nvText1: '空间旅行需要消耗大量流量，建议您',
               nvText2: '在wifi环境下开启旅程哦'
          }
     },
     components: {
          ObAnimation,
          Scroller,
          HandleDislog
     },
     methods: {
          fn_hrefRealView(poi) {
               this.poi = poi;
               this.isShowDislog = true;
          },
          dislogClose() {
               this.isShowDislog = false;
          },
          dislogNext() {
               let poiStr = this.poi ? `?poi=${this.poi}` : '';
               let url = this.buildingRealView.realViewUrl ? this.buildingRealView.realViewUrl + poiStr : this.$url.appDown;
               window.location = url;
          }
     }
}
</script>

<style lang="scss" scoped>
.g-live-animation-con {
     margin: auto;
     width: 6.9rem;
     height: 3.2rem;
}
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
.marginL {
     margin-left: 0.3rem;
}
.g-live-list {
     margin-top: 0.2rem;
     padding-right: 0.3rem;
     padding-left: 0.3rem;
     li {
          white-space: nowrap;
          height: 0.28rem;
          padding: 0.3rem 0.62rem;
          font-size: 0.28rem;
          font-weight: 500;
          color: #212832;
          line-height: 0.28rem;
          background: #F6FAFF;
          flex: 1;
     }
}
</style>
