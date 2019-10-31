<template>
     <div id="app" :class="isTypeApp ? '': 'paddingAppDown'">
          <section v-if="!isTypeApp">
               <AppDown />
          </section>
          <section v-if="isTokenShow">
               <router-view></router-view>
          </section>
     </div>
</template>

<script>
import AppDown from './components/common/downApp.vue'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
     name: 'App',
     data() {
          return {
               transitionName: '',
               isTokenShow: false
          }
     },
     created() {
          this.$vux.loading.show({
               text: '加载中.'
          })
          this.set_istypeapp();
          this.BridgeGetToken();
     },
     components: {
          AppDown
     },
     computed: {
          ...mapState({
               transation_slide: 'transation_slide',
               isTypeApp: 'isTypeApp',
               token: 'token',
          })
     },
     methods: {
          ...mapActions({
               set_transation_slide: 'set_transation_slide',
               set_istypeapp: 'set_istypeapp',
               setToken: 'SET_TOKEN'
          }),
          ...mapMutations({
               setToken: 'SET_TOKEN'
          }),
          // 与APP交互获取token
          BridgeGetToken() {
               // 非APP内嵌直接展示无需获取token
               if (!this.isTypeApp || !this.$Ob.isMobile()) {
                    this.isTokenShow = true;
                    this.$vux.loading.hide();
                    return;
               }
               // 暴露JS的方法给APP，获取到token后执行回调保存并且展示页面
               this.$BridgeAppToJs.GETTOKEN().then((res) => {
                    this.setToken(res);
                    window.sessionStorage.setItem('token', res);
                    this.isTokenShow = true;
                    this.$vux.loading.hide();
               });
               //针对安卓交互的延迟做的容错处理，如果在有效时间内没有获取到token，进行循环获取，指定时间内没有拿到的话视为放弃，直接展示页面
               {
                    let num = 0;
                    let timer = setInterval(() => {
                         if (this.token) {
                              this.isTokenShow = true;
                              this.$vux.loading.hide();
                              clearInterval(timer);
                         } else if (num >= 5) {
                              // this.$toast('未获取到token,请检查网络');
                              this.isTokenShow = true;
                              this.$vux.loading.hide();
                              clearInterval(timer);
                         }
                         num++;
                    }, 200);
               }
          },
     }
}
</script>
<style scoped lang="scss">
// @font-face {
//      font-family: "FZLTHJW"; //重命名字体名
//      src: url("~@/assets/font/FZLTHJW.ttf"); //引入字体
//      font-weight: normal;
//      font-style: normal;
// }
.paddingAppDown {
     padding-bottom: 1.18rem;
}
#app {
     position: relative;
     margin: auto;
     width: 100%;
     .g-titBar {
          @media screen and (min-width: 768px) {
               padding-right: 20%;
               display: none;
          }
          .u-titBar-font {
               margin: auto;
               display: inline-block;
               font-family: PingFangSC-Medium;
               font-size: 0.36rem;
               color: #ffffff;
               line-height: 0.84rem;
          }
     }
}
</style>
