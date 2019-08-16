<template>
     <section>
          <Nav :greenNavList="greenNavList" :firstType="3" :activeNum="activeNum*1"></Nav>
          <slot></slot>
     </section>
</template>
<script>
export default {
     components: {
          Nav: () => import('../nav/nav.vue')
     },
     props: ['activeNum'],
     data() {
          return {
               greenNavList: [
                    {
                         text: '规划',
                         id: 12,
                         icon: require('@/assets/img/apprasial/icon_guihua.png'),
                    },
                    {
                         text: '工程',
                         id: 13,
                         icon: require('@/assets/img/apprasial/icon_gongcheng.png'),
                    },
                    {
                         text: '景观',
                         id: 14,
                         icon: require('@/assets/img/apprasial/icon_jingguan.png'),
                    }
               ]

          }
     }
}
</script>

<style lang="scss" scoped>
</style>
