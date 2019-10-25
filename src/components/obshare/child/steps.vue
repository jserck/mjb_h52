<template>
     <div class="steps">
          <div class="stepsUi displayFlex flexJustifybetween">
               <div
                    class="stepsLi displayFlex flexColumn flexJustifybetween"
                    v-for="(val,index) in stepsList"
                    :key="index"
               >
                    <div class="steps-img-actions" v-if="val.isHighLighted ==1">
                         <i v-if="index<(stepsList.length-1)" class="line-actions line"></i>
                    </div>
                    <div class="steps-img" v-else>
                         <i v-if="index<(stepsList.length-1)" class="line-init line"></i>
                    </div>
                    <p
                         class="steps-content steps-content-actions"
                         v-if="val.isHighLighted  ==1"
                    >{{val.progressName}}</p>
                    <p class="steps-content steps-content-init" v-else>{{val.progressName}}</p>
               </div>
          </div>
     </div>
</template>
<script>
export default {
     props: {
          stepsNum: {
               default: 4
          },
          stepsList: {
               default: null
          }
     },
     data() {
          return {};
     }
};
</script>
<style scoped>
.steps {
     width: 100%;
     padding-top: 0.2rem;
}
.stepsUi {
}
.stepsLi {
     /* width: 1.2rem; */
     height: 0.94rem;
     text-align: center;
}
.steps-img {
     position: relative;
     margin: 0 auto;
     width: 0.4rem;
     height: 0.4rem;
     background: url("~@/assets/img/obshare/icon_loupanjindu_s.png") no-repeat;
     background-size: cover;
}
.steps-content {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     line-height: 0.24rem;
}
.line {
     position: absolute;
     left: 0.4rem;
     top: 0.2rem;
     display: inline-block;
     height: 0;
     width: 1.1rem;
}

.line-init {
     border: 0.01rem solid #d1e8fd;
}
.line-actions {
     border: 0.01rem solid #198df5;
}
.steps-img-actions {
     position: relative;
     margin: 0 auto;
     width: 0.4rem;
     height: 0.4rem;
     background: url("~@/assets/img/obshare/icon_shijianzhoubaise.png") no-repeat;
     background-size: cover;
}
.steps-content-init {
     color: #8b949e;
}
.steps-content-actions {
     color: #212832;
}
</style>

