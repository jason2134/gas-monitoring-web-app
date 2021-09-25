//history chart of Hydrogen in Node1
// 1. 实例化对象
var histcharth1 = echarts.init(document.querySelector(".hydrogen .chart"));
var arrhistDatenode1h2 = [];

//convhisttimenode1h2() is to convert node1 H2 timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode1h2()
{
  var arrDatenode1h2 = [];
  arrhistDatenode1h2 = [];
  //every element in histdateH1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateH1.length; i++)
  {
    arrDatenode1h2[i]=histdateH1[i]*1000;
  }
  //let every element of arrDatenode1h2 array inherits Date class property
  for(var i=0; i<arrDatenode1h2.length; i++)
  {
    arrDatenode1h2[i]=new Date(arrDatenode1h2[i]);
  }

  var temptime = arrDatenode1h2;
  //console.log("in histH1.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode1h2 array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode1h2[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histH1.js, arrhistDatenode1h2="+arrhistDatenode1h2);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}



//refreshhistH1() function is called in histOpt.js
function refreshhistH1() 
{
  var histnode1h2data = posthistH1;
  convhisttimenode1h2();
  // //console.log("histnode1h2data ="+histnode1h2data);
  // //console.log("histnode1h2data length="+histnode1h2data.length);
  // //console.log("arrhistDatenode1h2[1]="+arrhistDatenode1h2[1]);
  //Name is called in yAxis, using the final element value to determine which unit to be shown on yAxis
  var Name;
  if (histnode1h2data[histnode1h2data.length-1] >=1000) 
  {
    Name = "Concentration(ppm)";
  } 
  else if (histnode1h2data[histnode1h2data.length-1] < 1000) 
  {
     Name = "Concentration(ppb)";
  } 
  else 
  {
    Name = "Concentration(ppb)";
  }

  
  let histcharth1option = 
  {
    
    color: '#4c9bfd',
    title: {
      text: 'Hydrogen - Node 1',
      textStyle: {
        color: '#ffffff'
      }
    },
    //tooltip
    //In history echart display version, tooltip is used to display each points info
    //including gas type, concentration(the data: array in series), corresponding time(which is converted into the "category" array in xAxis)
    //Abandoned: line chart: {a}（系列名称）(series.Name)，{b}（类目值）("category" data in xAxis)，{c}（数值）(data in series), {d}（无）
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
        return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode1h2[index]
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
      data:arrhistDatenode1h2,
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
      data: histnode1h2data,
    }]
  };
  // 更新echarts图表
  histcharth1.setOption(histcharth1option, true);
  window.addEventListener("resize", function () 
  {
    histcharth1.resize();
  });
}

function clearhistnode1h2()
{
  arrhistDatenode1h2 = [];
  histnode1h2data=[];
}




