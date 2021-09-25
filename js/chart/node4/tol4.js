
// 1. 实例化对象
var tol4 = echarts.init(document.querySelector(".tol .chart"));

//data_tol4 is the array that stores the incoming data
//time_tol4 is the array that stores timestamp, initialization is empty
//valuetol4 is temperary variable to store ajax obtained toluene data of node4.
//node4time is temperary variable to store ajax obtained timestamp of node4.
//displaytimetol4 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_tol4 = [];
var time_tol4 = [];
var valuetol4 = null;
var node4time = null;
var displaytimetol4 = null;

//node4 tol data push
function addData_node4tol_push()
{
  valuetol4 = getTol4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetol4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_tol4.push(valuetol4);
  time_tol4.push(displaytimetol4);
  //console.log("displaytimetol4"+displaytimetol4);
}

//node4 tol data shift
function shiftdata_node4tol(shift)
{
  if (shift)
  {
    data_tol4.shift();
    time_tol4.shift();
  }
}


function refresh_tol4() {
  if (data_tol4.length < 4) 
  {
    addData_node4tol_push();
      var Name;
      if (valuetol4 >= 1000) 
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
    shiftdata_node4tol(true);
    addData_node4tol_push();
    var Name;
    if (valuetol4 >= 1000) 
    {
      Name = "Concentration(ppm)";
    } 
    else 
    {
      Name = "Concentration(ppb)";
    }
  }
  let tol4_option = 
  {
      color:'#d1a630',
      title: 
      {
        text: 'Toluene - Node 4',
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
            return params[0].seriesName + ' : ' + params[0].value /1000 + 'ppm';
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
      //xAxis Setting
      xAxis: {
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
        data:time_tol4,
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
        name: 'Toluene',
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
        data: data_tol4,
      }]
    };
    // 更新echarts图表
    tol4.setOption(tol4_option, true);
}

function resizeTol4() {
    window.addEventListener("resize", function () {
    tol4.resize();
  });
}

function clearTol4() {
  data_tol4 = [];
  time_tol4 = [];
}
