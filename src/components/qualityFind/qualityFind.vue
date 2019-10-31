<template>
     <article class="qualityFind">
          <header>
               <div class="g-header bg-config"></div>
          </header>
          <section class="g-safeguard">
               <div class="u-safeguard-title">
                    <img class="flexImg" src="@/assets/img/qualityFind/pic_biaoti1@3x.png" alt />
               </div>
               <section class="u-safeguard-content">
                    <div class="u-safeguard-content-tit">
                         <p>在高周转施工下，40天内三起事故造成7人罹难。交付的楼盘质量堪忧，交房即维权情况已成常态。维权之艰辛、道路之漫长困扰着无数业主。</p>
                    </div>
                    <div class="u-safeguard-content-1">
                         <img class="flexImg" src="@/assets/img/qualityFind/pic_wenzi.png" alt />
                    </div>
                    <div class="u-safeguard-content-container1">
                         <p
                              class="u-safeguard-content-1-list-text1"
                         >鹰眼鉴房作为专注房屋工程质量的信息服务平台，现已发起“质量寻光计划”。</p>
                         <p
                              class="u-safeguard-content-1-list-text1"
                         >我们呼吁全社会共同关注工程质量并贡献一份力量，向全社会征集寻光志愿者。</p>
                         <p class="u-safeguard-content-1-list-text1">打破业主与开发商之间存在的</p>
                         <p class="u-safeguard-content-1-list-text2">
                              <strong>施工质量不透明、交付即维权的信息不对等现状。</strong>
                         </p>
                    </div>
                    <div class="u-safeguard-content-container1">
                         <p class="u-safeguard-content-1-list-text1">我们对广大网友、业主、准业主发出呼吁：</p>
                         <p class="u-safeguard-content-1-list-text2">
                              <strong>关注房屋质量；</strong>
                         </p>
                         <p class="u-safeguard-content-1-list-text2">
                              <strong>关注房企品质；</strong>
                         </p>
                         <p class="u-safeguard-content-1-list-text2">
                              <strong>关注我们应有的权益。</strong>
                         </p>
                    </div>
                    <div class="u-safeguard-content-container1">
                         <p class="u-safeguard-content-1-list-text1">数十年辛苦积累的首付，三代人的努力</p>
                         <p class="u-safeguard-content-1-list-text1">一朝之间变成数十年维权路。</p>
                         <p class="u-safeguard-content-1-list-text2">
                              <strong>对此情况，我们要说 “绝不”！</strong>
                         </p>
                    </div>
               </section>
               <div>
                    <img class="flexImg" src="@/assets/img/qualityFind/pic_bg2@3x.png" alt />
               </div>
          </section>
          <section class="g-runingWithOwner">
               <div class="g-runingWithOwner-header">
                    <img src="@/assets/img/qualityFind/pic_biaoti2@3x.png" alt />
               </div>
               <div class="g-runingWithOwner-container">
                    <ul>
                         <li style="margin-top:0">
                              <span>共享楼盘信息</span>
                              <p>公正透明的与您共享楼盘信息</p>
                              <p>真实的展示企业资质、施工进度与工程质量</p>
                         </li>
                         <li>
                              <span>风险评估模型</span>
                              <p>质量金字塔、安全文明施工</p>
                              <p>双重风险大数据评估模型助力决策</p>
                         </li>
                         <li>
                              <span>可视化质量数据</span>
                              <p>数据可视化与统计分析结论</p>
                              <p>再也不用担心看不懂工程质量数据</p>
                         </li>
                         <li>
                              <span>探盘报告</span>
                              <p>寻光志愿者独家探盘结论</p>
                              <p>业主圈内与邻里业主实时分享</p>
                         </li>
                         <li>
                              <span>媒体曝光</span>
                              <p>工程质量差、证照资质不齐...坚决曝光无良开发商</p>
                              <p>全力支持寻光志愿者与业主的维权行动</p>
                         </li>
                         <li>
                              <span>法律援助</span>
                              <p>对证据真实有效的合理维权行为提供维权协助</p>
                              <p>为业主提供法律援助支持</p>
                         </li>
                    </ul>
               </div>
               <!-- <div>
                    <img class="flexImg" src="@/assets/img/qualityFind/pic_bg3@3x.png" alt />
               </div>-->
          </section>
          <section :class="['g-volunteer',volunteer]">
               <div class="g-volunteer-con">
                    <div class="g-tit">
                         <img src="@/assets/img/qualityFind/pic_biaoti3.png" alt />
                    </div>
                    <div class="g-volunteer-container">
                         <div class="g-volunteer-container1">
                              <span class="g-tit-icon">我有数据</span>
                              <p>
                                   <strong>如果您有已拍摄或任何途径获得的以下数据</strong>
                              </p>
                              <ul>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_1.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">楼盘建设进度</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_2.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">综合管理情况</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_3.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">工程质量问题项与合格项</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_4.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">隐蔽工程数据</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_5.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">其它工程数据等</span>
                                   </li>
                              </ul>
                              <p>
                                   <strong>并希望</strong>
                              </p>
                              <ul>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_1.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">通过平台展示分享给更多用户</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_2.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">鹰眼鉴房专家团队对数据进行分析解读</span>
                                   </li>
                              </ul>
                         </div>
                         <div class="g-volunteer-container1" style="margin-top: 0.3rem;">
                              <span class="g-tit-icon">我要曝光</span>
                              <p>
                                   <strong>如果您有意愿协助鹰眼鉴房一起关注</strong>
                              </p>
                              <ul>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_1.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">楼盘施工质量问题</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_2.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">施工延误无法按时交房</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_2.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">开发商承诺与交付不符</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_2.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">霸王条款侵犯业主权益等</span>
                                   </li>
                              </ul>
                              <p>
                                   <strong>并希望</strong>
                              </p>
                              <ul>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_1.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">通过鹰眼鉴房平台进行媒体曝光</span>
                                   </li>
                                   <li class="displayFlex flexAlignItemsCenter">
                                        <span class="u-num">
                                             <img
                                                  class="flexImg"
                                                  src="@/assets/img/qualityFind/icon_2.png"
                                                  alt
                                             />
                                        </span>
                                        <span class="u-text">成为志愿者协助鹰眼鉴房团队关注房屋质量现状</span>
                                   </li>
                              </ul>
                         </div>
                    </div>
                    <div class="g-iphone">
                         <div class="g-volunteer-container">
                              <div class="g-volunteer-container1" style="padding-bottom: 0.2rem;">
                                   <div class="g-iphone-2">
                                        <img
                                             src="@/assets/img/qualityFind/pic_tianjiaweixin.png"
                                             alt
                                        />
                                   </div>
                                   <div class="g-iphone-3">
                                        <img src="@/assets/img/qualityFind/pic_shouji2.png" alt />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="g-foot">
                         <img class="flexImg" src="@/assets/img/qualityFind/pic_dibu.png" alt />
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     computed: {
          volunteer() {
               if (!this.$store.state.isTypeApp) {
                    return 'volunteer-app'
               } else {
                    return ''
               }
          }
     }
}
</script>
<style scoped lang="scss">
.qualityFind {
     margin: auto;
     width: 100%;
     max-width: 7.5rem;
     height: 31.22rem;
     background: #e0e6fe;
}

