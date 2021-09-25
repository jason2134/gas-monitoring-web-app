// 1. 实例化对象
var temphum1 = echarts.init(document.querySelector(".tempHumid .chart"));

//data_temp1 is the array that stores the temp data from ajax
//data_humid1 is the array that stores the humid data from ajax
//time_temp1, time_humid1 is the array that stores timestamp, initialization is empty
//valuetemp1; valuehumid1 is temperary variable to store ajax obtained temp+humid data of node1.
//node1time is temperary variable to store ajax obtained timestamp of node1.
//displaytimetemp1, displaytimehumid1 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_temp1 = [];
var data_humid1 = [];
var valuetemp1 = null;
var valuehumid1 = null;
var time_temp1 = [];
var time_humid1 = [];
var node1time = null;
var displaytimetemp1 = null;
var displaytimehumid1 = null;

//node1 temp data push
function addData_node1temp_push()
{
  valuetemp1 = getTemp1;
  node1time = sensortime*1000;
  var temptime = new Date(node1time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetemp1 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_temp1.push(valuetemp1);
  time_temp1.push(displaytimetemp1);
  //console.log("displaytimefa1"+displaytimetol1);
}

//node1 humid data push
function addData_node1humid_push()
{
  valuehumid1 = getHumid1;
  node1time = sensortime*1000;
  var temptime = new Date(node1time);
  displaytimehumid1 = temptime.getHours() + ':' + temptime.getMinutes() + ':' + temptime.getSeconds();
  data_humid1.push(valuehumid1);
  time_humid1.push(displaytimehumid1);
  //console.log("displaytimefa1"+displaytimetol1);
}

//node1 temp data shift
function shiftdata_node1temp(shift)
{
  if (shift)
  {
    data_temp1.shift();
    time_temp1.shift();
  }
}

//node1 humid data shift
function shiftdata_node1humid(shift)
{
  if (shift)
  {
    data_humid1.shift();
    time_humid1.shift();
  }
}

//refresh_temp1() is called in getData.js
function refresh_temp1() {
    
    if (data_temp1.length < 4) 
    {
      addData_node1temp_push();
    } 
    else 
    {
      shiftdata_node1temp(true);
      addData_node1temp_push();
    }

    
    if (data_humid1.length < 4) 
    {
      addData_node1humid_push();
    } 
    else 
    {
      shiftdata_node1humid(true);
      addData_node1humid_push();
    }
    //console.log(data_n1)
    // 更新数据后push进data数据
    var thColor = ["#e81031", "#5da5b3"];
    let temphum1_option = 
    {
      color: thColor,
      title: 
      {
        text: 'Temperature and Humidity - Node 1',
        show:true,
        textStyle: 
        {
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
            textStyle: 
            {
              color: "#e81031"        // 图例文字颜色 
            }
          },
          {
            name: 'Humidity',
            icon: 'roundRect',
            textStyle: 
            {
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
          lineStyle: 
          {
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
            color:"white",
            fontSize:8,
          }
        },
        data:time_temp1,
        triggerEvent: true
      },
      //yAxis Setting
      yAxis: [{
          type: 'value',
          offset:0,
          name:'Temperature(°C)',
          boundaryGap:true,
          //boundaryGap: [0, '100%'],
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
            show: true,
            textStyle:
            {
              color:"white",
              fontSize:8,
            }
          }
        },
        {
          type: 'value',
          offset:0,
          name:'Humidity(%)',
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
            lineStyle: 
            {
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
            textStyle:
            {
              color:"white",
              fontSize:8,
            }
          }
      }],

      series: 
      [
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
          data: data_temp1
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
          data: data_humid1
        }]
    };
    // 更新echarts图表
    temphum1.setOption(temphum1_option, true);
}

function resizeTH1() 
{
    window.addEventListener("resize", function () {
    temphum1.resize();
  });
}


function clearTH1() 
{
  data_temp1 = [];
  data_humid1 = [];
  time_temp1 = [];
}
