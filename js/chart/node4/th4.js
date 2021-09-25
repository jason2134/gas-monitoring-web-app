
// 1. 实例化对象
var temphum4 = echarts.init(document.querySelector(".tempHumid .chart"));

//data_temp4 is the array that stores the temp data from ajax
//data_humid4 is the array that stores the humid data from ajax
//time_temp4, time_humid4 is the array that stores timestamp, initialization is empty
//valuetemp4; valuehumid4 is temperary variable to store ajax obtained temp+humid data of node4.
//node4time is temperary variable to store ajax obtained timestamp of node4.
//displaytimetemp4, displaytimehumid4 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_temp4 = [];
var data_humid4 = [];
var valuetemp4 = null;
var valuehumid4 = null;
var time_temp4 = [];
var time_humid4 = [];
var node4time = null;
var displaytimetemp4 = null;
var displaytimehumid4 = null;

//node4 temp data push
function addData_node4temp_push()
{
  valuetemp4 = getTemp4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetemp4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_temp4.push(valuetemp4);
  time_temp4.push(displaytimetemp4);
  //console.log("displaytimetemp4"+displaytimetemp4);
}

//node4 humid data push
function addData_node4humid_push()
{
  valuehumid4 = getHumid4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimehumid4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_humid4.push(valuehumid4);
  time_humid4.push(displaytimehumid3);
}

//node4 temp data shift
function shiftdata_node4temp(shift)
{
  if (shift)
  {
    data_temp4.shift();
    time_temp4.shift();
  }
}

//node4 humid data shift
function shiftdata_node4humid(shift)
{
  if (shift)
  {
    data_humid4.shift();
    time_humid4.shift();
  }
}

function refresh_temp4() {
  if (data_temp4.length < 4) 
  {
    addData_node4temp_push();
  } 
  else 
  {
    shiftdata_node4temp(true);
    addData_node4temp_push();
  }

  
  if (data_humid4.length < 4) 
  {
    addData_node4humid_push();
  } 
  else 
  {
    shiftdata_node4humid(true);
    addData_node4humid_push();
  }
   
    // 更新数据后push进data数据
    var thColor = ["#e81031", "#5da5b3"];
    let temphum4_option = {
      color: thColor,
      title: 
      {
        text: 'Temperature and Humidity - Node 4',
        show:true,
        textStyle: {
          color: '#ffffff',
        }
      },
      legend: {
        top: "15%",
        itemWidth: 10,
        itemHeight: 10,
        data: 
        [
          {
            name: 'Temperature',
            icon: 'roundRect',
            textStyle: {
              color: "#e81031"        // 图例文字颜色 
            }
          },
          {
            name: 'Humidity',
            icon: 'roundRect',
            textStyle: {
              color: "#5da5b3"          // 图例文字颜色 
            }
          }
        ]
      },
      //tooltip
      tooltip: 
      {
        trigger: 'axis',
        show:false,
        axisPointer: {
          animation: false
        }
      },
      grid: 
      {
        top: "25%",
        left: "15%",
        right: "15%",
        bottom: "15%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      //xAxis Setting
      xAxis: 
      {
        type: 'category',
        nameLocation: "middle",
        name: "Time",
        splitLine: 
        {
            show: false
        },
        axisLine: 
        {
          show:true,
          lineStyle:
           {
              color: '#ffffff'
            }
        },
        axisTick: {
        show:false
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
        data:time_temp4,
        triggerEvent: true
      },
      //yAxis Setting
      yAxis: 
      [{
        type: 'value',
        offset:0,
        name:'Temperature(°C)',
        boundaryGap:true,
      //  boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
         min: 15,
         max: 40,
        axisLine: {
             lineStyle: {
              color: "#ffffff",
          },
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#ffffff',
          show: true
        }
       },
       {
          type: 'value',
          offset:0,
          name:'RH(%)',
          position: 'right',  
        //boundaryGap: true,
          splitLine: {
            show: false
          },
        // min: 25,
        // max: 35,
          max: 100,
          axisLine: 
          {
           lineStyle: {
            color: "#ffffff",
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#ffffff",
            show: true,
          }
      }],

      series: [
      {
        name: 'Temperature',
        type: 'line',
        label: 
        {
          show: false, 
          position: 'top',
          //offset:[15,0],
          color: "white",
          fontSize: 8,
          formatter: function (val) 
          {
                return Math.round(val.data) + "°C";
          }
        },
          showSymbol: true,
          hoverAnimation: false,
          data: data_temp4
      },
      {
        name: 'Humidity',
        type: 'line',
        label: 
        {
          show: false, 
          position: 'bottom',
         // offset:[15,0],
          color: "white",
          fontSize: 8,
          formatter: function (val) 
          {
            return Math.round(val.value) + "%";
          }
        },
        yAxisIndex: 1,
        showSymbol:true,
        hoverAnimation: false,
        data: data_humid4
      }]
    };
    // 更新echarts图表
    temphum4.setOption(temphum4_option, true);
}

function resizeTH4() {
    window.addEventListener("resize", function () {
    temphum4.resize();
  });
}

function clearTH4() {
  data_temp4 = [];
  data_humid4 = [];
  time_temp4 = [];
}
