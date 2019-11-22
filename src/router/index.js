import Vue from 'vue'
import Router from 'vue-router'
import * as routerComponents from './routerComponents'
Vue.use(Router)

export default new Router({
    //     mode: 'history',
    routes: [{
            path: '/apprasial/:id/:uid',
            name: 'apprasial',
            component: routerComponents["APPRASIAL"]['component']
        },
        {
            path: '/error',
            name: '',
            component: routerComponents["ERROR"]['component'],
        },
        {
            path: '*',
            component: routerComponents["ERROR"]['component'],
        },
        //鹰眼测评
        {
            path: '/eagleEye/:cid',
            name: 'eagleEye',
            component: routerComponents["EAGLEEYE"]['component'],
        },
        //一户一档
        {
            path: '/houseHold',
            name: 'houseHold',
            component: routerComponents["HOUSEHOLD"]['component'],
            children: [
                //一户一档主页
                {
                    path: '/houseHold/home/:id/:typeid',
                    name: 'home',
                    component: routerComponents["HOME"]['component'],
                },
                //一户一档整体概况详情
                {
                    path: '/houseHold/general',
                    name: 'general',
                    component: routerComponents["GENERAL"]['component'],
                },
                //一户一档户内建设档案目录
                {
                    path: '/houseHold/record/:id',
                    name: 'record',
                    component: routerComponents["RECORD"]['component'],
                },
                //pdf
                {
                    path: '/houseHold/pdf',
                    name: 'pdf',
                    component: routerComponents["PDF"]['component'],
                },
                //video
                {
                    path: '/houseHold/video',
                    name: 'video',
                    component: routerComponents["VIDEO"]['component'],
                },
            ],
        },
        //报名预约领取专属福利
        {
            path: '/welfare',
            name: 'welfare',
            component: routerComponents["WELFARE"]['component'],
        },
        //数字化楼盘
        {
            path: '/numberHouse',
            name: 'numberHouse',
            component: routerComponents["NUMBERHOUSE"]['component'],
        },
        //全流程监控档案预约
        {
            path: '/appointment/:id',
            name: 'appointment',
            component: routerComponents["APPOINTMENT"]['component'],
            meta: {
                isToken: true
            },
        },
        //楼盘详情
        {
            path: '/obshare/:id/:platform',
            name: 'obshare',
            component: routerComponents["OBSHARE"]['component'],
        },
        //全景分享详情
        {
            path: '/panorama',
            name: 'panorama',
            component: routerComponents["PANORAMA"]['component'],
        },
        //鹰眼会员服务协议
        {
            path: '/serviceAgreement',
            name: 'serviceAgreement',
            component: routerComponents["SERVICEAGREEMENT"]['component'],
        },
        //鹰眼鉴房隐私协议
        {
            path: '/privacyAgreement',
            name: 'privacyAgreement',
            component: routerComponents["PRIVACYAGREEMENT"]['component']
        },
        //鹰眼会员连续包月协议
        {
            path: '/monthlyAgreement',
            name: 'monthlyAgreement',
            component: routerComponents["MONTHLYAGREEMENT"]['component'],
        },
        //提示下载全新APP页面
        {
            path: '/downNewApp',
            name: 'downNewApp',
            component: routerComponents["DOWNNEWAPP"]['component'],
        },
        //安全文明&金字塔
        {
            path: '/safetyCulture',
            name: 'safetyCulture',
            component: routerComponents["SAFETYCULTURE"]['component'],
        },
        //质量寻光计划黑匣子
        {
            path: '/qualityFind',
            name: 'QualityFind',
            component: routerComponents["QUALITYFIND"]['component'],
        },
        //VIP安全快车
        {
            path: '/vipFastRide',
            name: 'vipFastRide',
            component: routerComponents["VIPFASTRIDE"]['component'],
        },
        //vip支付
        {
            path: '/vipPay/:platform',
            name: 'vipPay',
            component: routerComponents["VIPPAY"]["component"]
        }
    ]
})