<template>
    <article class="m-bgVideo">
        <Dislog :isShowDislog="isShowDislog" @next="next" @close="close">
            <p class="dialogText">
                加载需要
                <mark>{{obj.size}}</mark> 是否继续播放
            </p>
        </Dislog>
        <ul>
            <li @click="videoHandler(obj)">
                <div :style="`background:url('${obj.backPicUrl}');background-size:cover`">
                    <span>
                        <img src="@/assets/img/houseHold/icon_zanting_n@3x.png" alt>
                    </span>
                </div>
                <p>{{obj.title}}</p>
            </li>
        </ul>
    </article>
</template>
<script>
import Dislog from '../../common/dislog'
import Size from '../../../assets/js/size'
export default {
    props: ['obj'],
    data() {
        return {
            isShowDislog: false
        }
    },
    components: { Dislog },
    methods: {
        router_to() {
            let path = '/houseHold/video';
            let options = {
                path,
                query: {
                    src: this.obj.webUrl
                }
            };
            if (this.$store.state.isTypeApp) {
                options.query.type = 'app';
            }
            this.$store.commit('SET_VIDEO', this.obj.webUrl);
            this.$router.push(options);
        },
        close() {
            this.isShowDislog = false;
        },
        next() {
            this.isShowDislog = false;
            this.router_to();
        },
        videoHandler(obj) {
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
.m-bgVideo {
    .dialogText,
    mark {
        font-size: 0.28rem;
        color: #8b949e;
        letter-spacing: -0.68px;
        text-align: center;
        line-height: 0.28rem;
        mark {
            background: none;
            color: #0080ff;
        }
    }
    ul {
        li {
            div {
                position: relative;
                width: 3.3rem;
                height: 1.95rem;
                background: #0080ff;
                border-radius: 0.04rem;
                span {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    width: 0.7rem;
                    height: 0.7rem;
                }
            }
            p {
                width: 3.3rem;
                margin-top: 0.2rem;
                font-size: 0.28rem;
                color: #4d535d;
                line-height: 0.46rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2; //需要控制的文本行数
                overflow: hidden;
            }
        }
    }
}
</style>
