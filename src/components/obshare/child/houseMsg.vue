<template>
     <article class="m-houseMsg">
          <section>
               <div class="titleDiv">
                    <p>
                         <span>{{abShareData.property.propertyName}}</span>
                         <span>{{abShareData.property.collectionCount}}人已关注</span>
                    </p>
                    <p
                         class="ps otherName"
                         v-show="abShareData.property.alias"
                    >别名：{{abShareData.property.alias}}</p>
                    <p class="pace">{{abShareData.property.price || '暂无'}}</p>
                    <div class="featureMenu displayFlex flexJustifystart flexWrap">
                         <div
                              class="featureMenu-li"
                              v-for="(item,index) in abShareData.property.iconList"
                              :key="index"
                         >{{item.name}}</div>
                    </div>
                    <p class="ps" v-on:click.prevent="loadHandler()">
                         <span>
                              地址信息：
                              <i>{{abShareData.property.propertyAddress}}</i>
                         </span>
                         <img
                              :src="this.$url.right_icon"
                              style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"
                         />
                    </p>
                    <p
                         class="ps"
                         style="margin-top:0;margin-bottom:0.4rem"
                         v-on:click.prevent="loadHandler()"
                    >
                         <span>
                              开盘时间：
                              <i>{{abShareData.property.dealDate}}</i>
                         </span>
                         <img
                              :src="this.$url.right_icon"
                              style="float:right;width:0.12rem;height:0.22rem;margin-top: 0.054rem"
                         />
                    </p>
                    <div class="moreHouse" v-on:click.prevent="loadHandler()">
                         <span>更多楼盘信息</span>
                    </div>
                    <div
                         class="wriningBtn displayFlex flexJustifyAround"
                         v-if="abShareData.showReminder == '1'"
                    >
                         <div
                              class="wriningBtn-li displayFlex flexAlignItemsCenter"
                              @click="dialogVisibleHandler('1')"
                         >
                              <span>
                                   <img src="@/assets/img/obshare/icon_bainjiatixing@3x.png" alt />
                              </span>
                              <span>变价提醒我</span>
                         </div>
                         <div
                              class="wriningBtn-li displayFlex flexAlignItemsCenter"
                              @click="dialogVisibleHandler('2')"
                         >
                              <span>
                                   <img src="@/assets/img/obshare/icon_kaipantixing@3x.png" alt />
                              </span>
                              <span>开盘提醒我</span>
                         </div>
                    </div>
               </div>
          </section>
          <section v-if="dialogVisible">
               <DisLog @watchDisLogHideOrShow="watchDisLogHideOrShow">
                    <div class="dia_body" v-if="!diaType">
                         <h1>开盘提醒</h1>
                         <p>订阅开盘提醒，不再错失好房源！</p>
                         <div class="inp_">
                              <x-input
                                   type="number"
                                   text-align="center"
                                   placeholder="请填写手机号"
                                   v-model="phone_"
                                   clearable
                              ></x-input>
                         </div>
                         <div class="btn_ displayFlex dialog-footer">
                              <div class="close_" @click="closeHandler('0',1)">取消</div>
                              <div class="sure_" @click="closeHandler('1',1)">确定</div>
                         </div>
                    </div>
                    <div class="dia_body" v-else>
                         <h1>变价提醒</h1>
                         <p>订阅变价提醒，不再错过降价！</p>
                         <div class="inp_">
                              <x-input
                                   type="number"
                                   text-align="center"
                                   placeholder="请填写手机号"
                                   v-model="phone_"
                                   clearable
                              ></x-input>
                         </div>
                         <div class="btn_ displayFlex">
                              <div class="close_" @click="closeHandler('0',0)">取消</div>
                              <div class="sure_" @click="closeHandler('1',0)">确定</div>
                         </div>
                    </div>
               </DisLog>
          </section>
     </article>
