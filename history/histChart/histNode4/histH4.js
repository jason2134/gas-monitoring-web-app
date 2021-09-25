//history chart of Hydrogen in Node4
var histcharth4 = echarts.init(document.querySelector(".hydrogen .chart"));
var arrhistDatenode4h2 = [];

//convhisttimenode4h2() is to convert node1 H2 timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode4h2()
{
  var arrDatenode4h2 = [];
  //every element in histdateH1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateH1.length; i++)
  {
    arrDatenode4h2[i]=histdateH1[i]*1000;
  }
  //let every element of arrDatenode4h2 array inherits Date class property
  for(var i=0; i<arrDatenode4h2.length; i++)
  {
    arrDatenode4h2[i]=new Date(arrDatenode4h2[i]);
  }

  var temptime = arrDatenode4h2;
  //console.log("in histH4.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode4h2 array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode4h2[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histH4.js, arrhistDatenode4h2="+arrhistDatenode4h2);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
//refreshhistH4() function is called in histOpt.js
function refreshhistH4() 
{
  var histnode4h2data = posthistH4;
  convhisttimenode4h2();
  
////console.log(arrDate)

// 1. 实例化对象

  var Name;
  if (histnode4h2data[histnode4h2data.length-1] >=1000) {
    Name = "Concentration(ppm)";
  } else if (histnode4h2data[histnode4h2data.length-1] < 1000) {
     Name = "Concentration(ppb)";
  } else {
    Name = "Concentration(ppb)";
  }

  // 更新数据后push进data数据
  let histcharth4option = 
  {
    color: '#4c9bfd',
    title: {
      text: 'Hydrogen - Node 4',
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
        return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode4h2[index]
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
      data:arrhistDatenode4h2,
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
      data: histnode4h2data,
    }]
  };
  // 更新echarts图表
  histcharth4.setOption(histcharth4option, true);
  window.addEventListener("resize", function () 
  {
    histcharth4.resize();
  });
}




