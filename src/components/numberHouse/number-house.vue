<template>
     <article class="maxWidth m-numberHouse">
          <section class="g-header-con">
               <img src="@/assets/img/number_house/pic_top@3x.png" alt />
          </section>
          <section class="g-probleam-con">
               <div class="g-tit-con">
                    <Number-tit titText="买房几大难 字字诛心"></Number-tit>
               </div>
               <div class="g-tit-main-con">
                    <Number-img-text :textImgData="obj1"></Number-img-text>
                    <Number-img-text :textImgData="obj2"></Number-img-text>
               </div>
          </section>
          <div class="g-three-con">
               <div class="g-tit-con">
                    <Number-tit titText="三大名星产品 拳拳到位"></Number-tit>
               </div>
               <div class="g-three-main-con">
                    <div class="g-three" v-for="(item,index) in threeList" :key="index">
                         <Number-three :textImgData="item"></Number-three>
                    </div>
               </div>
          </div>
          <section class="g-house-con" v-if="number_list.length >0">
               <div class="g-tit-con">
                    <Number-tit titText="数字化线上售楼部"></Number-tit>
               </div>
               <div class="g-house-list">
                    <ul>
                         <li v-for="(item,index) in number_list" :key="index">
                              <Number-house-msg :houseItem="item"></Number-house-msg>
                         </li>
                    </ul>
               </div>
          </section>
     </article>
</template>
<script>
//图片引入
import SrcOne from '@/assets/img/number_house/pic_chahua1@3x.png'
import SrcTwo from '@/assets/img/number_house/pic_chahua2@3x.png'
import SrcThreeOne from '@/assets/img/number_house/pic_xianshangshouloubu_n@3x.png'
import SrcThreeTwo from '@/assets/img/number_house/pic_kaifanggongdi_n@3x.png'
import SrcThreeThree from '@/assets/img/number_house/pic_quanjing_n@3x.png'
//子组件引入
import NumberTit from './child-components/number-tit'
import NumberImgText from './child-components/number-textImg'
import NumberThree from './child-components/number-three'
import NumberHouseMsg from './child-components/number-houseMsg'
export default {
     components: {
          NumberTit,
          NumberImgText,
          NumberThree,
          NumberHouseMsg
     },
     data() {
          return {
               number_list: [],
               obj1: {
                    src: SrcOne,
                    t1: '酷热难耐',
                    t2: '仍要跑遍售楼部'
               },
               obj2: {
                    src: SrcTwo,
                    t1: '难以抉择',
                    t2: '意向楼盘利弊参半'
               },
               threeList: [
                    {
                         index: '1',
                         src: SrcThreeOne,
                         t1: '数字化',
                         t2: '线上售楼部',
                         t3: '线上售楼部1:1实景还原，视频讲解想听几遍就听几遍，实体沙盘反复研究，再不怕销售唐僧附体。'
                    },
                    {
                         index: '2',
                         src: SrcThreeTwo,
                         t1: '数字化',
                         t2: '开放工地',
                         t3: '工地实景、建设进度，您关心的都在这，买房前快速了解楼盘现状，避坑能力NO.1!'
                    },
                    {
                         index: '3',
                         src: SrcThreeThree,
                         t1: '数字化',
                         t2: '全景航拍',
                         t3: '无人机全景航拍，周围配套一目了然，建筑进度直观呈现，更有多时间线随心对比。'
                    },
               ]
          }
     },
     created() {
          this.getHttp();
     },
     methods: {
          getHttp() {
               /**
               * @name 获取数据
               * @method post
               * @param propertyId 楼盘ID
               */
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/realViewInfo`,
                    data: {

                    },
                    methods: 'post',
                    des: true
               }
               this.$http(options).then((res) => {
                    if (res.code == 0) {
                         if (res.response.status == 0) {
                              [...this.number_list] = res.response.data.propertyInfoList;
                              console.log(this.number_list);
                         }
                    }
               }).catch((err) => {
                    console.log(err);
                    this.$toast('数据异常');
               })
          }
     }
}
</script>

<style lang="scss" scoped>
.m-numberHouse {
     position: relative;
     overflow: hidden;
     .g-header-con {
          // position: absolute;
          // top: 0;
          // z-index: 0;
          height: 9.6rem;
     }
     .g-probleam-con {
          margin-top: -0.2rem;
          .g-tit-con {
               margin: auto;
          }
          .g-tit-main-con {
               padding: 0 0.66rem;
          }
     }
     .g-three-con {
          margin-top: 0.92rem;
          .g-three-main-con {
               overflow: hidden;
               padding: 0 0.48rem;
          }
          .g-three {
               margin-top: 0.47rem;
          }
     }
     .g-house-con {
          margin-top: 0.91rem;
          .g-house-list {
               padding: 0 0.3rem;
               ul {
                    margin-bottom: 0.4rem;
                    border: 1px solid #fff;
                    li {
                         box-sizing: border-box;
                         margin-top: 0.4rem;
                         box-shadow: 0 0 0.15rem 0 rgba(169, 183, 197, 0.3);
                         border-radius: 0.04rem;
                    }
               }
          }
     }
}
</style>
