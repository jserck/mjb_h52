<template>
     <article>
          <div class="g-dynamic" v-if="abShareData.propertyMotion.motionList.length != 0">
               <div class="g-dynamic-lis">
                    <div
                         :class="[li]"
                         v-for="(val,index) in abShareData.propertyMotion.motionList"
                         :key="index"
                    >
                         <p>
                              <i></i>
                              {{val.date}}
                              <span>{{val.tag || "暂无"}}</span>
                         </p>
                         <p>
                              <i></i>
                              {{val.title}}
                         </p>
                         <p :class="val.is_over_class" ref="esplit">
                              <i></i>
                              {{val.content}}
                         </p>
                         <div class="esplit_font">
                              <span @click="esplitHandler(val,index)">{{val.is_over_text}}</span>
                         </div>
                    </div>
               </div>
          </div>
     </article>
</template>
<script>
export default {
     props: ['abShareData'],
     data() {
          return {
               li: "g-dynamic-li",
          }
     },
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          },
          esplitHandler(val, i) {
               let arrs = this.abShareData.propertyMotion.motionList;
               if (val.is_over_text == "展开") {
                    this.$set(arrs[i], "is_over_text", "收起");
               } else {
                    this.$set(arrs[i], "is_over_text", "展开");
               }
               if (val.is_over_class == "text_overflow") {
                    this.$set(arrs[i], "is_over_class", "no_text_overflow");
               } else {
                    this.$set(arrs[i], "is_over_class", "text_overflow");
               }
          },
          is_over_flow(arrs) {
               let rem = document.documentElement.style.fontSize.split("px")[0];
               let arr = this.$refs.esplit;
               let len = arr.length;
               for (let i = 0; i < len; i++) {
                    let num = arr[i].offsetHeight / rem;
                    if (num > 0.78) {
                         this.$set(arrs[i], "is_over", true);
                         this.$set(arrs[i], "is_over_text", "展开");
                         this.$set(arrs[i], "is_over_class", "text_overflow");
                    } else {
                         this.$set(arrs[i], "is_over", false);
                         this.$set(arrs[i], "is_over_text", "");
                         this.$set(
                              arrs[i],
                              "is_over_class",
                              "no_text_overflow"
                         );
                    }
               }
          },
     },
     mounted() {
          this.$nextTick(() => {
               this.is_over_flow(
                    this.abShareData.propertyMotion.motionList
               );
          });
     }
}
</script>
<style scoped>
.g-dynamic {
     padding-bottom: 0.2rem;
     margin-top: 0.2rem;
     background: #fff;
}

.g-dynamic-lis {
     width: 6.58rem;
     margin-left: 0.2rem;
     padding-left: 0.19rem;
     border-left: 2px solid #63b1ff;
}

.g-dynamic-li {
     padding-top: 0.2rem;
     padding-left: 0.3rem;
     padding-right: 0.3rem;
     padding-bottom: 0.2rem;
     position: relative;
     margin-bottom: 0.2rem;
     background: #ffffff;
     box-shadow: 0 0 11px -1px rgba(99, 130, 172, 0.33);
     border-radius: 4px;
}

.g-dynamic-li p:nth-child(1) {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #b9c0c8;
     line-height: 0.4rem;
}

.g-dynamic-li p:nth-child(1) span {
     display: inline-block;
     width: 0.96rem;
     height: 0.36rem;
     border: 1px solid rgba(99, 177, 255, 1);
     font-family: PingFangSC-Regular;
     color: #63b1ff;
     font-size: 0.2rem;
     line-height: 0.36rem;
     text-align: center;
}

.g-dynamic-li p:nth-child(2) {
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.28rem;
     color: #4d535d;
     line-height: 0.4rem;
}

.text_overflow {
     height: 0.78rem;
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
}

.no_text_overflow {
     height: auto;
}

.g-dynamic-li p:nth-child(3) {
     overflow: hidden;
     text-overflow: ellipsis;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     line-height: 0.4rem;
}

.g-dynamic-li p:nth-child(1) i {
     content: "";
     display: inline-block;
     width: 0.2rem;
     height: 0.2rem;
     /* background: #0c8cff; */
     background-image: url("~@/assets/img/obshare/icon_shijianzhoucopy3@3x.png");
     background-size: cover;
     border-radius: 0.2rem;
     position: absolute;
     left: -0.305rem;
     top: 0.25rem;
     z-index: 99;
}

.g-dynamic-li p:nth-child(1):after {
     content: "";
     display: inline-block;
     width: 0.3rem;
     height: 0.3rem;
     background: #fff;
     border-radius: 0.3rem;
     position: absolute;
     left: -0.36rem;
}
.esplit_font {
     font-family: PingFangSC-Regular;
     color: #63b1ff;
     font-size: 0.2rem;
     line-height: 0.36rem;
}
</style>
