import Ob from './obshare';
export default {
    TESTJSFUNCTION: 'testJSFunction', //传输tokenAZ
    TESTJSFUNCTIONS: 'testJSFunctions', //传输tokenIOS
    GETUNITYURL: 'getUnityUrl', //获取unity URL
    //******************************************
    INVITATIONSHAREACTION: 'invitationShareAction', //单个分享
    GOBACKACTION: 'goBackAction', //返回APP（iph）
    CALLANDROIDFINISH: 'callAndroidFinish', //返回APP（az）
    SHAREACTION: 'shareAction', //分享（iph）
    CALLANDROIDSHARE: 'callAndroidShare', //分享（az）
    LOGINACTION: 'loginAction', //获取token（iph）
    CALLANDROID: 'callAndroid', //获取token（az）
    HREFHOUSE: 'hrefHouse', //跳转到楼盘详情
    UIDJSFUNCTIONS: 'uidJsFunctions', //获取全局 UID
    setupWebViewJavascriptBridge: function(callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge);
        }
        if (window.WVJBCallbacks) {
            return window.WVJBCallbacks.push(callback);
        }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() {
            document.documentElement.removeChild(WVJBIframe)
        }, 0)
    },
    jsToNative: function({
        iphData = {},
        azData = '',
        iphFn = '',
        azFn = ''
    }) {
        if (Ob.is_iph()) {
            this.setupWebViewJavascriptBridge(function(bridge) {
                bridge.callHandler(
                    iphFn,
                    iphData,
                    function(response) {
                        return;
                    }
                );
            });
        } else if (Ob.is_az()) {
            if (Array.isArray(azData)) {
                window.android[azFn](...azData);
            }
            window.android[azFn](azData);
        }
    },
    nativeToJs: function(fn) {
        return new Promise((resolve) => {
            if (Ob.is_iph()) {
                this.setupWebViewJavascriptBridge(function(bridge) {
                    bridge.registerHandler(fn, function(data, responseCallback) {
                        if (data) {
                            resolve(data);
                        }
                        responseCallback('200');
                    })
                });
            }
            if (Ob.is_az()) {
                window[fn] = function(data) {
                    if (data) {
                        resolve(data);
                    }
                };
            }
        });
    }
}
