<template>
     <section class="banner" :style="`background:url(${src})`" @click="hrefHandler(href)"></section>
</template>
<script>
export default {
     props: {
          src: '',
          href: ''
     },
     data() { return {} },
     methods: {
          hrefHandler(href) {
               window.location.href = href;
          }
     }
}
</script>
<style scoped>
.banner {
     margin: 0.2rem auto;
     width: 6.9rem;
     height: 1.8rem;
     border-radius: 0.05rem;
     background-size: cover !important;
}
</style>
