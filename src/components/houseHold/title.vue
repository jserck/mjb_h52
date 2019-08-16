<template>
    <article class="m-title">
        <div class="g-title-text">
            <h1>{{name}}</h1>
        </div>
        <div>
            <slot></slot>
        </div>
    </article>
</template>
<script>
export default {
    props:['name']
}
</script>

<style lang="scss" scoped>
.m-title {
    padding-bottom: 0.2rem;
    .g-title-text {
        padding-top: 0.4rem;
        padding-bottom: 0.3rem;
        h1 {
            font-size: 0.36rem;
            color: #212832;
            line-height: 0.36rem;
            font-weight: 500;
        }
    }
}
</style>
