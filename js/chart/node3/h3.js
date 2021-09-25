// 1. 实例化对象
var h3 = echarts.init(document.querySelector(".hydrogen .chart"))

//data_h3 is the array that stores the incoming data
//time_h3 is the array that stores timestamp, initialization is empty
//valueh3 is temperary variable to store ajax obtained h2 data of node3.
//node3time is temperary variable to store ajax obtained timestamp of node3.
//displaytimeh3 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_h3 = [];
var time_h3 = [];
var valueh3 = null;
var node3time = null;
var displaytimeh3 = null;


//This function is to push the data(value, timestamp) from ajax into the data_h1 and time_h1 for visualization
function addData_node3h2_push()
{
  valueh3 = getH3;
  node3time = sensortime*1000;
  var temptime = new Date(node3time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimeh3 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_h3.push(valueh3);
  time_h3.push(displaytimeh3);
  //console.log("displaytimeh3 = " + displaytimeh3);
}

//This function is to shift the data_h1 and time_h1 array away
function shiftdata_node3h2(shift)
{
  if (shift)
  {
    data_h3.shift();
    time_h3.shift();
  }
}


function refresh_h3() {
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_h3.length < 6) 
    {
       //调用push函数
       addData_node3h2_push();
       //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
        if (valueh3 >= 1000) 
        {
            Name = "Concentration(ppm)";
        } 
        else 
        {Name = "Concentration(ppb)";}        
    } 
    else
    {
        //在data_h3.length大于等于4的时候，就会先移走data_h3 和 time_h3的一个数据，然后再调用push函数
        shiftdata_node3h2(true);
        addData_node3h2_push();
        //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
          if (valueh3 >= 1000) 
            {
              Name = "Concentration(ppm)";
            } 
          else if(valueh3 <1000) 
            {
              Name = "Concentration(ppb)";
            } 
    }
    let h3_option = 
    {
      color:'#4c9bfd',
      title: 
      {
        text: 'Hydrogen - Node 3',
        textStyle: 
        {
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
        data: time_h3,
        triggerEvent: true
      },
      //yAxis Setting
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
          // show: true
        }
      },
      series: 
      [{
        name: 'Hydrogen',
        type: 'line',
        showSymbol: true,
        hoverAnimation: false,
        data: data_h3,
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
            }  else if (val.data<1000) 
            {
                 return  Math.round(val.data) + "ppb";
            }
          }
        }
      }]
    };
    // 更新echarts图表
    h3.setOption(h3_option, true);

}

function resizeH3() {
    window.addEventListener("resize", function () {
    h3.resize();
  });
}

function clearH3() {
  data_h3 = [];
  time_h3 = [];
}