
// 1. 实例化对象
var temphum2 = echarts.init(document.querySelector(".tempHumid .chart"));


//data_temp2 is the array that stores the temp data from ajax
//data_humid2 is the array that stores the humid data from ajax
//time_temp2, time_humid1 is the array that stores timestamp, initialization is empty
//valuetemp2; valuehumid1 is temperary variable to store ajax obtained temp+humid data of node1.
//node2time is temperary variable to store ajax obtained timestamp of node2.
//displaytimetemp2, displaytimehumid2 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_temp2 = [];
var data_humid2 = [];
var valuetemp2 = null;
var valuehumid2 = null;
var time_temp2 = [];
var time_humid2 = [];
var node2time = null;
var displaytimetemp2 = null;
var displaytimehumid2 = null;


//node2 temp data push
function addData_node2temp_push()
{
  valuetemp2 = getTemp2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetemp2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_temp2.push(valuetemp2);
  time_temp2.push(displaytimetemp2);
  //console.log("displaytimefa1"+displaytimetol1);
}

//node2 humid data push
function addData_node2humid_push()
{
  valuehumid2 = getHumid2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimehumid2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_humid2.push(valuehumid2);
  time_humid2.push(displaytimehumid2);
  //console.log("displaytimefa1"+displaytimetol1);
}

//node2 temp data shift
function shiftdata_node2temp(shift)
{
  if (shift)
  {
    data_temp2.shift();
    time_temp2.shift();
  }
}

//node2 humid data shift
function shiftdata_node2humid(shift)
{
  if (shift)
  {
    data_humid2.shift();
    time_humid2.shift();
  }
}


function refresh_temp2() {

  if (data_temp2.length < 4) 
  {
    addData_node2temp_push();
  } 
  else 
  {
    shiftdata_node2temp(true);
    addData_node2temp_push();
  }

  
  if (data_humid2.length < 4) 
  {
    addData_node2humid_push();
  } 
  else 
  {
    shiftdata_node2humid(true);
    addData_node2humid_push();
  }
    
    var thColor = ["#e81031", "#5da5b3"];
    let temphum2_option = 
    {
      color: thColor,
      title: 
      {
        text: 'Temperature and Humidity - Node 2',
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
        [
          {
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

      tooltip: 
      {
        trigger: 'axis',
        show:false,
        axisPointer: 
        {
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
          lineStyle: {
              color: '#ffffff'
            }
        },
        axisTick: 
        {
            show:false
        },
        axisLabel: 
        {
          color: "#ffffff",
          show: true,
          textStyle:
          {
            color:'white',
            fontSize:8,
          },
        },
        data: time_temp2,
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
            lineStyle: 
            {
              color: "#ffffff",
            },
          },
          axisTick: {
            show: false
          },
          axisLabel: 
          {
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
          axisTick: 
          {
            show: false
          },
          axisLabel: 
          {
            color: "#ffffff",
            show: true,
          }
      }],

      series: 
      [{
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
            return Math.round(val.value) + "°C";
          }
        },
        showSymbol: true,
        hoverAnimation: false,
        data: data_temp2
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
        data: data_humid2
      }]
    };
    // 更新echarts图表
    temphum2.setOption(temphum2_option, true);
}

function resizeTH2() {
    window.addEventListener("resize", function () {
    temphum2.resize();
  });
}


function clearTH2() {
  data_temp2 = [];
  data_humid2 = [];
  time_temp2 = [];
}
