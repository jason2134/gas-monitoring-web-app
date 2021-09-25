//This js file is to obtain all the Humid concentration value data & Corresponding timestamp from Node_X collections in database
//define empty js arrays for history Hydrogen value & corresponding timestamp converted array for xAxis category in overallhistHumid.js
var node1humid_procArr = [];
var node2humid_procArr = [];
var node3humid_procArr = [];
var node4humid_procArr = [];
var overallhumidhistTime= [];

//convhisttimeoverallhumid() is to convert overall Humid timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimeoverallhumid()
{
  var arrDateoverallhumid = [];
  //every element in histdateHumid1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateHumid1.length; i++)
  {
    arrDateoverallhumid[i]=histdateHumid1[i]*1000;
  }
  //let every element of arrDateoverallhumid array inherits Date class property
  for(var i=0; i<arrDateoverallhumid.length; i++)
  {
    arrDateoverallhumid[i]=new Date(arrDateoverallhumid[i]);
  }

  var temptime = arrDateoverallhumid;
  //console.log("in overallhistProcHumid.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDateoverallhumid array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    overallhumidhistTime[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in overallhistProcHumid.js, overallhumidhistTime="+overallhumidhistTime);
  
}
function procHumid() {
  node1humid_procArr = [];
  node2humid_procArr = [];
  node3humid_procArr = [];
  node4humid_procArr = [];
  overallhumidhistTime = [];
  convhisttimeoverallhumid();
  node1humid_procArr = posthistHumid1;
  node2humid_procArr = posthistHumid2;
  node3humid_procArr = posthistHumid3;
  node4humid_procArr = posthistHumid4;
}
