<template>
     <article class="m-rule-list">
          <section class="g-rule-list-con">
               <ul>
                    <li class="displayFlex flexJustifybetween marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_01.png" alt />
                         </i>
                         <p>用户在线提交手机号以及所在城市信息即可预约领取鹰眼鉴房特供优惠券；</p>
                    </li>
                    <li class="displayFlex flexJustifybetween marginBottom">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_02.png" alt />
                         </i>
                         <p>预约成功后，使用预约手机号快速登陆齐家网，至个人中心查询优惠券；</p>
                    </li>
                    <li class="displayFlex flexJustifybetween">
                         <i>
                              <img src="@/assets/img/welfare/num/icon_03.png" alt />
                         </i>
                         <p>优惠券自动与手机号绑定，一个手机号仅限申请一次。</p>
                    </li>
               </ul>
               <slot></slot>
          </section>
     </article>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.m-rule-list {
     .g-rule-list-con {
          ul {
               li {
                    font-size: 0.28rem;
                    color: #4d535d;
                    letter-spacing: 0;
                    line-height: 0.42rem;
                    p {
                         max-width: 5.3rem;
                    }
                    i {
                         display: inline-block;
                         margin-top: 0.07rem;
                         width: 0.25rem;
                         height: 0.25rem;
                         background: #0080ff;
                         border-radius: 0.25rem;
                         font-size: 0.144rem;
                         color: #ffffff;
                         letter-spacing: 0.0128rem;
                         text-align: center;
                         line-height: 0.25rem;
                    }
               }
          }
     }
     .marginBottom {
          margin-bottom: 0.31rem;
     }
}
</style>
