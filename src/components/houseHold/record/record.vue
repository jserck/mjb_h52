<template>
    <article class="m-record">
        <section style="padding:0.3rem">
            <ul>
                <li :style="index>0?'margin-top:0.3rem':''" v-for="(item,index) in recordData.fileList" :key="index">
                    <HomeLg :obj="item" type="2"></HomeLg>
                </li>
            </ul>
        </section>
    </article>
</template>
<script>
import HomeLg from '../home/homeLg'
export default {
    components: {
        HomeLg
    },
    data() {
        return {
            recordData:{},
            titleBar: {
                title_name: this.$route.query.name,
                isHideObshare: true,
                bgColor: '#fff'
            }
        }
    },
    created() {
        this.$store.commit('SET_TITLEBAR', this.titleBar);
        this.recordData = JSON.parse(this.$route.query.obj);
        console.log(this.recordData);

    }
}
</script>

<style lang="scss" scoped>
.m-record {
    .marginTop {
        margin-top: 0.3rem;
    }
}
</style>
