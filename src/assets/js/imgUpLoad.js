export default function ImgUpLoad(imgList) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(imgList)) {
      let i = 0;
      let itmer = null;
      let len = imgList.length;
      let load = function (src) {
        if (i < len) {
          let img = new Image();
          img.onload = function () {
            load(imgList[i++].src);
            console.log(i);
          }
          img.src = src;
          //   itmer = setInterval(() => {
          //     if (img.complete) {
          //       clearInterval(itmer);

          //     }
          //   }, 100);
        } else {
          resolve('加载完成');
        }
      }
      load(imgList[i].src);
    } else {
      throw '参数类型不正确';
    }
  });
}