.bg-config {
     background-repeat: no-repeat !important;
     background-size: 100% !important;
     /* background-position: center; */
}
.u-safeguard-content-container {
     background: #f1f4ff;
     border-radius: 0.1rem;
}
.u-safeguard-content-container1 {
     margin-top: 0.3rem;
     padding: 0.4rem 0.3rem;
     background: #f1f4ff;
     border-radius: 0.1rem;
}
.g-header {
     width: 100%;
     height: 4.92rem;
     background: url("~@/assets/img/qualityFind/pic_banner@3x.png") no-repeat;
}
.u-safeguard-title {
     margin: 0 auto 0;
     width: 4.97rem;
}
.u-safeguard-content {
     margin: 0.3rem auto 0.2rem;
     padding: 0.3rem;
     width: 6.3rem;
     background: #fff;
     box-shadow: 0 0 0.2rem 0 rgba(180, 192, 240, 0.5);
     border-radius: 0.1rem;
}
.u-safeguard-content-tit {
     font-size: 0.28rem;
     color: #323449;
     letter-spacing: 0.004rem;
     line-height: 0.44rem;
}
.u-safeguard-content-1 {
     position: relative;
     margin-top: 0.2rem;
     overflow: hidden;
     background: #f1f4ff;
     border-radius: 0.1rem;
}

