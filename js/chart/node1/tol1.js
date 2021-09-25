// 1. 实例化对象
var tol1 = echarts.init(document.querySelector(".tol .chart"));

//data_tol1 is the array that stores the incoming data
//time_tol1 is the array that stores timestamp, initialization is empty
//valuetol1 is temperary variable to store ajax obtained h2 data of node1.
//node1time is temperary variable to store ajax obtained timestamp of node1.
//displaytimetol1 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_tol1 = [];
var time_tol1 = [];
var valuetol1 = null;
var node1time = null;
var displaytimetol1 = null;

//node1 tol data push
function addData_node1tol_push()
{
  valuetol1 = getTol1;
  node1time = sensortime*1000;
  var temptime = new Date(node1time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimetol1 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_tol1.push(valuetol1);
  time_tol1.push(displaytimetol1);
  //console.log("displaytimefa1"+displaytimetol1);
}

//node1 tol data shift
function shiftdata_node1tol(shift)
{
  if (shift)
  {
    data_tol1.shift();
    time_tol1.shift();
  }
}

//refresh_tol1() is called in getData.js
function refresh_tol1() 
{
    
    if (data_tol1.length < 4) 
    {
      addData_node1tol_push();
        var Name;
        if (valuetol1 >= 1000) 
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
      shiftdata_node1tol(true);
      addData_node1tol_push();
      var Name;
      if (valuetol1 >= 1000) 
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
    let tol1_option = 
    {
      color:'#d1a630',
      title: 
      {
        text: 'Toluene - Node 1',
        textStyle: {
          color: '#ffffff'
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
      
      xAxis: {
        type: 'category',
        name:"Time",
        splitLine: 
        {
            show: false
        },
        axisLine: 
        {
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
            color: "white",
            fontSize:8,
          }
        },
        data:time_tol1,
        triggerEvent: true
      },

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
        label: {
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
        data: data_tol1,
      }],

      tooltip: {
        show:true,
        trigger: 'axis',
        formatter: function (params) {
          if (params[0].value >= 1000) 
          {
            return params[0].seriesName + ' : ' + params[0].value/1000 + 'ppm';
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

    };
    // 更新echarts图表
    tol1.setOption(tol1_option, true);
}

function resizeTol1() {
    window.addEventListener("resize", function () {
    tol1.resize();
  });
}

function clearTol1() {
  data_tol1 = [];
  time_tol1 = [];
}
