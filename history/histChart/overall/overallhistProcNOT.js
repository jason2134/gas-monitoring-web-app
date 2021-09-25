//This js file is to obtain all the NO2 concentration value data & Corresponding timestamp from Node_X collections in database
//define empty js arrays for history Hydrogen value & corresponding timestamp converted array for xAxis category in overallhistNOT.js
var node1not_procArr = [];
var node2not_procArr = [];
var node3not_procArr = [];
var node4not_procArr = [];
var overallnothistTime = [];

//convhisttimeoverallnot() is to convert overall not timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimeoverallnot()
{
  var arrDateoverallnot = [];
  //every element in histdateN1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateN1.length; i++)
  {
    arrDateoverallnot[i]=histdateN1[i]*1000;
  }
  //let every element of arrDateoverallnot array inherits Date class property
  for(var i=0; i<arrDateoverallnot.length; i++)
  {
    arrDateoverallnot[i]=new Date(arrDateoverallnot[i]);
  }

  var temptime = arrDateoverallnot;
  //console.log("in overallhistProcNOT.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDateoverallnot array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    overallnothistTime[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in overallhistProcNOT.js, overallnothistTime=" + overallnothistTime);
  
}

function procN() {
  node1not_procArr = [];
  node2not_procArr = [];
  node3not_procArr = [];
  node4not_procArr = [];
  overallnothistTime = [];
  convhisttimeoverallnot();
  node1not_procArr = posthistN1;
  node2not_procArr = posthistN2;
  node3not_procArr = posthistN3;
  node4not_procArr = posthistN4;
}
