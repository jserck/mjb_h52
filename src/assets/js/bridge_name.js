//*******************APPTOJS***********************
export const TESTJSFUNCTION = 'testJSFunction'; //APP主动传输token传输tokenAZ
export const TESTJSFUNCTIONS = 'testJSFunctions'; //APP主动传输token传输tokenIOS
export const GETUNITYURL = 'getUnityUrl'; //获取unity URL
//*******************JSTOAPP***********************
//iphData:{type:1},azData:'143'
export const INVITATIONSHAREACTION = 'invitationShareAction'; //单个分享
//iphData:{message:'143'},azData:'143'
export const GOBACKACTION = 'goBackAction'; //返回APP（iph）
export const CALLANDROIDFINISH = 'callAndroidFinish'; //返回APP（az）
//iphData:{shareUrl:'143',shareTitle:'haha',shareContent:'hahahahha',message:'heihei'},azData:'143'
export const SHAREACTION = 'shareAction'; //分享面板（iph）
export const CALLANDROIDSHARE = 'callAndroidShare'; //分享面板（az）
//iphData:{message:'login'},azData:'143'
export const LOGINACTION = 'loginAction'; //调用APP端登陆（iph）
export const CALLANDROID = 'callAndroid'; //调用APP端登陆（az）
//iphData:{propertyId:'143'},azData:{propertyId:'143'}
export const HREFHOUSE = 'hrefHouse'; //跳转到楼盘详情
export const UIDJSFUNCTIONS = 'uidJsFunctions'; //获取全局 UID
//iphFn:'toPropertyList',iphData:{menuId:'143'},azData:'143'
export const TOPROPERTYLIST = 'toPropertyList'; //楼盘列表页跳转
//iphFn:'toVrList',iphData:{propertyName:'name',propertyId:'143'},azData:['hah','143']
export const TOVRLIST = 'toVrList'; //全景列表页
//iphFn:'toDisparkSite',iphData:{propertyId:'143',propertyName:'11'},azData:'143'
export const TODISPARKSITE = 'toDisparkSite'; //开放工地详情页
//iphFn:'toHouseTypeDetail',iphData:{apartmentId:'143',propertyId:'143'},azData:['143','dfdf']
export const TOHOUSETYPEDETAIL = 'toHouseTypeDetail'; //户型详情页
//iphFn:'toHouseTypeList',iphData:{propertyId:'143'},azData:'143'
export const TOHOUSETYPELIST = 'toHouseTypeList'; //户型列表页
//iphFn:'toChatRoom',iphData:{propertyId:'143',propertyName:'321'},azData:['143','124']
export const TOCHATROOM = 'toChatRoom'; //业主圈聊天详情
//iphFn:'toChatRoomList',iphData:{id:'143'},azData:'143'
export const TOCHATROOMLIST = 'toChatRoomList'; //业主圈列表
//iphFn:'toAttentionList',iphData:{id:'143'},azData:'143'
export const TOATTENTIONLIST = 'toAttentionList'; //关注楼盘列表
//iphFn:'toMyMessage',iphData:{id:'143'},azData:'143'
export const TOMYMESSAGE = 'toMyMessage'; //我的消息页面
//iphFn:'toMyService',iphData:{id:'143'},azData:'143'
export const TOMYSERVICE = 'toMyService'; //我的服务页面
//iphFn:'toFindPropertyFromMap',iphData:{id:'143'},azData:'143'
export const TOFINDPROPERTYFROMMAP = 'toFindPropertyFromMap'; //地图找房页面
//iphFn:'toLawQuestion',iphData:{imageUrl:'143'},azData:'143'
export const TOLAWQUESTION = 'toLawQuestion' //法律咨询页面