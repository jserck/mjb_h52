<template>
     <article>
          <div class="g-light-seek clearfix">
               <!--工程进度-->
               <div
                    class="g-worksProgramme g-montoring"
               >
                    <!-- <p class="progress_title">工程进度</p> -->
                    <Steps :stepsList="stepsList" />
                    <i
                         @click="loadHandler('0','animated bounceIn')"
                         style="position:absolute;top:0.3rem;right:0.3rem;display:inline-block;width:0.12rem"
                    >
                         <img :src="this.$url.right_icon" />
                    </i>
               </div>
               <div
                    class="g-light-seek-but clearfix"
                    v-if="abShareData.constructionSite.constructionList.length==0"
               >
                    <div
                         class="g-light-seek-but-img"
                         v-on:click.prevent="loadHandler('0','animated bounceIn')"
                    >
                         <img
                              style="width: 100%;"
                              src="@/assets/img/obshare/pic_fabuchenggong@3x.png"
                              alt
                         />
                    </div>
                    <div class="g-light-seek-but-hr">
                         <p>还没有用户上传过施工现场照片 快来分享一下吧！</p>
                         <span v-on:click.prevent="loadHandler('0','animated bounceIn')">我要分享</span>
                    </div>
               </div>
               <div v-else>
                    <div class="constructionList displayFlex flexJustifybetween flexWrap">
                         <div
                              class="constructionLi"
                              @click="loadHandler('0','animated bounceIn')"
                              v-for="(item,index) in abShareData.constructionSite.constructionList"
                              :key="index"
                              :style="`background-image:url(${item.imageUrl});background-size:cover`"
                         >
                              <div class="u-video-btn" v-if="item.isVideo == 1">
                                   <img
                                        style="width: 100%;"
                                        src="@/assets/img/obshare/icon_zanting_n@3x.png"
                                        alt
                                   />
                              </div>
                              <div class="u-photo-btn" v-if="item.isSingle == '2'">
                                   <img
                                        style="width: 100%;"
                                        src="@/assets/img/obshare/icon_zhaopiancopy@3x.png"
                                        alt
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </article>
</template>
<script>
import Steps from "./steps";
export default {
     props: ['abShareData'],
     components: {
          Steps
     },
     data() {
          return {
               stepsList: [
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "施工准备"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "地基阶段"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "工程主体"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "工程装饰"
                    },
                    {
                         date: "",
                         isHighLighted: "1",
                         progressName: "竣工交房"
                    }
               ],
          }
     },
     methods: {
          loadHandler() {
               window.location.href = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.g-light-seek-but {
     padding-left: 0.3rem;
     margin: auto;
}
.g-worksProgramme {
     position: relative;
     padding: 0 0.3rem;
     padding-right: 0.8rem;
}
.g-light-seek-but-hr {
     float: left;
     margin-top: 0.3rem;
     margin-left: 0.2rem;
     width: 4rem;
}

.g-light-seek-but-img {
     float: left;
     margin-bottom: 0.3rem;
     margin-top: 0.3rem;
     width: 2rem;
     height: 1.67rem;
}

.g-light-seek-but-hr p {
     font-family: PingFangSC-Medium;
     color: #4d535d;
     letter-spacing: 1.1;
     font-size: 0.28rem;
     line-height: 0.38rem;
}

.g-light-seek-but-hr span {
     margin-top: 0.3rem;
     display: block;
     width: 2rem;
     height: 0.6rem;
     background: #0080ff;
     border-radius: 4px;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #fff;
     line-height: 0.6rem;
     text-align: center;
}

.constructionList {
     padding-bottom: 0.4rem;
     padding-left: 0.3rem;
     padding-right: 0.3rem;
     padding-top: 0.3rem;
}

.constructionLi {
     position: relative;
     margin-top: 0.2rem;
     width: 2.14rem;
     height: 2.14rem;
}
.u-video-btn {
     position: absolute;
     left: 50%;
     top: 50%;
     margin-left: -0.35rem;
     margin-top: -0.35rem;
     width: 0.7rem;
     height: 0.7rem;
}

.u-photo-btn {
     position: absolute;
     bottom: 0.11rem;
     left: 0.1rem;
     width: 0.3rem;
     height: 0.3rem;
}
</style>
