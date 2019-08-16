<template>
    <article>
        <div v-if="show" class="m-load" @touchmove.prevent>
            <div class="g-juhua">
                <img src="@/assets/img/common/icon_jiazaizhong@3x.png" alt>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
.m-load {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    background: #fff;
    .g-juhua {
        position: absolute;
        top: 35%;
        left: 0;
        right: 0;
        margin: auto;
        width: 0.6rem;
        animation: rotate 2s linear infinite;

        -webkit-animation: rotate 2s linear infinite;

        -moz-animation: rotate 2s linear infinite;

        -o-animation: rotate 2s linear infinite;
    }
}
@keyframes rotate {
    0% {
        transform: rotate(0deg) skew(0deg) scale(1);

        -ms-transform: rotate(0deg) skew(0deg) scale(1); /* IE 9 */

        -moz-transform: rotate(0deg) skew(0deg) scale(1); /* Firefox */

        -webkit-transform: rotate(0deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */

        -o-transform: rotate(0deg) skew(0deg) scale(1);
    }

    100% {
        transform: rotate(360deg) skew(0deg) scale(1);

        -ms-transform: rotate(360deg) skew(0deg) scale(1); /* IE 9 */

        -moz-transform: rotate(360deg) skew(0deg) scale(1); /* Firefox */

        -webkit-transform: rotate(360deg) skew(0deg) scale(1); /* Safari ºÍ Chrome */

        -o-transform: rotate(360deg) skew(0deg) scale(1);
    }
}
</style>
