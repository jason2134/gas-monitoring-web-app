//history chart of NO2 in Node4
// 1. 实例化对象
var histchartnot4 = echarts.init(document.querySelector(".nitrogenOxide .chart"));
var arrhistDatenode4not = [];

//convhisttimenode4not() is to convert node4 not timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode4not()
{
  var arrDatenode4not = [];
  //every element in histdateN4 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateN4.length; i++)
  {
    arrDatenode4not[i]=histdateN4[i]*1000;
  }
  //let every element of arrDatenode4not array inherits Date class property
  for(var i=0; i<arrDatenode4not.length; i++)
  {
    arrDatenode4not[i]=new Date(arrDatenode4not[i]);
  }

  var temptime = arrDatenode4not;
  //console.log("in histNOT4.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode4not array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode4not[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histNOT4.js, arrhistDatenode4not=" + arrhistDatenode4not);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}

function refreshhistNOT4() 
{
  var histnode4notdata = posthistN4;
  convhisttimenode4not();

  

  var Name;
  if (histnode4notdata[histnode4notdata.length-1] >=1000) 
  {
    Name = "Concentration(ppm)";
  } 
  else if (histnode4notdata[histnode4notdata.length-1] < 1000) 
  {
     Name = "Concentration(ppb)";
  } 
  else 
  {
    Name = "Concentration(ppb)";
  }
  
  let histchartnot4option = 
  {
      color:'#ff726f',
      title: {
        text: 'Nitrogen Dioxide - Node 4',
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
           return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode4not[index]
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
        data:arrhistDatenode4not,
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
        data: histnode4notdata
      }]
    };
    // 更新echarts图表
    histchartnot4.setOption(histchartnot4option, true);
    window.addEventListener("resize", function () 
    {
      histchartnot4.resize();
    });

}
