// 1. 实例化对象
var tol3 = echarts.init(document.querySelector(".tol .chart"));

//data_tol3 is the array that stores the incoming data
//time_tol3 is the array that stores timestamp, initialization is empty
//valuetol3 is temperary variable to store ajax obtained toluene data of node3.
//node3time is temperary variable to store ajax obtained timestamp of node3.
//displaytimetol3 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_tol3 = [];
var time_tol3 = [];
var valuetol3 = null;
var node3time = null;
var displaytimetol3 = null;


//node3 tol data push
function addData_node3tol_push()
{
  valuetol3 = getTol3;
  node3time = sensortime*1000;
  var temptime = new Date(node3time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetol3 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_tol3.push(valuetol3);
  time_tol3.push(displaytimetol3);
  //console.log("displaytimetol3"+displaytimetol3);
}

//node3 tol data shift
function shiftdata_node3tol(shift)
{
  if (shift)
  {
    data_tol3.shift();
    time_tol3.shift();
  }
}

function refresh_tol3() 
{
  if (data_tol3.length < 4) 
  {
    addData_node3tol_push();
      var Name;
      if (valuetol3 >= 1000) 
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
    shiftdata_node3tol(true);
    addData_node3tol_push();
    var Name;
    if (valuetol3 >= 1000) 
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
    let tol3_option = 
    {
      color:'#d1a630',
      title: 
      {
        text: 'Toluene - Node 3',
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
            return params[0].seriesName + ' : ' + params[0].value /1000 + 'ppm';
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
      xAxis: {
        type: 'category',
        name:"Time",
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
        data: time_tol3,
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
        axisTick: 
        {
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
        data: data_tol3,
      }]
    };
    // 更新echarts图表
    tol3.setOption(tol3_option, true);
}

function resizeTol3() {
    window.addEventListener("resize", function () {
    tol3.resize();
  });
}

function clearTol3() 
{
  data_tol3 = [];
  time_tol3 = [];
}
