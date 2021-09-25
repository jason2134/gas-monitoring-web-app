//This js file is to obtain all the Toluene concentration value data & Corresponding timestamp from Node_X collections in database
//define empty js arrays for history Hydrogen value & corresponding timestamp converted array for xAxis category in overallhistTol.js
var node1tol_procArr = [];
var node2tol_procArr = [];
var node3tol_procArr = [];
var node4tol_procArr = [];
var overalltolhistTime = [];

//convhisttimeoveralltol() is to convert overall Tol timestamp array into yr/mt/day h:m:s format and store into array for xAxis category show
function convhisttimeoveralltol()
{
  var arrDateoveralltol = [];
  //every element in histdateTol1 needs to *1000 to convert it js recognized timestamp
  for(var i=0; i<histdateTol1.length; i++)
  {
    arrDateoveralltol[i]=histdateTol1[i]*1000;
  }
  //let every element of arrDateoveralltol array inherits Date class property
  for(var i=0; i<arrDateoveralltol.length; i++)
  {
    arrDateoveralltol[i]=new Date(arrDateoveralltol[i]);
  }

  var temptime = arrDateoveralltol;
  //console.log("in overallhistProcTol.js, conv histtime=" + temptime);
  //get every element's yr, mt, day, h, m, s of temptime array and store it into arrhisDateoveralltol array(global)
  for(var i=0;i<temptime.length;i++)
  {
    var y = temptime[i].getFullYear();
    var mt = temptime[i].getMonth() + 1;//不加1，五月份返回4
    var day = temptime[i].getDate();
    var h = temptime[i].getHours();
    var m = temptime[i].getMinutes();
    var s = temptime[i].getSeconds();
    overalltolhistTime[i]= y +'/'+ mt + '/' + day + ' ' + (h>=10 ? h:'0'+ h) +':' + (m>=10 ? m:'0'+ m) + ':' + (s>=10 ? s:'0'+ s);
  }
  //console.log("in overallhistProcTol.js, overalltolhistTime="+overalltolhistTime);
}

function procT() {
  node1tol_procArr = [];
  node2tol_procArr = [];
  node3tol_procArr = [];
  node4tol_procArr = [];
  overalltolhistTime = [];
  convhisttimeoveralltol();
  node1tol_procArr = posthistTol1;
  node2tol_procArr = posthistTol2;
  node3tol_procArr = posthistTol3;
  node4tol_procArr = posthistTol4;
  
 
}
