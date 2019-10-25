<template>
    <article class="m-dislog" @touchmove.prevent v-show="isShowDislog">
        <div class="m-container displayFlex">
            <div class="g-pdf displayFlex flexColumn flexJustifybetween">
                <h2>提示</h2>
                <slot></slot>
                <div class="g-btn displayFlex">
                    <div class="u-btn-l" @click="close">取消</div>
                    <div class="u-btn-r" @click="next">继续</div>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: ['isShowDislog'],
    methods: {
        close() {
            this.$emit('close');
        },
        next() {
            this.$emit('next');
        },
    }
}
</script>

<style lang="scss" scoped>
.m-dislog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
    .m-container {
        position: relative;
        width: 100%;
        height: 100%;
        .g-pdf {
            margin: auto;
            width: 5.6rem;
          //   height: 2.73rem;
            background: #fff;
            border-radius: 0.08rem;
            h2 {
                margin-top: 0.5rem;
                font-weight: normal;
                font-size: 0.32rem;
                color: #212832;
                text-align: center;
                line-height: 0.32rem;
            }
            .g-btn {
                width: 100%;
                height: 0.88rem;
                border-top: 1px solid #e7e7e7;
                .u-btn-l,
                .u-btn-r {
                    width: 50%;
                    line-height: 0.88rem;
                    text-align: center;
                    font-size: 0.32rem;
                    color: #212832;
                    text-align: center;
                }
                .u-btn-r {
                    border-left: 1px solid #e7e7e7;
                    color: #0080ff;
                }
            }
        }
    }
}
</style>
