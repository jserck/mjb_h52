<template>
     <article class="m-appointment">
          <section class="g-appointment">
               <!-- 头图 -->
               <section>
                    <div class="g-header">
                         <img class="flexImg" src="@/assets/img/appointment/pic_toutu_n@3x.png" alt />
                    </div>
               </section>
               <!-- main,主体内容 -->
               <section>
                    <div class="g-main">
                         <div class="g-getWhat g-con-bottom g-foot-icon">
                              <Mjb-absolute-icon
                                   :MjbAbsoluteIconImg="MjbAbsoluteIconImg1"
                                   MjbAbsoluteIconWidth="6.31"
                              ></Mjb-absolute-icon>
                              <div class="g-getWhat-con">
                                   <ul>
                                        <li>
                                             <MjbGetWhatLi type="1"></MjbGetWhatLi>
                                        </li>
                                        <li>
                                             <MjbGetWhatLi type="2"></MjbGetWhatLi>
                                        </li>
                                        <li>
                                             <MjbGetWhatLi type="3"></MjbGetWhatLi>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div class="g-including g-con-bottom g-foot-icon">
                              <Mjb-absolute-icon
                                   :MjbAbsoluteIconImg="MjbAbsoluteIconImg2"
                                   MjbAbsoluteIconWidth="4.05"
                              ></Mjb-absolute-icon>
                              <section class="g-ImgTextLi">
                                   <ul class="displayFlex flexWrap flexJustifyAround">
                                        <li class="g-ImgTextLiBottom">
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_xiangmuzhengtigaikuang_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">项目整体概况</p>
                                        </li>
                                        <li class="g-ImgTextLiBottom">
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_yuanqudeguihuayuzhengtiluoshi_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">园区的规划与整体落实</p>
                                        </li>
                                        <li>
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_loudongfenxi_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">楼栋分析</p>
                                        </li>
                                        <li>
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_huneijianshedangan_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">户内建设档案</p>
                                        </li>
                                   </ul>
                              </section>
                         </div>
                         <div class="g-format g-con-bottom">
                              <Mjb-absolute-icon
                                   :MjbAbsoluteIconImg="MjbAbsoluteIconImg3"
                                   MjbAbsoluteIconWidth="3.89"
                              ></Mjb-absolute-icon>
                              <section class="g-ImgTextLi">
                                   <ul class="displayFlex flexWrap flexJustifyAround">
                                        <li class="g-ImgTextLiBottom">
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_guihualuoshibaogao_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">规划落实报告</p>
                                        </li>
                                        <li class="g-ImgTextLiBottom">
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_tupiandeng_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">图片、视频、VR全景</p>
                                        </li>
                                        <li>
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_jingdumiaoshu_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">进度描述</p>
                                        </li>
                                        <li>
                                             <div class="u-img">
                                                  <img
                                                       class="flexImg"
                                                       src="@/assets/img/appointment/pic_zhiliangwentizhenggaijilu_n@3x.png"
                                                       alt
                                                  />
                                             </div>
                                             <p class="u-text">质量问题整改记录</p>
                                        </li>
                                   </ul>
                              </section>
                         </div>
                         <div class="g-foot-form">
                              <div class="u-tit">
                                   <img
                                        class="flexImg"
                                        src="@/assets/img/appointment/pic_yuyue_n@3x.png"
                                        alt
                                   />
                              </div>
                              <div class="g-form">
                                   <div class="g-group">
                                        <div
                                             v-if="!isLoginStatus"
                                             class="g-group-zhezhao"
                                             @click="noLoginBtn"
                                        ></div>
                                        <group>
                                             <div>
                                                  <x-input
                                                       placeholder="请输入您的真实姓名"
                                                       v-model="userName"
                                                       @on-change="fn_pickerChange1"
                                                       :disabled="isPub"
                                                  >
                                                       <img
                                                            slot="label"
                                                            style="width:0.4rem"
                                                            src="@/assets/img/appointment/message_icon_xingming_disable@3x.png"
                                                       />
                                                  </x-input>
                                             </div>
                                        </group>
                                        <group>
                                             <popup-picker
                                                  :show.sync="showPopupPicker"
                                                  :show-cell="false"
                                                  value-text-align="left"
                                                  placeholder="请选择楼栋号"
                                                  confirm-text="确定"
                                                  :data="list2"
                                                  :columns="2"
                                                  ref="pickers"
                                                  @on-change="fn_pickerChange2"
                                                  v-model="data_picker"
                                             ></popup-picker>
                                        </group>
                                        <group>
                                             <div class="g-picker">
                                                  <div class="u-zhezhao" @click="fn_picker"></div>
                                                  <x-input
                                                       placeholder="请选择楼栋号"
                                                       v-model="data_picker_see"
                                                       :disabled="isPub"
                                                       :show-clear="false"
                                                  >
                                                       <img
                                                            slot="label"
                                                            style="width:0.4rem"
                                                            src="@/assets/img/appointment/message_icon_loudonghao_disable@3x.png"
                                                       />
                                                  </x-input>
                                             </div>
                                        </group>
                                        <group>
                                             <div>
                                                  <x-input
                                                       placeholder="请输入您的门牌号"
                                                       v-model="houseNumber"
                                                       @on-change="fn_pickerChange1"
                                                       :disabled="isPub"
                                                  >
                                                       <img
                                                            slot="label"
                                                            style="width:0.4rem"
                                                            src="@/assets/img/appointment/message_icon_menpaihao_disable@3x.png"
                                                       />
                                                  </x-input>
                                             </div>
                                        </group>
                                   </div>
                                   <div class="g-text">
                                        <p>请务必将您输入的真实姓名与楼栋单元门牌号对应，平台会对信息进行匹配，匹配不符的用户将无法获取监控服务</p>
                                   </div>
                                   <div
                                        class="g-btn g-active"
                                        v-if="isSub && !isPub"
                                        @click="fn_subMit"
                                   >提交</div>
                                   <div class="g-btn g-link" v-if="!isSub && !isPub">提交</div>
                                   <div class="g-btn g-link" v-if="isPub">已预约</div>
                              </div>
                         </div>
                    </div>
               </section>
          </section>
     </article>
