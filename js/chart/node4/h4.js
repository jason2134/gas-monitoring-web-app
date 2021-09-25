
// 1. 实例化对象
var h4 = echarts.init(document.querySelector(".hydrogen .chart"))

//data_h4 is the array that stores the incoming data
//time_h4 is the array that stores timestamp, initialization is empty
//valueh4 is temperary variable to store ajax obtained h2 data of node4.
//node4time is temperary variable to store ajax obtained timestamp of node4.
//displaytimeh4 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_h4 = [];
var time_h4 = [];
var valueh4 = null;
var node4time = null;
var displaytimeh4 = null;

//This function is to push the data(value, timestamp) from ajax into the data_h4 and time_h4 for visualization
function addData_node4h2_push()
{
  valueh4 = getH4;
  node4time = sensortime*1000;
  var temptime = new Date(node4time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimeh4 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_h4.push(valueh4);
  time_h4.push(displaytimeh4);
  //console.log("displaytimeh4 = " + displaytimeh4);
  
}

//This function is to shift the data_h4 and time_h4 array away
function shiftdata_node4h2(shift)
{
  if (shift)
  {
    data_h4.shift();
    time_h4.shift();
  }
}

function refresh_h4() {
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_h4.length < 6) 
    {
       //调用push函数
       addData_node4h2_push();
       //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
        if (valueh4 >= 1000) 
        {
            Name = "Concentration(ppm)";
        } 
        else {Name = "Concentration(ppb)";}        
    } 
    else
    {
        //在data_h4.length大于等于4的时候，就会先移走data_h1 和 time_h1的一个数据，然后再调用push函数
        shiftdata_node4h2(true);
        addData_node4h2_push();
        //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
          if (valueh4 >= 1000) 
            {
              Name = "Concentration(ppm)";
            } 
          else if(valueh4 <1000) {
              Name = "Concentration(ppb)";
            } 
    }
    // 更新数据后push进data数据
    let h4_option = 
    {
      color:'#4c9bfd',
      title: {
        text: 'Hydrogen - Node 4',
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
      //xAxis Setting
      xAxis: 
      {
        type: 'category',
        name:"Time",
        splitLine: {
            show: false
        },
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
        axisLabel: {
          color: "#ffffff",
          show: true,
          textStyle:
          {
            color:'white',
            fontSize:8,
          },
        },
        data: time_h4,
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
        name: 'Hydrogen',
        type: 'line',
        showSymbol: true,
        hoverAnimation: false,
        data: data_h4,
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
        }
      }]
    };
    // 更新echarts图表
    h4.setOption(h4_option, true);
}

function resizeH4() {
    window.addEventListener("resize", function () {
    h4.resize();
  });
}

function clearH4() {
  data_h4 = [];
  time_h4 = [];
}
