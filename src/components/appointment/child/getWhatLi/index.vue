<template>
     <article>
          <section class="m-getWhatLi">
               <div v-show="type == 1" class="g-getWhatLi g-getWhatLi1">
                    <span>720 °度航拍VR全景记录的楼盘进度</span>
               </div>
               <div v-show="type == 2" class="g-getWhatLi g-getWhatLi2">
                    <span>专业报告分析的项目落实情况</span>
               </div>
               <div v-show="type == 3" class="g-getWhatLi g-getWhatLi3">
                    <span>千余工程质量监测点施工记录</span>
               </div>
          </section>
     </article>
</template>
<script>
export default {
     props: ['type']
}
</script>
<style lang="scss" scoped>
.m-getWhatLi {
     .g-getWhatLi {
          padding-left: 1.22rem;
          padding-right: 0.2rem;
          height: 1.1rem;
          line-height: 1.05rem;
          font-size: 0.28rem;
          color: #4d535d;
     }
     .g-getWhatLi1 {
          width: 4.82rem;
          background: url("~@/assets/img/appointment/pic_720duhangpa_n@3x.png")
               center center no-repeat;
          background-size: cover;
     }
     .g-getWhatLi2 {
          width: 4.04rem;
          background: url("~@/assets/img/appointment/pic_zhuanyebaogaofenxi_n@3x.png")
               center center no-repeat;
          background-size: cover;
     }
     .g-getWhatLi3 {
          width: 4.04rem;
          background: url("~@/assets/img/appointment/pic_qianyugongchengzhiliangjiance_n@3x.png")
               center center no-repeat;
          background-size: cover;
     }
}
</style>