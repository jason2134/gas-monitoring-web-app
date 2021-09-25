// 1. 实例化对象
var fa1 = echarts.init(document.querySelector(".fa .chart"));

//data_fa1 is the array that stores the incoming data
//time_fa1 is the array that stores timestamp, initialization is empty
//valuefa1 is temperary variable to store ajax obtained h2 data of node1.
//node1time is temperary variable to store ajax obtained timestamp of node1.
//displaytimefa1 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_fa1 = [];
var time_fa1 = [];
var valuefa1 = null;
var node1time = null;
var displaytimefa1 = null;

//node1 fa data push
function addData_node1fa_push()
{
  valuefa1 = getFA1;
  node1time = sensortime*1000;
  console.log(node1time);
  var temptime = new Date(node1time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimefa1 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_fa1.push(valuefa1);
  time_fa1.push(displaytimefa1);
  console.log(time_fa1.length);
  console.log("time_fa1 = "+time_fa1);
  //console.log("displaytimefa1"+displaytimefa1);
}

//node1 fa data shift
function shiftdata_node1fa(shift)
{
  if (shift)
  {
    data_fa1.shift();
    time_fa1.shift();
  }
}

//refresh_fa1() is called in getData.js
function refresh_fa1() 
{ 
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_fa1.length < 4) 
    {
      //调用push函数
      addData_node1fa_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
      if (valuefa1 >= 1000) 
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
      shiftdata_node1fa(true);
      addData_node1fa_push();
      var Name;
      if (valuefa1 >= 1000) 
      {
        Name = "Concentration(ppm)";
      } 
      else 
      {
        Name = "Concentration(ppb)";
      }
    }
  
    let fa1_option = 
    {
        color:'#91CC75',
        title: 
        {
          text: 'Formaldehyde - Node 1',
          textStyle: 
          {
            color: '#ffffff'
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

        xAxis: 
        {
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
            triggerEvent: true,
            data: time_fa1,
          },

        yAxis: 
        {
            name:Name,
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: 
            {
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
              data: data_fa1
          }],

          tooltip: 
        {
          show:true,
          trigger: 'axis',
          formatter: function (params) 
          { 
            if (params[0].value >= 1000) 
            {
              return params[0].seriesName + ' : ' + params[0].value / 1000 + 'ppm';
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
      };
    // 更新echarts图表
    fa1.setOption(fa1_option, true);
}

function resizeFA1() 
{
    window.addEventListener("resize", function () 
    {
      fa1.resize();
    });
}


function clearFA1() 
{
  data_fa1 = [];
  time_fa1 = [];
}
