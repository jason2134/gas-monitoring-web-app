//This js file is to obtain all the H2 concentration value data & Corresponding timestamp from Node_X collections in database
//define empty js arrays for history Hydrogen value & corresponding timestamp converted array for xAxis category in overallhistH.js
var node1h2_procArr = [];
var node2h2_procArr = [];
var node3h2_procArr = [];
var node4h2_procArr = [];
var overallh2histTime = [];

//convhisttimeoverallh2() is to convert node1 H2 timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimeoverallh2()
{
  var arrDateoverallh2 = [];
  //every element in histdateH1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateH2.length; i++)
  {
    arrDateoverallh2[i]=histdateH2[i]*1000;
  }
  //let every element of arrDateoverallh2 array inherits Date class property
  for(var i=0; i<arrDateoverallh2.length; i++)
  {
    arrDateoverallh2[i]=new Date(arrDateoverallh2[i]);
  }

  var temptime = arrDateoverallh2;
  //console.log("in overallhistProcH.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into overallh2histTime array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    overallh2histTime[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in overallhistProcH.js, overallh2histTime="+overallh2histTime);
}

function procH() 
{
  //This is used to empty the arrays firstly, then execute the following steps to obtain a new history data("value","time")
  node1h2_procArr = [];
  node2h2_procArr = [];
  node3h2_procArr = [];
  node4h2_procArr = [];
  overallh2histTime = [];
  convhisttimeoverallh2();
  //Get ajax decoded history hydrogen data of all sensor nodes in histPost.js
  node1h2_procArr = posthistH1;
  node2h2_procArr = posthistH2;
  node3h2_procArr = posthistH3;
  node4h2_procArr = posthistH4;
}
