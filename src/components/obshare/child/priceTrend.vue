<template>
     <article>
          <div class="housePice" v-if="abShareData.priceTrends.priceList.length != 0">
               <Eachart :data="abShareData.priceTrends.priceList" />
               <div class="g-echarts-tit displayFlex flexAlignJustifyCenter">
                    <div class="g-echarts-tit-1 displayFlex flexAlignItemsCenter">
                         <span class="u-echarts-icon-1"></span>
                         <span>本楼盘房价</span>
                    </div>
                    <div class="g-echarts-tit-2 displayFlex flexAlignItemsCenter">
                         <span class="u-echarts-icon-2"></span>
                         <span>{{abShareData.priceTrends.businessArea}}</span>
                    </div>
               </div>
          </div>
     </article>
</template>
<script>
import Eachart from "./echarts";
export default {
     props: ['abShareData'],
     components: {
          Eachart
     },
     data() { return {} },
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.housePice {
     background: #fff;
     margin-top: 0.2rem;
}

.g-echarts-tit {
     line-height: 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.22rem;
     color: #8b949e;
}
.g-echarts-tit-1,
.g-echarts-tit-2 {
     margin-left: 0.3rem;
     margin-bottom: 0.3rem;
}

.u-echarts-icon-1,
.u-echarts-icon-2 {
     display: inline-block;
     width: 0.2rem;
     height: 0.2rem;
     background-size: cover;
}

.u-echarts-icon-1 {
     background-image: url(~@/assets/img/obshare/icon_shijianzhou@3x.png);
}

.u-echarts-icon-2 {
     background-image: url(~@/assets/img/obshare/icon_shijianzhoucopy3@3x.png);
}
</style>
