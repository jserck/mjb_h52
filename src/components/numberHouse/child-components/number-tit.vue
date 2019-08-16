<template>
     <article class="m-number-tit">
          <section class="g-tit-con">
               <div class="u-tit">
                    <h1>{{titText}}</h1>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: {
          titText: {
               default: '123',
               type: String
          }
     }
}
</script>
<style lang="scss" scoped>
.m-number-tit {
     text-align: center;
     .g-tit-con {
          display: inline-block;
          margin: auto;
          padding: 0.2rem 0.4rem;
          height: 0.4rem;
           line-height: 0.4rem;
          background-image: linear-gradient(to left, #73b6fe 0%, #3f81fc 100%);
          border-radius: 46.5px;
          .u-tit {
               font-size: 0.4rem;
               color: #ffffff;
          }
     }
}
</style>
