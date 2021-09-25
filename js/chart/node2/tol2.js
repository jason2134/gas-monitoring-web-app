// 1. 实例化对象
var tol2 = echarts.init(document.querySelector(".tol .chart"));


//data_tol2 is the array that stores the incoming data
//time_tol2 is the array that stores timestamp, initialization is empty
//valuetol2 is temperary variable to store ajax obtained h2 data of node1.
//node2time is temperary variable to store ajax obtained timestamp of node1.
//displaytimetol2 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_tol2 = [];
var time_tol2 = [];
var valuetol2 = null;
var node2time = null;
var displaytimetol2 = null;


//node2 tol data push
function addData_node2tol_push()
{
  valuetol2 = getTol2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetol2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_tol2.push(valuetol2);
  time_tol2.push(displaytimetol2);
  //console.log("displaytimefa1"+displaytimetol1);
}

//node2 tol data shift
function shiftdata_node2tol(shift)
{
  if (shift)
  {
    data_tol2.shift();
    time_tol2.shift();
  }
}

//refresh_tol2() is called in ops.js and getData.js
function refresh_tol2() {
    
  if (data_tol2.length < 4) 
    {
      addData_node2tol_push();
        var Name;
        if (valuetol2 >= 1000) 
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
      shiftdata_node2tol(true);
      addData_node2tol_push();
      var Name;
      if (valuetol2 >= 1000) 
      {
        Name = "Concentration(ppm)";
      } 
      else 
      {
        Name = "Concentration(ppb)";
      }
    }

    //console.log(data_tol2);
    // 更新数据后push进data数据
    let tol2_option = 
    {
        color:'#d1a630',
        title: {
            text: 'Toluene - Node 2',
            textStyle: 
            {
                color: '#ffffff'
            }
      },

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
        axisPointer: 
        {
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
      xAxis: 
      {
        type: 'category',
        name:"Time",
        splitLine: {
            show: false
        },
        axisLine: {
              lineStyle: 
              {
                color: '#ffffff'
              }
        },
        axisTick: {
          show: false
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
        data:time_tol2,
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
        axisLine: {
            lineStyle: 
            {
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
            if (val.data>=1000) {
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
        data: data_tol2,
      }]
    };
    // 更新echarts图表
    tol2.setOption(tol2_option, true);
}

function resizeTol2() {
    window.addEventListener("resize", function () {
    tol2.resize();
  });
}

function clearTol2() {
  data_tol2 = [];
  time_tol2 = [];
}
