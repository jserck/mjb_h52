<template>
     <article>
          <section>
               <div
                    class="g-light-seek-tit displayFlex flexJustifybetween"
                    style="padding-left: 0.3rem;padding-right: 0.3rem"
               >
                    <span>
                         <i>{{tit}}</i>
                         <i v-if="totalCount>0">（{{totalCount}}）</i>
                         <i v-if="webUrl " class="u-icon1" @click="icon1Handler">
                              <x-icon type="ios-help" size="100%"></x-icon>
                         </i>
                    </span>
                    <span v-if="isShow" class="displayFlex flexJustifybetween flexAlignItemsCenter">
                         <i class="lookAll" @click="loadHandler">查看全部</i>
                         <i>
                              <img
                                   :src="this.$url.right_icon"
                                   style="float:right;width:0.12rem;height:0.22rem"
                              />
                         </i>
                    </span>
               </div>
          </section>
          <section>
               <slot></slot>
          </section>
     </article>
</template>
<script>
export default {
     props: ['totalCount', 'isShow', 'tit', 'webUrl'],
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          },
          icon1Handler() {
               window.location = this.webUrl;
          }
     }
}
</script>
<style lang="scss" scoped>
.g-light-seek-tit {
     background: #fff;
     padding: 0.3rem 0;
}
.g-light-seek-tit span:nth-child(1) {
     font-size: 0.4rem;
     color: #212832;
     font-weight: 600;
}

.g-light-seek-tit span:nth-child(2) {
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #8b949e;
     text-align: right;
     line-height: 0.28rem;
}

.g-light-seek-tit .lookAll {
     display: inline-block;
     margin-right: 0.25rem;
}
.u-icon1 {
     display: inline-block;
     width: 0.32rem;
}
</style>
<style>
.g-light-seek-tit .vux-x-icon {
     fill: #0080ff;
}
</style>