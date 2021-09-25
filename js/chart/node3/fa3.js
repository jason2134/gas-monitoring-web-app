// 1. 实例化对象
var fa3 = echarts.init(document.querySelector(".fa .chart"));

//data_fa3 is the array that stores the incoming data
//time_fa3 is the array that stores timestamp, initialization is empty
//valuefa3 is temperary variable to store ajax obtained fa data of node3.
//node3time is temperary variable to store ajax obtained timestamp of node3.
//displaytimefa3 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_fa3 = [];
var time_fa3 = [];
var valuefa3 = null;
var node3time = null;
var displaytimefa3 = null;

//node3 fa data push
function addData_node3fa_push()
{
  valuefa3 = getFA3;
  node3time = sensortime*1000;
  var temptime = new Date(node3time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimefa3 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_fa3.push(valuefa3);
  time_fa3.push(displaytimefa3);
  //console.log("displaytimefa3"+displaytimefa3);
}

//node3 fa data shift
function shiftdata_node3fa(shift)
{
  if (shift)
  {
    data_fa3.shift();
    time_fa3.shift();
  }
}

function refresh_fa3() {
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_fa3.length < 4) 
    {
      //调用push函数
      addData_node3fa_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
      if (valuefa3 >= 1000) 
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
      shiftdata_node3fa(true);
      addData_node3fa_push();
      var Name;
      if (valuefa3 >= 1000) 
      {
        Name = "Concentration(ppm)";
      } 
      else 
      {
        Name = "Concentration(ppb)";
      }
    }
    //console.log(data_n1)
    // 更新数据后push进data数据
    let fa3_option = 
    {
      color:'#91CC75',
      title: {
        text: 'Formaldehyde - Node 3',
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
          if (params[0].value >= 1000) {
            return params[0].seriesName + ' : ' + params[0].value / 1000 + 'ppm';
          } else if (params[0].value < 1000) {
            return params[0].seriesName + ' : ' + params[0].value + 'ppb';
          }
        },

        axisPointer: {
          animation: false
        }
      },
      grid: 
      {
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
        type: 'category',
        name:"Time",
        splitLine: {
            show: false
        },
        axisLine: 
        {
              lineStyle: {
              color: '#ffffff'
            }
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
            color:'white',
            fontSize:8,
          },
        },
        data: time_fa3,
        triggerEvent: true
      },
      //yAxis Setting
      yAxis: 
      {
        name:Name,
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        // max:100,
        axisLine: 
        {
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
          formatter: function (val) 
          {
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

      series: 
      [{
        name: 'Formaldehyde',
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
        data: data_fa3,
      }]
    };
    // 更新echarts图表
    fa3.setOption(fa3_option, true);
}

function resizeFA3() 
{
    window.addEventListener("resize", function () {
    fa3.resize();
  });
}

function clearFA3() {
  data_fa3 = [];
  time_fa3 = [];
}
