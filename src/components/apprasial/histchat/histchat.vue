<template>
     <section class="m-histchat">
          <section v-if="isLeft" class="g-h1 displayFlex flexAlignJustifyStart">
               <span></span>
               <p class="p1">{{chatText}}</p>
          </section>
          <section v-else class="g-h2 displayFlex flexJustifyEnd">
               <p class="p2">{{chatText}}</p>
               <span></span>
          </section>
     </section>
</template>
<script>
export default {
     props: {
          isLeft: {
               default: false
          },
          chatText: {
               default: ''
          }
     }
}
</script>

<style lang="scss" scoped>
.m-histchat {
     margin-top: 0.2rem;
     span {
          display: inline-block;
          width: 0.72rem;
          height: 0.72rem;
          border-radius: 50%;
     }
     p {
          position: relative;
          max-width: 3.54rem;
          @media screen and (min-width: 768px) {
               max-width: 70%;
               width: auto;
          }
          padding: 0.2rem;
          @include setFont(0.28rem, $apprasial_text_size);
          color: #212832;
          text-align: auto;
          @include lineHeight(0.38rem, $apprasial_text_lineHeight);
          border-radius: 0.08rem;
     }
     .g-h1 {
          span {
               margin: 0 0.28rem 0 0.15rem;
               @include background(
                    "~@/assets/img/apprasial/pic_morentouxiang_gerenr.png"
               );
          }
     }
     .g-h2 {
          width: 100%;
          span {
               margin: 0 0.15rem 0 0.28rem;
               @include background(
                    "~@/assets/img/apprasial/pic_morentouxiang_gerenl.png"
               );
          }
     }

     .p1 {
          background: #fff;
          &::before {
               content: "";
               display: inline-block;
               width: 0;
               height: 0;
               border-width: 0.14rem 0.14rem 0.14rem 0;
               border-style: solid;
               border-color: transparent #fff transparent transparent; /*透明 黄 透明 透明 */
               position: absolute;
               top: 0.26rem;
               left: -0.12rem;
          }
     }
     .p2 {
          background: #63b1ff;
          box-shadow: 0 0 0.1rem 0 rgba(225, 225, 225, 0.5);
          color: #ffffff;
          text-align: justify;
          line-height: 0.38rem;
          &::after {
               content: "";
               display: inline-block;
               width: 0;
               height: 0;
               border-width: 0.14rem 0 0.14rem 0.14rem;
               border-style: solid;
               border-color: transparent transparent transparent #63b1ff; /*透明 黄 透明 透明 */
               position: absolute;
               top: 0.26rem;
               right: -0.12rem;
          }
     }
}
</style>
