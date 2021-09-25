//history chart of Toluene in Node1
// 1. 实例化对象
var histcharttol1 = echarts.init(document.querySelector(".tol .chart"));
var arrhistDatenode1tol = [];

//convhisttimenode1tol() is to convert node1 Tol timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode1tol()
{
  var arrDatenode1tol = [];
  //every element in histdateTol1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateTol1.length; i++)
  {
    arrDatenode1tol[i]=histdateTol1[i]*1000;
  }
  //let every element of arrDatenode1tol array inherits Date class property
  for(var i=0; i<arrDatenode1tol.length; i++)
  {
    arrDatenode1tol[i]=new Date(arrDatenode1tol[i]);
  }

  var temptime = arrDatenode1tol;
  //console.log("in histTol1.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode1tol array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode1tol[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histTol1.js, arrhistDatenode1tol="+arrhistDatenode1tol);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
function refreshhistTol1() {
  var histnode1toldata = posthistTol1;
  convhisttimenode1tol();
  
  var Name;
  if (histnode1toldata[histnode1toldata.length-1] >=1000) 
  {
    Name = "Concentration(ppm)";
  } 
  else if (histnode1toldata[histnode1toldata.length-1] < 1000) 
  {
     Name = "Concentration(ppb)";
  } 
  else {
    Name = "Concentration(ppb)";
  }
  let histcharttol1option = 
  {
      color:'#d1a630',
      title: {
        text: 'Toluene - Node 1',
        textStyle: {
          color: '#ffffff'
        }
      },
      //tooltip, it shows in black bg color
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
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode1tol[index]
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
        data:arrhistDatenode1tol,
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
        data: histnode1toldata,
      }]
    };
    // 更新echarts图表
    histcharttol1.setOption(histcharttol1option, true);
    window.addEventListener("resize", function () 
    {
      histcharttol1.resize();
    });
}
