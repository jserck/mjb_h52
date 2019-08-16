<template>
     <div id="app" :class="isTypeApp ? '': 'paddingAppDown'">
          <section v-if="!isTypeApp">
               <AppDown />
          </section>
          <router-view></router-view>
     </div>
</template>

<script>
import AppDown from './components/common/downApp.vue'
import { mapState, mapActions } from 'vuex'
import Ob from '@/assets/js/obshare.js'
import SetupWebViewJavascriptBridgeinit from './assets/js/setupWebViewJavascriptBridgeinit'
import { setTimeout } from 'timers';
export default {
     name: 'App',
     data() {
          return {
               transitionName: ''
          }
     },
     mounted() {
          this.set_istypeapp();
     },
     created() {
          this.getUid();
     },
     components: {
          AppDown
     },
     methods: {
          ...mapActions({
               set_transation_slide: 'set_transation_slide',
               set_istypeapp: 'set_istypeapp'
          }),
          getUid() {
               let fn = null;
               if (Ob.is_iph()) {
                    fn = SetupWebViewJavascriptBridgeinit['TESTJSFUNCTION'];
               } else {
                    fn = SetupWebViewJavascriptBridgeinit['TESTJSFUNCTIONS'];
               }
               SetupWebViewJavascriptBridgeinit['nativeToJs'](fn).then((res) => {
                    let token = null;
                    if (typeof res == 'string') {
                         token = res;
                    } else {
                         token = res.token;
                    }
                    window.sessionStorage.setItem('token', token);
               });
          }
     },
     computed: {
          ...mapState({
               transation_slide: 'transation_slide',
               isTypeApp: 'isTypeApp'
          })
     },
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
