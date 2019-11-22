<template>
     <article class="m-vipPay">
          <section class="g-container" data-name="用户VIP状态">
               <div class="g-vip-container">
                    <div class="g-vip-user displayFlex">
                         <div class="g-vip-img">
                              <img class="flexImg" :src="userMesData.avatar" alt />
                         </div>
                         <div class="g-vip-data">
                              <div class="g-user-mes displayFlex flexAlignItemsCenter">
                                   <h1 class="u-vip-name">{{userMesData.nikeName}}</h1>
                                   <span class="u-hz" v-if="userMesData.isVIP == '1'">
                                        <img
                                             class="flexImg"
                                             src="@/assets/img/vipPay/png_huizhang.png"
                                             alt
                                        />
                                   </span>
                              </div>
                              <p class="u-vip-isVip">{{userMesData.expireDate}}</p>
                         </div>
                    </div>
                    <div class="g-vip-checkList">
                         <Mjb-vipChecklist
                              :priceList="userMesData.priceList"
                              @checkListHandler="checkListHandler"
                         ></Mjb-vipChecklist>
                    </div>
               </div>
          </section>
          <section class="g-container" data-name="支付方式" v-if="isPayType">
               <div class="g-vip-container g-pay-container">
                    <h1 class="g-tit">选择支付方式</h1>
                    <div class="g-vip-payType">
                         <Mjb-vipPayType @payTypeHandler="payTypeHandler"></Mjb-vipPayType>
                    </div>
               </div>
          </section>
          <section data-name="会员福利">
               <div class="g-vip-container g-welfare-container">
                    <h1 class="g-tit">会员福利</h1>
                    <div class="g-vip-welfare">
                         <ul class="displayFlex flexWrap flexJustifybetween">
                              <li v-for="(item,index) in userMesData.welfareList" :key="index">
                                   <div class="u-img">
                                        <img class="flexImg" :src="item.imageUrl" alt />
                                   </div>
                                   <span>{{item.title}}</span>
                              </li>
                         </ul>
                    </div>
                    <div class="g-xy">
                         <ul class="displayFlex">
                              <li>
                                   <a :href="userMesData.vipAgreement">《鹰眼会员服务协议》</a>
                              </li>
                              <li>
                                   <a :href="userMesData.privacyAgreement">《隐私协议》</a>
                              </li>
                         </ul>
                    </div>
                    <div class="g-btn" @click="paySubMit">确认支付</div>
               </div>
          </section>
          <section data-name="支付成功" v-if="isPaySuccess">
               <Mjb-vipSuccess @backHome="backHome" @back="back"></Mjb-vipSuccess>
          </section>
     </article>
