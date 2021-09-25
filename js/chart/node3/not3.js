// 1. 实例化对象
var not3 = echarts.init(document.querySelector(".nitrogenOxide .chart"));

//data_n3 is the array that stores the incoming data
//time_n3 is the array that stores timestamp, initialization is empty
//valuen3 is temperary variable to store ajax obtained no2 data of node3.
//node3time is temperary variable to store ajax obtained timestamp of node3.
//displaytimen3 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_n3 = [];
var time_n3 = [];
var valuen3 = null;
var node3time = null;
var displaytimen3 = null;

//node2 no2 data push
function addData_node3no2_push()
{
  valuen3 = getN3;
  node3time = sensortime*1000;
  var temptime = new Date(node3time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimen3 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_n3.push(valuen3);
  time_n3.push(displaytimen3);
}

//node3 no2 data shift
function shiftdata_node3no2(shift)
{
  if (shift)
  {
    data_n3.shift();
    time_n3.shift();
  }
}

function refresh_not3() {
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_n3.length < 4) 
    {
      //调用push函数
      addData_node3no2_push();
      //切换y轴量程的文字显示,并在yAxis部分被调用
      var Name;
        if (valuen3 >= 1000) 
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
        shiftdata_node3no2(true);
        addData_node3no2_push();
        var Name;
        if (valuen3 >= 1000) 
        {
          Name = "Concentration(ppm)";
        } 
        else 
        {
          Name = "Concentration(ppb)";
        }
      }

    //console.log(data_n3)
    // 更新数据后push进data数据
    let not3_option = 
    {
      color:'#ff726f',
      title: 
      {
        text: 'Nitrogen Dioxide - Node 3',
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
        data: time_n3,
        triggerEvent: true
      },
      //yAxis Setting
      yAxis: 
      {
        name: Name,
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: 
        {
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
        axisLabel: 
        {
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
        label: 
        {
          show: true, 
          position: 'top',
          offset:[15,0],
          color: "white",
          fontSize: 8,
          formatter: function (val) 
          {
            //console.log("val="+val);
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
        data: data_n3
      }]
    };
    // 更新echarts图表
    not3.setOption(not3_option, true);

}

function resizeNOT3() {
    window.addEventListener("resize", function () {
    not3.resize();
  });
}

function clearNOT3() {
  data_n3 = [];
  time_n3 = [];
}
