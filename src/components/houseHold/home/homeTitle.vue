<template>
    <article>
        <div class="g-home-tit-container">
            <div class="u-txt1 u-txt-margin">
                <p>{{titleData.propertyName}}</p>
            </div>
            <div class="u-txt2 u-txt-margin">
                <span>{{titleData.houseType}}</span>
            </div>
            <div class="u-txt3 u-txt-margin displayFlex flexJustifybetween">
                <span class="u-txt3-l">建筑面积</span>
                <span class="u-txt3-r">{{titleData.area}}</span>
            </div>
            <div class="u-txt3 u-txt-margin displayFlex flexJustifybetween">
                <span class="u-txt3-l">户型</span>
                <span class="u-txt3-r">{{titleData.houseName}}</span>
            </div>
            <div class="u-txt3 u-txt-margin displayFlex flexJustifybetween">
                <span class="u-txt3-l">监控时长</span>
                <span class="u-txt3-r">{{titleData.duration}}</span>
            </div>
            <div class="u-txt3 u-txt-margin u-txt-margin-end displayFlex flexJustifybetween">
                <span class="u-txt3-l">监控周期</span>
                <span class="u-txt3-r">{{titleData.time}}</span>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    data(){
        return{
            titleData:{}
        }
    },
    created() {
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
                urls: `/maijiabangService-1.0-SNAPSHOT/h5/houseArchivesHeader/${this.$route.params.id}`,
                data: {
                    houseId: this.$route.params.id
                },
                methods: 'post',
                types: 1,
                des: true
            }
            this.$http(options).then((res) => {
                if (res.code == 0) {
                    this.titleData = res.response.data;
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
.g-home-tit-container {
    overflow: hidden;
    height: 100%;
    border-radius: 0.04rem;
    @include linearGradient(to right, #5a9aff, 46%, #5c5ff1, 100%);
    .u-txt-margin {
        padding: 0 0.3rem;
    }
    .u-txt-margin-end {
        margin-bottom: 0.4rem;
    }
    .u-txt1 {
        margin-top: 0.4rem;
        font-size: 0.24rem;
        color: #ffffff;
        line-height: 0.24rem;
    }
    .u-txt2 {
        margin-top: 0.4rem;
        font-size: 0.36rem;
        color: #ffffff;
        line-height: 0.36rem;
    }
    .u-txt3 {
        margin-top: 0.3rem;
        color: #ffffff;
        line-height: 0.28rem;
        .u-txt3-l {
            font-size: 0.24rem;
            line-height: 0.24rem;
        }
        .u-txt3-r {
            font-size: 0.28rem;
            line-height: 0.28rem;
        }
    }
}
</style>
