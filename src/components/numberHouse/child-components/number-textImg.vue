<template>
     <article class="m-textImg">
          <section class="g-textImg-con">
               <div class="g-textImg displayFlex flexAlignJustifyStart flexAlignItemsCenter">
                    <div class="u-img">
                         <img :src="textImgData.src" alt />
                    </div>
                    <div class="u-text">
                         <h3>{{textImgData.t1}}</h3>
                         <p>{{textImgData.t2}}</p>
                    </div>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          textImgData: {
               default() {
                    return {
                         src: '',
                         t1: '',
                         t2: ''
                    }
               },
               type: Object
          }
     }
}
</script>

<style lang="scss" scoped>
.m-textImg {
     margin-top: 0.47rem;
     .g-textImg-con {
          .g-textImg {
               width: auto;
               .u-img {
                    width: 3rem;
                    height: 1.48rem;
                    overflow: hidden;
               }
               .u-text {
                    margin-left: 0.52rem;
                    h3 {
                         font-size: 0.48rem;
                         color: #21324e;
                         line-height: 0.48rem;
                    }
                    p {
                         margin-top: 0.23rem;
                         font-size: 0.32rem;
                         color: #5f6d7b;
                         line-height: 0.32rem;
                    }
               }
          }
     }
}
</style>
