<template>
    <article>
        <section class="g-video">
            <div class="g-video-container">
                <video
                    style="width: 100%;height:100%; background-color: rgb(0, 0, 0);"
                    :src="videoSrc"
                    preload
                    ref="video"
                    controls
                    id="video"
                >
                your browser does not support the video tag
                </video>
            </div>
        </section>
    </article>
</template>
<script>
export default {
    data() {
        return {
            titleBar: {
                title_name: '',
                isHideObshare: false,
                bgColor: '#000'
            },
            isPause: false,
            _dom: "",
            videoSrc: this.$route.query.src,
            videoImg: '',
            playStatus: 'autoplay',
            muteStatus: '',
            isMute: true,
            isPlay: false
        }
    },
    created() {
        this.$store.commit('SET_TITLEBAR', this.titleBar);
    },
    // mounted() {
    //     let self = this;
    //     this.$refs.video.oncanplaythrough = function (params) {
    //         self.$refs.video.play();
    //     }
    // },
    destroyed() {
        this.$store.commit('SET_VIDEO', '');
    }
}
</script>

<style lang="scss" scoped>
.g-video {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    z-index: 999;
    // height
}
.g-video-container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
