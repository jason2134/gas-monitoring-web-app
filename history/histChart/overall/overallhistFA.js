//Overall history line chart display of FA in all Nodes
var overallhistfa = echarts.init(document.querySelector(".fa .chart"))

function refreshoverallhistFA() {
  procFA();
  var data1 = node1fa_procArr;
  var data2 = node2fa_procArr;
  var data3 = node3fa_procArr;
  var data4 = node4fa_procArr;
  
  var Name;
  if (data1[data1.length-1] >=1000) {
    Name = "Concentration(ppm)";
  } else if (data1[data1.length-1] < 1000) {
     Name = "Concentration(ppb)";
  } else {
    Name = "Concentration(ppb)";
  }

  
 let overallhistfaoption = 
 {
    color:  ['#ff726f', '#91CC75', '#d1a630', '#4c9bfd'],
    title: 
    {
      text: 'Overall Formaldehyde',
      textStyle: {
        color: '#ffffff'
      }
    },
    //tooltip
    tooltip: 
    {
      show: true,
      trigger: 'axis',
      formatter: function (params) 
        {
          
        },
      axisPointer: {
        animation: false
      }
    },
    legend: 
    {
      top: "15%",
      left:"30%",
      width:"100%",
      itemWidth: 10,
      itemHeight: 10,
      data: 
      [
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
    //xAxis Setting
    xAxis: {
     // type: 'time',
      type: 'category',
      data:overallfahistTime,
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
      name: Name,
      type: 'value',
      boundaryGap: [0, '100%'],
      splitLine: {
        show: false
      },
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
          if (Name == "Concentration(ppm)") {
            return val / 1000;
          } else if (Name == "Concentration(ppb)") {
            return val;
          }
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
  overallhistfa.setOption(overallhistfaoption, true);
  window.addEventListener("resize", function () 
    {
      overallhistfa.resize();
    });

}
