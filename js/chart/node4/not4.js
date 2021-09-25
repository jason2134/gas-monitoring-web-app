// 1. 实例化对象
var not4 = echarts.init(document.querySelector(".nitrogenOxide .chart"));

//data_n4 is the array that stores the incoming data
//time_n4 is the array that stores timestamp, initialization is empty
//valuen4 is temperary variable to store ajax obtained no2 data of node4.
//node4time is temperary variable to store ajax obtained timestamp of node4.
//displaytimen4 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_n4 = [];
var time_n4 = [];
var valuen4 = null;
var node4time = null;
var displaytimen4 = null;

//node4 no2 data push
function addData_node4no2_push()
{
  valuen4 = getN4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimen4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_n4.push(valuen4);
  time_n4.push(displaytimen4);
}

//node4 no2 data shift
function shiftdata_node4no2(shift)
{
  if (shift)
  {
    data_n4.shift();
    time_n4.shift();
  }
}

function refresh_not4() {
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_n4.length < 4) 
    {
      //调用push函数
      addData_node4no2_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
        if (valuen4 >= 1000) 
        {
          Name = "Concentration(ppm)";
        } 
        else 
        {
          Name = "Concentration(ppb)";
        }
    } 
    else 
    {
        shiftdata_node4no2(true);
        addData_node4no2_push();
        var Name;
        if (valuen4 >= 1000) 
        {
          Name = "Concentration(ppm)";
        } 
        else 
        {
          Name = "Concentration(ppb)";
        }
      }

    //console.log(data_n4)
    // 更新数据后push进data数据
    let not4_option = 
    {
      color:'#ff726f',
      title: {
        text: 'Nitrogen Dioxide - Node 4',
        textStyle: {
          color: '#ffffff'
        }
      },
      //tooltip
      tooltip: 
      {
        show:true,
        trigger: 'axis',
        formatter: function (params) 
        {
          if (params[0].value >= 1000) 
          {
            return params[0].seriesName + ' : ' + params[0].value / 1000 + 'ppm';
          } 
          else if (params[0].value < 1000) 
          {
            return params[0].seriesName + ' : ' + params[0].value + 'ppb';
          }
        },
        axisPointer: {
          animation: false
        }
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
      /* grid: {
         x: 35,
         y: 35,
         x2: 35,
         y2: 3
       },*/
       //xAixs Seeting
       xAxis: 
       {
        type: 'category',
        name:"Time",
        splitLine: {
            show: false
        },
        // type: 'category',
        //data: T,
        //split number defines how the values showed in y is split eg. if splitNumber = 30, then the display on y-axis is [30,60,90,120...]
        axisLine: 
        {
              lineStyle: {
              color: '#ffffff'
            }
        },
        axisTick: {
          show: false
        },
        //设置坐标轴文字显示
        axisLabel: {
          color: "#ffffff",
          show: true,
          textStyle:
          {
            color:'white',
            fontSize:8,
          },
        },
        data:time_n4,
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
        axisLine: {
             lineStyle: {
              color: '#ffffff'
            }
        },
        axisTick: {
          show: false
        },
        axisLabel: 
        {
          color: "#ffffff",
            formatter: function (val) {
            if (Name == "Concentration(ppm)")
            {
               return val / 1000;
            } 
            else if (Name == "Concentration(ppb)") 
            {
              return val; 
            }
         }
          // show: true
        }
      },
      series: [{
        name: 'Nitrogen Oxide',
        type: 'line',
        label: 
        {
          show: true, 
          position: 'top',
          offset:[15,0],
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
        },
        showSymbol: true,
        hoverAnimation: false,
        data: data_n4,
      }]
    };
    // 更新echarts图表
    not4.setOption(not4_option, true);
}

function resizeNOT4() {
    window.addEventListener("resize", function () {
    not4.resize();
  });
}

function clearNOT4() {
  data_n4 = [];
  time_n4 = [];
}