</template>
<script>
import MjbAbsoluteIcon from './child/absoluteIcon'
import MjbGetWhatLi from './child/getWhatLi'
import MjbAbsoluteIconImg1 from '@/assets/img/appointment/pic_ninengcongzhefendanganzhongdedaoshenme_n@3x.png'
import MjbAbsoluteIconImg2 from '@/assets/img/appointment/pic_gaifendanganbaokuo_n@3x.png'
import MjbAbsoluteIconImg3 from '@/assets/img/appointment/pic_danganxingshiduoyang_n@3x.png'
import { GroupTitle, Group, XInput, PopupPicker } from 'vux'
import { setTimeout, clearTimeout, setInterval, clearInterval } from 'timers';
import { mapState } from 'vuex'
export default {
     components: {
          MjbAbsoluteIcon,
          MjbGetWhatLi,
          GroupTitle,
          Group,
          XInput,
          PopupPicker
     },
     data() {
          return {
               MjbAbsoluteIconImg1,
               MjbAbsoluteIconImg2,
               MjbAbsoluteIconImg3,
               isSub: false,
               isPub: false,
               showPopupPicker: false,
               isLoginStatus: false,
               data_picker: [],
               data_picker_see: '',
               buildingList: [],
               list2: [],
               userName: '',
               buildingId: '',
               unitId: '',
               houseNumber: '',
               token: window.sessionStorage.getItem('token')
          }
     },
     computed: {
          ...mapState({
               tokens: 'token'
          })
     },
     methods: {
          fn_picker() {
               if (this.isPub) {
                    return;
               }
               this.showPopupPicker = true;
          },
          fn_pickerChange1(e) {
               this.isSub = this.userName != '' && this.houseNumber != '' && this.data_picker.length > 0
          },
          fn_pickerChange2(e) {
               this.data_picker_see = this.$refs.pickers && this.$refs.pickers.getNameValues();
               this.fn_pickerChange1();
          },
          isLogin() {
               if (!this.token) {
                    this.$vux.loading.hide();
                    let option = {
                         iphData: { message: 'login' },
                         azData: 'login',
                         iphFn: this.$BridgeName.LOGINACTION,
                         azFn: this.$BridgeName.CALLANDROID
                    };
                    this.$Bridge.jsToNative(option);
               } else {
                    this.isLoginStatus = true;
                    this.fn_isPub();
               }
          },
          getHttp() {
               /**
               * @name 获取picker数据
               * @method post
               * @param propertyId 楼盘ID
               * @param publishId 期数 必填为0
               */
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/buiding/getUploadHouseInfo`,
                    data: {
                         propertyId: this.$route.params.id,
                         publishId: 0
                    },
                    methods: 'post',
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         this.$vux.loading.hide();
                         this.buildingList = res.response.data.buildingList;
                         this.buildingList.map((item, index) => {
                              let obj = {
                                   name: item.buildingName,
                                   value: item.buildingId,
                                   parent: 0
                              }
                              this.list2.push(obj);
                              item.unitList.map((item2, index2) => {
                                   let obj = {
                                        name: item2.unitName,
                                        value: item2.unitId,
                                        parent: item.buildingId
                                   }
                                   this.list2.push(obj);
                              });
                         });
                    }
               }).catch((err) => {
                    console.log(err);
                    this.$toast('数据异常1');
               })
          },
          fn_subMit() {
               /**
               * @name 提交用户表单
               * @method post
               * @param propertyId 楼盘id
               * @param userName 用户名字
               * @param buildingId 楼栋号
               * @param unitId 单元号
               * @param houseNumber 门牌号
               */
               this.$vux.loading.show({
                    text: ''
               })
               if (!this.token) {
                    this.isLogin();
                    return;
               }
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/userAppointment`,
                    data: {
                         propertyId: this.$route.params.id,
                         userName: this.userName,
                         buildingId: this.data_picker[0],
                         unitId: this.data_picker[1],
                         houseNumber: this.houseNumber,
                         pickerNmae: this.data_picker_see
                    },
                    methods: 'post',
                    des: true,
                    token: this.token
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         this.isPub = true;
                         this.$vux.loading.hide();
                         if (res.response.status != 0) {
                              this.$toast(res.response.message);
                              this.fn_isPub(true);
                         } else {
                              this.$toast('提交成功');
                         }
                    }
               }).catch((err) => {
                    this.$toast('数据异常2');
               })
          },
          fn_set_form(obj) {
               this.userName = obj.userName;
               this.houseNumber = obj.houseNumber;
               this.data_picker_see = obj.pickerNmae;
          },
          fn_isPub() {
               /**
              * @name 用户是否已经预约过
              * @method post
              * @param propertyId 楼盘id
              */
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/isAppointment`,
                    data: {
                         propertyId: this.$route.params.id,
                         userName: this.userName,
                         buildingId: this.data_picker[0],
                         unitId: this.data_picker[1],
                         houseNumber: this.houseNumber,
                    },
                    methods: 'post',
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         if (res.response.data.appointmentStatus == 1) {
                              this.isPub = true;
                              this.fn_set_form(res.response.data.info);
                              this.$vux.loading.hide();
                              return;
                         }
                    }
               }).catch((err) => {
                    console.log(err);
                    this.$toast('数据异常3');
               })
          },
          noLoginBtn() {
               let option = {
                    iphData: { message: 'login' },
                    azData: 'login',
                    iphFn: this.$BridgeName.LOGINACTION,
                    azFn: this.$BridgeName.CALLANDROID
               };
               this.$Bridge.jsToNative(option);
          }
     },
     created() {
          this.$vux.loading.show({
               text: ''
          })
          if (!this.token) {
               this.token = this.tokens;
          }
          this.isLogin();
          this.getHttp();
     }
}
</script>
<style lang="scss" scoped>
.m-appointment {
     background: #625ee8;
     .g-header {
     }
     .g-main {
          position: relative;
          z-index: 9;
          margin-top: -0.28rem;
          padding: 0 0.3rem 0.3rem 0.3rem;
          .g-ImgTextLi {
               .g-ImgTextLiBottom {
                    margin-bottom: 0.6rem;
               }
               ul {
                    padding: 0 0.4rem;
                    padding-top: 0.4rem;
                    li {
                         width: 2.8rem;
                         text-align: center;
                         .u-img {
                              margin: auto;
                              width: 1.68rem;
                         }
                         .u-text {
                              margin-top: 0.2rem;
                              font-size: 0.28rem;
                              color: #656c78;
                              text-align: center;
                              line-height: 0.28rem;
                         }
                    }
               }
          }
     }
     .g-con-bottom {
          border: 1px solid rgba(255, 255, 255, 0);
          box-sizing: border-box;
          margin-bottom: 0.2rem;
     }
     .g-foot-icon {
          position: relative;
          &::before,
          &::after {
               position: absolute;
               z-index: 11;
               bottom: -0.45rem;
               content: "";
               width: 0.1rem;
               height: 0.74rem;
               background: url("~@/assets/img/appointment/pic_lianjie_n@3x.png")
                    center center no-repeat;
               background-size: cover;
          }
          &::before {
               left: 0.4rem;
          }
          &::after {
               right: 0.4rem;
          }
     }
     .g-getWhat {
          height: 6.38rem;
          background: url("~@/assets/img/appointment/pic_tupian_1_n@3x.png")
               center center no-repeat;
          background-size: 100% 100%;
          .g-getWhat-con {
               overflow: hidden;
               ul {
                    padding-left: 0.2rem;
                    padding-top: 0.17rem;
                    li {
                         margin-top: 0.3rem;
                    }
               }
          }
     }
     .g-including {
          height: 7.3rem;
          background: url("~@/assets/img/appointment/pic_tupian_2_n@3x.png")
               center center no-repeat;
          background-size: 100% 100%;
     }
     .g-format {
          height: 7.16rem;
          background: url("~@/assets/img/appointment/pic_tupian_3_n@3x.png")
               center center no-repeat;
          background-size: 100% 100%;
     }
     .g-foot-form {
          .u-tit {
               margin: auto;
               width: 5.98rem;
          }
          .g-form {
               overflow: hidden;
               position: relative;
               z-index: 10;
               padding: 0 0.3rem;
               margin-top: -0.3rem;
               // height: 6.14rem;
               background: url("~@/assets/img/appointment/pic_tupian_4_n@3x.png")
                    center center no-repeat;
               background-size: 100% 100%;
               .g-group {
                    position: relative;
                    padding: 0.2rem;
                    .g-group-zhezhao {
                         position: absolute;
                         left: 0;
                         top: 0;
                         width: 100%;
                         height: 100%;
                         z-index: 9;
                    }
                    .g-picker {
                         position: relative;
                         .u-zhezhao {
                              position: absolute;
                              z-index: 8;
                              width: 100%;
                              height: 100%;
                         }
                    }
               }
               .g-text {
                    margin-top: 0.2rem;
                    p {
                         font-size: 0.22rem;
                         color: #8b949e;
                         letter-spacing: 0.0022rem;
                         line-height: 0.34rem;
                    }
               }
               .g-btn {
                    margin-top: 0.3rem;
                    margin-bottom: 0.6rem;
                    width: 100%;
                    height: 0.88rem;
                    text-align: center;
                    font-size: 0.32rem;
                    color: #ffffff;
                    text-align: center;
                    line-height: 0.88rem;
               }
               .g-active {
                    background: #625ee8;
               }
               .g-link {
                    background: #b9c0c8;
               }
          }
     }
}
</style>
<style>
/* x-input 样式自定义 */
.m-appointment .weui-cells {
     margin: 0;
     background: none;
}
.m-appointment .weui-cell {
     padding-left: 0.05rem;
     margin-top: 0.35rem;
}
.m-appointment .weui-cell .weui-cell__hd {
     background: none;
     display: grid;
}
.m-appointment .weui-cell__bd {
     margin-left: 0.2rem;
}
.m-appointment .weui-cells:before {
     border-top: none;
}
.m-appointment .weui-cell:before {
     border-top: 0px solid red !important;
}
.m-appointment .weui-cells:after {
     border-bottom: 2px solid #e7e7e7;
}
.m-appointment .weui-input {
     background-color: none;
     font-size: 0.28rem;
     color: #4d535d;
     line-height: 0.32rem;
}
/* x-perker样式自定义 */
.scroller-mask {
     display: none;
}
.scroller-component {
     background: #fff;
}
.scroller-item {
     /* font-size: 0.28rem !important; */
     color: #b9c0c8 !important;
}
.scroller-item-selected {
     color: #0080ff !important;
}
.vux-picker {
     background: #eee !important;
}
.vux-popup-picker-container {
     display: flex !important;
     flex-flow: column-reverse !important;
     background: none !important;
}
.vux-popup-dialog {
     background: none !important;
}
.vux-popup-header {
     justify-content: space-around;
     margin-top: 0.2rem;
     background: #fff !important;
}
.vux-popup-header-title {
     display: none;
}
.vux-popup-header-left {
     color: #b9c0c8 !important;
}
.vux-popup-header-right {
     color: #0080ff !important;
}
/* .scroller-component {
     height: 3.29rem;
} */
/* .scroller-item {
     text-align: center;
     font-size: 16px;
     height: 108px;
     line-height: 108px !important;
     color: #000;
}
.scroller-indicator {
     width: 100%;
     height: 108px !important;
     position: absolute;
     left: 0;
     top: 102px;
     z-index: 3;
}
.scroller-component {
     display: block;
     position: relative;
     height: 329px !important;
     overflow: hidden;
     width: 100%;
} */
</style>
