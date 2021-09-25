//history chart of FA in Node3
// 1. 实例化对象
var histchartfa3 = echarts.init(document.querySelector(".fa .chart"));
var arrhistDatenode3fa = [];

//convhisttimenode3fa() is to convert node1 fa timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode3fa()
{
  var arrDatenode3fa = [];
  //every element in histdateH1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateFA1.length; i++)
  {
    arrDatenode3fa[i]=histdateFA1[i]*1000;
  }
  //let every element of arrDatenode3fa array inherits Date class property
  for(var i=0; i<arrDatenode3fa.length; i++)
  {
    arrDatenode3fa[i]=new Date(arrDatenode3fa[i]);
  }

  var temptime = arrDatenode3fa;
  //console.log("in histFA3.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode3fa array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode3fa[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histFA1.js, arrhistDatenode3fa="+arrhistDatenode3fa);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
function refreshhistFA3() {
  var histnode3fadata = posthistFA3;
  convhisttimenode3fa();

  
  var Name;
  if (histnode3fadata[histnode3fadata.length-1] >=1000) {
    Name = "Concentration(ppm)";
  } else if (histnode3fadata[histnode3fadata.length-1] < 1000) {
     Name = "Concentration(ppb)";
  } else {
    Name = "Concentration(ppb)";
  }

  let histchartfa3option = 
  {
      color:'#91CC75',
      title: {
        text: 'Formaldehyde - Node 3',
        textStyle: {
          color: '#ffffff'
        }
      },
      //tooltip
      tooltip: {
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
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode3fa[index]
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
        data:arrhistDatenode3fa,
        name:"Time",
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
        axisLabel: {
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
      series: [{
        name: 'Formaldehyde',
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
        data: histnode3fadata
      }]
    };
    // 更新echarts图表
    histchartfa3.setOption(histchartfa3option, true);
    window.addEventListener("resize", function () 
    {
      histchartfa3.resize();
    });
}
