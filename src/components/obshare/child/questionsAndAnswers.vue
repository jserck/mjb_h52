<template>
     <article>
          <div class="g-probleam margin-con">
               <div class="g-probleam-main" @click="loadHandler('0','animated bounceIn')">
                    <div class="g-li-con" v-if="abShareData.hawkEyeFQA.totalCount > 0">
                         <div
                              :class="['g-li', 'displayFlex', 'flexJustifybetween','flexAlignItemsCenter',index>=1?'':'g-li-mar-bot']"
                              v-for="(item,index) in abShareData.hawkEyeFQA.fqaList.slice(0,2)"
                              :key="index"
                         >
                              <h2 class="g-p">{{item.question}}</h2>
                              <div class="g-p-num">{{item.answerCount}}个回答</div>
                         </div>
                    </div>
                    <div class="g-no-li" v-else>
                         <div class="g-img">
                              <img src="@/assets/img/obshare/pic_240px_meiyouloupan_n@3x.png" alt />
                         </div>
                         <p>此处空荡荡，试着去提问</p>
                    </div>
                    <div class="g-btn">立即提问</div>
               </div>
          </div>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     data() { return {} },
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.g-probleam .g-probleam-main {
     overflow: hidden;
     padding: 0 0.3rem;
}
.g-probleam .g-probleam-main .g-li-con {
     padding: 0.1rem 0;
}
.g-probleam .g-probleam-main .g-no-li .g-img {
     margin: auto;
     width: 2.4rem;
}
.g-probleam .g-probleam-main .g-no-li p {
     text-align: center;
     font-size: 0.28rem;
     color: #8b949e;
     letter-spacing: 0;
     line-height: 0.28rem;
}
.g-li-mar-bot {
     margin-bottom: 0.31rem;
}
.g-probleam .g-probleam-main .g-li {
     position: relative;
}
.g-probleam .g-probleam-main .g-li .g-p {
     width: 5.45rem;
     white-space: nowrap;
     margin-left: 0.38rem;
     font-size: 0.32rem;
     color: #212832;
     /* line-height: 0.32rem; */
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
}
.g-probleam .g-probleam-main .g-li .g-p-num {
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.24rem;
}
.g-probleam .g-probleam-main .g-li .g-p::before {
     content: " ";
     display: block;
     position: absolute;
     top: 0;
     bottom: 0;
     margin: auto;
     left: 0;
     width: 0.28rem;
     height: 0.28rem;
     background: url("~@/assets/img/obshare/icon_wen@3x.png") center center no-repeat;
     background-size: 100% 100%;
}
.g-probleam .g-probleam-main .g-btn {
     margin-top: 0.4rem;
     margin-bottom: 0.4rem;
     background: #0080ff;
     height: 0.88rem;
     line-height: 0.88rem;
     text-align: center;
     font-size: 0.32rem;
     color: #ffffff;
     border-radius: 0.04rem;
}
</style>
