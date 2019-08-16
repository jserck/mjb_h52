<template>
     <article class="dialog-demo" @touchmove.prevent>
          <x-dialog
               v-model="show"
               @on-hide="onHide"
               @on-show="onShow"
               class="dialog-demo"
               hide-on-blur
          >
               <slot></slot>
          </x-dialog>
     </article>
</template>
<script>
import { XDialog } from 'vux'
export default {
     components: {
          XDialog
     },
     data() {
          return {
               show: false
          }
     },
     mounted() {
          this.show = true;
     },

     methods: {
          onHide() {
               this.$emit('watchDisLogHideOrShow', 'hide');
          },
          onShow() {
               this.$emit('watchDisLogHideOrShow', 'show');
          }
     }
}
</script>
<style lang="scss" scoped>
</style>
<style>
.dialog-demo .vux-x-dialog .weui-dialog {
     width: 100%;
     background: none;
     overflow: auto !important;
     z-index: 1001;
}
.weui-dialog {
     overflow: auto !important;
}
</style>
