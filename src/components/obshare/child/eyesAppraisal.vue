<template>
     <article>
          <section class="g-eyes" @click="loadHandler">
               <section class="g-eyes-container">
                    <div class="g-textImg displayFlex flexJustifybetween">
                         <div class="u-text flexNum">
                              <div class="u-text1">购房攻略</div>
                              <h2 class="u-text2">
                                   鹰眼鉴房
                                   <mark>{{abShareData.hawkEyeEvaluation.score}}</mark>分
                              </h2>
                              <span class="u-text3">{{abShareData.hawkEyeEvaluation.readCount}}已读</span>
                         </div>
                         <div
                              class="u-img"
                              :style="`background:url(${abShareData.hawkEyeEvaluation.imageUrl});background-size:cover`"
                         ></div>
                    </div>
                    <div class="g-eyes-menus displayFlex flexJustifybetween">
                         <div class="g-menus-container displayFlex flexAlignItemsCenter">
                              <div class="u-img u-img1 displayFlex flexColumn flexJustifyend">
                                   <img src="@/assets/img/obshare/pic_gongchengzhiliang_n@3x.png" alt />
                              </div>
                              <div class="u-text">
                                   <h2 class="span1">工程质量</h2>
                                   <span class="span2">建筑工程解析</span>
                              </div>
                         </div>
                         <div class="g-menus-container displayFlex flexAlignItemsCenter">
                              <div class="u-img u-img2 displayFlex flexColumn flexJustifyend">
                                   <img src="@/assets/img/obshare/pic_shenghuopeitao_n@3x.png" alt />
                              </div>
                              <div class="u-text">
                                   <h2 class="span1">生活配套</h2>
                                   <span class="span2">周边情况全掌握</span>
                              </div>
                         </div>
                    </div>
               </section>
          </section>
     </article>
</template>
<script>
export default {
     props:['abShareData'],
     data() { return {} },
     methods: {
          loadHandler(href) {
               window.location.href = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.g-eyes {
     background: #fff;
}
.g-eyes .g-eyes-container {
     padding: 0 0.3rem 0.3rem;
}
.g-eyes .g-eyes-container .g-textImg .u-text {
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
     border-radius: 0.04rem;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text1 {
     margin-top: 0.18rem;
     background: #0080ff;
     width: 1.12rem;
     height: 0.36rem;
     border-top-right-radius: 0.18rem;
     border-bottom-right-radius: 0.18rem;
     font-size: 0.2rem;
     color: #ffffff;
     line-height: 0.36rem;
     text-align: center;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text2 {
     margin-top: 0.1rem;
     padding-left: 0.3rem;
     font-size: 0.32rem;
     color: #212832;
     letter-spacing: 0.0048rem;
     line-height: 0.32rem;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text2 mark {
     font-size: 0.56rem;
     color: #0080ff;
     letter-spacing: 0.0084rem;
     line-height: 0.48rem;
     background: none;
}
.g-eyes .g-eyes-container .g-textImg .u-text .u-text3 {
     display: inline-block;
     margin-top: 0.18rem;
     padding-left: 0.3rem;
     font-size: 0.24rem;
     color: #8b949e;
     letter-spacing: 0;
     line-height: 0.24rem;
}
.g-eyes .g-eyes-container .g-textImg .u-img {
     width: 2.7rem;
     height: 1.8rem;
     background: #212832;
}
.g-eyes-menus {
     margin-top: 0.3rem;
}
.g-eyes-menus .g-menus-container {
     width: 3.3rem;
     height: 1.4rem;
     box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
     border-radius: 0.04rem;
}
.g-eyes-menus .g-menus-container .u-img {
     margin-right: 0.1rem;
     height: 100%;
}
.g-eyes-menus .g-menus-container .u-img1 {
     width: 1.2rem;
     margin-right: 0.28rem;
}
.g-eyes-menus .g-menus-container .u-img2 {
     width: 1.4rem;
}
.g-eyes-menus .g-menus-container .u-text span {
     display: block;
}
.g-eyes-menus .g-menus-container .u-text .span1 {
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}
.g-eyes-menus .g-menus-container .u-text .span2 {
     margin-top: 0.12rem;
     font-size: 0.2rem;
     color: #8b949e;
     line-height: 0.2rem;
}
</style>
