<template>
    <article class="m-titleBar">
        <section :style="`padding: 0 0.3rem;background:${bgColor}`">
            <div class="g-titleBar-container displayFlex flexJustifybetween flexAlignItemsCenter">
                <div class="u-left">
                    <span
                        @click="leftHandler"
                        v-if="$store.state.isTypeApp||($route.name!='home'&&!$store.state.isTypeApp)"
                        class="u-left"
                    >
                        <img
                            v-if="bgColor!='#000'"
                            src="@/assets/img/houseHold/icon_fanhui_n.png"
                            alt
                        >
                        <img v-else src="@/assets/img/houseHold/icon_pin_left_white.png" alt>
                    </span>
                </div>
                <span class="u-name">{{title_name}}</span>
                <div class="u-obshare">
                    <span
                        @click="rightHandler"
                        class="u-obshare"
                        v-if="isHideObshare&&$store.state.isTypeApp"
                    >
                        <img src="@/assets/img/houseHold/icon_fenxiang.png" alt>
                    </span>
                </div>
            </div>
        </section>
    </article>
</template>
<script>

export default {
    props: ['title_name', 'isHideObshare', 'bgColor'],
    data() {
        return {
            shareUrl: `${window.location.origin}/#/houseHold/home/${this.$route.params.id}/0`
        }
    },
    methods: {
        appHandler({ iphFn, azFn = iphFn, iphData, azData }) {
            let options = {
                iphData,
                azData,
                iphFn,
                azFn
            };
            this.$Bridge.jsToNative(options);
        },
        leftHandler() {
            if (this.$route.name == 'home') {
                this.appHandler({
                    iphFn: 'goBackAction',
                    iphData: { message: '返回 APP' },
                    azFn: 'callAndroidFinish',
                    azData: 'message=返回 APP'
                })
                return;
            }
            this.$router.go(-1);
        },
        rightHandler() {
            this.appHandler({
                iphFn: 'shareAction',
                iphData: {
                    url: this.shareUrl,
                    title: '【金地铂悦  3-2-1201】',
                    desc: '这里有详细的楼盘和新家信息，从项目规划到落地，你想知道的都在这里',
                    img: ''
                },
                azFn: 'callAndroidShare',
                azData: [`${this.shareUrl}`, `【金地铂悦  3-2-1201】`, `这里有详细的楼盘和新家信息，从项目规划到落地，你想知道的都在这里`, `鹰眼鉴房`]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.m-titleBar {
    position: fixed;
    top: 0;
    z-index: 9999;
    display: block;
    width: 100%;
    height: 0.84rem;
    background: #ffffff;
    box-shadow: 0 0 0.1rem 0 rgba(0, 0, 0, 0.1);
    section {
        height: 100%;
    }
    .g-titleBar-container {
        height: 100%;
        span {
            display: inline-block;
        }
        .u-left {
            width: 0.4rem;
            height: 0.4rem;
        }
        .u-name {
            font-size: 0.32rem;
            color: #212832;
            text-align: center;
            line-height: 0.32rem;
        }
        .u-obshare {
            width: 0.48rem;
            height: 0.48rem;
        }
    }
}
</style>