</template>
<script>
import MjbVipChecklist from './child/vipCheckList'
export default {
     components: {
          MjbVipChecklist,
          MjbVipPayType: () => import('./child/vipPayType'),
          MjbVipSuccess: () => import('./child/paySuccess')
     },
     data() {
          return {
               isPaySuccess: false,
               isPayType: true,
               priceId: null,
               payTypeId: 0,
               welfareList: [],
               userMesData: {}
          }
     },
     created() {
          if (!this.$Ob.is_az()) {
               //如果不是安卓系统隐藏支付类型的选择模块
               this.isPayType = false;
          }
          window.sessionStorage.setItem('token', '272f359dbd56f836190910802e37ead1');
          this.getUserMes();
     },
     methods: {
          getUserMes() {
               /**
                *  @name 会员中心用户信息数据请求
                *  @params tooken
                *  对用户信息的数据进行请求你处理
               */
               this.$vux.loading.show({
                    text: '加载中'
               });
               let this_ = this;
               let url = "maijiabangService-1.0-SNAPSHOT/user/myVIPInfo";
               let platform = this.$route.params.platform || 3;
               let body = {
                    propertyId: ''
               };
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    platform
               };
               this.$http(options)
                    .then(res => {
                         console.log(res);
                         this.userMesData = res.response.data;
                         this.welfareList = this.userMesData.welfareList;
                         this.welfareListData(this.welfareList);
                         this.priceId = this.userMesData.priceList[0].priceId;
                         this.$vux.loading.hide();
                    })
                    .catch(err => {
                         // this.$vux.loading.hide();
                         console.log(err);
                    });
          },
          welfareListData(arr) {
               /**
                * 会员福利icon数据集合处理
                * 如果长度不是4的倍数，对数据进行补足方便布局
                */
               let num = arr.length % 4;
               let obj = {
                    imageUrl: "",
                    isUpdate: 2,
                    title: ""
               }
               if (num == 0) return;
               for (let i = 0; i < num; i++) {
                    this.welfareList.push(obj);
               }
          },
          checkListHandler(val) {
               //价格选择变动监听
               console.log(val);
               this.priceId = val.item.priceId;
          },
          payTypeHandler(val) {
               //付费方式变动监听
               this.payTypeId = val;
          },
          paySubMit() {
               console.log(this.payTypeId, this.priceId);
               // return;
               // this.isPaySuccess = !this.isPaySuccess;
               this.$vux.loading.show({
                    text: '加载中'
               });
               let this_ = this;
               let url = !this.payTypeId ? "maijiabangService-1.0-SNAPSHOT/user/wxpayConfirm" : "maijiabangService-1.0-SNAPSHOT/user/alipayConfirm";
               let platform = this.$route.params.platform || 3;
               let body = {
                    priceId: this.priceId
               };
               let options = {
                    urls: url,
                    methods: "post",
                    data: body,
                    des: true,
                    platform
               };
               this.$http(options)
                    .then(res => {
                         this.$vux.loading.hide();
                         console.log(res.response.data);
                         // let option = {
                         //      iphData: { message: 'login' },
                         //      azData: 'login',
                         //      iphFn: this.$BridgeName.LOGINACTION,
                         //      azFn: this.$BridgeName.CALLANDROID
                         // };
                         // this.$Bridge.jsToNative(option);
                    })
                    .catch(err => {
                         // this.$vux.loading.hide();
                         console.log(err);
                    });
          },
          backHome() {
               console.log('backHome');
          },
          back() {
               this.isPaySuccess = false;
               console.log('back');
          }
     }
}
</script>
<style scoped lang="scss">
.m-vipPay {
     // $user_bg: "~@/assets/img/vipPay/png_huiyuankapian.png";
     .g-container {
          padding-bottom: 0.2rem;
          background: #f7f7f7;
     }
     .g-vip-container {
          padding: 0 0.2rem;
          padding-top: 0.15rem;

          background: #fff;
          .g-vip-user {
               padding: 0.43rem 0 0 0.3rem;
               height: 1.59rem;
               @include background(
                    "~@/assets/img/vipPay/png_huiyuankapian.png",
                    cover
               );
               .g-vip-img {
                    overflow: hidden;
                    width: 1rem;
                    height: 1rem;
                    background: #0080ff;
                    border-radius: 1rem;
               }
               .g-vip-data {
                    margin-left: 0.15rem;
                    .g-user-mes {
                         margin-top: 0.1rem;
                         .u-vip-name {
                              font-size: 0.38rem;
                              color: #ffffff;
                              letter-spacing: 0.01rem;
                              line-height: 0.38rem;
                              text-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, 0.2);
                         }
                         .u-hz {
                              margin-left: 0.15rem;
                              width: 0.3rem;
                              height: 0.3rem;
                         }
                    }
                    .u-vip-isVip {
                         margin-top: 0.2rem;
                         font-size: 0.24rem;
                         color: #ffffff;
                         letter-spacing: 0.0063rem;
                         line-height: 0.24rem;
                         text-shadow: 0 0.02rem 0.04rem rgba(0, 0, 0, 0.2);
                    }
               }
          }
          .g-vip-checkList {
               padding: 0.5rem 0.1rem 0.4rem 0.1rem;
          }
     }
     .g-tit {
          font-weight: 500;
          font-size: 0.4rem;
          color: #000000;
          line-height: 0.4rem;
     }
     .g-pay-container,
     .g-welfare-container {
          h1 {
               padding-top: 0.2rem;
               padding-left: 0.1rem;
          }
     }
     .g-welfare-container {
          .g-vip-welfare {
               padding: 0.3rem 0.2rem;
               ul {
                    li {
                         margin-top: 0.1rem;
                         width: 1.6rem;
                         height: 1.6rem;
                         text-align: center;
                         .u-img {
                              margin: auto;
                              width: 0.92rem;
                         }
                         span {
                              margin-top: 0.12rem;
                              font-size: 0.24rem;
                              color: #4d535d;
                              text-align: center;
                              line-height: 0.24rem;
                         }
                    }
               }
          }
          .g-xy {
               padding-left: 0.2rem;
               ul {
                    li {
                         a {
                              &:link,
                              &:visited,
                              &:active,
                              &:hover {
                                   font-size: 0.24rem;
                                   color: #0080ff;
                                   line-height: 0.3rem;
                              }
                         }
                    }
               }
          }
          .g-btn {
               margin: auto;
               margin-top: 0.6rem;
               margin-bottom: 0.3rem;
               width: 6.9rem;
               height: 0.88rem;
               @include background(
                    "~@/assets/img/vipPay/png_queren.png",
                    cover
               );
               font-size: 0.32rem;
               color: #ffffff;
               text-align: center;
               line-height: 0.88rem;
          }
     }
}
</style>