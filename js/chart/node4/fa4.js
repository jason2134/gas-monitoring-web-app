var self = this;
// 1. 实例化对象
var fa4 = echarts.init(document.querySelector(".fa .chart"));

//data_fa4 is the array that stores the incoming data
//time_fa4 is the array that stores timestamp, initialization is empty
//valuefa4 is temperary variable to store ajax obtained fa data of node4.
//node4time is temperary variable to store ajax obtained timestamp of node4.
//displaytimefa4 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_fa4 = [];
var time_fa4 = [];
var valuefa4 = null;
var node4time = null;
var displaytimefa4 = null;

//node4 fa data push
function addData_node4fa_push()
{
  valuefa4 = getFA4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimefa4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_fa4.push(valuefa4);
  time_fa4.push(displaytimefa4);
  //console.log("displaytimefa4"+displaytimefa4);
}

//node4 fa data shift
function shiftdata_node4fa(shift)
{
  if (shift)
  {
    data_fa4.shift();
    time_fa4.shift();
  }
}

function refresh_fa4() {

    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_fa4.length < 4) 
    {
      //调用push函数
      addData_node4fa_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
      if (valuefa4 >= 1000) 
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
      shiftdata_node4fa(true);
      addData_node4fa_push();
      var Name;
      if (valuefa4 >= 1000) 
      {
        Name = "Concentration(ppm)";
      } 
      else 
      {
        Name = "Concentration(ppb)";
      }
    }
    //console.log(data_fa4)
    // 更新数据后push进data数据
    let fa4_option = {
      color:'#91CC75',
      title: 
      {
        text: 'Formaldehyde - Node 4',
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
       //xAxis Setting
      xAxis: 
      {
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
        //设置坐标轴文字显示
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
        data:time_fa4,
        triggerEvent: true
      },
      //yAxis Setting
      yAxis: {
        name:Name,
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
      series: [{
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
        data: data_fa4
      }]
    };
    // 更新echarts图表
    fa4.setOption(fa4_option, true);
}

function resizeFA4() {
    window.addEventListener("resize", function () {
    fa4.resize();
  });
}

function clearFA4() {
  data_fa4 = [];
  time_fa4 = [];
}
