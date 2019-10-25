<template>
     <div class="echarts">
          <div id="myChart" style="width:100%;height:4rem;margin:auto"></div>
     </div>
</template>
<script>
//   引入基本模板
let echarts = require('echarts/lib/echarts');
// 引入柱状图组件
require("echarts/lib/chart/line");
// 引入提示框和title组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/dataZoom');
export default {
     data() {
          return {
               xList: [],
               oneData: [],
               twoData: [],
               yList: [0, 2, 8]
          }
     },
     props: {
          data: null,
     },
     created() {
          this.createData(this.data);
     },
     mounted() {
          this.drawLine();
     },
     methods: {
          max_(arr) {
               var num = arr[0];
               for (var i = 0; i < arr.length; i++) {
                    if (num < arr[i]) {
                         num = arr[i]
                    }
               }
               return num;
          },
          createData(arr) {
               let len = arr.length;
               for (let i = 0; i < len; i++) {
                    let month = arr[i].month || 0;
                    let oneData = arr[i].businessPrice || 0;
                    let twoData = arr[i].propertyPrice || 0;
                    this.xList.push(month);
                    this.oneData.push(oneData);
                    this.twoData.push(twoData);
               }
          },
          drawLine() {
               // 基于准备好的dom，初始化echarts实例
               let myChart = echarts.init(document.getElementById('myChart'));
               // 绘制图表
               myChart.setOption({
                    baseOption: {
                         title: { text: '' },
                         tooltip: {
                              trigger: 'axis'
                         },
                         legend: {
                              data: ['本楼盘房价', '丰台商业圈新房']
                         },
                         aria: {
                              show: false
                         },
                         grid: {
                              top: "10%",
                              left: "20%",
                              right: "15px",
                              bottom: "50px",
                              width: '70%'
                         },


                         // color:['#81b22f','#f3d71c','#f4b9a9'],
                         xAxis: {
                              max: 'dataMax',
                              splitLine: {
                                   show: true
                              },
                              splitLine: {
                                   show: false
                              },
                              axisTick: {
                                   show: false,
                                   alignWithLabel: true,
                              },
                              axisLine: {
                                   lineStyle: {
                                        color: '#F9FAFF',
                                        width: 3
                                   }
                              },
                              splitArea: {
                                   show: true,
                                   areaStyle: {
                                        color: ['#fff', '#F9FAFF', '#fff', '#F9FAFF', '#fff', '#F9FAFF']
                                   }
                              },
                              axisLabel: {
                                   color: '#8B949E',
                                   interval: 0,
                              },
                              // splitNumber: 5,
                              data: this.xList
                         },
                         yAxis: [{
                              interval: this.max_(this.oneData) / 2,
                              splitLine: {
                                   show: false
                              },
                              axisTick: {
                                   show: false
                              },
                              axisLine: {
                                   lineStyle: {
                                        color: '#8B949E',
                                        width: 0
                                   }
                              },
                              axisLabel: {
                                   color: '#8B949E'
                              },
                              max: (this.max_(this.oneData) * 1.5).toFixed(2),
                              min: 0.,

                              // data: this.yList,
                              axisLabel: {
                                   formatter: function (value, index) {
                                        if (value == 0) {
                                             return "";
                                        } else {
                                             return `${value}W`;
                                        }

                                   }

                              },
                              axisPointer: {
                                   snap: true
                              }
                         }, {
                              interval: this.max_(this.oneData) / 2,
                              splitLine: {
                                   show: false
                              },
                              axisTick: {
                                   show: false
                              },
                              axisLine: {
                                   lineStyle: {
                                        color: '#8B949E',
                                        width: 0
                                   }
                              },
                              axisLabel: {
                                   color: '#8B949E'
                              },
                              max: (this.max_(this.oneData) * 1.5).toFixed(2),
                              min: 0,

                              // data: this.yList,
                              axisLabel: {
                                   formatter: function (value, index) {
                                        if (value == 0) {
                                             return "";
                                        } else {
                                             return `${value}W`;
                                        }

                                   }
                              },
                              axisPointer: {
                                   snap: true
                              }
                         }],
                         symbol: "",
                         symbolSize: 50,
                         dataZoom: [
                              {
                                   type: 'slider',
                                   show: false,
                                   xAxisIndex: [0],
                                   start: 0,
                                   end: 25
                              },
                              {
                                   type: 'inside',
                                   xAxisIndex: [0],
                                   start: 0,
                                   end: 25
                              }
                         ],
                         series: [{
                              name: '本楼盘房价',
                              type: 'line',
                              lineStyle: {
                                   normal: {
                                        width: 3,
                                        color: '#FFA79C'
                                   }
                              },
                              data: this.oneData,
                              symbol: 'image:///static/obshare/icon_shijianzhou@3x.png',
                              symbolSize: '15'
                         }, {
                              name: '丰台商业圈新房',
                              type: 'line',
                              lineStyle: {
                                   normal: {
                                        width: 3,
                                        color: '#D8E6FE'
                                   }
                              },
                              data: this.twoData,
                              symbol: 'image:///static/obshare/icon_shijianzhoucopy3@3x.png',
                              symbolSize: '15'
                         }]
                    },
                    media: [
                         {
                              query: { maxWidth: 630 },
                              option: {
                                   grid: {
                                        top: "7%",
                                        left: "15%",
                                        width: '70%',
                                        height: "70%"
                                   },
                                   dataZoom: [
                                        {
                                             type: 'slider',
                                             show: false,
                                             xAxisIndex: [0],
                                             start: 0,
                                             end: 40
                                        },
                                        {
                                             type: 'inside',
                                             xAxisIndex: [0],
                                             start: 0,
                                             end: 40
                                        }
                                   ],
                                   series: [{
                                        name: '本楼盘房价',
                                        type: 'line',
                                        lineStyle: {
                                             normal: {
                                                  width: 2,
                                                  color: '#FFA79C'
                                             }
                                        },
                                        yAxisIndex: 0,
                                        data: this.oneData,
                                        symbol: 'image:///static/obshare/icon_shijianzhou@3x.png',
                                        symbolSize: '10'
                                   }, {
                                        name: '丰台商业圈新房',
                                        type: 'line',
                                        yAxisIndex: 0,
                                        lineStyle: {
                                             normal: {
                                                  width: 2,
                                                  color: '#D8E6FE'
                                             }
                                        },
                                        data: this.twoData,
                                        symbol: 'image:///static/obshare/icon_shijianzhoucopy3@3x.png',
                                        symbolSize: '10'
                                   }]
                              }
                         },
                    ]
               });
          }
     }
}
</script>

<style scoped>
.echarts {
     height: 100%;
     width: 100%;
}
</style>
