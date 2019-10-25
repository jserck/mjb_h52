<template>
     <div>
          <a class="obshareBtn" :href="$url.appDown"></a>
     </div>
</template>
<style scoped>
.obshareBtn {
     background: #fff;
     width: 100%;
     /* max-width: 7.5rem; */
     height: 1.18rem;
     position: fixed;
     bottom: 0;
     background: url("~@/assets/img/common/appDownBtn.png") no-repeat center
          center;
     /* background: #000; */
     background-size: 100% 100%;
     z-index: 999;
}
</style>
