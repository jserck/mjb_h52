import Ob from './obshare'
let url = window.location.href;
let index = url.indexOf("?") + 1;
let str = url.substring(index, url.length);
let isTypeApp = false;
if (!Ob.isMobile()) {
  isTypeApp = true;
} else {
  isTypeApp = (/type=app/.test(str) || ((/app/.test(str)) && (/type/.test(str))));
}
export default isTypeApp;
