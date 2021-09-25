// 1. 实例化对象
var not2 = echarts.init(document.querySelector(".nitrogenOxide .chart"));

//data_n2 is the array that stores the incoming data
//time_n2 is the array that stores timestamp, initialization is empty
//valuen2 is temperary variable to store ajax obtained h2 data of node1.
//node2time is temperary variable to store ajax obtained timestamp of node1.
//displaytimen2 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_n2 = [];
var time_n2 = [];
var valuen2 = null;
var node2time = null;
var displaytimen2 = null;

//node2 no2 data push
function addData_node2no2_push()
{
  valuen2 = getN2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimen2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_n2.push(valuen2);
  time_n2.push(displaytimen2);
}

//node2 no2 data shift
function shiftdata_node2no2(shift)
{
  if (shift)
  {
    data_n2.shift();
    time_n2.shift();
  }
}


//refresh_n2() is called in getData.js
function refresh_not2() {

    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_n2.length < 4) 
    {
      //调用push函数
      addData_node2no2_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
        if (valuen2 >= 1000) 
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
        shiftdata_node2no2(true);
        addData_node2no2_push();
        var Name;
        if (valuen2 >= 1000) 
        {
          Name = "Concentration(ppm)";
        } 
        else 
        {
          Name = "Concentration(ppb)";
        }
      }
    //console.log(data_n4)
    let not2_option = 
    {
        color:'#ff726f',
        title: {
          text: 'Nitrogen Dioxide - Node 2',
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
              console.log("tooltip not2=" + params[0].value); 
              if (params[0].value >= 1000) 
              {
                return params[0].seriesName + ' : ' + params[0].value / 1000 + 'ppm';
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
            triggerEvent: true,
            data: time_n2,
          },
        //yAxis Setting
        yAxis: 
        {
            name: Name,
            type: 'value',
            boundaryGap: [0, '100%'],
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
            axisLabel: {
              color: "#ffffff",
              formatter: function (val) {
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
            name: 'Nitrogen Oxide',
            type: 'line',
            label: {
              show: true, position: 'top',
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
            data: data_n2
          }]
    };
    // 更新echarts图表
    not2.setOption(not2_option, true);
}

function resizeNOT2() 
{
    window.addEventListener("resize", function () {
    not2.resize();
  });
}

function clearNOT2() {
  data_n2 = [];
  time_n2 = [];
}
