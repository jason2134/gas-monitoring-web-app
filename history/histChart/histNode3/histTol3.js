//history chart of Toluene in Node2
// 1. 实例化对象
var histcharttol3 = echarts.init(document.querySelector(".tol .chart"));
var arrhistDatenode3tol = [];

//convhisttimenode3tol() is to convert node3 Tol timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode3tol()
{
  var arrDatenode3tol = [];
  //every element in histdateTol3 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateTol3.length; i++)
  {
    arrDatenode3tol[i]=histdateTol3[i]*1000;
  }
  //let every element of arrDatenode3tol array inherits Date class property
  for(var i=0; i<arrDatenode3tol.length; i++)
  {
    arrDatenode3tol[i]=new Date(arrDatenode3tol[i]);
  }

  var temptime = arrDatenode3tol;
  //console.log("in histTol3.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode3tol array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode3tol[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histTol3.js, arrhistDatenode3tol="+arrhistDatenode3tol);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
function refreshhistTol3() {
  var histnode3toldata = posthistTol3;
  
  convhisttimenode3tol();

  
  var Name;
  if (histnode3toldata[histnode3toldata.length-1] >=1000) {
    Name = "Concentration(ppm)";
  } else if (histnode3toldata[histnode3toldata.length-1] < 1000) {
     Name = "Concentration(ppb)";
  } else {
    Name = "Concentration(ppb)";
  }
  let histcharttol3option = 
  {
      color:'#d1a630',
      title: {
        text: 'Toluene - Node 3',
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
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode3tol[index]
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
        data:arrhistDatenode3tol,
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
        data: histnode3toldata,
      }]
    };
    // 更新echarts图表
    histcharttol3.setOption(histcharttol3option, true);
    window.addEventListener("resize", function () 
    {
      histcharttol3.resize();
    });
}
