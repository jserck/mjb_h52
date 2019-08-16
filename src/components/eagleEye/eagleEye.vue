<template>
     <section class="m-eagleEye">
          <article>
               <header>
                    <section class="g-topimg">
                         <img src="@/assets/img/eagleEye/pic_toutu_n.png" alt>
                    </section>
               </header>
          </article>
          <article>
               <section class="g-eagleList">
                    <section class="u-bg-1"></section>
                    <section class="u-bg-2"></section>
                    <section class="u-title">
                         <span>鹰眼测评楼盘</span>
                    </section>
                    <section class="u-list">
                         <ul>
                              <li
                                   v-for="(item,index) in eagleEyeData"
                                   :key="index"
                                   @click="clickHandler(item.webUrl)"
                              >
                                   <EyLi :eyLiData="item"></EyLi>
                              </li>
                         </ul>
                    </section>
               </section>
          </article>
     </section>
</template>
<script>
import EyLi from '@/components/eagleEye/eagleEyeLi'
export default {
     data() {
          return {
               eagleEyeData: []
          }
     },
     components: { EyLi },
     created() {
          this.getHttp();
     },
     methods: {
          clickHandler(url) {
               window.location.href = `${url}?type=app&path=eyLi`;
          },
          getHttp() {
               /**
               * @name 获取数据
               * @method post
               * @param propertyId 楼盘ID
               */
               let options = {
                    urls: `/maijiabangService-1.0-SNAPSHOT/h5/headerH5/${this.$route.params.cid}`,
                    data: {
                         cid: this.$route.params.cid
                    },
                    methods: 'post',
                    des: true
               }
               this.$http(options).then((res) => {
                    [...this.eagleEyeData] = res.response.data;
               }).catch((err) => {
                    console.log(err);
                    this.$toast('数据异常');
               })
          }
     }
}
</script>

<style lang="scss" scoped>
.m-eagleEye {
     background: #fff;
     .g-eagleList {
          position: relative;
          .u-bg-1 {
               position: absolute;
               left: 0;
               top: 0;
               width: 1.32rem;
               height: 2.78rem;
               @include background("~@/assets/img/eagleEye/pic_huan_n@3x.png");
          }
          .u-bg-2 {
               position: absolute;
               right: 0.4rem;
               top: 0.2rem;
               width: 1.51rem;
               height: 0.75rem;
               @include background("~@/assets/img/eagleEye/pic_sucai_n@3x.png");
          }
          .u-title {
               padding-top: 0.34rem;
               text-align: center;
               span {
                    position: relative;
                    // color: #0080ff;
                    background-image: -webkit-linear-gradient(
                         top,
                         #17a3ff,
                         #17a3ff,
                         #0080ff
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 0.44rem;
                    letter-spacing: 0.038px;
                    line-height: 0.44rem;
                    &:before {
                         content: "";
                         position: absolute;
                         top: 0;
                         bottom: 0;
                         left: -1.19rem;
                         margin: auto;
                         width: 1.09rem;
                         height: 0.04rem;
                         @include background(
                              "~@/assets/img/eagleEye/pic_xianzuo_n@3x.png"
                         );
                    }
                    &:after {
                         content: "";
                         position: absolute;
                         top: 0;
                         bottom: 0;
                         right: -1.19rem;
                         margin: auto;
                         display: inline-block;
                         width: 1.09rem;
                         height: 0.04rem;
                         @include background(
                              "~@/assets/img/eagleEye/pic_xianyou_n@3x.png"
                         );
                    }
               }
          }
          .u-list {
               padding: 0rem 0.4rem 0.4rem;
               ul {
                    li {
                         margin-top: 0.4rem;
                    }
               }
          }
     }
}
</style>
