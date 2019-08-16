<template>
    <article class="m-analyze">
        <main style="padding:0 0.3rem;">
            <section v-for="(item,index) in generalData.fileList" :key="index">
                <section v-if="item.type==1">
                    <Title :name="item.title">
                        <section>
                            <Scroller>
                                <ul class="g-panorama displayFlex">
                                    <li
                                        @click="handler1(item1.webUrl)"
                                        v-for="(item1,index) in item.subList"
                                    >
                                        <div
                                            :style="`background:url('${item1.backPicUrl}');background-size:cover`"
                                            class="g-bg-container"
                                        >
                                            <div class="g-moban"></div>
                                            <span class="u-icon"></span>
                                        </div>
                                        <p>{{item1.title}}</p>
                                    </li>
                                </ul>
                            </Scroller>
                        </section>
                    </Title>
                </section>
                <section v-if="item.type==4">
                    <Title :name="item.title">
                        <ul class="g-container g-video-container displayFlex flexJustifybetween flexWrap">
                            <li
                                :style="(index>1) ? 'margin-top:0.4rem':''"
                                v-for="(item4,index) in item.subList"
                                :key="index"
                            >
                                <BgVideo :obj="item4"></BgVideo>
                            </li>
                        </ul>
                    </Title>
                </section>
                <section v-if="item.type==2">
                    <Title :name="item.title">
                        <div class="g-container">
                            <ul class="displayFlex flexJustifybetween flexWrap">
                                <li
                                    v-for="(item2,index) in item.subList"
                                    :style="index>1?'margin-top:0.39rem':''"
                                >
                                    <TextImg :datas="item2"></TextImg>
                                </li>
                            </ul>
                        </div>
                    </Title>
                </section>
                <!-- <section v-if="item.type==3">
                    <ul class="g-container displayFlex flexJustifybetween flexWrap">
                        <li v-for="index in 4" :key="index">
                            <ImgLook></ImgLook>
                        </li>
                    </ul>
                </section>-->
            </section>
        </main>
    </article>
</template>
<script>
import Title from '../title'
import Scroller from '../../common/scroller'
import TextImg from '../img_text'
import BgVideo from '../record/bgVideo'
import ImgLook from '../img'
import { setDAesString } from '../../../assets/js/des'
export default {
    components: {
        Title,
        Scroller,
        TextImg,
        BgVideo,
        ImgLook
    },
    data() {
        return {
            generalData: {},
            datatype: 1,
            titleBar: {
                title_name: this.$route.query.name,
                isHideObshare: true,
                bgColor: '#fff'
            }
        }
    },
    created() {
        this.$store.commit('SET_TITLEBAR', this.titleBar);
        this.generalData = JSON.parse(this.$route.query.obj);
    },
    methods: {
        urlMd5(url) {
            let timer = new Date().getTime().toString();
            let str = `WEB${timer}XZ_PQ`;
            let keys = "xqpq!d%sd*aw%dGHJJHsa#mng~dsqvr";
            var timestamp = setDAesString(
                str,
                keys
            );
            timer = new Date().getTime().toString();
            var newTimestamp = setDAesString(
                timer,
                keys
            );
            let desStr = timestamp.substring(0, 15) + newTimestamp.substring(0, 10) + timestamp.substring(15);
            return `${url}&d=${desStr}`;
        },
        handler1(webUrl) {
            window.location = this.urlMd5(webUrl);
        }
    }
}
</script>

<style lang="scss" scoped>
.m-analyze {
    .g-panorama {
        .g-bg-container {
            position: relative;
            width: 4.16rem;
            height: 2.6rem;
            background: #0080ff;
            background-size: cover;
            border-radius: 0.04rem;
            overflow: hidden;
            .g-moban {
                position: absolute;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.3);
            }
            .u-icon {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width: 0.6rem;
                height: 0.6rem;
                // housingesta_icon_vr_l
                @include background(
                    "~@/assets/img/houseHold/housingesta_icon_vr_l.png"
                );
            }
        }
        li {
            margin-right: 0.3rem;
            p {
                padding-top: 0.24rem;
                font-size: 0.28rem;
                color: #212832;
                letter-spacing: 0;
                line-height: 0.28rem;
            }
        }
    }
}


</style>
