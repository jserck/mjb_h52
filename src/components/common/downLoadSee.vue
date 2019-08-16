<template>
    <article :class="[houseeval,'m-downLoadSee']" ref="houseevals">
        <slot></slot>
        <div class="unfold-field" v-if="isfiled && isMobile">
            <div class="unflod-field_mask"></div>
            <div class="unfold-field_text" @click="f_see_all">
                <span>下载鹰眼鉴房查看全文</span>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: {
        isMobile: {
            default: true
        }
    },
    data() {
        return {
            isfiled: false,
            classArr: ["g-houseeval-context", "g-houseeval-context-a"],
            houseeval: "g-houseeval-context-a",
        }
    },
    mounted() {
        this.f_xrap_height();
    },
    methods: {
        f_init(b_) {
            if (b_) {
                this.houseeval = this.classArr[0];
            } else {
                this.houseeval = this.classArr[1];
            }
            this.isfiled = b_;
        },

        f_xrap_height() {
            if (!this.isMobile || (this.$store.state.isTypeApp && this.isMobile)) { return; }
            let h_ = this.$refs.houseevals.clientHeight;
            let v_ = 900;
            let n_ = h_ >= v_;
            this.f_init(n_);
        },

        f_see_all() {
            if (!this.$store.state.isTypeApp) {
                window.location = this.$url.appDown;
            } else {
                this.f_init(false);
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.m-downLoadSee {
    position: relative;
    // background: #fff;
}
.g-houseeval-context {
    max-height: 900px; /*设置默认高度*/
    overflow: hidden;
    position: relative;
}
.g-houseeval-context-a {
    max-height: auto; /*设置默认高度*/
    overflow: hidden;
    position: relative;
}
/*展开全文*/
.unfold-field {
    position: absolute;
    font-size: 0;
    bottom: 0;
    width: 100%;
    height: 1.24rem;
    z-index: 3;
}
.unfold-field .unflod-field_mask {
    height: 0.78rem;
    width: 100%;
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0, hsla(0, 0%, 100%, 0)),
        to(#fff)
    );
    background-image: linear-gradient(-180deg, hsla(0, 0%, 100%, 0), #fff);
}
.unfold-field_text {
    cursor: pointer;
    width: 100%;
    color: #0080ff;
    height: 0.46rem;
    font-size: 0px;
    line-height: 0.46rem;
    text-align: center;
    background: #fff;
}
.unfold-field_text span {
    display: inline-block;
    font-size: 0.28rem;
    height: 0.46rem;
    line-height: 0.28rem;
}
.unfold-field_text span::after {
    content: "";
    background: url(~@/assets/img/common/icon_xiala@3x.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 0.2rem;
    height: 0.2rem;
    display: inline-block;
    margin-left: 0.1rem;
}
</style>
