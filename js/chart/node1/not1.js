// 1. 实例化对象
var not1 = echarts.init(document.querySelector(".nitrogenOxide .chart"));

//data_n1 is the array that stores the incoming data
//time_n1 is the array that stores timestamp, initialization is empty
//valuen1 is temperary variable to store ajax obtained h2 data of node1.
//node1time is temperary variable to store ajax obtained timestamp of node1.
//displaytime is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_n1 = [];
var time_n1 = [];
var valuen1 = null;
var node1time = null;
var displaytimen1 = null;

//node1 no2 data push
function addData_node1no2_push()
{
  valuen1 = getN1;
  node1time = sensortime*1000;
  var temptime = new Date(node1time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimen1 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_n1.push(valuen1);
  time_n1.push(displaytimen1);
}

//node1 no2 data shift
function shiftdata_node1no2(shift)
{
  if (shift)
  {
    data_n1.shift();
    time_n1.shift();
  }
}

//refresh_n1() is called in getData.js
function refresh_not1() {
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_n1.length < 4) 
    {
      //调用push函数
      addData_node1no2_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
        if (valuen1 >= 1000) 
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
        shiftdata_node1no2(true);
        addData_node1no2_push();
        var Name;
        if (valuen1 >= 1000) 
        {
          Name = "Concentration(ppm)";
        } 
        else 
        {
          Name = "Concentration(ppb)";
        }
    }
    //console.log(data_n1)
    
    let not1_option = 
    {
      color:'#ff726f',
      title: 
      {
        text: 'Nitrogen Dioxide - Node 1',
        textStyle: 
        {
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

      xAxis: 
      {
        type: 'category',
        name:"Time",
        splitLine: 
        {
            show: false
        },
        //split number defines how the values showed in y is split eg. if splitNumber = 30, then the display on y-axis is [30,60,90,120...]

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
        data: time_n1,
      },

      yAxis: 
      {
        name: Name,
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
        axisLine: {
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
        name: 'Nitrogen Dioxide',
        type: 'line',
        label: 
        {
          show: true, position: 'top',
          offset:[15,0],
          color: "white",
          fontSize: 8,
          formatter: function (val2) 
              {
                if (val2.data>=1000) 
                {
                  return Math.round(val2.data/1000) + "ppm";
                }  
                else if (val2.data<1000) 
                {
                 return  Math.round(val2.data) + "ppb";
                }
              }
        },
        showSymbol: true,
        hoverAnimation: false,
        data: data_n1
      }],

      //Tooltip params comes from the series
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
    not1.setOption(not1_option, true);
}
function resizeNOT1() 
{
  window.addEventListener("resize", function () {
    not1.resize();
  });
}

function clearNOT1() 
{
  data_n1 = [];
  time_n1 = [];
}
