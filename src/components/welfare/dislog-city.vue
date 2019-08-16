<template>
     <article class="dialog-city" @touchmove.prevent>
          <x-dialog
               v-model="show"
               @on-hide="onHide"
               @on-show="onShow"
               class="dialog-city"
               hide-on-blur
          >
               <div class="g-city-con displayFlex flexJustifyEnd" v-if="city2">
                    <div class="g-city1">
                         <scroller lock-x height="100%" @on-scroll="onScroll1" ref="scrollerEvent">
                              <div class="box2">
                                   <div
                                        :class="['g-city-text displayFlex',city_index == (index)?'active':'']"
                                        v-for="(item,index) in city1List"
                                        :key="index"
                                        @click="city1Click(index,item)"
                                   >
                                        <i class="u-en">{{item.en}}</i>
                                        <i class="u-name">{{item.name}}</i>
                                   </div>
                              </div>
                         </scroller>
                    </div>
                    <div class="g-city2">
                         <scroller lock-x height="100%" @on-scroll="onScroll2" ref="scrollerEvent">
                              <div class="box2">
                                   <div
                                        :class="['g-city-text']"
                                        v-for="(item,index) in city1List[city_index].list"
                                        :key="index"
                                        @click="city2Click(item)"
                                   >
                                        <i class="u-name">{{item.area_cn}}</i>
                                   </div>
                              </div>
                         </scroller>
                    </div>
               </div>
          </x-dialog>
     </article>
</template>
<script>
import { XDialog, Scroller } from 'vux'
export default {
     props: ['isDisLogCity'],
     components: {
          XDialog,
          Scroller
     },
     data() {
          return {
               show: true,
               city2: false,
               city_index: 0,
               city1List: [],
          }
     },
     created() {
          this.getCity();
     },
     methods: {
          onScroll1() {

          },
          onScroll2(data) {

          },
          onHide() {
               this.$emit('watchDisLogCityHideOrShow', { type: 'hide' });
          },
          onShow() {
               this.$emit('watchDisLogCityHideOrShow', 'show');
          },
          city1Click(index, data) {
               this.city_index = index;
               data._index = index;
               this.$store.commit('SET_QIJIAWANGCITY', {
                    city1: data
               });
               this.$store.commit('SET_QIJIAWANGCITY', {
                    city2: {}
               });
          },
          city2Click(data) {
               this.$store.commit('SET_QIJIAWANGCITY', {
                    city2: data,
               });
               this.show = false;
          },
          spiltData(area) {
               for (var i in area) {
                    for (var j in area[i]) {
                         this.city1List.push({ en: i, name: j, list: area[i][j] });
                    }
               }
          },
          getCity() {
               this.$vux.loading.show({
                    text: ''
               })

               if (window.sessionStorage && window.sessionStorage.getItem('cityData')) {
                    let area = window.sessionStorage.getItem('cityData');
                    this.spiltData(JSON.parse(area));
                    this.city2 = true;
                    this.city_index = this.$store.state.qijiawang.city1._index || 0;
                    this.$vux.loading.hide();
                    return;
               }
               let self = this;
               $.ajax({
                    url: '//m.jia.com/new_zhuangxiu/getCityNew/',
                    type: 'get',
                    dataType: 'jsonp',
                    success: function (area) {
                         self.$vux.loading.hide();
                         if (window.sessionStorage) {
                              window.sessionStorage.setItem('cityData', JSON.stringify(area));
                         }
                         self.spiltData(area);
                         self.city2 = true;
                    }
               });
          }
     }
}
</script>
<style lang="scss" scoped>
.g-city-con {
     padding-right: 0.5rem;
     //  width: 7rem;
     height: 100vh;
     .g-city1,
     .g-city2 {
          width: 2.15rem;
          height: 100%;
          background: #fff;
          .g-city-text {
               height: 0.7rem;
               line-height: 0.7rem;
               font-size: 0.28rem;
               font-weight: 500;
               color: #333;
          }
          .active {
               background: #f8f8f8;
               color: red;
          }
          .u-en {
               margin-left: 0.5rem;
               margin-right: 0.15rem;
               width: 0.3rem;
          }
     }
     .g-city2 {
          width: 2.24rem;
          background: #f8f8f8;
     }
}
</style>
<style>
.dialog-city .vux-x-dialog .weui-dialog {
     width: 100%;
     background: none;
     overflow: auto !important;
     z-index: 1003;
}

.dialog-city .weui-mask {
     z-index: 1002 !important;
}
</style>
