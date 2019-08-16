<template>
     <section class="m-apprasial" v-if="a">
          <div v-if="isTypeApp && isMobile && paths =='eyLi'">
               <HrefHouseBtn :houseData="appList"></HrefHouseBtn>
          </div>

          <header id="scroll1">
               <section class="g-tit-img">
                    <section class="g-banner"></section>
                    <section
                         class="g-banner-img"
                         :style="`background:url(${appList.propertyInfo.picUrl});background-size:cover;`"
                    >
                         <span :class="['u-banner-icon',statusBanner]">
                              <section class="u-content">
                                   <i class="u-num">{{appList.totalScore}}</i>
                                   <i v-if="appList.totalScore*1>=8" class="u-type">优质好盘</i>
                              </section>
                         </span>
                    </section>
               </section>
          </header>
          <DownLoadSee :isMobile="isMobile">
               <section class="g-bdfy">
                    <section class="g-house-message">
                         <h1>{{appListName}}</h1>
                         <ul>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">均价：</span>
                                   <span
                                        class="u-text"
                                        style="color:#f00"
                                   >{{appList.propertyInfo.openingAveragePrice || '暂无'}}</span>
                              </li>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">地址：</span>
                                   <span class="u-text">{{appList.propertyInfo.address|| '暂无'}}</span>
                              </li>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">概况：</span>
                                   <span class="u-text">{{appList.propertyInfo.desc|| '暂无'}}</span>
                              </li>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">户型：</span>
                                   <span class="u-text">{{appList.propertyInfo.hotHouse|| '暂无'}}</span>
                              </li>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">动态：</span>
                                   <span class="u-text">{{appList.propertyInfo.dynamic|| '暂无'}}</span>
                              </li>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">装修：</span>
                                   <span class="u-text">{{appList.propertyInfo.renovation|| '暂无'}}</span>
                              </li>
                              <li class="displayFlex flexAlignJustifyStart">
                                   <span class="u-laber">交房：</span>
                                   <span class="u-text">{{appList.propertyInfo.giveTime|| '暂无'}}</span>
                              </li>
                         </ul>
                    </section>
                    <section
                         class="g-synopsis"
                         id="scroll2"
                         v-if="appList.sandEvaluatInfo.length>0"
                    >
                         <ul>
                              <li v-for="(item,index) in appList.sandEvaluatInfo" :key="index">
                                   <section class="u-li-text">
                                        <section :class="['u-li-icon',(statusChat(item.score*1))]">
                                             <span class="u-num">{{item.score||0}}</span>
                                             <span class="u-text">{{item.title}}</span>
                                        </section>
                                        <p>{{item.desc||'暂无'}}</p>
                                   </section>
                              </li>
                         </ul>
                    </section>
                    <section class="g-issue-img" v-if="appList.customerServiceReply.length >0">
                         <ul>
                              <li v-for="(item,index) in appList.customerServiceReply" :key="index">
                                   <ChatLi :isLeft="true" :chatText="item.question"></ChatLi>
                                   <ChatLi :isLeft="false" :chatText="item.reply"></ChatLi>
                              </li>
                         </ul>
                    </section>
                    <section
                         class="g-list-container"
                         :id="`scroll${index+3}`"
                         v-for="(item2,index) in appList.liveInfo"
                         :key="index"
                    >
                         <section
                              class="g-li-container"
                              v-for="(item3,index) in item2.experience"
                              :key="index"
                         >
                              <section class="g-li-nav" v-if="item2.id == 1">
                                   <Green :activeNum="item3.id"></Green>
                              </section>
                              <section class="g-li-nav" v-else-if="item2.id == 2">
                                   <Blue :activeNum="item3.id"></Blue>
                              </section>
                              <section class="g-li-nav" v-else>
                                   <Yellow :activeNum="item3.id"></Yellow>
                              </section>
                              <section class="g-content" v-if="!item3.houseList">
                                   <section class="u-img" v-if="item3.id == 4&&item3.picUrl!=''">
                                        <img :src="item3.picUrl" alt>
                                   </section>
                                   <p class="u-text">{{item3.desc}}</p>
                                   <section class="u-img" v-if="item3.id !=4&&item3.picUrl!=''">
                                        <img :src="item3.picUrl" alt>
                                   </section>
                              </section>
                              <section
                                   class="g-house-content"
                                   v-for="(item4,index) in item3.houseList"
                                   :key="index"
                                   v-else
                              >
                                   <section class="u-img" v-if="item4.picUrl!=''">
                                        <img :src="item4.picUrl" alt>
                                   </section>
                                   <h1 class="u-tit">{{item4.name}}</h1>
                                   <p class="u-text">{{item4.desc}}</p>
                              </section>
                         </section>
                    </section>
               </section>
          </DownLoadSee>
     </section>
