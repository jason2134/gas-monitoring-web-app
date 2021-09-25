//Overall history line chart display of Humidity in all Nodes
var overallhisthumid = echarts.init(document.querySelector(".humid .chart"));

function refreshoverallhistHumid() 
{
  procHumid();
  var data1 = node1humid_procArr;
  var data2 = node2humid_procArr;
  var data3 = node3humid_procArr;
  var data4 = node4humid_procArr;
  


 let overallhisthumidoption = 
 {
    color:  ['#ff726f', '#91CC75', '#d1a630', '#4c9bfd'],
    title: 
    {
      text: 'Overall Humidity',
      textStyle: {
        color: '#ffffff'
      }
    },
    //tooltip
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: function (params) 
      {
       
      },
      axisPointer: {
        animation: false
      }
   },
    legend: {
      top: "15%",
      left:"30%",
      width:"100%",
      itemWidth: 10,
      itemHeight: 10,
      data: [
        {
          name: 'Node 1',
          icon: 'roundRect',
          textStyle: {
            color: '#ff726f'         // 图例文字颜色 
          }
        },
        {
          name: 'Node 2',
          icon: 'roundRect',
          textStyle: {
            color: '#91CC75'          // 图例文字颜色 
          }
        },
        {
          name: 'Node 3',
          icon: 'roundRect',
          textStyle: {
            color: '#d1a630'         // 图例文字颜色 
          }
        },
        {
          name: 'Node 4',
          icon: 'roundRect',
          textStyle: {
            color: '#4c9bfd'          // 图例文字颜色 
          }
        }
      ]
      },
    grid: {
      top: "30%",
      left: "10%",
      right: "15%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    //xAixs Setting
    xAxis: {
      type: 'category',
      data:overallhumidhistTime,
      name: "Time",
      splitLine: {
        show: false
      },
      //split number defines how the values showed in y is split eg. if splitNumber = 30, then the display on y-axis is [30,60,90,120...]

      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#ffffff",
        show: true
      },

      triggerEvent: true
    },
    //yAxis Setting
    yAxis: {
      name: 'RH(%)',
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
      min: 0,
         max: 100,
      // max:100,
      axisLine: {
        lineStyle: {
          color: '#ffffff'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#ffffff",
        formatter: function (val) {
          return val;
        }
         //show: false
      }
    },
    series: 
    [{
      name: 'Node 1',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data1,
      },
      {
      name: 'Node 2',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data2,
      },
      {
      name: 'Node 3',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data3,
      },
      {
      name: 'Node 4',
      type: 'line',
      showSymbol: false,
      hoverAnimation: false,
      data: data4,
    }]
  };
  // 更新echarts图表
  overallhisthumid.setOption(overallhisthumidoption, true);
    window.addEventListener("resize", function () 
    {
      overallhisthumid.resize();
    });
}
