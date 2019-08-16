<template>
    <section class="m-pdf">
        <section class="g-pdf-container">
            <iframe
                class="if1"
                :src="`/static/pdf/web/viewer.html?file=${$store.state.pdfUrl}`"
                frameborder="0"
            ></iframe>
        </section>
    </section>
</template>
<script>
export default {
    destroyed() {
        this.$store.commit('SET_PDF', '');
    }
}
</script>

<style lang="scss" scoped>
.g-pdf-container {
    width: 100%;
    height: 100vh;
    .if1 {
        width: 100%;
        height: 100%;
    }
}
</style>
