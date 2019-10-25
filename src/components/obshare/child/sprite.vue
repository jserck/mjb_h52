<template>
     <section class="m-sprite">
          <img :src="sorite_src" alt />
     </section>
</template>
<script>
export default {
     data() {
          return {
               sorite_src: '/static/obshare/sprote/icon_3d_00000.png'
          }
     },
     mounted() {
          this.init_animation();
     },
     methods: {
          init_animation() {
               var fps = 1;
               var now;
               var then = Date.now();
               var interval = 1000 / fps;
               var delta;
               var num = 0;
               var self = this;
               var src = '00000';
               let str_num = 5;
               let str_pad = '0';
               let str_max = 38;
               window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
               function tick() {
                    if (num > str_max) { num = 0 }
                    if (window.requestAnimationFrame) {
                         requestAnimationFrame(tick);
                         now = Date.now();
                         delta = now - then;
                         if (delta > interval) {
                              // 这里不能简单then=now，否则还会出现上边简单做法的细微时间差问题。例如fps=10，每帧100ms，而现在每16ms（60fps）执行一次draw。16*7=112>100，需要7次才实际绘制一次。这个情况下，实际10帧需要112*10=1120ms>1000ms才绘制完成。
                              then = now - (delta % interval);
                         }
                    }
                    else {
                         setTimeout(tick, interval);
                    }
                    src = num.toString().padStart(str_num, str_pad);
                    self.sorite_src = `/static/obshare/sprote/icon_3d_${src}.png`;
                    num++;
               }
               tick();
          }
     },
}
</script>

<style scoped>
.m-sprite {
     width: 100%;
     height: 100%;
}
.m-sprite img {
     width: 100%;
     transform: scale(1.5);
     -webkit-transform: scale(1.5);
}
</style>
