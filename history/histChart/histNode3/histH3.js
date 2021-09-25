//history chart of Hydrogen in Node3
var histcharth3 = echarts.init(document.querySelector(".hydrogen .chart"));
var arrhistDatenode3h2 = [];

//convhisttimenode3h2() is to convert node1 H2 timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode3h2()
{
  var arrDatenode3h2 = [];
  //every element in histdateH3 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateH3.length; i++)
  {
    arrDatenode3h2[i]=histdateH3[i]*1000;
  }
  //let every element of arrDatenode3h2 array inherits Date class property
  for(var i=0; i<arrDatenode3h2.length; i++)
  {
    arrDatenode3h2[i]=new Date(arrDatenode3h2[i]);
  }

  var temptime = arrDatenode3h2;
  //console.log("in histH3.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode3h2 array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode3h2[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histH3.js, arrhistDatenode3h2="+arrhistDatenode3h2);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
//refreshhistH3() function is called in histOpt.js
function refreshhistH3() 
{
  var histnode3h2data = posthistH3;
  convhisttimenode3h2();
  
  
////console.log(arrDate)

// 1. 实例化对象

  var Name;
  if (histnode3h2data[histnode3h2data.length-1] >=1000) {
    Name = "Concentration(ppm)";
  } else if (histnode3h2data[histnode3h2data.length-1] < 1000) {
     Name = "Concentration(ppb)";
  } else {
    Name = "Concentration(ppb)";
  }

  // 更新数据后push进data数据
  let histcharth3option = 
  {
    color: '#4c9bfd',
    title: {
      text: 'Hydrogen - Node 3',
      textStyle: {
        color: '#ffffff'
      }
    },
    //tooltip
    tooltip: {
      show: true,
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
        return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode3h2[index]
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
      data:arrhistDatenode3h2,
      name: "Time",
      splitLine: {
        show: false
      },
      //split number defines how the values showed in y is split eg. if splitNumber = 30, then the display on y-axis is [30,60,90,120...]

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
        formatter: function (val) {
          if (Name == "Concentration(ppm)") {
            return val / 1000;
          } else if (Name == "Concentration(ppb)") {
            return val;
          }
        }
         //show: false
      }
    },
    series: [{
      name: 'Hydrogen',
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
      data: histnode3h2data,
    }]
  };
  // 更新echarts图表
  histcharth3.setOption(histcharth3option, true);
  window.addEventListener("resize", function () 
  {
    histcharth3.resize();
  });
}




