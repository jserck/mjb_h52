<template>
     <section class="g-toast" v-if="show">
          <span>{{text}}</span>
     </section>
</template>
<style lang="scss" scoped>
.g-toast {
     padding: 0.1rem 0.3rem;
     position: fixed;
     left: 50%;
     top: 40%;
     margin-left: -1.8rem;
     z-index: 99999;
     border-radius: 0.1rem;
     width: 3rem;
     min-height: 0.5rem;
     line-height: 0.5rem;
     text-align: center;
     font-size: 0.22rem;
     color: #fff;
     background: rgba(0, 0, 0, 0.5);
     white-space: pre-wrap;
     -webkit-white-space: pre-wrap;
}
</style>