</template>
<script>
import ImgUpLoad from '../../../assets/js/imgUpLoad'
import Green from '../green/green.vue'
import Blue from '../blue/blue.vue'
import Yellow from '../yellow/yellow.vue'
import ChatLi from '../histchat/histchat.vue'
import HrefHouseBtn from '../hrefHouseBtn/hrefHouseBtn'
import Ob from '@/assets/js/obshare'
import DownLoadSee from '../../common/downLoadSee'
import { mapState } from 'vuex'
export default {
     components: {
          Green,
          Blue,
          Yellow,
          ChatLi,
          // Green: () => import('../green/green.vue'),
          // Blue: () => import('../blue/blue.vue'),
          // Yellow: () => import('../yellow/yellow.vue'),
          // ChatLi: () => import('../histchat/histchat.vue'),
          HrefHouseBtn,
          DownLoadSee
     },
     data() {
          return {
               a: false,
               appList: {},
               appListName: '',
               isMobile: true,
               paths: ''
          }
     },

     beforeDestroy() {
          this.$store.commit('SET_ROUTELOAD', false);
          // this.set_titbar_show(false);
     },
     created() {
          this.$routeLoad();
          this.getHttp();
          this.isMobile = Ob.isMobile();
          this.paths = this.$route.query.path || '';
     },
     computed: {
          ...mapState({
               isTypeApp: 'isTypeApp'
          }),
          statusBanner() {
               let sum = this.appList.totalScore * 1;
               if (sum >= 8) {
                    return 'u-banner-icon1'
               }
               return 'u-banner-icon2'
          },
     },
     methods: {
          setHref() {
               // alert('href');
               let href = this.$route.query.href;

               if (href == '4') {
                    href = '5'
               } else if (href == '5') {
                    href = '4'
               }
               if (!href || href == '0') return;
               let ids = `#scroll${href}`;
               $('html, body').animate({
                    scrollTop: $(ids).offset().top
               }, 0);
          },
          statusChat(sum) {
               if (sum >= 8) {
                    return 'u-li-icon1'
               }
               return 'u-li-icon2'
          },
          getHttp() {
               /**
               * @name 获取数据
               * @method post
               * @param propertyId 楼盘ID
               */
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/buildingEvaluating/${this.$route.params.id}/${this.$route.params.uid}`,
                    // urls: `/buildingEvaluating/${this.$route.params.id}`,
                    data: {
                         userId: this.userId
                    },
                    methods: 'post',
                    types: 1,
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         if (res.code == 0) {
                              this.appList = res.response.data;
                              if (this.appList.propertyInfo.picUrl) {
                                   this.a = true;
                                   this.$emit('fn_IsShow', this.a, this.appList.liveInfo);
                              }
                              this.appListName = res.response.data.propertyInfo.name;
                              if (this.$route.query.href) {
                                   let slef = this;
                                   // let timer = null;
                                   // timer = setTimeout(() => {
                                   slef.$nextTick(() => {
                                        let [...imgList] = $('.u-img').find('img');
                                        ImgUpLoad(imgList).then((res) => {
                                             slef.setHref();
                                             slef.$nextTick(() => {
                                                  slef.$store.commit('SET_ROUTELOAD', false);
                                             });
                                        }).catch((err) => {
                                             throw err;
                                        });
                                        // timer = null;
                                   });
                                   // }, 800);
                                   return;
                              }
                              this.$store.commit('SET_ROUTELOAD', false);
                         }
                    }
               }).catch((err) => {
                    console.log(err);
                    this.$toast('数据异常');
               })
          }
     }
}
</script>

<style lang="scss" scoped>
.m-apprasial {
     overflow: hidden;
     margin: auto;
     @media screen and (min-width: 768px) {
          letter-spacing: 1px;
     }
     .g-banner {
          @include bg(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 0.08rem;
          // background: #0080ff;
          @media screen and (min-width: 768px) {
               padding-top: 0;
               margin-bottom: 0.2rem;
               background: none;
               height: 100%;
          }
     }
     .g-tit-img {
          position: relative;
          margin: 0.2rem auto;
          width: 6.9rem;
          border-radius: 0.08rem;
          height: 4.8rem;
          @media screen and (min-width: 768px) {
               width: auto;
               height: auto;
               border: none;
               margin: 0 auto 0.2rem;
               margin-left: 0.3rem;
               margin-right: 0.3rem;
          }
     }
     .g-banner-img {
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          border: 0.01rem solid #f7f7f7;
          border-radius: 0.08rem;
          // margin: 0.2rem auto;
          width: 6.9rem;
          height: 100%;
          @media screen and (min-width: 768px) {
               width: auto;
               height: auto;
               padding-top: 60%;
               border: none;
          }

          .u-banner-icon {
               position: absolute;
               z-index: 99;
               top: 50%;
               left: 50%;
               margin-left: -0.92rem;
               margin-top: -0.83rem;
               width: 1.84rem;
               height: 1.66rem;
               color: #ffffff;
               letter-spacing: 0;
               .u-content {
                    overflow: hidden;
                    position: relative;
                    background: none;
                    height: 100%;
                    .u-num,
                    .u-type {
                         display: block;
                         text-align: center;
                    }
                    .u-num {
                         width: 0.84rem;
                         position: absolute;
                         top: 0.56rem;
                         left: 0.48rem;
                         text-align: center;
                         // margin-top: 0.52rem;
                         font-size: 0.36rem;
                         line-height: 0.48rem;
                    }
                    .u-type {
                         width: 100%;
                         position: absolute;
                         bottom: 0.29rem;
                         font-size: 0.224rem;
                         line-height: 0.224rem;
                    }
               }
          }
          .u-banner-icon1 {
               @include background(
                    "~@/assets/img/apprasial/pic_loupanicon.png"
               );
               .u-content {
                    .u-num {
                         width: 0.88rem;
                         left: 0.48rem;
                         top: 0.55rem;
                    }
                    .u-type {
                         bottom: 0.3rem;
                    }
               }
          }
          .u-banner-icon2 {
               @include background(
                    "~@/assets/img/apprasial/pic_loupanicon2.png"
               );
               .u-content {
                    .u-num {
                         top: 0.58rem;
                    }
               }
          }
     }
     .g-bdfy {
          padding: 0 0.3rem;
          background: none;
          .g-house-message {
               padding: 0.4rem 0.3rem;
               @include bg(#fff, $apprasial_home_div_bg1);
               border-radius: 0.08rem;
               h1 {
                    @include setFont(0.4rem, $apprasial_h1_size);
                    @include color(#212832, #fff);
                    @include lineHeight(0.5rem, $apprasial_text_lineHeight);
               }
               ul {
                    margin-top: 0.2rem;
                    li {
                         @include lineHeight(
                              0.5rem,
                              $apprasial_text_lineHeight
                         );
                         @include setFont(0.28rem, $apprasial_text_size);
                         .u-laber {
                              width: 1rem;
                              @include color(#8b949e, #c8c8c8);
                              @media screen and (min-width: 768px) {
                                   width: 150px;
                              }
                         }
                         .u-text {
                              width: 5.5rem;
                              @include color(#4d535d, #fff);
                              text-align: left;
                              @media screen and (min-width: 768px) {
                                   width: 100%;
                              }
                         }
                    }
               }
          }
          .g-synopsis {
               margin-top: 0.2rem;
               padding-bottom: 0.3rem;
               @include bg(#fff, $apprasial_home_div_bg1);
               border-radius: 0.08rem;
               ul {
                    li {
                         padding: 0.77rem 0.3rem 0;
                         .u-li-text {
                              position: relative;
                              border-radius: 0.08rem;
                              padding: 0.87rem 0.3rem 0.3rem 0.3rem;
                              @include bg(#edf3fa, $apprasial_home_div_bg2);
                              @include setFont(0.28rem, $apprasial_text_size);
                              @include color(#212832, #fff);
                              text-align: justify;
                              @include lineHeight(
                                   0.5rem,
                                   $apprasial_text_lineHeight
                              );
                              .u-li-icon1 {
                                   @include background(
                                        "~@/assets/img/apprasial/pic_fenshu.png"
                                   );
                              }
                              .u-li-icon2 {
                                   @include background(
                                        "~@/assets/img/apprasial/pic_fenshu2.png"
                                   );
                              }
                              .u-li-icon {
                                   position: absolute;
                                   top: -0.63rem;
                                   left: 50%;
                                   margin-left: -0.88rem;
                                   width: 1.76rem;
                                   height: 1.44rem;
                                   color: #ffffff;
                                   line-height: 0.32rem;
                                   .u-num,
                                   .u-text {
                                        display: block;
                                        text-align: center;
                                   }
                                   .u-num {
                                        margin-top: 0.44rem;
                                        font-size: 0.32rem;
                                   }
                                   .u-text {
                                        margin-top: 0.11rem;
                                        font-size: 0.22rem;
                                   }
                              }
                         }
                    }
               }
          }
          .g-issue-img {
               margin-top: 0.2rem;
               padding: 0.3rem;
               // height: 6.34rem;
               @include bg(#fff, $apprasial_home_div_bg1);
               border-radius: 0.08rem;
               ul {
                    border-radius: 0.08rem;
                    padding: 0.15rem 0;
                    // background: #f7f7f7;
                    @include bg(#f7f7f7, $apprasial_home_div_bg2);
                    li {
                         padding: 0.2rem 0;
                    }
               }
          }
          .g-list-container {
               margin-top: 0.2rem;
               .g-li-container {
                    border-radius: 0.08rem;
                    padding-top: 0.4rem;
                    margin-top: 0.2rem;
                    @include bg(#fff, $apprasial_home_div_bg1);
                    .g-li-nav {
                         padding-left: 0.1rem;
                    }
                    .u-img {
                         font-size: 0;
                    }
                    .g-content {
                         padding: 0.3rem;
                         .u-text {
                              padding-bottom: 0.2rem;
                              @include setFont(0.28rem, $apprasial_text_size);
                              // color: #313138;
                              @include color(#313138, #fff);
                              text-align: justify;
                              @include lineHeight(
                                   0.5rem,
                                   $apprasial_text_lineHeight
                              );
                         }
                    }
                    .g-house-content {
                         padding: 0.3rem;
                         .u-tit {
                              margin: 0.2rem 0 0.2rem 0;
                              display: block;
                              // font-family: PingFangSC-Medium;
                              @include setFont(0.36rem, $apprasial_text_size);
                              color: #ff0000;
                              text-align: justify;
                              line-height: 0.5rem;
                         }
                         .u-text {
                              @include setFont(0.28rem, $apprasial_text_size);
                              // color: #00001a;
                              @include color(#00001a, #fff);
                              text-align: justify;
                              @include lineHeight(
                                   0.5rem,
                                   $apprasial_text_lineHeight
                              );
                         }
                    }
               }
          }
     }
}
</style>
