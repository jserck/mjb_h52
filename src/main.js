import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import Ob from './assets/js/obshare'
import * as BridgeName from './assets/js/bridge_name'
import Bridge from './assets/js/setupWebViewJavascriptBridgeinit'
import * as BridgeAppToJs from './assets/js/bridge_appToJs'
import Axios from './assets/js/axios'
// import FastClick from 'fastclick'
import Set_fontSize from './assets/js/setFontsize'
import {
    url
} from './assets/js/urlLocation'
import './assets/css/common.css'
import toastRegistry from './assets/js/toastcreate'
import RouteLoad from './assets/js/routeLoad'
import timeoutLazy from './assets/js/timeoutLazy'
import registryToast from './assets/js/toastcreate'
import {
    LoadingPlugin
} from 'vux'
//挂载
Vue.prototype.$Ob = Ob;
Vue.prototype.$BridgeName = BridgeName;
Vue.prototype.$Bridge = Bridge;
Vue.prototype.$BridgeAppToJs = BridgeAppToJs;
Vue.prototype.$http = Axios;
Vue.prototype.$url = url;
Vue.config.productionTip = false;
// FastClick.attach(document.body)
Set_fontSize();
Vue.use(toastRegistry);
Vue.use(timeoutLazy);
Vue.use(registryToast);
Vue.use(RouteLoad);
Vue.use(LoadingPlugin)
//路由器导航后置守卫
router.afterEach((to, from, next) => {
    to.query.type = 'app';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
var vm = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})