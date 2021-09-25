/*
  Sort history data function 
  Purpose: sort history data in reverse order with corresponding date in a node
  It is called in overallhistProcxx.js files.
  Orginal array is not changed because its needed for echart display.
*/
function sortHist(inputdata, inputtime) 
{
  var arrVal = [];
  var arrTime = [];
  var arr = [];
  var arrT = [];
  for(var i=0; i<inputdata.length;i++)
  {
    arr[i]=inputdata[i];
  }
  for(var i=0; i<inputtime.length;i++)
  {
    arrT[i]=inputtime[i];
  }

  //sorting algorithm
  for (let i = 0; i < arr.length; i++) 
  {
    for (let j = 0; j < arr.length - i - 1; j++) 
    {
      if (arr[j + 1] > arr[j]) 
      {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        var temp2 = arrT[j];
        arrT[j] = arrT[j + 1];
        arrT[j + 1] = temp2;
      }
    }
  }


  for (k = 0; k < 4; k++) 
  {
    arrVal[k]=arr[k];
    var d = arrT[k]*1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" +dt.getFullYear();
    arrTime[k]=date;
  }

  //store results in an object of javascript
  //JavaScript 的设计是一个简单的基于对象的范式。
  //一个对象就是一系列属性的集合，一个属性包含一个名和一个值。
  //一个属性的值可以是函数，这种情况下属性也被称为方法。
  var param = new Object();
  param['value'] = arrVal;
  param['time'] = arrTime; 
  return param;
}

/*
  Sort history data function for overall table display
  Purpose: find out maximum data and corresponding date in a node
  Orginal array is not changed because its needed for echart display.
*/
function sortMaxVal(inputdata,inputtime) 
{
  var processed_Arr = [];
  var proc_Date = [];
  for(var i=0; i<inputdata.length;i++)
  {
    processed_Arr[i]=inputdata[i];
  }
  for(var i=0; i<inputtime.length;i++)
  {
    proc_Date[i]=inputtime[i];
  }
  for (var i = 0; i < processed_Arr.length; i++)
  {
    for (var j = 0; j < processed_Arr.length - i - 1; j++)
    {
      if (processed_Arr[j + 1] > processed_Arr[j]) 
      {
        var temp = processed_Arr[j];
        processed_Arr[j] = processed_Arr[j + 1];
        processed_Arr[j + 1] = temp;

        var temp2 = proc_Date[j];
        proc_Date[j] = proc_Date[j + 1];
        proc_Date[j+1] = temp2
      }
    }
  }
  var finalArr = [processed_Arr[0], proc_Date[0]]
  //console.log(finalArr)
  return finalArr
}
