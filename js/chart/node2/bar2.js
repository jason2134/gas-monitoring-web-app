// bar chart display of 4 gas species
// 1实例化对象
var bar2 = echarts.init(document.querySelector(".bar .chart"));

// 定义存放数据的变量与数据对应的颜色
//bar_h2, bar_n2, bar_fa2, bar_tol2 are the arrays that stores the incoming data
//time_bar is the array that stores timestamp, initialization is empty
//valuebarh2, valuebarn2, valuebarfa2, valuebartol2 are temperary variables to store ajax obtained h2 data of node2.
//node2time is temperary variable to store ajax obtained timestamp of node2.
//displaytimebar2 is temperary variable to store converting timestamp into a time data format and put it in xAxis
//colors are defined display color for each series of data, it is called in bar2_option
var colors = ['#ff726f', '#91CC75', '#d1a630', '#4c9bfd'];
var bar_h2 = [];
var valuebarh2 = null;
var bar_n2 = [];
var valuebarn2 = null;
var bar_fa2 = [];
var valuebarfa2 = null;
var bar_tol2 = [];
var valuebartol2 = null;
var time_bar = [];
var node2time = null;
var displaytimebar2 = null;


//node2 bar chart data push
function addData_node2bar_push()
{
  valuebarh2 = getH2;
  valuebarn2 = getN2;
  valuebarfa2 = getFA2;
  valuebartol2 = getTol2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimebar2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  bar_h2.push(valuebarh2);
  bar_n2.push(valuebarn2);
  bar_fa2.push(valuebarfa2);
  bar_tol2.push(valuebartol2);
  time_bar.push(displaytimebar2);
  //console.log("valuebartol1 = "+ valuebartol1);
}

//node2 bar chart data shift
function shiftdata_node2bar(shift)
{
  if (shift)
  {
    bar_h2.shift();
    bar_n2.shift();
    bar_fa2.shift();
    bar_tol2.shift();
    time_bar.shift();
  }
}

