<template>
     <section>
          <Nav :greenNavList="greenNavList" :firstType="2" :activeNum="activeNum*1"></Nav>
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
                         text: '地段',
                         id: 6,
                         icon: require('@/assets/img/apprasial/icon_diduan.png'),
                    },
                    {
                         text: '周边',
                         id: 7,
                         icon: require('@/assets/img/apprasial/icon_zhoubian.png'),
                    },
                    {
                         text: '商业',
                         id: 8,
                         icon: require('@/assets/img/apprasial/icon_shangye.png'),
                    },
                    {
                         text: '教育',
                         id: 9,
                         icon: require('@/assets/img/apprasial/icon_jiaoyu.png'),
                    },
                    {
                         text: '医疗',
                         id: 10,
                         icon: require('@/assets/img/apprasial/icon_yiliao.png'),
                    },
                    {
                         text: '风险',
                         id: 11,
                         icon: require('@/assets/img/apprasial/icon_fengxian.png'),
                    },
               ]

          }
     }
}
</script>

<style lang="scss" scoped>
</style>
