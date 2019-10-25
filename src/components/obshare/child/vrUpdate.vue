<template>
     <article class="m-vrUpdate">
          <section>
               <div
                    v-if="isVR == 1"
                    class="vr_btn"
                    v-on:click.prevent="loadHandler('0','animated bounceIn')"
               >
                    <div>
                         <img
                              class="flexImg"
                              src="@/assets/img/obshare/icon_loupanxiangqingye_quanjinggongdi@2x.png"
                              alt
                         />
                    </div>
                    <span v-if="isVRUpdate ==1" class="updateIcon">
                         <badge text="更新"></badge>
                    </span>
               </div>
          </section>
     </article>
</template>
<script>
import { Badge } from 'vux'
export default {
     components: {
          Badge
     },
     props: ['isVR', 'isVRUpdate'],
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style lang="scss" scoped>
.m-vrUpdate {
     position: absolute;
     bottom: 0.3rem;
     padding: 0 0.1rem 0 0.2rem;
     right: 0;
     width: 1.7rem;
     height: 0.72rem;
     z-index: 99;
     .vr_btn {
          .updateIcon {
               display: inline-block;
               position: absolute;
               top: 0;
               right: 0.2rem;
               margin: auto;
          }
     }
}
</style>
<style>
.m-vrUpdate .vux-badge {
     background: #f56364;
     height: 0.28rem;
     line-height: 0.28rem;
     border-radius: 0.28rem;
     font-size: 0.2rem;
     color: #ffffff;
     text-align: center;
}
</style>