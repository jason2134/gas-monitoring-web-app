//history chart of Temperature in Node3
// 1. 实例化对象
var histcharttemp3 = echarts.init(document.querySelector(".temp .chart"));
var arrhistDatenode3temp = [];

//convhisttimenode3temp() is to convert node1 temp timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode3temp()
{
  var arrDatenode3temp = [];
  //every element in histdateTemp3 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateTemp3.length; i++)
  {
    arrDatenode3temp[i]=histdateTemp3[i]*1000;
  }
  //let every element of arrDatenode3temp array inherits Date class property
  for(var i=0; i<arrDatenode3temp.length; i++)
  {
    arrDatenode3temp[i]=new Date(arrDatenode3temp[i]);
  }

  var temptime = arrDatenode3temp;
  //console.log("in histTemp3.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode3temp array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode3temp[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histTemp3.js, arrhistDatenode3temp="+arrhistDatenode3temp);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}
function refreshhistTemp3() {
  var histnode3temp = posthistTemp3;
  convhisttimenode3temp();

 
  var thColor = ["#e81031", "#5da5b3"];
  
  let histcharttemp3option = {
      color: thColor[0],
      title: {
        text: 'Temperature - Node 3',
        show:true,
        textStyle: {
          color: '#ffffff', 
        }
      },
      legend: {
        top: "15%",
      itemWidth: 10,
      itemHeight: 10,
      show:false
      },
      //tooltip
      tooltip: 
      {
        trigger: 'axis',
        show:true,
        //tooltip formatter format is: for each point, will display its value, time, index in the array, and unit with auto conversion
        formatter:function(obj)
        {
          var res = "Info: </br>";
          var value = obj[0].value;
          var index = obj[0].dataIndex;
          var unit = "°C";
          //console.log("formatter value="+value);
          //console.log("formatter index="+index);
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode3temp[index]
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
        data:arrhistDatenode3temp,
        // nameLocation: "middle",
        name: "Time",
        splitLine: {
            show: false
        },
        axisLine: {
          show:true,
              lineStyle: {
              color: '#ffffff'
            }
        },
        axisTick: {
        show:false
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
      yAxis: 
      {
        type: 'value',
   // offset:20,
       name:'Temperature(°C)',
        boundaryGap:true,
      //  boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
         min: 0,
         max: 40,
       
        axisLine: {
          show:true,
          lineStyle: {
              color: "#ffffff",
          },
        },
        axisTick: {
          show: false
        },
        axisLabel: 
        {
          color: '#ffffff',
          show: true,
          textStyle:
          {
            color:'white',
            fontSize:8,
          },
        }
      },
      series: 
      {
        name: 'Temperature',
        type: 'line',
        label: 
        {
          show: true, 
          position: 'top',
          //offset:[15,0],
          color: "white",
          fontSize: 8,
          formatter: function (val) 
          {
            return Math.round(val.data) + "°C";
          }
        },
        showSymbol: false,
        hoverAnimation: false,
        data: histnode3temp
      }
    };
    // 更新echarts图表
    histcharttemp3.setOption(histcharttemp3option, true);
    window.addEventListener("resize", function () 
    {
      histcharttemp3.resize();
    });
}