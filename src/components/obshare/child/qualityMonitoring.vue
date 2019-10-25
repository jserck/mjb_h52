<template>
     <article>
          <div class="g-montoring">
               <div class="g-montoring-num2 clearfix">
                    <p>
                         <i>{{abShareData.qualityMonitor.propertyOwnerCount}}</i> 名业主正在监控工程进度
                    </p>
                    <div class="clearfix" @click="loadHandler('0','animated bounceIn')">
                         <span style="background:#0080FF;color:#fff">申请服务</span>
                    </div>
               </div>

               <div class="g-montoring-num2-list" v-if="abShareData.qualityMonitor.status != ''">
                    <ul class="displayFlex flexNoWrap">
                         <li
                              class="displayFlex flexAlignJustifyCenter flexAlignItemsCenter"
                              @click="loadHandler('0','animated bounceIn')"
                              v-for="(val,index) in abShareData.qualityMonitor.publishList"
                              :key="index"
                         >
                              <span class="houseNumber">{{val.publishName}}</span>
                              <div style="margin-left:0.3rem">
                                   <p>
                                        <code class="houseStage">{{val.stage}}</code>阶段
                                   </p>
                                   <p>
                                        已更新
                                        <code class="loadNumber">{{val.reportCount}}</code>期监控报告
                                   </p>
                              </div>
                         </li>
                    </ul>
               </div>

               <p
                    class="ps"
                    style="padding-bottom: 0.3rem"
                    v-on:click.prevent="loadHandler('0','animated bounceIn')"
               >
                    <span>申请质量监控服务，了解更详细的楼盘信息</span>
                    <img
                         :src="this.$url.right_icon"
                         style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"
                    />
               </p>
          </div>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     data() { return {} },
     methods: {
          loadHandler() {
               window.location.href = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.g-montoring {
     margin-bottom: 0.2rem;
     background: #fff;
}

.g-montoring-num {
     padding-left: 0.3rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}

.g-montoring-num2 {
     padding-left: 0.3rem;
     padding-right: 0.3rem;
}

.g-montoring-num2 p {
     float: left;
     font-family: PingFangSC-Medium;
     font-size: 0.28rem;
     line-height: 0.64rem;
     text-align: left;
}

.g-montoring-num2 p {
     color: #42464d;
}

.g-montoring-num2 i {
     color: #fe751b;
     text-align: center;
     font-family: PingFangSC-Medium;
     font-size: 0.28rem;
}

.g-montoring-num2 span {
     float: right;
     display: block;
     width: 2rem;
     height: 0.64rem;
     text-align: center;
     line-height: 0.62rem;
     border: 2px solid #0080ff;
     border-radius: 4px;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #0080ff;
     box-sizing: border-box;
}

.g-montoring-num2-list {
     width: 100%;
     overflow-x: scroll;
     -webkit-overflow-scrolling: touch;
     position: relative;
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #212832;
     text-align: center;
     line-height: 0.24rem;
}
.g-montoring-num2-list p {
     text-align: left;
}

.g-montoring-num2-list p:nth-child(2) {
     margin-top: 0.2rem;
}

.houseNumber {
     font-size: 0.24rem;
     color: #212832;
     text-align: center;
     line-height: 0.28rem;
     font-weight: 500;
}

.houseStage {
     color: #0080ff;
}

.loadNumber {
     color: #fe751b;
}

.g-montoring-num2-list ul {
     padding-left: 0.3rem;
     padding-right: 0.3rem;
}

.g-montoring-num2-list ul li {
     margin: 0.3rem 0.1rem;
     width: 4.16rem;
     height: 1.28rem;
     box-flex: auto 0 0;
     -webkit-box-flex: auto 0 0;
     -moz-box-flex: auto 0 0;
     flex: auto 0 0;
     -webkit-flex: auto 0 0;
     background: #ffffff;
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.35);
     border-radius: 4px;
}
.ps {
     padding-left: 0.4rem;
     padding-right: 0.3rem;
     margin: 0.3rem auto 0.2rem;
}
.ps img {
     width: 0.32rem;
     height: 0.32rem;
}

.ps span {
     display: inline-block;
     width: 5.7rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #42464d;
     line-height: 0.28rem;
}

.ps span i {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #0080ff;
     line-height: 0.24rem;
}
</style>
