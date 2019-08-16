import Vue from 'vue'
import lazyload from '@/assets/img/common/lazyload.png'

function directiveHandler(el, binding) {
  var imageCatcheList = [];
  //初始化数据
  el.src = lazyload;
  //是否已下载
  const hasLoad = (src) => {
    if (imageCatcheList.indexOf(src) > -1) {
      return true;
    } else {
      return false;
    }
  }
  //图片下载处理
  const imageLoad = (el, src) => {
    var image = new Image();
    image.onload = function () {
      el.src = src;
      imageCatcheList.push(src);
    }
    image.src = src;
  }
  //是否可以展示
  const isCanShow = (el, src) => {
    //节点离浏览器顶部的距离
    var offsetTop = el.offsetTop;
    //页面可视区域的高度
    var windowHeight = window.innerHeight;
    var scroll = windowHeight + window.scrollY;
    var offsetHeigth = el.offsetHeight;
    if (scroll > offsetTop && (window.scrollY - offsetTop) < offsetHeigth) {
      //查询图片是否已加载过，是则直接加载，否则先load
      if (hasLoad(src)) {
        el.src = src;
      } else {
        imageLoad(el, src);
      }
    }
  }

  const addListener = (el, bind) => {
    var imageSrc = bind.value;
    //赋值默认值
    isCanShow(el, imageSrc);
    window.addEventListener('scroll', function (event) {
      isCanShow(el, imageSrc, event);
    });
  }

  if (binding.arg == 'scroll') {
    addListener(el, binding);
  } else {
    imageLoad(el, binding.value);
  }
}
export default Vue.directive('timeoutLazy', {
  inserted: directiveHandler,
  //     update: directiveHandler
});
