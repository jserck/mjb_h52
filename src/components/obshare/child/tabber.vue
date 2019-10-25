<template>
     <nav v-if="this.list.length > 1">
          <ul class="navList displayFlex flexJustifyAround">
               <li
                    :class="(activenum === index) ?'active':'link'"
                    v-for="(val,index) in list"
                    v-anchor="val.num"
                    :key="index"
               >
                    <span style="position: relative">{{val.name}}</span>
                    <!-- <span
                         style="position: relative"
                         :class="val.name == '全景'?upDateIcom:''"
                    >{{val.name}}</span>-->
               </li>
          </ul>
     </nav>
</template>
<script>
import anchor from '../../../assets/js/anchor.js'
export default {
     props: {
          nums: 0,
          isUpdate: {
               default: 0
          },
          obj: {
               type: Object,
               default: function () {
                    return {};
               }
          }
     },
     data() {
          return {
               list: [
                    { name: '楼盘', num: 0 },
                    { name: '质量', num: 1 },
                    { name: '评测', num: 2 }
               ],
               activenum: 0
          }
     },
     // computed: {
     //      upDateIcom: function () {
     //           return this.isUpdate == 1 ? 'updata' : ''
     //      }
     // },
     methods: {
          clickHandler(index) {
               this.activenum = index;
          },

          initBar(obj) {
               if (Object.keys(this.obj.buildingRealView).length <= 0) {
                    let spliceNum = this.list.findIndex((val, index, arr) => {
                         return val.num == 1;
                    })
                    this.list.splice(spliceNum, 1);
               }
               if (!this.obj.panoramaSite.panoramaList || this.obj.panoramaSite.panoramaList.length == 0) {
                    let spliceNum = this.list.findIndex((val, index, arr) => {
                         return val.num == 2;
                    })
                    this.list.splice(spliceNum, 1);
               }
          }
     },
     created() {
          this.initBar();
          this.activenum = this.nums;
     },
     watch: {
          'nums': function (val) {
               let dataNum = val;
               let data = this.list.findIndex((val, index, arr) => {
                    return val.num == dataNum;
               })
               this.activenum = data;
          }
     }
}
</script>
<style scoped>
.navList {
     height: 0.7rem;
     background: #fff;
}
.link,
.active {
     box-sizing: border-box;
     height: 100%;
     font-family: PingFangSC-Medium;
     font-size: 0.32rem;
     line-height: 0.7rem;
}
.link {
     border: none;
     color: #8b949e;
}
.active {
     border-bottom: 2px solid #0080ff;
     color: #0080ff;
}
.updata::after {
     display: inline-block;
     position: absolute;
     top: 0;
     right: 0;
     content: "";
     background: #f56364;
     width: 0.12rem;
     height: 0.12rem;
     border-radius: 0.12rem;
}
</style>
<style>
.tableBar .el-tabs__content {
     display: none;
}
.tableBar .el-tabs__header {
     margin: 0;
}
</style>


