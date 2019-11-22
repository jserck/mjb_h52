<template>
     <article class="m-vip-checkList">
          <section>
               <ul>
                    <li v-for="(item,index) in priceList" :key="index">
                         <div class="g-CheckList-li" v-show="item.isContinuous!='1'">
                              <div
                                   :class="['g-active-border',index == indexNum ? 'g-CheckList-li-active':'']"
                                   @click="clickHandler(index,item)"
                              ></div>
                              <div class="g-container displayFlex flexColumn flexJustifybetween">
                                   <div class="g-mounth-con displayFlex flexJustifybetween">
                                        <span class="g-mounth">{{item.title}}</span>
                                        <span class="g-price">
                                             <i class="u-price-1">¥</i>
                                             <i class="u-price-2">{{item.price}}</i>
                                        </span>
                                   </div>
                                   <div class="g-aprice-con clearfix">
                                        <span v-if="item.isContinuous!='1'">{{item.originalPrice}}</span>
                                        <p v-else>首次连续购买数据包享优惠，到期自动续费，可随时取消。</p>
                                   </div>
                              </div>
                         </div>
                    </li>
               </ul>
          </section>
     </article>
</template>
<script>
import axios from 'axios'
export default {
     props: {
          priceList: {
               default() {
                    return []
               },
               type: Array
          }
     },
     data() {
          return {
               checkList: [],
               indexNum: 0
          }
     },
     methods: {
          clickHandler(index, item) {
               this.indexNum = index;
               this.$emit('checkListHandler', { item, index });
          }
     }
}
</script>
<style lang="scss" scoped>
.m-vip-checkList {
     ul {
          box-sizing: border-box;
          border: 0.001rem solid #fff;
          li {
               margin-top: 0.2rem;
          }
          .g-CheckList-li {
               position: relative;
               box-sizing: border-box;
               height: 1.18rem;
               box-shadow: 0 0.02rem 0.1rem 0 rgba(45, 104, 196, 0.26);
               border-radius: 0.04rem;
               .g-container {
                    padding: 0.2rem 0.3rem;
                    height: 0.78rem;
                    height: calc(100% - 0.4rem);
                    -webkit-height: calc(100% - 0.4rem);
               }
               .g-mounth-con {
                    .g-mounth {
                         font-size: 0.32rem;
                         color: #212832;
                         line-height: 0.32rem;
                    }
                    .g-price {
                         .u-price-1 {
                              font-size: 0.24rem;
                              color: #0080ff;
                              text-align: right;
                              line-height: 0.24rem;
                         }
                         .u-price-2 {
                              font-size: 0.4rem;
                              color: #0080ff;
                              text-align: right;
                              line-height: 0.4rem;
                         }
                    }
               }
               .g-aprice-con {
                    overflow: hidden;
                    span {
                         float: right;
                         font-size: 0.24rem;
                         color: #8b949e;
                         line-height: 0.28rem;
                    }
                    p {
                         font-size: 0.22rem;
                         color: #8b949e;
                         line-height: 0.22rem;
                    }
               }
          }
          .g-active-border {
               position: absolute;
               width: 100%;
               height: 100%;
               box-sizing: border-box;
               border-radius: 0.04rem;
          }
          .g-CheckList-li-active {
               border: 2px solid #0080ff;
          }
     }
}
</style>