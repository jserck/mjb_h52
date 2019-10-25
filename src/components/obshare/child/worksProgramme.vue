<template>
     <article>
          <section>
               <div
                    class="g-worksProgramme g-montoring"
                    v-if="abShareData.qualityMonitor.status == '1'"
               >
                    <div class="authorCircle displayFlex flexJustifybetween flexAlignItemsCenter">
                         <p class="hotChat">
                              <code>{{abShareData.chatRoomData.chatCount}}</code>
                              名业主正在热聊楼盘质量
                         </p>
                         <div
                              class="authorImg"
                              style="height:0.48rem;margin-right:-1.12rem;"
                              v-on:click.prevent="loadHandler"
                         >
                              <span
                                   v-for="(val,index) in abShareData.chatRoomData.avatarList"
                                   :key="index"
                                   :style="'background:url(' + val.avatarUrl + ');background-size:cover'"
                              ></span>
                         </div>
                         <div
                              style="width:0.12rem"
                              v-on:click.prevent="loadHandler"
                         >
                              <img :src="this.$url.right_icon" />
                         </div>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style lang="scss" scoped>
.g-montoring {
     background: #fff;
}

.authorCircle {
     padding: 0.08rem 0.3rem 0.4rem;
}

.authorImg span {
     display: inline-block;
     margin-left: 0.05rem;
     width: 0.48rem;
     height: 0.48rem;
     border-radius: 0.48rem;
     background-size: cover;
     background-repeat: no-repeat;
}

.hotChat {
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #212832;
     line-height: 0.28rem;
}

.hotChat code {
     color: #fe751b;
}
</style>