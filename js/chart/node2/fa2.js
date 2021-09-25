// 1. 实例化对象
var fa2 = echarts.init(document.querySelector(".fa .chart"));

//data_fa2 is the array that stores the incoming data
//time_fa2 is the array that stores timestamp, initialization is empty
//valuefa2 is temperary variable to store ajax obtained h2 data of node1.
//node2time is temperary variable to store ajax obtained timestamp of node1.
//displaytimefa2 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_fa2 = [];
var time_fa2 = [];
var valuefa2 = null;
var node2time = null;
var displaytimefa2 = null;


//node2 fa data push
function addData_node2fa2_push()
{
  valuefa2 = getFA2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimefa2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_fa2.push(valuefa2);
  time_fa2.push(displaytimefa2);
  //console.log("displaytimefa2"+displaytimefa2);
}

//node2 fa data shift
function shiftdata_node2fa2(shift)
{
  if (shift)
  {
    data_fa2.shift();
    time_fa2.shift();
  }
}

function refresh_fa2() {

    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_fa2.length < 4) 
    {
      //调用push函数
      addData_node2fa2_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
      if (valuefa2 >= 1000) 
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
      shiftdata_node2fa2(true);
      addData_node2fa2_push();
      var Name;
      if (valuefa2 >= 1000) 
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
    let fa2_option = 
    {
          color:'#91CC75',
          title: {
            text: 'Formaldehyde - Node 2',
            textStyle: {
              color: '#ffffff'
                        }
                  },
      
          tooltip: 
          {
              show:false,
              trigger: 'axis',
              formatter: function (params) 
              {
                if (params[0].value >= 1000) 
                {
                  return params[0].seriesName + ' : ' + params[0].value / 1000 + 'ppm';
                } else if (params[0].value< 1000) {
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
              data:time_fa2,
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
            axisLine: {         
              lineStyle: {
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
            else if (Name == "Concentration(ppb)") {
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
              data: data_fa2
      }]
    };
    // 更新echarts图表
    fa2.setOption(fa2_option, true);
}

function clearFA2() {
  data_fa2 = [];
  time_fa2 = [];
}

function resizeFA2() {
    window.addEventListener("resize", function () {
    fa2.resize();
  });
}