</template>
<script>
import DisLog from '../../common/dislogSolt'
import Obshare from "../../../assets/js/obshare";
import { XInput } from 'vux'
export default {
     props: ['abShareData'],
     components: {
          DisLog,
          XInput
     },
     data() {
          return {
               diaType: false,
               dialogVisible: false,
               phone_: ''
          }
     },
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          },
          watchDisLogHideOrShow(type) {
               if (type == 'hide') {

               }
          },
          dialogVisibleHandler(type) {
               this.dialogVisible = true;
               if (type == '1') {
                    this.diaType = true;
               } else if (type == '2') {
                    this.diaType = false;
               }
          },
          closeHandler(done, type) {
               if (done === "1") {
                    if (!Obshare.checkMobile(this.phone_)) {
                         this.$toast("请输入正确的手机号");
                         return;
                    }
                    let url = "maijiabangService-1.0-SNAPSHOT/buiding/remindMe";
                    let id = this.$route.params.id;
                    let body = {
                         propertyId: id,
                         typeId: type,
                         userPhone: this.phone_
                    };
                    let options = {
                         urls: url,
                         methods: "post",
                         data: body,
                         des: true,
                    };
                    this.$http(options)
                         .then(res => {
                              if (res.response.status === "0") {
                                   // this.set_phone_(this.phone_);
                                   this.dialogVisible = false;
                                   this.$toast("已成功预约提醒");
                              } else {
                                   this.$toast("预约失败请重试");
                              }
                         })
                         .catch(err => {
                              this.$toast("网络错误");
                         });
                    return;
               }
               this.dialogVisible = false;
          },
     }
}
</script>
<style lang="scss" scoped>
.m-houseMsg {
     .titleDiv {
          width: 7.5rem;
          background: #ffffff;
          border-radius: 2px;
          position: relative;
          padding-bottom: 0.2rem;
     }

     .titleDiv p:nth-child(1) {
          display: flex;
          justify-content: left;
          line-height: 0.48rem;
          margin-bottom: 0.2rem;
          padding-top: 0.4rem;
     }

     .titleDiv p:nth-child(1) span:nth-child(1) {
          margin-left: 0.4rem;
          font-family: PingFangSC-Medium;
          font-size: 0.4rem;
          color: #42464d;
          line-height: 0.48rem;
          display: inline-block;
     }

     .titleDiv p:nth-child(1) span:nth-child(2) {
          margin: auto;
          margin-right: 0.3rem;
          line-height: 0.24rem;
          font-family: "PingFangSC-Regular";
          font-size: 0.24rem;
          color: #0080ff;
          text-align: center;
          display: inline-block;
     }

     .titleDiv p:nth-child(2) span {
          font-family: PingFangSC-Medium;
          font-size: 0.32rem;
          color: #ff6e3a;
          line-height: 0.32rem;
     }

     .titleDiv p:nth-child(2) span:nth-child(1) {
          margin-left: 0.4rem;
     }

     .titleDiv p:nth-child(2) span:nth-child(2) {
          margin-left: 0.1rem;
     }

     .titleDiv p:nth-child(2) span:nth-child(3) {
          margin-left: 0.1rem;
     }

     .titleDiv p:nth-child(3) {
          margin: 0.3rem 0;
          padding-left: 0.4rem;
     }
     .ps {
          padding-left: 0.4rem;
          padding-right: 0.3rem;
          margin: 0.3rem auto 0.2rem;
     }
     .otherName {
          font-family: PingFangSC-Regular;
          color: #212832;
          font-size: 0.24rem;
          line-height: 0.24rem;
     }
     .featureMenu {
          padding-left: 0.4rem;
          margin: 0 auto 0.3rem;
          justify-content: flex-start;
     }

     .featureMenu-li {
          margin-right: 0.2rem;
          padding: 0 0.08rem;
          background: #f3f4f5;
          color: #8b949e;
          font-size: 0.2rem;
          text-align: center;
          line-height: 0.32rem;
     }
     .moreHouse {
          width: 6.9rem;
          padding: 0.1rem 0;
          margin: 0.2rem auto;
          background: #f7f7f7;
          border-radius: 0.004rem;
          font-family: PingFangSC-Regular;
          color: #0080ff;
          font-size: 0.28rem;
          line-height: 0.4rem;
          text-align: center;
     }
     .wriningBtn {
          margin-top: 0.4rem;
          color: #0080ff;
          letter-spacing: 2.1;
          font-size: 0.28rem;
          line-height: 0.28rem;
     }

     .wriningBtn img {
          width: 100%;
     }

     .wriningBtn span:nth-child(1) {
          display: inline-block;
          width: 0.4rem;
     }
     .pace {
          font-family: PingFangSC-Medium;
          color: #dd6b6b;
          font-size: 0.3rem;
          line-height: 0.2rem;
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
     .dia_body {
          overflow: hidden;
          background: #fff;
     }
     .dia_body h1 {
          margin-top: 0.6rem;
          font-family: PingFangSC-Regular;
          color: #212832;
          line-height: 0.32rem;
          font-size: 0.32rem;
          text-align: center;
     }

     .dia_body p {
          margin-top: 0.3rem;
          font-family: PingFangSC-Regular;
          color: #8b949e;
          line-height: 0.22rem;
          font-size: 0.22rem;
          text-align: center;
     }

     .dia_body .btn_ {
          width: 100%;
          // position: absolute;
          bottom: 0;
     }

     .dia_body .inp_ {
          /* margin-top: 0.3rem; */
          // margin: 0.2rem auto 0;
          // width: 70%;
     }

     .dia_body .close_,
     .dia_body .sure_ {
          width: 50%;
          height: 0.88rem;
          text-align: center;
          line-height: 0.88rem;
          font-family: PingFangSC-Regular;
          font-size: 0.32rem;
          border: 1px solid rgba(231, 231, 231, 1);
     }
}
</style>