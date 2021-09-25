//实例化对象，把echart图插在dataVis.html的指定<div class="panel hydrogen"> + <div class="chart">中，第一个hydrogen的作用是指定这个框是给hydrogen做展示的。
//所以一般都会在document.querySelector的地方联合调用两个class
var h1 = echarts.init(document.querySelector(".hydrogen .chart"));

//data_h1 is the array that stores the incoming data
//time_h1 is the array that stores timestamp, initialization is empty
//valueh1 is temperary variable to store ajax obtained h2 data of node1.
//node1time is temperary variable to store ajax obtained timestamp of node1.
//displaytimeh1 is temperary variable to store converting timestamp into a time data format and put it in xAxis 
var data_h1 = [];
var time_h1 = [];
var valueh1 = null;
var node1time = null;
var displaytimeh1 = null;

//For testing, to see what's the yr/mt/day/hr/min/sec of the timestamp from python backend
// function covLocaltime()
// {
//   var temptime =null;
//   temptime = sensortime*1000;
//   var cov = new Date(temptime);
//   var covyr = cov.getFullYear();
//   var covmt = cov.getMonth()+1;
//   var covd = cov.getDate();
//   var covh = cov.getHours();
//   var covmin = cov.getMinutes();
//   var covsec = cov.getSeconds();
//   return covsec;
// }

//This function is to push the data(value, timestamp) from ajax into the data_h1 and time_h1 for visualization
function addData_node1h2_push()
{
  valueh1 = getH1;
  node1time = sensortime*1000;
  var temptime = new Date(node1time);
  var h = temptime.getHours();
  var m = temptime.getMinutes();
  var s = temptime.getSeconds();
  displaytimeh1 = (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  data_h1.push(valueh1);
  time_h1.push(displaytimeh1);
  //console.log("displaytimeh1 = " + displaytimeh1);
  // console.log("covsec = " + covLocaltime());
}

//This function is to shift the data_h1 and time_h1 array away
function shiftdata_node1h2(shift)
{
  if (shift)
  {
    data_h1.shift();
    time_h1.shift();
  }
}

//refresh_h1() is called in getData.js
function refresh_h1() 
{
    //让echart图只显示4个数据，要想显示更多数据，就把4更改。
    if (data_h1.length < 6) 
    {
       //调用push函数
       addData_node1h2_push();
       //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
        if (valueh1 >= 1000) 
        {
            Name = "Concentration(ppm)";
        } 
        else {Name = "Concentration(ppb)";}        
    } 
    else
    {
        //在data_h1.length大于等于4的时候，就会先移走data_h1 和 time_h1的一个数据，然后再调用push函数
        shiftdata_node1h2(true);
        addData_node1h2_push();
        //切换y轴量程的文字显示,并在yAxis部分被调用
        var Name;
          if (valueh1 >= 1000) 
            {
              Name = "Concentration(ppm)";
            } 
          else if(valueh1 <1000) {
              Name = "Concentration(ppb)";
            } 
    }
    
    //查看data_h1 and time_h1的长度，发现是从1开始逐步变成4，接着就一直保持4不变。
    //console.log(data_h1.length)
    //console.log(time_h1.length)
    //console.log(node1time);
    //console.log(time_h1);
    let h1_option = 
    {
      color:'#4c9bfd',
      title: 
        {
        text: 'Hydrogen - Node 1',
        textStyle: 
        {
          color: '#ffffff'
        }
      },

      //this is used to 当鼠标放在数据点上的时候，会展示这个数据点的y轴对应数据的信息。一定要点击点之后才会显示formatter的console log
      tooltip: 
      {
        show:true,
        trigger: 'axis',
        //这里需要了解echart官方解释中，params的数据结构，收藏在个人的csdn js文件夹中
        //params的数据类型就是series，因此series里有什么，params就可以调用什么。seriesName，value是其中两个包含在params的这个结构体中，其实在series中就有写。
        formatter: function (params) 
        {
          //这个params的长度是1，里面有很多个变量可以调用，但是调用这个param本身就需要写成params[0],不能写成params.不能因为里面有多个变量而写成params[1], params[2],...
          console.log(params[0]);
          //这个结果是1
          //console.log(params.length);         
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

      //Echart放整个图的背景框setting
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
        //since its timestamp, type needs to be category instead of value.
        type: 'category',
        name: "Time",
        //split number defines how the values showed in y are splited.
        //eg. if splitNumber = 30, then the display on y-axis is [30,60,90,120...]
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
        //data input is time_h1
        data: time_h1,
      },

      //yAxis setting
      yAxis: {
        //name is defined in refresh_h1() at the top
        name: Name,
        type: 'value',
        boundaryGap: [0, '100%'],
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
          //show: true
          color: "#ffffff",
          //切换y轴量程的数字显示,若数值>1000就除1000切换成1，2，3 ppm，保留小数点显示...；若是小于则原数值显示。
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

      //yAxis Data setting
      series: 
      [{
        name: 'Hydrogen',
        type: 'line',
        showSymbol: true,
        hoverAnimation: false,
        data: data_h1,
        label: 
        {
          show: true, 
          position: 'top',
          offset:[15,0],
          color: "white",
          fontSize: 8,
          //这个是展示每个数据点对应的formatter，这里的作用是让显示在上面的数字带上单位。
          //通过log val这个变量，可以得知val的数据结构是个series（也就是在这个series里），里面也是直接调用data来获取当前的传入到series里面的data。
          formatter: function (val) 
          {
              //console.log(val);
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
    // 更新echarts图表 ,使得整个h1_option2生效  
    h1.setOption(h1_option, true);     
}

//resize chart 
function resizeH1() 
{
    window.addEventListener("resize", function () 
    {
      h1.resize();
    });

}

//clear chart
function clearH1() 
{
  data_h1 = [];
  time_h1 = [];
}