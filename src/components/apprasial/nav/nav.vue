<template>
    <section class="g-nav">
        <ul class="displayFlex flexAlignJustifyStart">
            <li :class="['u-tit-text',firstClass]">
                <span class="u-text1">{{oneTex}}</span>
                <span class="u-text2">{{twoTex}}</span>
            </li>
            <li
                :class="activeNum==item.id ?navLiBg:'nav-link-bg'"
                v-for="(item,index) in greenNavList"
                :key="index"
            >
                <span class="u-li-icon">
                    <img :src="item.icon" alt>
                </span>
                <span class="u-li-text">{{item.text}}</span>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    props: {
        firstType: {
            type: Number,
            default: 1
        },
        greenNavList: {
            type: Array,
            default() {
                return []
            }
        },
        activeNum: {
            type: Number,
            default: 1
        },
    },
    data() {
        return {

        }
    },
    computed: {
        firstClass() {
            if (this.firstType == 1) {
                return 'g-green-first'
            } else if (this.firstType == 2) {
                return 'g-blue-first'
            } else if (this.firstType == 3) {
                return 'g-yellow-first'
            }
        },
        oneTex() {
            if (this.firstType == 1) {
                return '居住'
            } else if (this.firstType == 2) {
                return '生活'
            } else if (this.firstType == 3) {
                return '工程'
            }
        },
        twoTex() {
            if (this.firstType == 1) {
                return '体验'
            } else if (this.firstType == 2) {
                return '配套'
            } else if (this.firstType == 3) {
                return '质量'
            }
        },
        navLiBg() {
            if (this.firstType == 1) {
                return 'nav-activeGreen-bg'
            } else if (this.firstType == 2) {
                return 'nav-activeBlue-bg'
            } else if (this.firstType == 3) {
                return 'nav-activeYellow-bg'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.g-nav {
    ul {
        li {
            padding-top: 0.24rem;
            width: 0.96rem;
            height: 0.72rem;
            span {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 0.22rem;
                color: #ffffff;
                line-height: 0.25rem;
            }
            .u-li-icon {
                margin: auto;
                width: 0.28rem;
                height: 0.28rem;
                img {
                    width: 100%;
                }
            }
            .u-li-text {
                margin-top: 0.02rem;
            }
        }
        .g-green-first {
            @include background("~@/assets/img/apprasial/icon_lvseanniu.png");
        }
        .g-blue-first {
            @include background("~@/assets/img/apprasial/icon_lanseanniu.png");
        }
        .g-yellow-first {
            @include background(
                "~@/assets/img/apprasial/icon_chengseanniu.png"
            );
        }
        .nav-link-bg {
            @include background(
                "~@/assets/img/apprasial/icon_huisehuizhang.png"
            );
        }
        .nav-activeGreen-bg {
            @include background(
                "~@/assets/img/apprasial/icon_lvsehuizhang.png"
            );
        }
        .nav-activeBlue-bg {
            @include background(
                "~@/assets/img/apprasial/icon_lansehuizhang.png"
            );
        }
        .nav-activeYellow-bg {
            @include background(
                "~@/assets/img/apprasial/icon_chengsehuizhang.png"
            );
        }
    }
}
</style>

