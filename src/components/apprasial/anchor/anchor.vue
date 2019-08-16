<template>
     <section class="m-auhor">
          <ul>
               <li
                    v-for="(item,index) in navList"
                    :key="index"
                    v-scroll="{
                    id:item.id,
                    index
               }"
               >
                    <span :class="indexNun == index ? 'u-nav-active':'u-nav-link'">{{item.name}}</span>
               </li>
          </ul>
     </section>
</template>
<script>
import '@/assets/js/href.js'
export default {
     props: ["list"],
     data() {
          return {
               indexNun: 0,
               navList: [
                    {
                         name: '基础信息',
                         id: 'scroll1',
                         ids: 'w'
                    },
                    {
                         name: '楼盘分数',
                         id: 'scroll2',
                         ids: 'w'
                    },
                    // {
                    //      name: '居住体验',
                    //      id: 'scroll3',
                    //      ids: "1"
                    // },
                    // {
                    //      name: '生活配套',
                    //      id: 'scroll4',
                    //      ids: '2'
                    // },
                    // {
                    //      name: '工程质量',
                    //      id: 'scroll5',
                    //      ids: '3'
                    // }
               ]
          }
     },
     created() {
          this.sliceData();
     },
     mounted() {
          this.scrollLister();
     },
     beforeDestroy() {
          window.removeEventListener('srcoll');
     },

     methods: {
          sliceData() {
               if (Array.isArray(this.list) && this.list.length < 0) { return };
               for (let i = 0; i < this.list.length; i++) {
                    let obj = {
                         name: this.list[i].id == '1' ? '居住体验' : (this.list[i].id == '2' ? '生活配套' : (this.list[i].id == '3' ? '工程质量' : '')),
                         ids: (i + 1),
                         id: `scroll${i + 3}`
                    };
                    this.navList.push(obj);
               }
          },
          scrollLister() {
               if (window.addEventListener) {
                    window.addEventListener('scroll', this.scroolHand);
               } else if (window.attachEvent) {
                    window.attachEvent('on' + 'scroll', this.scroolHand);
               } else {
                    window['on' + scroll] = this.scroolHand;
               }
          },
          // scrollBottom() {
          //      function getScrollTop() {
          //           var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
          //           if (document.body) {
          //                bodyScrollTop = document.body.scrollTop;
          //           }
          //           if (document.documentElement) {
          //                documentScrollTop = document.documentElement.scrollTop;
          //           }
          //           scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
          //           return scrollTop;
          //      }
          //      //文档的总高度
          //      function getScrollHeight() {
          //           var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
          //           if (document.body) {
          //                bodyScrollHeight = document.body.scrollHeight;
          //           }
          //           if (document.documentElement) {
          //                documentScrollHeight = document.documentElement.scrollHeight;
          //           }
          //           scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
          //           return scrollHeight;
          //      }
          //      function getWindowHeight() {
          //           var windowHeight = 0;
          //           if (document.compatMode == "CSS1Compat") {
          //                windowHeight = document.documentElement.clientHeight;
          //           } else {
          //                windowHeight = document.body.clientHeight;
          //           }
          //           return windowHeight;
          //      }
          //      if ((getScrollTop() + getWindowHeight()) - getScrollHeight() >= -1) {
          //           this.indexNun = 4;
          //      }
          // },
          scrollActive(dom) {
               let tar = document.getElementById(dom);
               var top = tar.offsetTop;
               var height = tar.offsetHeight;
               var windowTop = document.documentElement.scrollTop;
               //获取当前屏幕大小
               var size = window.innerHeight;
               if ((top) < (windowTop + size)) {
                    return true;
               }
          },
          scroolHand() {
               let scr_top =
                    parseInt(document.body.scrollTop) ||
                    parseInt(document.documentElement.scrollTop);
               let tar = document.getElementById("scroll1") || "";
               let tar1 = document.getElementById("scroll2") || "";
               let tar2 = document.getElementById("scroll3") || "";
               let tar3 = document.getElementById("scroll4") || "";
               let tar4 = document.getElementById("scroll5") || "";
               let tarSp = tar ? tar.offsetTop - 100 : "";
               let tarSp1 = tar1 ? tar1.offsetTop - 100 : "";
               let tarSp2 = tar2 ? tar2.offsetTop - 100 : "";
               let tarSp3 = tar3 ? tar3.offsetTop - 100 : "";
               let tarSp4 = tar4 ? tar4.offsetTop - 100 : "";
               if (tarSp != 'undefined' && scr_top <= 100) {
                    this.indexNun = 0;
               }
               if (tarSp1 && scr_top >= tarSp1 && this.indexNun != 1) {
                    this.indexNun = 1;
               }
               if (tarSp2 && scr_top >= tarSp2 && this.indexNun != 2) {
                    this.indexNun = 2;
               }
               if (tarSp3 && scr_top >= tarSp3 && this.indexNun != 3) {
                    this.indexNun = 3;
               }
               if (tarSp4 && scr_top >= tarSp4 - 200 && this.indexNun != 4) {
                    this.indexNun = 4;
               }
          },
     }
}
</script>
<style lang="scss" scoped>
.m-auhor {
     position: fixed;
     top: 0;
     right: 0;
     // background: #f7f7f7;
     // @include bg(#f7f7f7, rgba(33,40,50,0.8));
     z-index: 99;
     width: 20%;
     @media screen and (max-width: 767px) {
          display: none;
     }
     @media screen and (min-width: 768px) {
          padding-top: 50px;
     }

     .u-nav-link {
          width: 100%;
          height: 110px;
          text-align: center;
          line-height: 110px;
          font-size: 38px;
          border-radius: 2px;
          // color: #8b949e;
          @include color(#8b949e, #8b949e);
          @media screen and (max-width: 1024px) {
               font-size: 30px;
          }
          @media screen and (min-width: 1025px) {
               font-size: 38px;
          }
     }
     .u-nav-active {
          width: 100%;
          height: 110px;
          text-align: center;
          line-height: 110px;
          font-size: 38px;
          // color: #212832;
          @include color(#212832, $apprasial_btn_active_color);
          border-radius: 2px;
          // background: #e7e7e7;
          @include bg(#e7e7e7, $apprasial_btn_active_bg);
          @media screen and (max-width: 1024px) {
               font-size: 30px;
          }
          @media screen and (min-width: 1025px) {
               font-size: 38px;
          }
     }
}
</style>
