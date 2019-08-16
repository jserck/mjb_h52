import Ob from '@/assets/js/obshare.js'
import {
    promises
} from 'fs';
const mutations = {
    SET_TRANSATION_SLIDE(state, data) {
        state.transation_slide = data;
    },
    SET_ISTYPEAPP(state) {
        let url = window.location.href;
        let index = url.indexOf("?") + 1;
        let str = url.substring(index, url.length);
        if (!Ob.isMobile()) {
            state.isTypeApp = true;
            return;
        }
        state.isTypeApp = ((/=app/.test(str)) || (/type=/.test(str)));
    },
    SET_TITLEBAR(state, data) {
        state.title_name = data.title_name;
        state.isHideObshare = data.isHideObshare;
        state.bgColor = data.bgColor;
    },
    SET_VIDEO(state, data) {
        state.videoUrl = data;
    },
    SET_PDF(state, data) {
        state.pdfUrl = data;
    },
    SET_ROUTELOAD(state, data) {
        state.routeLoadShow = data;
    },
    SET_QIJIAWANGCITY(state, data) {
        if (data.city1) {
            state.qijiawang.city1 = data.city1;
        }
        if (data.city2) {
            state.qijiawang.city2 = data.city2;
        }
    },
}
export default mutations;