.u-safeguard-content-1-list-text1 {
     color: #323449;
}
.u-safeguard-content-1-list-text2 {
     margin-top: 0.2rem;
     color: #5d6fd1;
}
.g-runingWithOwner {
     overflow: hidden;
     background: #a5aef1;
}
.g-runingWithOwner-header {
     margin: auto;
     width: 7.3rem;
}
.g-runingWithOwner-container {
     margin: 0.2rem auto;
     margin-bottom: 1.5rem;
     padding: 0.3rem;
     width: 6.3rem;
     background: #fff;
     border-radius: 0.1rem;
}
.g-howToJoin {
     padding-bottom: 1rem;
}
.g-runingWithOwner-container ul li,
.g-howToJoin-conatiner ul li {
     margin-top: 0.3rem;
     padding: 0.3rem;
     background: #f1f4ff;
     border-radius: 0.1rem;
     height: 1.64rem;
}
.g-runingWithOwner-container ul li p,
.g-howToJoin-conatiner ul li p {
     font-size: 0.24rem;
     color: #323449;
     letter-spacing: 0.005rem;
     line-height: 0.44rem;
     text-align: justify;
}
.g-runingWithOwner-container ul li span,
.g-howToJoin-conatiner ul li span {
     display: inline-block;
     margin-left: -0.42rem;
     padding: 0 0.4rem;
     height: 0.71rem;
     font-size: 0.32rem;
     color: #ffffff;
     line-height: 0.55rem;
     background: url("~@/assets/img/qualityFind/pic_biaotidise2@3x.png");
     background-size: 100% 100%;
     text-align: center;
     font-weight: 600;
}
.g-howToJoin {
     background: #798ae2;
}
.g-howToJoin-conatiner {
     padding: 0.3rem;
     margin: 0.2rem auto;
     width: 6.3rem;
     background: #fff;
     border-radius: 0.1rem;
}
.g-howToJoin-conatiner ul li {
     height: auto;
}
.g-howToJoin-conatiner ul li mark {
     color: #798ae2;
     background: none;
}
.u-phoneImg {
     margin: 0.5rem auto 0;
     width: 3.65rem;
}
.g-howToJoin-foot {
     position: relative;
     margin: 0.33rem auto 0;
     padding: 0.3rem;
     width: 4.81rem;
     height: 0.76rem;
     background: #798ae2;
     border-radius: 0.1rem;
     color: #fff;
     font-size: 0.32rem;
     letter-spacing: 0.005rem;
     line-height: 0.44rem;
}
.g-howToJoin-foot::before {
     display: inline-block;
     position: absolute;
     top: -0.27rem;
     left: 50%;
     margin-left: -0.14rem;
     content: "";
     width: 0;
     height: 0;
     border-width: 0 0.15rem 0.28rem;
     border-style: solid;
     border-color: transparent transparent #798ae2; /*透明 透明  灰*/
}
footer {
     padding: 0.4rem 0 0.58rem 0;
     text-align: center;
}
footer p {
     font-size: 0.24rem;
     color: #ffffff;
     line-height: 0.36rem;
}
footer span {
     display: inline-block;
     margin-top: 0.3rem;
     font-size: 0.4rem;
     color: #ffffff;
     line-height: 0.4rem;
}
.g-volunteer {
     position: relative;
     // height: 16.93rem;
}
.volunteer-app {
     padding-bottom: 1.18rem;
}
.g-volunteer .g-volunteer-con {
     padding-top: 1.11rem;
     margin-top: -1rem;
     // height: 100%;
     background: url("~@/assets/img/qualityFind/pic_bg3.png");
     background-size: cover;
     .g-tit {
          margin: auto;
          margin-bottom: 0.25rem;
          width: 6.6rem;
     }
     .g-volunteer-container {
          padding: 0.3rem;
          margin: auto;
          width: 6.3rem;
          background: #fafbff;
          border-radius: 0.1rem;
          .g-volunteer-container1 {
               padding: 0 0.3rem;
               padding-bottom: 0.5rem;
               background: #f1f4ff;
               border-radius: 0.1rem;
               .g-tit-icon {
                    display: inline-block;
                    margin-left: -0.41rem;
                    margin-top: 0.3rem;
                    padding: 0 0.4rem;
                    height: 0.71rem;
                    font-size: 0.32rem;
                    color: #ffffff;
                    line-height: 0.55rem;
                    background: url("~@/assets/img/qualityFind/pic_biaotidise2@3x.png");
                    background-size: 100% 100%;
                    text-align: center;
               }
               p {
                    margin-top: 0.5rem;
                    margin-bottom: 0.1rem;
                    font-size: 0.28rem;
                    color: #323449;
                    letter-spacing: 0.003rem;
                    line-height: 0.28rem;
               }
               ul {
                    overflow: hidden;
                    li {
                         margin-top: 0.2rem;
                         .u-num {
                              margin-right: 0.1rem;
                              width: 0.24rem;
                              height: 0.24rem;
                         }
                         .u-text {
                              font-size: 0.24rem;
                              color: #323449;
                              letter-spacing: 0.00026rem;
                              line-height: 0.24rem;
                         }
                    }
               }
          }
     }
}
.g-iphone {
     margin-top: 0.3rem;
     .g-volunteer-container {
          .g-volunteer-container1 {
               overflow: hidden;
               .g-iphone-2 {
                    margin-top: 0.3rem;
               }
               .g-iphone-3 {
                    margin: auto;
                    width: 3.67rem;
               }
          }
     }
}
.g-foot {
     margin-top: 0.2rem;
}
</style>
