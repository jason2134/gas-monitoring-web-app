// 1. 实例化对象
var h2 = echarts.init(document.querySelector(".hydrogen .chart"))

//data_h2 is the array that stores the incoming data
//time_h2 is the array that stores timestamp, initialization is empty
//valueh2 is temperary variable to store ajax obtained h2 data of node1.
//node2time is temperary variable to store ajax obtained timestamp of node1.
//displaytimeh2 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_h2 = [];
var time_h2 = [];
var valueh2 = null;
var node2time = null;
var displaytimeh2 = null;

//This function is to push the data(value, timestamp) from ajax into the data_h1 and time_h1 for visualization
function addData_node2h2_push()
{
  valueh2 = getH2;
  node2time = sensortime*1000;
  var temptime = new Date(node2time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimeh2 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_h2.push(valueh2);
  time_h2.push(displaytimeh2);
  console.log("data_h2 = " + data_h2);
  // console.log("covsec = " + covLocaltime());
}

//This function is to shift the data_h1 and time_h1 array away
function shiftdata_node2h2(shift)
{
  if (shift)
  {
    data_h2.shift();
    time_h2.shift();
  }
}

//refresh_h2() is called in getData.js
function refresh_h2() 
{
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_h2.length < 6) 
    {
       //调用push函数
       addData_node2h2_push();
       //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
        if (valueh2 >= 1000) 
        {
            Name = "Concentration(ppm)";
        } 
        else {Name = "Concentration(ppb)";}        
    } 
    else
    {
        //在data_h2.length大于等于4的时候，就会先移走data_h1 和 time_h1的一个数据，然后再调用push函数
        shiftdata_node2h2(true);
        addData_node2h2_push();
        //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
          if (valueh2 >= 1000) 
            {
              Name = "Concentration(ppm)";
            } 
          else if(valueh2 <1000) {
              Name = "Concentration(ppb)";
            } 
    }
    
    //console.log(data_h2)
    // 更新数据后push进data数据
    let h2_option = 
    {
          color:'#4c9bfd',
          title: 
          {
              text: 'Hydrogen - Node 2',
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
            data: time_h2,
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
            data: data_h2,
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
    h2.setOption(h2_option, true);
}

function clearH2() {
  data_h2 = [];
  time_h2 = [];
}

function resizeH2() {
    window.addEventListener("resize", function () {
    h2.resize();
  });
}


