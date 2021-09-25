//history chart of Humidity in Node1
var histcharthumid1 = echarts.init(document.querySelector(".humid .chart"));
var arrhistDatenode1humid = [];

//convhisttimenode1humid() is to convert node1 Humid timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimenode1humid()
{
  var arrDatenode1humid = [];
  //every element in histdateHumid1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateHumid1.length; i++)
  {
    arrDatenode1humid[i]=histdateHumid1[i]*1000;
  }
  //let every element of arrDatenode1humid array inherits Date class property
  for(var i=0; i<arrDatenode1humid.length; i++)
  {
    arrDatenode1humid[i]=new Date(arrDatenode1humid[i]);
  }

  var temptime = arrDatenode1humid;
  //console.log("in histHumid1.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDatenode1humid array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    arrhistDatenode1humid[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in histHumid1.js, arrhistDatenode1humid="+arrhistDatenode1humid);
  // //console.log("conv histtime h="+h);
  // //console.log("conv histtime m="+m);
  // //console.log("conv histtime s="+s);
}

function refreshhistHumid1() 
{
  var histnode1humid = posthistHumid1;
  convhisttimenode1humid();
  
  var thColor = ["#e81031", "#5da5b3"];
  
  let histhumid1option = {
      color: thColor[1],
      title: 
      {
        text: 'Humidity - Node 1',
        show:true,
        textStyle: {
          color: '#ffffff',
        }
      },
      //tooltip
      tooltip: {
        trigger: 'axis',
        show:true,
        //tooltip formatter format is: for each point, will display its value, time, index in the array, and unit with auto conversion
        formatter:function(obj)
        {
          var res = "Info: </br>";
          var value = obj[0].value;
          var index = obj[0].dataIndex;
          var unit = "%";
          //console.log("formatter value="+value);
          //console.log("formatter index="+index);
          return res+="value:"+value+' '+ unit+ '</br>'+"index:"+index+'</br>'+"Time:"+arrhistDatenode1humid[index]
        },
        axisPointer: {
          animation: false
        }
      },
      grid: {
        top: "30%",
        left: "5%",
        right: "15%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      //xAxis Setting
      xAxis: {
        type: 'category',
        data:arrhistDatenode1humid,
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
      yAxis: {
        type: 'value',
        //offset:20,
         name:'RH(%)',
        boundaryGap:true,
        //  boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
         min: 0,
         max: 100,
        axisLine: {
             lineStyle: {
              color: "#ffffff",
          },
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#ffffff',
          show: true
        }
      },

      series: {
        name: 'Humidity',
        type: 'line',
        //here the label is showing formatter information which is inside label, 
        //and when it shows, it doesnt have black bg color. only shows formatter return stuff.
        label: 
        {
          show: true, 
          position: 'top',
          //offset:[15,0],
          color: "white",
          fontSize: 8,
          formatter: function (val) 
          {
            return Math.round(val.data) + "%";
          }
        },
        showSymbol: false,
        hoverAnimation: false,
        data: histnode1humid,
      }
    };
    // 更新echarts图表
    histcharthumid1.setOption(histhumid1option, true);
    window.addEventListener("resize", function () 
    {
      histcharthumid1.resize();
    });
}
