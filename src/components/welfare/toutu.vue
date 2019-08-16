<template>
     <article class="m-toutu">
          <slot></slot>
          <img :src="url" alt>
     </article>
</template>
<script>
import lazyload from '@/assets/img/common/lazyload.png'
export default {
     props: {
          url: {
               default: lazyload,
               type: String
          }
     }
}
</script>

<style lang="scss" scoped>
.m-toutu{
  overflow: hidden;
}
</style>
