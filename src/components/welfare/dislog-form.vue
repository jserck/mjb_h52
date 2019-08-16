<template>
     <article class="m-form">
          <section class="g-form-con">
               <div class="g-city-con displayFlex flexAlignJustifyStart flexAlignItemsCenter">
                    <span class="u-label">所在城市</span>
                    <div class="u-city-change displayFlex">
                         <span
                              class="u-city-name1"
                              @click="fn_city(1)"
                         >{{$store.state.qijiawang.city1.name||''}}</span>
                         <span
                              class="u-city-name2"
                              @click="fn_city(2)"
                         >{{$store.state.qijiawang.city2.area_cn||''}}</span>
                    </div>
               </div>
               <div class="g-phone-con displayFlex flexAlignJustifyStart flexAlignItemsCenter">
                    <span class="u-label">手机号码</span>
                    <div class="u-phone-input">
                         <x-input
                              title
                              mask="999 9999 9999"
                              v-model="phoneValue"
                              :max="13"
                              is-type="china-mobile"
                         ></x-input>
                    </div>
               </div>
               <div class="g-btn" @click="submit_">马上预约</div>
          </section>
     </article>
</template>
<script>
import { XInput } from 'vux'
export default {
     components: {
          XInput
     },
     data() {
          return {
               phoneValue: '',
               isClick: true
          }
     },

     methods: {
          fn_sub(res) {
               this.$emit('fn_sub');
          },
          fn_city(type) {
               this.$emit('fn_checkCity', type);
          },
          encryptMobileNumber(mobileNumber) {
               var publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAurXXoxXAHK4vwRMDDQRFhkQH6tDbVN/k69JGBAGxm2N4+2TVDCKWrBqKjgmjQSqubHiURa9O3bfAXUDYyV7S3/Vajc+NP0kU0l6Fl8q4AldSsQkSfLq5NrcxU0QsXJbfRCEIyS+lfG9/O+XGVrvpy21hOqs6Zmgvsa5//d6BTC31FOb/d9H4C/iFgIXqAvcEJms+agPpXTMDDjxbB6/6P8qZoqKR1iztv3bzwowU7YRpMVwwdr74K+ka7p0Y+KnnE4oiX3b5rDfQ/GOdG9OJhpGMAUkpRjXy01hu9bT+ep7sYTlhVPhwr+8OICO7tsxNoNW7InOix26oY0IvqWcGjwIDAQAB';
               var encryptor = new JSEncrypt();
               encryptor.setPublicKey(publicKey);
               return encryptor.encrypt(mobileNumber);
          },
          zxEncrypt(mobileNumber) {
               let en = new JSEncrypt();
               return en.encrypt(mobileNumber);
          },
          submit_() {
               let city1 = this.$store.state.qijiawang.city1.name;
               let city2 = this.$store.state.qijiawang.city2.area_cn;
               if (!this.isClick) {
                    return;
               }

               if (!city1 || !city2) {
                    this.$toast('请选择城市');
                    return;
               }

               if (this.phoneValue == '') {
                    this.$toast('请输入正确手机号');
                    return;
               }
               this.$vux.loading.show({
                    text: ''
               });
              //  return;
               this.isClick = false;
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/oneStopActivity`,
                    data: {
                         cityName: city1,
                         areaName: city2,
                         phoneNo: this.phoneValue
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    this.isClick = true;
                    this.$vux.loading.hide();
                    if (res.code == 0) {
                         if (res.response.status == 0) {
                              this.mjbSubmit();
                         } else {
                              this.$toast(res.response.message);
                         }
                    }
               }).catch((err) => {
                    this.isClick = true;
                    this.$vux.loading.hide();
                    this.$toast('数据异常');
                    console.log(err);
               })
          },
          mjbSubmit() {
               var self = this;
               var userName = "企业合作用户";
               var city1 = this.$store.state.qijiawang.city1.name;
               var city2 = this.$store.state.qijiawang.city2.area_cn;
               var mobilePhone = this.phoneValue.replace(/ /g, '');
               var lqmobile = encodeURIComponent(this.encryptMobileNumber(mobilePhone)); // 领券加密
               //  var tjjid = CookiesInfo.get('TJJID2');
               var tjjid = '';
               var _url = 'http://m.jia.com/page/qyhd/yingyanjianfang.html';
               var o = {
                    user_name: userName,
                    // mobile: this.zxEncrypt(mobilePhone),
                    mobile: mobilePhone,
                    lqmobile: lqmobile,
                    TJJID2: tjjid,
                    self_url: _url,
                    source: 'qyhzfuli',//优惠券source来源
                    areaflag: (city1 + ' ' + city2) || 'other',
                    ticket_id: '112831,118394',//优惠券ID
                    task_id: '2188489',//任务ID
                    askform_id: '1350',//模板ID
                    remark: '齐家鹰眼鉴房合作优惠券、装修贷、装修vr、1对1小秘书、齐家保升级至8次、齐家智能音箱。',//工单备注
                    type: 'WAP',//渠道type类型
                    is_sms: '1',//是否发短信
                    enterprise: '鹰眼鉴房',//合作企业名称
                    channel: '鹰眼鉴房合作投放',//合作渠道
                    // parent: CookiesInfo.get('FROMCHANNEL') || '',
                    parent: '',
               };
               var string = city1 + '' + city2;
               var pro = city1;
               var areaname = city2;
               var city_code = this.$store.state.qijiawang.city2.id;
               var str = {
                    username: "企业合作用户",
                    mobile: mobilePhone,
                    city: 'other',
                    house_areaflag: pro + '-' + areaname,
                    source: "qyhzfuli",
                    city_code: city_code
               };
               $.ajax({
                    type: 'get',
                    url: '//xzx.jia.com/api/yqlq.php',
                    data: o,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    success: function (e) {
                         self.isClick = true;
                         self.$vux.loading.hide();
                         console.log(e);
                         console.log(o);
                         if (e.status == 200) {
                              self.fn_sub();
                         } else if (e.status == 10006) {

                         } else {
                              $.ajax({
                                   type: 'get',
                                   url: "http://m.jia.com/new_zhuangxiu/AjaxSaveNewShopApplyNoCodeJsonp",
                                   dataType: "jsonp",
                                   data: str,
                                   jsonp: 'callback',
                                   success: function (msg) {
                                        console.log(msg);
                                        console.log(str);
                                        if (msg.status == 200) {
                                             self.fn_sub();
                                        } else {
                                             self.$toast('预约失败');
                                        }
                                   }
                              })
                         }
                    },
                    error: function () {
                         self.$vux.loading.hide();
                         self.$toast('预约失败');
                    }
               });
          }
     }
}
</script>

<style lang="scss" scoped>
.m-form {
     .g-form-con {
          padding: 0.6rem 0.7rem 0.89rem 0.7rem;
          background: #fff;
          .g-city-con,
          .g-phone-con {
               .u-label {
                    margin-right: 0.141rem;
                    font-size: 0.28rem;
                    color: #8b949e;
                    letter-spacing: 0;
                    line-height: 0.3rem;
               }
               .u-city-change {
                    .u-city-name1,
                    .u-city-name2 {
                         display: inline-block;
                         width: 1.6rem;
                         height: 0.9rem;
                         border-top: 0.01rem solid #979797;
                         border-bottom: 0.01rem solid #979797;
                         font-size: 0.28rem;
                         color: #4d535d;
                         letter-spacing: 0;
                         line-height: 0.9rem;
                         font-weight: 500;
                    }
                    .u-city-name2 {
                         margin-left: 0.42rem;
                    }
               }
          }
          .g-phone-con {
               .u-phone-input {
                    width: 3.63rem;
                    height: 0.9rem;
                    border-bottom: 0.01rem solid #979797;
                    .weui-cell {
                         padding: 0;
                         padding-left: 0.3rem;
                         height: 100%;
                    }
                    .weui-cell_warn {
                         color: #4d535d;
                    }
               }
          }
          .g-btn {
               position: relative;
               z-index: 2000;
               margin-top: 0.6rem;
               width: 5rem;
               height: 0.68rem;
               background: #0080ff;
               font-size: 0.3rem;
               color: #ffffff;
               letter-spacing: 0;
               line-height: 0.68rem;
               border-radius: 0.04rem;
          }
     }
}
</style>
<style>
.weui-cell__ft {
     display: none !important;
}
</style>
