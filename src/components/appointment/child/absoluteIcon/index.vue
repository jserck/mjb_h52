<template>
     <article class="m-absoluteIcon">
          <section>
               <div>
                    <img
                         class="flexImg"
                         :style="`width:${MjbAbsoluteIconWidth}rem`"
                         :src="MjbAbsoluteIconImg"
                         alt
                    />
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: ['MjbAbsoluteIconImg', 'MjbAbsoluteIconWidth']
}
</script>
<style lang="scss" scoped>
.m-absoluteIcon {
     margin-top: 0.46rem;
     margin-left: -0.09rem;
}
</style>