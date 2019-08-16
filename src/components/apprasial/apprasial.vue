<template>
    <section class="m-home">
        <Home @fn_IsShow="fn_IsShow"></Home>
        <section v-if="isShow">
            <Anchor :list="list"></Anchor>
        </section>
    </section>
</template>
<script>
export default {
    components: {
        Anchor: () => import('./anchor/anchor'),
        Home: () => import('./apprasials/apprasials')
    },
    data() {
        return {
            isShow: false,
            list: null
        }
    },
    methods: {
        fn_IsShow(res, list) {
            this.isShow = res || false;
            this.list = list;
        }
    }
}
</script>
<style lang="scss" scoped>
.m-home {
    // background: #f7f7f7;
    @include bg(#f7f7f7, none);
    max-width: 750px;
    padding-bottom: 0.8rem;
    @media screen and (min-width: 768px) {
        max-width: 100%;
        padding-right: 20%;
        padding-top: 50px;
        padding-bottom: 0;
    }
}
</style>
