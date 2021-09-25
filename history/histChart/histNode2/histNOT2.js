//history chart of NO2 in Node2
// 1. 实例化对象
var histchartnot2 = echarts.init(document.querySelector(".nitrogenOxide .chart"));
var arrhistDatenode2not = [];

//convhisttimenode2not() is to convert node1 not timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode2not()
{
  var arrDatenode2not = [];
  //every element in histdateN2 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateN2.length; i++)
  {
    arrDatenode2not[i]=histdateN2[i]*1000;
  }
  //let every element of arrDatenode2not array inherits Date class property
  for(var i=0; i<arrDatenode2not.length; i++)
  {
    arrDatenode2not[i]=new Date(arrDatenode2not[i]);
  }

  var temptime = arrDatenode2not;
  //console.log("in histNOT2.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode2not array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode2not[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histNOT2.js, arrhistDatenode2not=" + arrhistDatenode2not);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
function refreshhistNOT2() 
{
  var histnode2notdata = posthistN2;
  convhisttimenode2not();
  
  

  var Name;
  if (histnode2notdata[histnode2notdata.length-1] >=1000) 
  {
    Name = "Concentration(ppm)";
  } 
  else if (histnode2notdata[histnode2notdata.length-1] < 1000) 
  {
     Name = "Concentration(ppb)";
  } 
  else 
  {
    Name = "Concentration(ppb)";
  }
  
  let histchartnot2option = 
  {
      color:'#ff726f',
      title: {
        text: 'Nitrogen Dioxide - Node 2',
        textStyle: {
          color: '#ffffff'
        }
      },

      //tooltip
      tooltip: 
      {
        show:true,
        trigger: 'axis',
        //tooltip formatter format is: for each point, will display its value, time, index in the array, and unit with auto conversion
        formatter:function(obj)
        {
          var res = "Info: </br>";
          var value = obj[0].value;
          var index = obj[0].dataIndex;
          var unit = null;
          if (value>=1000)
          {
            unit = 'ppm';
            value = Math.round(value/1000);
          }
          else if(value<1000)
          {
            unit = 'ppb';
          }
          //console.log("formatter value="+value);
          //console.log("formatter index="+index);
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode2not[index]
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
        data:arrhistDatenode2not,
        name:"Time",
        splitLine: {
            show: false
        },
        // type: 'category',
        //data: T,
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
        triggerEvent: true
      },
      //yAxis Setting
      yAxis: {
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
           //show: true
        }
      },
      series: [{
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
        showSymbol: false,
        hoverAnimation: false,
        data: histnode2notdata
      }]
    };
    // 更新echarts图表
    histchartnot2.setOption(histchartnot2option, true);
    window.addEventListener("resize", function () 
    {
      histchartnot2.resize();
    });

}
