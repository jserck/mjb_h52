<template>
     <section>
          <Nav :greenNavList="greenNavList" :firstType="1" :activeNum="activeNum*1"></Nav>
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
                         text: '项目',
                         id: 1,
                         icon: require('@/assets/img/apprasial/icon_xiangmu.png'),
                    },
                    {
                         text: '景观',
                         id: 2,
                         icon: require('@/assets/img/apprasial/icon_jingguan.png'),
                    },
                    {
                         text: '建筑',
                         id: 3,
                         icon: require('@/assets/img/apprasial/icon_jianzhu.png'),
                    },
                    {
                         text: '户型',
                         id: 15,
                         icon: require('@/assets/img/apprasial/icon_huxing.png'),
                    },
                    {
                         text: '物业',
                         id: 4,
                         icon: require('@/assets/img/apprasial/icon_wuye.png'),
                    },
                    {
                         text: '装修',
                         id: 5,
                         icon: require('@/assets/img/apprasial/icon_zhuangxiu.png'),
                    },
               ]

          }
     }
}
</script>

<style lang="scss" scoped>
</style>
