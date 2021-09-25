
// 1. 实例化对象
var temphum3 = echarts.init(document.querySelector(".tempHumid .chart"));

//data_temp3 is the array that stores the temp data from ajax
//data_humid3 is the array that stores the humid data from ajax
//time_temp3, time_humid3 is the array that stores timestamp, initialization is empty
//valuetemp3; valuehumid3 is temperary variable to store ajax obtained temp+humid data of node3.
//node3time is temperary variable to store ajax obtained timestamp of node3.
//displaytimetemp3, displaytimehumid3 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_temp3 = [];
var data_humid3 = [];
var valuetemp3 = null;
var valuehumid3 = null;
var time_temp3 = [];
var time_humid3 = [];
var node3time = null;
var displaytimetemp3 = null;
var displaytimehumid3 = null;


//node3 temp data push
function addData_node3temp_push()
{
  valuetemp3 = getTemp3;
  node3time = sensortime*1000;
  var temptime = new Date(node3time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetemp3 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_temp3.push(valuetemp3);
  time_temp3.push(displaytimetemp3);
  //console.log("displaytimetemp3"+displaytimetemp3);
}

//node3 humid data push
function addData_node3humid_push()
{
  valuehumid3 = getHumid3;
  node3time = sensortime*1000;
  var temptime = new Date(node3time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimehumid3 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_humid3.push(valuehumid3);
  time_humid3.push(displaytimehumid3);
  
}

//node3 temp data shift
function shiftdata_node3temp(shift)
{
  if (shift)
  {
    data_temp3.shift();
    time_temp3.shift();
  }
}

//node3 humid data shift
function shiftdata_node3humid(shift)
{
  if (shift)
  {
    data_humid3.shift();
    time_humid3.shift();
  }
}


function refresh_temp3() {
  if (data_temp3.length < 4) 
  {
    addData_node3temp_push();
  } 
  else 
  {
    shiftdata_node3temp(true);
    addData_node3temp_push();
  }

  
  if (data_humid3.length < 4) 
  {
    addData_node3humid_push();
  } 
  else 
  {
    shiftdata_node3humid(true);
    addData_node3humid_push();
  }
    
    var thColor = ["#e81031", "#5da5b3"];
    let temp3_option = 
    {
        color: thColor,
        title: {
        text: 'Temperature and Humidity - Node 3',
        show:true,
        textStyle: {
          color: '#ffffff', 
        }
      },
        legend: 
        {
          top: "15%",
          itemWidth: 10,
          itemHeight: 10,
          data: 
          [{
            name: 'Temperature',
            icon: 'roundRect',
            textStyle: 
            {
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

      grid: {
        top: "25%",
        left: "15%",
        right: "15%",
        bottom: "15%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      //xAixs Setting
      xAxis: 
      {
        type: 'category',
         nameLocation: "middle",
        name: "Time",
        splitLine: {
            show: false
        },
        axisLine: {
          show:true,
             lineStyle: {
              color: '#ffffff'
            }
        },
        axisTick: {
        show:false
        },
        axisLabel: {
          color: "#ffffff",
          show: true,
          textStyle:
          {
            color:'white',
            fontSize:8,
          },
        },
        data: time_temp3,
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
        axisLine: {
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

      series: [{
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
        data: data_temp3,
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
              return Math.round(val.data) + "%";
            }
          },
        yAxisIndex: 1,
        showSymbol:true,
        hoverAnimation: false,
        data: data_humid3,
      }]
    };
    // 更新echarts图表
    temphum3.setOption(temp3_option, true);
}

function resizeTH3() {
    window.addEventListener("resize", function () {
    temphum3.resize();
  });
}


function clearTH3() {
  data_temp3 = [];
  data_humid3 = [];
  time_temp3 = [];
}
