// bar chart display of 4 gas species
// 1实例化对象
var bar4 = echarts.init(document.querySelector(".bar .chart"));

// 定义存放数据的变量与数据对应的颜色
//bar_h4, bar_n4, bar_fa4, bar_tol4 are the arrays that stores the incoming data
//time_bar is the array that stores timestamp, initialization is empty
//valuebarh4, valuebarn4, valuebarfa4, valuebartol4 are temperary variables to store ajax obtained datas of node4.
//node4time is temperary variable to store ajax obtained timestamp of node4.
//displaytimebar4 is temperary variable to store converting timestamp into a time data format and put it in xAxis
//colors are defined display color for each series of data, it is called in bar4_option
var colors = ['#ff726f', '#91CC75', '#d1a630', '#4c9bfd'];
var bar_h4 = [];
var valuebarh4 = null;
var bar_n4 = [];
var valuebarn4 = null;
var bar_fa4 = [];
var valuebarfa4 = null;
var bar_tol4 = [];
var valuebartol4 = null;
var time_bar = [];
var node4time = null;
var displaytimebar4 = null;

  



//node4 bar chart data push
function addData_node4bar_push()
{
  valuebarh4 = getH4;
  valuebarn4 = getN4;
  valuebarfa4 = getFA4;
  valuebartol4 = getTol4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimebar4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  bar_h4.push(valuebarh4);
  bar_n4.push(valuebarn4);
  bar_fa4.push(valuebarfa4);
  bar_tol4.push(valuebartol4);
  time_bar.push(displaytimebar4);
  //console.log("valuebartol3 = "+ valuebartol3);
}

//node4 bar chart data shift
function shiftdata_node4bar(shift)
{
  if (shift)
  {
    bar_h4.shift();
    bar_n4.shift();
    bar_fa4.shift();
    bar_tol4.shift();
    time_bar.shift();
  }
}

function refresh_bar4() {
   
   
  if (bar_h4.length < 1 && bar_n4.length < 1 && bar_fa4.length < 1 && bar_tol4.length < 1) 
  {
    addData_node4bar_push();
  } 
  else 
  {     
    shiftdata_node4bar(true);
    addData_node4bar_push();    
  }
  if(valuebarh4 >= 1000)
  {
    var h4_Name = "H₂ Concentration(ppm)";
  }
  else if(valuebarh4 < 1000)
  {
    var h4_Name = "H₂ Concentration(ppb)";
  }
  if (valuebarn4 >= 1000 || valuebarfa4 >= 1000 || valuebartol4 >= 1000) 
  {
    var Name = "Concentration(ppm)";
  } 
  else if (valuebarn4 < 1000 || valuebarfa4 < 1000 || valuebartol4 < 1000) 
  {
    var Name = "Concentration(ppb)";
  } 
  else 
  {
     var Name = "Concentration";
  }
    var bar4_option = 
    {
      title: 
      {
        text: 'Multiple Gas Monitoring - Node 4',
        textStyle: 
        {
          color: '#ffffff'
        }
      },
      color: colors,
      //tooltip
      tooltip: {
        //坐标轴触发有效
        trigger: "axis",
        show:true,
        //series的写法决定了这个params是一个长度为4的array，并且顺序和在series中放置的顺序一致。
        //in series, from [0]--[3] are NO2, FA, Tol, H2
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

      legend: {
        top: "15%",
        width:"100%",
        itemWidth: 10,
        itemHeight: 10,
        data: 
        [
          {
            name: 'Nitrogen Dioxide',
            icon: 'roundRect',
            textStyle: {
              color: colors[0]         // 图例文字颜色 
            }
          },
          {
            name: 'Formaldehyde',
            icon: 'roundRect',
            textStyle: {
              color: colors[1]          // 图例文字颜色 
            }
          },
          {
            name: 'Toluene',
            icon: 'roundRect',
            textStyle: {
              color: colors[2]          // 图例文字颜色 
            }
          },
          {
            name: 'Hydrogen',
            icon: 'roundRect',
            textStyle: {
              color: colors[3]          // 图例文字颜色 
            }
          }
        ]
      },

      // 'Nitrogen Oxide', 'Formaldehyde', 'Toluene', 'Hydrogen'
      // 修改图表的大小
      grid: {
        left: "10%",
        top: "45%",
        right: "15%",
        bottom: "0%",
        containLabel: true
      },
      //xAxis Setting
      xAxis: [
        {
          type: "category",
          data: [  "Gases"],
          axisTick: {
            alignWithLabel: true,
            show:false,
          },
          //坐标轴标题
          axisLabel: {
            color: "#ffffff",
            fontSize: "12"
          },
          //显示x坐标轴这条线
          axisLine: {
            show: true,
            lineStyle:
            {
              color:"#ffffff",
            }
          }
        }
      ],
      //yAxis Setting
      yAxis: [
        //左边y轴
        {
          type: "value",
          name: Name,
          position: 'left',
          splitLine: {
            show: false
        },
          // 坐标轴标题
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
          // y轴的线条
          axisLine: {
            lineStyle: {
              color: "#ffffff",
              //width: 2
            }
          },

        },
        {
          type: "value",
          name: h4_Name ,
          position: 'right',
          splitLine: {
            show: false
          },
          // 坐标轴标题
          axisLabel: 
          {
            color: "#ffffff",
            fontSize: 12,
            formatter: function (val) 
            {
              if (h4_Name == "Concentration(H₂ /ppm)") 
              {
                return val / 1000;
              } 
              else 
              {
                return val;
              }
            }    
          },
          // y轴的线条
          axisLine: {
            lineStyle: {
              // color: colors[1],
              //width: 2
              color: "#ffffff",
            }
          },

        }
      ],
      series: [
        {
          name: "Nitrogen Dioxide",
          type: "bar",
          barWidth: "10%",
          data: bar_n4,
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
          name: "Formaldehyde",
          type: "bar",
          barWidth: "10%",
          data: bar_fa4,
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
          data: bar_tol4,
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
          data: bar_h4,
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
          label: 
          {
            show: true, position: 'top',
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
    bar4.setOption(bar4_option, true);
}

function resizeBar4() {
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    bar4.resize();
  });
}

function clearBar4() {
  bar_h4 = [];
  bar_n4 = [];
  bar_fa4 = [];
  bar_tol4 = [];
}
