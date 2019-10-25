import Bridge from './setupWebViewJavascriptBridgeinit';
import Ob from './obshare'
import {
    UIDJSFUNCTIONS
} from './bridge_name'
import {
    TESTJSFUNCTION,
    TESTJSFUNCTIONS
} from './bridge_name'
export const GETTOKEN = function(callBack) {
    let fn = null;
    if (Ob.is_iph()) {
        fn = TESTJSFUNCTION;
    } else {
        fn = TESTJSFUNCTIONS;
    }
    return new Promise((resolve, reject) => {
        Bridge['nativeToJs'](fn).then((res) => {
            let token = null;
            if (typeof res == 'string') {
                token = res;
            } else {
                token = res.token;
            }
            resolve(token);
        });
    });
};
export const GETUID = function(callBack) {
    let fn = null;
    fn = UIDJSFUNCTIONS;
    return new Promise((resolve, reject) => {
        Bridge['nativeToJs'](fn).then((res) => {
            let uid = null;
            if (typeof res == 'string') {
                uid = res;
            } else {
                uid = res.uid;
            }
            resolve(uid);
        });
    });
}