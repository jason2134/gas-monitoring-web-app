//This js file is to obtain all the Temperature value data & Corresponding timestamp from Node_X collections in database
//define empty js arrays for history Temperature value & corresponding timestamp converted array for xAxis category in overallhistTemp.js
var node1temp_procArr = [];
var node2temp_procArr = [];
var node3temp_procArr = [];
var node4temp_procArr = [];
var overalltemphistTime = [];

//convhisttimeoveralltemp() is to convert overall temp timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimeoveralltemp()
{
  var arrDateoveralltemp = [];
  //every element in histdateTemp1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateTemp1.length; i++)
  {
    arrDateoveralltemp[i]=histdateTemp1[i]*1000;
  }
  //let every element of arrDateoveralltemp array inherits Date class property
  for(var i=0; i<arrDateoveralltemp.length; i++)
  {
    arrDateoveralltemp[i]=new Date(arrDateoveralltemp[i]);
  }

  var temptime = arrDateoveralltemp;
  //console.log("in overallhistProcTemp.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDateoveralltemp array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    overalltemphistTime[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in overallhistProcTemp.js, overalltemphistTime="+overalltemphistTime);

}

function procTemp() {
  node1temp_procArr = [];
  node2temp_procArr = [];
  node3temp_procArr = [];
  node4temp_procArr = [];
  overalltemphistTime = [];
  convhisttimeoveralltemp();
  node1temp_procArr = posthistTemp1;
  node2temp_procArr = posthistTemp2;
  node3temp_procArr = posthistTemp3;
  node4temp_procArr = posthistTemp4;
}
