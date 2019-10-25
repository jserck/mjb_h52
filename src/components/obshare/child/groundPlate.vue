<template>
     <article>
          <div class="g-mes">
               <div
                    class="g-mes-li displayFlex flexJustifyAround"
                    @click="houseevalClick(item.webUrl)"
                    v-for="(item,index) in abShareData.propertyComment.commentList"
                    :key="index"
               >
                    <div class="textcontents">
                         <h2>{{item.title}}</h2>
                         <span>{{item.date}}</span>
                    </div>

                    <div
                         class="images"
                         :style="`background-image:url(${item.imageUrl});background-size:cover`"
                    >
                         <span class="houseiupdateIcon" v-if="item.isUpdate ==1">更新</span>
                    </div>
               </div>
          </div>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     data() { return {} },
     methods: {
          houseevalClick(url) {
               let hash_ = this.urlSubstring(url);
               let type = false;
               let app = /type=app/;
               let str = window.location.href;
               type = app.test(str);
               if (type) {
                    this.$router.push({
                         path: `/houseeval/${hash_}`,
                         query: {
                              type
                         }
                    });
               } else {
                    this.$router.push({
                         path: `/houseeval/${hash_}`
                    });
               }
          },
     }
}
</script>
<style scoped>
.g-mes {
     margin-top: 0.2rem;
     background: #fff;
}

.g-mes-li {
     position: relative;
     padding: 0.3rem;
}

.g-mes-li h2 {
     width: 4.2rem;
     font-family: PingFangSC-Regular;
     color: #212832;
     letter-spacing: 1.3;
     font-size: 0.32rem;
     line-height: 0.44rem;
}

.g-mes-li span {
     display: inline-block;
     margin-top: 0.3rem;
     font-family: PingFangSC-Regular;
     color: #8b949e;
     letter-spacing: 1.3;
     font-size: 0.22rem;
     line-height: 0.2rem;
}

.g-mes-li .images {
     position: relative;
     width: 2.4rem;
     height: 1.8rem;
}
</style>
