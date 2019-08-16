<template>
    <article>
        <Dislog :isShowDislog="isShowDislog" @next="next" @close="close">
            <p class="dialogText">
                加载需要
                <mark>{{datas.size}}</mark>，是否继续
            </p>
        </Dislog>
        <section>
            <div
                @click="textImgHandler(datas)"
                class="g-img_text displayFlex flexJustifyAround flexAlignItemsCenter"
            >
                <span class="u-text">{{datas.title}}</span>
                <span class="u-img">
                    <img :src="datas.backPicUrl" alt>
                </span>
            </div>
        </section>
    </article>
</template>
<script>
import Dislog from '../common/dislog'
import Size from '../../assets/js/size'
export default {
    data() {
        return {
            isShowDislog: false
        }
    },
    props: ['datas'],
    components: {
        Dislog
    },
    methods: {
        close() {
            this.isShowDislog = false;
        },
        next() {
            this.isShowDislog = false;
            this.router_to();
        },
        router_to() {
            let path = '/houseHold/pdf';
            let options = {
                path,
                query: {

                }
            };
            if (this.$store.state.isTypeApp) {
                options.query.type = 'app';
            }
            this.$store.commit('SET_PDF', this.datas.webUrl);
            this.$router.push(options);
        },
        textImgHandler(obj) {
            if (!Size(obj.size, 5)) {
                this.router_to();
                return;
            }
            this.isShowDislog = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.g-img_text {
    width: 3.3rem;
    height: 1.36rem;
    background: #ffffff;
    border-radius: 0.04rem;
    box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
    -webkit-box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
    .u-text {
        padding-left: 0.1rem;
        width: 1.82rem;
        font-size: 0.28rem;
        color: #4d535d;
        text-align: center;
        line-height: 0.46rem;
        text-align: left;
    }
    .u-img {
        width: 1rem;
        height: 1rem;
        // background: #4d535d;
    }
}
.dialogText,
mark {
    font-size: 0.28rem;
    color: #8b949e;
    letter-spacing: -0.68px;
    text-align: center;
    line-height: 0.28rem;
    mark {
        background: none;
        color: #f19d2f;
    }
}
</style>
