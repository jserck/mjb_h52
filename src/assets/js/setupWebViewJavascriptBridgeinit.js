import Ob from './obshare';
export default {
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
