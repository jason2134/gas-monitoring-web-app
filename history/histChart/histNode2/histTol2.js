//history chart of Toluene in Node2
// 1. 实例化对象
var histcharttol2 = echarts.init(document.querySelector(".tol .chart"));
var arrhistDatenode2tol = [];

//convhisttimenode2tol() is to convert node1 Tol timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode2tol()
{
  var arrDatenode2tol = [];
  //every element in histdateTol2 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateTol2.length; i++)
  {
    arrDatenode2tol[i]=histdateTol1[i]*1000;
  }
  //let every element of arrDatenode2tol array inherits Date class property
  for(var i=0; i<arrDatenode2tol.length; i++)
  {
    arrDatenode2tol[i]=new Date(arrDatenode2tol[i]);
  }

  var temptime = arrDatenode2tol;
  //console.log("in histTol1.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode2tol array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode2tol[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histH1.js, arrhistDatenode2tol="+arrhistDatenode2tol);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}

function refreshhistTol2() {
  var histnode2toldata = posthistTol2;
  
  convhisttimenode2tol();
  
  
  var Name;
  if (histnode2toldata[histnode2toldata.length-1] >=1000) {
    Name = "Concentration(ppm)";
  } else if (histnode2toldata[histnode2toldata.length-1] < 1000) {
     Name = "Concentration(ppb)";
  } else {
    Name = "Concentration(ppb)";
  }
  let histcharttol2option = 
  {
      color:'#d1a630',
      title: {
        text: 'Toluene - Node 2',
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
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode2tol[index]
        },

        axisPointer: {
          animation: false
        }
      },
      grid: {
        top: "30%",
        left: "15%",
        right: "15%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      //xAxis Setting
      xAxis: {
        type: 'category',
        data:arrhistDatenode2tol,
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
            } else if (Name == "Concentration(ppb)") 
            {
                return val;            
            }
          }
          // show: true
        }
      },
      series: [{
        name: 'Toluene',
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
        data: histnode2toldata,
      }]
    };
    // 更新echarts图表
    histcharttol2.setOption(histcharttol2option, true);
    window.addEventListener("resize", function () 
    {
      histcharttol2.resize();
    });
}
