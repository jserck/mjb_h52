<template>
     <section :class="[gifream, 'g-ifream','displayFlex' ,'flexColumn']">
          <section v-show="dialogVisible && isVip" @click="dblclickHandler" class="g-moban">
               <section class="g-moban-icon">
                    <img style="width:100%" src="@/assets/img/housequery/pic_shuanjipingmu.png" alt />
               </section>
          </section>
          <iframe
               v-if="isVip"
               id="iframetest"
               name="panoramaIframe"
               class="flexNum"
               :src="ifUrl"
               frameborder="0"
          ></iframe>
          <div v-if="!isVip" class="g-img displayFlex flexColumn flexAlignJustifyCenter"></div>
          <section class="g-particulars" v-if="dialogVisible">
               <section class="g-particulars-continer" style="padding-bottom:0.5rem">
                    <section class="g-particulars-text">
                         <section class="g-text1">
                              <h1>全景工地</h1>
                              <p style="margin-top:0.2rem">
                                   {{panoramaData.createTime}}至今共监控
                                   <mark>{{panoramaData.month}}</mark>月
                              </p>
                              <p style="margin-top:0.1rem">
                                   已上线
                                   <mark>{{panoramaData.count}}</mark>个全景工地
                              </p>
                         </section>
                         <section class="g-text2">
                              <h1 style="margin-top:0.4rem">覆盖施工阶段</h1>
                              <p
                                   v-if="panoramaData.stage"
                                   style="margin-top:0.2rem"
                              >{{panoramaData.stage}}</p>
                              <p v-else style="margin-top:0.2rem">暂无</p>
                         </section>
                    </section>
                    <section class="g-particulars-btn" @click="downLoad">
                         <span>查看更多监控数据</span>
                    </section>
                    <section class="g-particulars-logo"></section>
               </section>
          </section>
          <footer v-if="isVip">
               <section class="g-down displayFlex flexJustifyAround flexAlignItemsCenter">
                    <span class="u-down-logo">
                         <img src="@/assets/img/housequery/logo_hengban.png" alt />
                    </span>
                    <p class="u-down-tit">想看最近{{panoramaData.month}}个月的全景工地？</p>
                    <span class="u-down-btn" @click="downLoad">立即查看</span>
               </section>
          </footer>
     </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
     data() {
          return {
               dialogVisible: true,
               dblTime: new Date().getTime(),
               dblLastTime: 800,
               isVip: this.$route.query.step != '1',
               panoramaData: {},
               ifUrl: ''
          };
     },
     computed: {
          ...mapState({
               isTypeApp: 'isTypeApp',
          }),
          gifream() {
               if (this.isTypeApp) {
                    return 'g-ifream-app'
               } else {
                    return 'g-ifream-no-app'
               }
          }
     },
     created() {
          this.getD();
          // this.getHttp();
     },
     methods: {
          getHttp() {
               let url = "maijiabangService-1.0-SNAPSHOT/buiding/getVRShareDetailInfo";
               let body = {
                    vrId: this.$route.query.vrId
               };
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options)
                    .then(res => {
                         if (res.response.status === "0") {
                              this.panoramaData = res.response.data;
                              this.ifUrl = this.panoramaData.vrUrl + '&d=' + this.d + '&vrId=' + this.$route.query.vrId;
                         }
                    })
                    .catch(err => {
                         // this.set_hint("网络错误");
                    });
          },
          getD() {
               let url = "http://back.homehawkeye.com/maijiabangbackstate-1.0-SNAPSHOT/backstageUser/vrMessageDes";
               let body = {

               };
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    types: 3
               };
               this.$http(options)
                    .then(res => {
                         if (res.data.code == "0") {
                              this.d = res.data.response.message;
                              this.getHttp();
                         }
                    })
                    .catch(err => {
                         // this.set_hint("网络错误");
                    });
          },
          downLoad() {
               window.location = this.$url.appDown;
          },
          dblclickHandler() {
               let time = new Date().getTime();
               if (time && time - this.dblTime <= this.dblLastTime) {
                    this.dialogVisible = false;
               }
               this.dblTime = time;
          }
     },
     mounted() {
          $(".g-particulars-btn").dblclick(this.dblclickHandler);
     }
};
</script>
<style scoped>
mark {
     padding-left: 0.04rem;
     padding-right: 0.1rem;
     padding-bottom: 0.88rem;
     background: none;
     color: #fe751b;
}
iframe {
     width: 100%;
}
.g-img {
     overflow: hidden;
     width: 100%;
     height: calc(100% - 3.8rem);
     background: url("~@/assets/img/pms_1567831241623.jpg");
     background-repeat: no-repeat;
     background-size: 200%;
     background-position: center 80%;
}

.g-ifream {
     margin: auto;
     position: relative;
     width: 7.5rem;
}
.g-ifream-app {
     height: 100vh;
}
.g-ifream-no-app {
     height: calc(100vh - 1.18rem);
}
footer {
     height: 1.2rem;
     background: #fff;
}
.g-down {
     height: 100%;
}
.g-moban {
     position: absolute;
     z-index: 9;
     width: 100%;
     height: 100%;
     background: rgba(0, 0, 0, 0.8);
}
.g-moban-icon {
     position: relative;
     margin: 2.5rem auto 0;
     width: 2rem;
}
.u-down-tit {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}
.u-down-btn {
     width: 1.48rem;
     height: 0.48rem;
     display: inline-block;
     background: #0080ff;
     border-radius: 0.05rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #ffffff;
     line-height: 0.48rem;
     text-align: center;
}
.u-down-logo {
     width: 1.6rem;
}
.g-particulars-continer {
     position: absolute;
     bottom: 0;
     width: 100%;
     /* height: 100%; */
}
.g-particulars-text {
     margin: auto;
     padding: 0.3rem;
     width: 6.3rem;
     height: 2.38rem;
     background: #fff;
     border-radius: 0.04rem;
}
.g-particulars-text h1 {
     font-weight: 600;
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     color: #42464d;
     line-height: 0.32rem;
}
.g-particulars-text p {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #4d535d;
     line-height: 0.28rem;
}
.g-particulars {
     position: absolute;
     bottom: 0;
     width: 100%;
     height: 4.55rem;
     background: url("~@/assets/img/housequery/bg_dibuzhezhao.png") no-repeat;
     background-size: cover;
     z-index: 999;
}
.g-particulars-btn {
     margin: 0.5rem auto 0.3rem;
     width: 5.7rem;
     height: 0.88rem;
     background: #0080ff;
     border-radius: 0.04rem;
     font-family: PingFangSC-Regular;
     font-size: 0.32rem;
     color: #ffffff;
     line-height: 0.88rem;
     text-align: center;
     box-shadow: 0px 0px 0.3rem rgba(0, 128, 255, 0.49);
}
.g-particulars-logo {
     margin: auto;
     width: 4.12rem;
     height: 0.55rem;
     background: url("~@/assets/img/housequery/logo_hengbandaisolgan.png")
          no-repeat;
     background-size: cover;
}
</style>
<style>
.g-ifream .el-dialog {
     background: none;
     border: none;
     box-shadow: none;
}
</style>