//refresh_bar1() is called in getData.js, ops.js
function refresh_bar2() {
  if (bar_h2.length < 1 && bar_n2.length < 1 && bar_fa2.length < 1 && bar_tol2.length < 1) 
  {
    addData_node2bar_push();
  } 
  else 
  {     
    shiftdata_node2bar(true);
    addData_node2bar_push();    
  }
  if(valuebarh2 >= 1000)
  {
    var h2_Name = "H₂ Concentration(ppm)";
  }
  else if(valuebarh2 < 1000)
  {
    var h2_Name = "H₂ Concentration(ppb)";
  }
  if (valuebarn2 >= 1000 || valuebarfa2 >= 1000 || valuebartol2 >= 1000) 
  {
    var Name = "Concentration(ppm)";
  } 
  else if (valuebarn2 < 1000 || valuebarfa2 < 1000 || valuebartol2 < 1000) 
  {
    var Name = "Concentration(ppb)";
  } 
  else 
  {
     var Name = "Concentration";
  }
  
    var bar2_option = 
    {
      title: 
      {
        text: 'Multiple Gas Monitoring - Node 2',
        textStyle: 
        {
          color: '#ffffff'
        }
      },
      color: colors,

      tooltip: 
      {
        //坐标轴触发有效
        trigger: "axis",
        show:true,
        //series的写法决定了这个params是一个长度为4的array，并且顺序和在series中放置的顺序一致。
        //一定要在for loop 外return这个res，不然点击chart后不显示tooltip内容
        formatter: function (params) 
        {
          //if res=null; then "null" is shown on the webpage.
          var res = 'Info:' + '</br>';
          for(var i=0; i<params.length; i++)
          {
            if(params[i].value<1000)
            {
              res += params[i].seriesName + ' : ' + params[i].value + 'ppb'+'</br>';
            }
            else if(params[i].value>=1000)
            {
              res += params[i].seriesName + ' : ' + params[i].value/1000 + 'ppm'+'</br>';
            }
          }
          return res;
        },
        axisPointer: {
          // 坐标轴指示器，
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      //四种图例
      legend: 
      {
        top: "15%",
        width:"100%",
        itemWidth: 10,
        itemHeight: 10,
        data: 
        [
          {
            name: 'Nitrogen Dioxide',
            icon: 'roundRect',
            textStyle: 
            {
              color: colors[0]         // 图例文字颜色 
            }
          },
          {
            name: 'Formaldehyde',
            icon: 'roundRect',
            textStyle: 
            {
              color: colors[1]          // 图例文字颜色 
            }
          },
          {
            name: 'Toluene',
            icon: 'roundRect',
            textStyle: 
            {
              color: colors[2]          // 图例文字颜色 
            }
          },
          {
            name: 'Hydrogen',
            icon: 'roundRect',
            textStyle: 
            {
              color: colors[3]          // 图例文字颜色 
            }
          }

        ]
      },

      // 'Nitrogen Oxide', 'Formaldehyde', 'Toluene', 'Hydrogen'
      // 修改图表的大小
      grid: 
      {
        left: "10%",
        top: "45%",
        right: "15%",
        bottom: "0%",
        containLabel: true
      },
      //xAxis Setting
      xAxis: 
      [
        {
          type: "category",
          data: ["Gases"],
          axisTick: 
          {
            alignWithLabel: true
          },
          // 修改坐标轴标题格式
          axisLabel: {
            color: "#ffffff",
            fontSize: "12"
          },
          // 显示x坐标轴这条线
          axisLine: 
          {
            show: true,
            lineStyle:
            {
              color:"#ffffff",
            }
          }
        }
      ],
      //yAxis Setting
      yAxis: 
      [
        //左边y轴
        {
          type: "value",
          name: Name,
          position: 'left',
          splitLine: 
          {
            show: false
          },
          // 修改坐标轴标题
          axisLabel: 
          {
            color: "#ffffff",
            fontSize: 12,
            formatter: function (value) 
            {
              if (Name == "Concentration(ppm)") 
              {
                return value / 1000;
              } 
              else 
              {
                return value;
              }
            }
          },
          // y轴的线条设置
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              //width: 2
            }
          },
        },
        //右边y轴
        {
          type: "value",
          name: h2_Name ,
          position: 'right',
          splitLine: {
            show: false
          },
          // 修改坐标轴标题
          axisLabel: 
          {
            color: "#ffffff",
            fontSize: 12,
            formatter: function (val) 
            {
              if (h2_Name == "Concentration(H₂ /ppm)") 
              {
                return val / 1000;
              } 
              else 
              {
                return val;
              }
            }    
          },
          // y轴的线条设置
          axisLine: {
            lineStyle: {
              color: "#ffffff",
            }
          },
        }
      ],
      series: 
      [
        {
          name: "Nitrogen Dioxide",
          type: "bar",
          barWidth: "10%",
          data: bar_n2,
          itemStyle: 
          {
            // 修改柱子圆角
            barBorderRadius: 5
          },
          label: 
          {
            show: true, 
            position: 'top',
            color: "white",
            fontSize: 8,
            formatter: function (val) 
            {
              if (val.data>=1000) 
              {
                return Math.round(val.data/1000) + "ppm";
              }  
              else if (val.data<1000) 
              {
                 return  Math.round(val.data) + "ppb";
              }
            }
          }
        },
        {
          name: "Formaldehyde",
          type: "bar",
          barWidth: "10%",
          data: bar_fa2,
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
          label: 
          {
            show: true, 
            position: 'top',
            color: "white",
            fontSize: 8,
            formatter: function (val) 
            {
              if (val.data>=1000) 
              {
                return Math.round(val.data/1000) + "ppm";
              }  
              else if (val.data<1000) 
              {
                 return  Math.round(val.data) + "ppb";
              }
            }
          }
        },
        {
          name: "Toluene",
          type: "bar",
          barWidth: "10%",
          data: bar_tol2,
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
          label: 
          {
            show: true, 
            position: 'top',
            color: "white",
            fontSize: 8,
            formatter: function (val) 
            {
              if (val.data>=1000) 
              {
                return Math.round(val.data/1000) + "ppm";
              }  
              else if (val.data<1000) 
              {
                return  Math.round(val.data) + "ppb";
              }
            }
          }
        },
        {
          name: "Hydrogen",
          type: "bar",
          yAxisIndex: 1,
          barWidth: "10%",
          data: bar_h2,
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
          label: 
          {
            show: true, 
            position: 'top',
            color: "white",
            fontSize: 8,
            formatter: function (val) 
            {
              if (val.data>=1000) 
              {
                return Math.round(val.data/1000) + "ppm";
              }  
              else if (val.data<1000) 
              {
                 return  Math.round(val.data) + "ppb";
              }
            }
          }
        }
      ]
    };
    // 3. 把配置项给实例对象
    bar2.setOption(bar2_option, true);

}

function resizeBar2() {
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    bar2.resize();
  });
}

function clearBar2() {
  bar_h2 = [];
  bar_n2 = [];
  bar_fa2 = [];
  bar_tol2 = [];
}
