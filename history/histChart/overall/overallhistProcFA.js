//This js file is to obtain all the NO2 concentration value data & Corresponding timestamp from Node_X collections in database
//define empty js arrays for history Hydrogen value & corresponding timestamp converted array for xAxis category in overallhistFA.js
var node1fa_procArr = [];
var node2fa_procArr = [];
var node3fa_procArr = [];
var node4_procArr = [];
var overallfahistTime = [];

//convhisttimeoverallfa() is to convert overall fa timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimeoverallfa()
{
  var arrDateoverallfa = [];
  //every element in histdateFA1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateFA1.length; i++)
  {
    arrDateoverallfa[i]=histdateFA1[i]*1000;
  }
  //let every element of arrDateoverallfa array inherits Date class property
  for(var i=0; i<arrDateoverallfa.length; i++)
  {
    arrDateoverallfa[i]=new Date(arrDateoverallfa[i]);
  }

  var temptime = arrDateoverallfa;
  //console.log("in overallhistProcFA.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDateoverallfa array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    overallfahistTime[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in overallhistProcFA.js, overallfahistTime="+overallfahistTime);
}

function procFA() {
  node1fa_procArr = [];
  node2fa_procArr = [];
  node3fa_procArr = [];
  node4fa_procArr = [];
  overallfahistTime = [];
  convhisttimeoverallfa();
  node1fa_procArr = posthistFA1;
  node2fa_procArr = posthistFA2;
  node3fa_procArr = posthistFA3;
  node4fa_procArr = posthistFA4;
}
