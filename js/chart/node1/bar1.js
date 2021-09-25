// bar chart display of 4 gas species
// 实例化对象
var bar1 = echarts.init(document.querySelector(".bar .chart"));

// 定义存放数据的变量与数据对应的颜色
//bar_h1, bar_n1, bar_fa1, bar_tol1 are the arrays that stores the incoming data
//time_bar is the array that stores timestamp, initialization is empty
//valuebarh1, valuebarn1, valuebarfa1, valuebartol1 are temperary variables to store ajax obtained h2 data of node1.
//node1time is temperary variable to store ajax obtained timestamp of node1.
//displaytimebar1 is temperary variable to store converting timestamp into a time data format and put it in xAxis
//colors are defined display color for each series of data, it is called in bar1_options
var colors = ['#ff726f', '#91CC75', '#d1a630', '#4c9bfd'];
var bar_h1 = [];
var valuebarh1 = null;
var bar_n1 = [];
var valuebarn1 = null;
var bar_fa1 = [];
var valuebarfa1 = null;
var bar_tol1 = [];
var valuebartol1 = null;
var time_bar = [];
var node1time = null;
var displaytimebar1 = null;

//node1 bar chart data push
function addData_node1bar_push()
{
  valuebarh1 = getH1;
  valuebarn1 = getN1;
  valuebarfa1 = getFA1;
  valuebartol1 = getTol1;
  node1time = sensortime*1000;
  var temptime = new Date(node1time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimebar1 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  bar_h1.push(valuebarh1);
  bar_n1.push(valuebarn1);
  bar_fa1.push(valuebarfa1);
  bar_tol1.push(valuebartol1);
  time_bar.push(displaytimebar1);
  //console.log("valuebartol1 = "+ valuebartol1);
}

//node1 bar chart data shift
function shiftdata_node1bar(shift)
{
  if (shift)
  {
    bar_h1.shift();
    bar_n1.shift();
    bar_fa1.shift();
    bar_tol1.shift();
    time_bar.shift();
  }
}

//refresh_bar1() is called in getData.js
function refresh_bar1() 
{
    if (bar_h1.length < 1 && bar_n1.length < 1 && bar_fa1.length < 1 && bar_tol1.length < 1) 
    {
      addData_node1bar_push();
    } 
    else 
    {     
      shiftdata_node1bar(true);
      addData_node1bar_push();    
    }
    if(valuebarh1 >= 1000)
    {
      var h1_Name = "H₂ Concentration(ppm)";
    }
    else if(valuebarh1 < 1000)
    {
      var h1_Name = "H₂ Concentration(ppb)";
    }
    if (valuebarn1 >= 1000 || valuebarfa1 >= 1000 || valuebartol1 >= 1000) 
    {
      var Name = "Concentration(ppm)";
    } 
    else if (valuebarn1 < 1000 || valuebarfa1 < 1000 || valuebartol1 < 1000) 
    {
      var Name = "Concentration(ppb)";
    } 
    else 
    {
       var Name = "Concentration";
    }

    //bar1 option setting of echart
    var bar1_option = 
    {
      title: 
      {
        text: 'Multiple Gas Monitoring - Node 1',
        textStyle: 
        {
          color: '#ffffff'
        }
      },
      color: colors,
      
      //tooltip for 4 series, the formatter needs to follow params[0], params[1],... to call different series inside the series object
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
        axisPointer: 
        {
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

      xAxis: 
      [
        {
          type: "category",
          data: [
            "Gases"
          ],
          //显示坐标轴刻度
          axisTick: 
          {
            show:false,
            alignWithLabel: true
          },
          //修改坐标轴标签
          axisLabel: 
          {
            color: "#ffffff",
            fontSize: "12"
          },
          //设置x坐标轴样式
          axisLine: 
          {
            show: true,
            lineStyle: 
              {
                color: '#ffffff',
              }
          }
        }
      ],

      yAxis: 
      [
        //设置左边的y轴显示
        {
          type: "value",
          name: Name,
          position: 'left',
          splitLine: 
          {
            show: false
          },
          //设置左边y轴的坐标轴标题
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
                else if(Name == "Concentration(ppb)")
                {
                  return value;
                }
            }
          },
          //设置左边y坐标轴格式
          axisLine: 
          {
            lineStyle: 
            {
              color: "#ffffff",
              //width: 2
            }
          },
         },
         //设置右边的y轴显示
        {
          type: "value",
          name: h1_Name,
          position: 'right',
          splitLine: 
          {
            show: false
          },
          //设置右边y轴的坐标轴标题
          axisLabel: {
            color: "#ffffff",
            fontSize: 12,
            formatter: function (val) 
            {
              if (h1_Name == "H₂ Concentration(ppm)") 
              {
                return val/1000;
              } 
              else if(h1_Name == "H₂ Concentration(ppb)")
              {
                return val;
              }
            }    
          },
          //设置右边y坐标轴格式
          axisLine: 
          {
            lineStyle: 
            {
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
          data: bar_n1,
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
          data: bar_fa1,
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
          name: "Toluene",
          type: "bar",
          barWidth: "10%",
          data: bar_tol1,
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
          name: "Hydrogen",
          type: "bar",
          yAxisIndex: 1,
          barWidth: "10%",
          data: bar_h1,
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
    bar1.setOption(bar1_option, true);

}

function resizeBar1() 
{
    // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () 
  {
    bar1.resize();
  });
}

function clearBar1() 
{
  bar_h1 = [];
  bar_n1 = [];
  bar_fa1 = [];
  bar_tol1 = [];
}
