<template>
    <article class="m-home">
        <header>
            <div class="g-home-tit">
                <HomeTitle></HomeTitle>
            </div>
        </header>
        <main>
            <section>
                <div class="g-lg">
                    <h1>目录</h1>
                    <ul v-if="homeData.fileType == 1">
                        <li
                            v-for="(item,index) in homeData.fileList"
                            :class="index>=1?'marginTop':''"
                            :key="index"
                        >
                            <HomeLg :obj="item" type="1"></HomeLg>
                        </li>
                    </ul>
                    <!-- <p v-else>数据异常</p> -->
                </div>
            </section>
        </main>
    </article>
</template>
<script>
import HomeTitle from './homeTitle'
import HomeLg from './homeLg'
export default {
    data() {
        return {
            homeData: {},
            titleBar: {
                title_name: '全流程监控',
                isHideObshare: true,
                bgColor: '#fff'
            }
        }
    },
    components: {
        HomeTitle,
        HomeLg
    },
    created() {
        this.$store.commit('SET_TITLEBAR', this.titleBar);
        this.getData();
    },
    methods: {
        getData() {
            /**
            * @name 获取数据
            * @method post
            * @param propertyId 楼盘ID
            */
            let options = {
                urls: `/maijiabangService-1.0-SNAPSHOT/h5/houseArchives/${this.$route.params.id}/${this.$route.params.typeid}`,
                data: {
                    houseId: this.$route.params.id
                },
                methods: 'post',
                types: 1,
                des: true
            }
            this.$http(options).then((res) => {
                if (res.code == 0) {
                    this.homeData = res.response.data;
                }
            }).catch((err) => {
                console.log(err);
                this.$toast('数据异常');
            })
        },
    }
}
</script>

<style lang="scss" scoped>
.m-home {
    .marginTop {
        margin-top: 0.3rem;
    }
    overflow: hidden;
    background: #f7f7f7;
    .g-home-tit {
        padding: 0.3rem;
        background: #fff;
    }
    .g-lg {
        margin-top: 0.2rem;
        padding: 0 0.3rem;
        background: #fff;
        h1 {
            padding: 0.4rem 0 0.3rem 0;
            font-size: 0.4rem;
            color: #212832;
            line-height: 0.4rem;
            font-weight: 500;
        }
    }
}
</style>
