<template>
     <article>
          <!-- 户型介绍 -->
          <div class="houseType-introduced">
               <div>
                    <div class="houseType-introduced-list">
                         <ul class="displayFlex flexNoWrap">
                              <li
                                   @click="loadHandler(val)"
                                   v-for="(val,index) in abShareData.apartmentType.typeList"
                                   :key="index"
                              >
                                   <div
                                        class="houseType-introduced-list-img"
                                        :style="`background-image:url(${val.imageUrl});position:relotive`"
                                   >
                                        <span
                                             class="houseType-introduced-list-img-gif-div"
                                             v-if="val.is3D =='1'"
                                        >
                                             <span class="houseType-introduced-list-img-gif">
                                                  <Sprite />
                                             </span>
                                        </span>
                                   </div>
                                   <p class="housetype">{{val.title}}</p>
                                   <p class="size">{{val.subtitle}}</p>
                                   <p class="pice">{{val.price}}</p>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     </article>
</template>
<script>
import Sprite from "./sprite"
export default {
     props: ['abShareData'],
     components:{
          Sprite
     },
     data() { return {} },
     methods: {
          loadHandler() {
               window.location = this.$url.appDown;
          }
     }
}
</script>
<style scoped>
.houseType-introduced {
     padding: 0 0.3rem;
     background: #fff;
}
.g-montoring-num2-list,
.houseType-introduced-list {
     width: 100%;
     overflow-x: scroll;
     -webkit-overflow-scrolling: touch;
     position: relative;
     margin-top: 0.2rem;
     font-family: PingFangSC-Regular;
     font-size: 0.24rem;
     color: #212832;
     text-align: center;
     line-height: 0.24rem;
}
.houseType-introduced-list-img-gif,
.houseType-introduced-list-img-gif-div {
     display: inline-block;
     position: absolute;
     right: 0;
     left: 0;
     top: 0;
     bottom: 0;
     margin: auto;
     width: 0.44rem;
     height: 0.44rem;
}
.houseType-introduced-list-img-gif-div {
     display: inline-block;
     width: 0.6rem;
     height: 0.6rem;
     background: rgba(0, 0, 0, 0.2);
     border-radius: 100%;
}

.houseType-introduced {
     margin-bottom: 0.2rem;
}

.houseType-introduced-list {
     padding-bottom: 0.3rem;
}

.houseType-introduced-list ul li {
     margin-right: 0.4rem;
     width: 2.5rem;
     text-align: left;
}

.houseType-introduced-list ul li div {
     position: relative;
     width: 2.5rem;
     height: 1.82rem;
     background-size: cover;
}

.houseType-introduced-list ul li .housetype {
     margin-top: 0.15rem;
     font-family: PingFangSC-Medium;
     color: #212832;
     font-size: 0.28rem;
     line-height: 0.28rem;
}

.houseType-introduced-list ul li .size {
     margin-top: 0.15rem;
     font-family: PingFangSC-Regular;
     color: #8b949e;
     font-size: 0.22rem;
     line-height: 0.22rem;
}

.houseType-introduced-list ul li .pice {
     margin-top: 0.15rem;
     font-family: PingFangSC-Medium;
     color: #f56364;
     font-size: 0.24rem;
     line-height: 0.24rem;
}
</style>
