<template>
     <article>
          <section class="g-get-rule">
               <div class="g-get-rule-tit">
                    <h1>{{tit}}</h1>
               </div>
               <div :class="typeClass">
                    <span class="u-line"></span>
               </div>
               <slot></slot>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          tit: {
               default: '-----',
               type: String
          },
          type: {
               default: '0',
               type: String
          }
     },
     computed: {
          typeClass() {
               if (this.type == '0') {
                    return 'g-divider'
               } else {
                    return 'g-divider2'
               }
          }
     }
}
</script>

<style lang="scss" scoped>
.g-get-rule {
     margin: auto;
     width: 100%;
     border-radius: 0.04rem;
     overflow: hidden;
     .g-get-rule-tit {
          padding: 0.3rem 0 0.15rem 0;
          background: #fff;
          h1 {
               text-align: center;
               font-weight: 500;
               font-size: 0.28rem;
               color: #4d535d;
               letter-spacing: 0;
               line-height: 0.28rem;
          }
     }
     .g-divider {
          margin: auto;
          //  width: 5.75rem;
          height: 0.31rem;
          background: url("~@/assets/img/welfare/pic_xuxianchang.png");
          background-size: 100% 100%;
          .u-line {
               width: 100%;
          }
     }
     .g-divider2 {
          margin: auto;
          //  width: 5.75rem;
          height: 0.31rem;
          background: url("~@/assets/img/welfare/pic_xuxianduan.png");
          background-size: 100% 100%;
          .u-line {
               width: 100%;
          }
     }
}
</style>
