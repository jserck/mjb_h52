<template>
     <article>
          <div class="queryClass">
               <div class="query_cla">
                    <div class="sweiper_class">
                         <div
                              class="swiper_icon"
                              v-for="(item,index) in abShareData.propertyReport.reportList"
                              :key="index"
                              @click="loadHandler('0','animated bounceIn')"
                         >
                              <div>
                                   <img style="width: 100%;" :src="item.reportImageUrl" alt />
                              </div>
                              <p>{{item.reportName}}</p>
                              <span>查看报告</span>
                         </div>
                    </div>
               </div>
          </div>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     data() { return {} },
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.queryClass {
     width: 7.5rem;
     background: #ffffff;
}
.query_cla {
     overflow-x: scroll;
     -webkit-overflow-scrolling: touch;
     position: relative;
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
.swiper_icon {
     width: 3.3rem;
     /*height: 1.55rem;*/
     border-radius: 0.05rem;
     margin: 0rem 0 0.2rem 0.15rem;
     position: relative;
}

.swiper_icon p {
     position: absolute;
     top: 0.5rem;
     width: 100%;
     font-family: PingFangSC-Regular, "微软雅黑";
     font-size: 0.28rem;
     color: #ffffff;
     line-height: 0.28rem;
     text-align: center;
}

.swiper_icon span {
     position: absolute;
     top: 1rem;
     left: 50%;
     margin-left: -0.6rem;
     width: 1.2rem;
     height: 0.3rem;
     font-family: PingFangSC-Regular, "微软雅黑";
     font-size: 0.2rem;
     color: #ffffff;
     line-height: 0.3rem;
     text-align: center;
     border: 0.01rem solid rgba(255, 255, 255, 0.66);
     border-radius: 1rem;
     display: block;
}
</style>
