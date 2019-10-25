<template>
     <article class="m-HrefHouseBtn">
          <section class="g-HrefHouseBtn displayFlex" @click="hrefHouse">
               <div
                    class="u-img"
                    :style="`background:url(${houseData.propertyInfo.buildingPicUrl})`"
               ></div>
               <div class="g-content displayFlex flexColumn flexJustifybetween">
                    <div class="u-title displayFlex flexAlignItemsEnd">
                         <span class="u-name">{{houseData.propertyInfo.name}}</span>
                         <span class="u-path">{{houseData.propertyInfo.areaName}}</span>
                    </div>
                    <div class="u-size">
                         <span>{{houseData.propertyInfo.openingAveragePrice}}</span>
                    </div>
                    <div class="u-btn">
                         <span>点击了解更多楼盘信息</span>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          houseData: {
               default: function () {
                    return null
               }
          },
     },
     created() {
          console.log(this.houseData);
     },
     methods: {
          hrefHouse() {
               let options = {
                    iphData: {
                         propertyId: this.houseData.propertyInfo.propertyId
                    },
                    azData: this.houseData.propertyInfo.propertyId,
                    iphFn: this.$BridgeName['HREFHOUSE'],
                    azFn: this.$BridgeName['HREFHOUSE']
               };
               this.$Bridge.jsToNative(options);
          }
     }
}
</script>

<style lang="scss" scoped>
.m-HrefHouseBtn {
     width: 100%;
     max-width: 750px;
     height: 1.74rem;
     position: fixed;
     bottom: 0;
     z-index: 99999;
     background: #fff;
     box-shadow: 0 0 0.2rem 0 rgba(225, 225, 225, 0.5);
     -webkit-box-shadow: 0 0 0.2rem 0 rgba(225, 225, 225, 0.5);
     .g-HrefHouseBtn {
          padding: 0.3rem;
          .u-img {
               width: 1.52rem;
               height: 1.14rem;
               background-size: cover !important;
          }
          .g-content {
               margin-left: 0.3rem;
               .u-title {
                    .u-name {
                         margin-right: 0.1rem;
                         max-width: 2.47rem;
                         font-size: 0.28rem;
                         color: #212832;
                         line-height: 0.28rem;
                         @include overFlowEllipsis(1);
                    }
                    .u-path {
                         font-size: 0.22rem;
                         color: #8b949e;
                         line-height: 0.22rem;
                    }
               }
               .u-size {
                    span {
                         font-size: 0.28rem;
                         color: #f84c47;
                         line-height: 0.28rem;
                    }
               }
               .u-btn {
                    span {
                         font-size: 0.22rem;
                         color: #4d535d;
                         line-height: 0.22rem;
                    }
               }
          }
     }
}
</style>
