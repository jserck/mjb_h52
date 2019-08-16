<template>
    <article class="m-ul">
        <div
            @click="routeHandler"
            :class="[gLi,'displayFlex','flexColumn','flexJustifybetween']"
            :style="`background:url('${obj.backPicUrl}');background-size:cover`"
        >
            <p>{{obj.title}}</p>
            <div class="g-icon-container displayFlex flexJustifyEnd">
                <span
                    v-for="(item,index) in obj.iconList"
                    :key="index"
                    class="g-icon displayFlex flexAlignJustifyCenter flexAlignItemsCenter"
                >
                    <i class="u-icon-l">
                        <img :src="item.iconUrl" alt>
                    </i>
                    <i class="u-icon-r">{{item.count}}</i>
                </span>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: ['obj', 'type'],
    computed: {
        gLi() {
            if (this.type == '1') {
                return 'g-li-1'
            }
            return 'g-li-2'
        }
    },

    methods: {
        getData() {
            /**
            * @name 获取数据
            * @method post
            * @param propertyId 楼盘ID
            */
            let options = {
                urls: `/maijiabangService-1.0-SNAPSHOT/h5/houseArchives/${this.$route.params.id}/${this.obj.typeId}`,
                data: {
                    houseId: this.$route.query.id
                },
                methods: 'post',
                types: 1,
                des: true
            }
            this.$http(options).then((res) => {
                if (res.code == 0) {
                    let jsonObj = JSON.stringify(res.response.data);
                    this.reouter_to(jsonObj,res.response.data.fileType);
                }
            }).catch((err) => {
                console.log(err);
                this.$toast('数据异常');
            })
        },
        routeHandler(){
            this.getData();
        },
        reouter_to(data,type) {
            let path = '/houseHold/general';
            if (type == 1) {
                path = `/houseHold/record/${this.$route.params.id}`
            }
            let options = {
                path,
                query: {
                    name:this.obj.title,
                    obj: data
                }
            };
            if (this.$store.state.isTypeApp) {
                options.query.type = 'app';
            }
            this.$router.push(options);
        }
    }
}
</script>

<style lang="scss" scoped>
.m-ul {
    .g-li-1,
    .g-li-2 {
        padding: 0.4rem 0.3rem 0.3rem 0.4rem;
        height: 1.76rem;
        border-radius: 0.04rem;
        p {
            font-size: 0.36rem;
            color: #ffffff;
            line-height: 0.36rem;
        }
        .g-icon-container {
            .g-icon {
                margin-left: 0.3rem;
                width: 1.08rem;
                height: 0.52rem;
                .u-icon-l {
                    display: inline-block;
                    margin-right: 0.08rem;
                    width: 0.32rem;
                    height: 0.32rem;
                }
                .u-icon-r {
                    font-size: 0.28rem;
                    color: #ffffff;
                    text-align: right;
                    line-height: 0.28rem;
                }
            }
        }
    }
    .g-li-2 {
        background: none;
        @include background("~@/assets/img/houseHold/mulu.png");
    }
}
</style>
