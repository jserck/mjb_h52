import Vue from 'vue';
import RouteLoad from '../../components/common/onLoad';
import Store from '../../store/index'
import {
  clearInterval
} from 'timers';

const routeLoad = Vue.extend(RouteLoad);

function createRouteLoad() {
  const loadComponent = new routeLoad({
    el: document.createElement('div'),
    data() {
      return {
        show: true
      }
    }
  });
  document.body.appendChild(loadComponent.$el);
  let num = 0;
  let timer = setInterval(() => {
    num++;
    if (Store.state.routeLoadShow && num < 100) {
      return;
    } else {
      window.clearInterval(timer);
      loadComponent.$data.show = Store.state.routeLoadShow;
    }
  }, 100);
}
export default function vueUseRouteLoad() {
  Vue.prototype.$routeLoad = createRouteLoad;
}
