/*
 * Overall Nodes history data ranking insert functions
 * Purpose: insert the ranking results of overall nodes in table in historyData.html
 * They are constanly called in histTableclick.js every time u wanna switch to different gases in a table in  overall nodes.
 * histTableclick.js is finally called in tables of historyData.html
 * They are firstly called in historyData.html at dropdown menu; then goes to histOpt.js, call refreshhistOverall() function, and call these functions
 */

function histTableOverallAct()
{
  document.getElementById("type").innerHTML = "Overall";
  document.getElementById("dashboardTitle").innerHTML = "HISTORY OVERALL";
}

function histTableOverallRankH() 
{
  
  var h1 = sortMaxVal(posthistH1, histdateH1);
  var h2 = sortMaxVal(posthistH2, histdateH2);
  var h3 = sortMaxVal(posthistH3, histdateH3);
  var h4 = sortMaxVal(posthistH4, histdateH4);

  var arrVal = [h1[0], h2[0], h3[0], h4[0]];
  var arrT = [h1[1], h2[1], h3[1], h4[1]];
  //console.log(arrT);
  var arrNode = ["Node 1","Node 2","Node 3","Node 4"]

  for (var i = 0; i < arrVal.length; i++){
    for (var j = 0; j < arrVal.length - i - 1; j++){
        if (arrVal[j + 1] > arrVal[j]) {
        var temp = arrVal[j];
        arrVal[j] = arrVal[j + 1];
        arrVal[j + 1] = temp;

        var temp2 = arrT[j];
        arrT[j] = arrT[j + 1];
          arrT[j + 1] = temp2;

          var temp3 = arrNode[j];
          arrNode[j] = arrNode[j + 1];
          arrNode[j + 1] = temp3;
      }
    }
  }

  var arrTime = [];
  for (k = 0; k < arrT.length; k++){
    var d = arrT[k] * 1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/"+ dt.getFullYear()
    arrTime[k]=date;
  }
  
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  
  document.getElementById("1st_data").innerHTML = arrVal[0];
  document.getElementById("2nd_data").innerHTML = arrVal[1];
  document.getElementById("3rd_data").innerHTML = arrVal[2];
  document.getElementById("4th_data").innerHTML = arrVal[3];

  document.getElementById("1st_time").innerHTML = arrTime[0];
  document.getElementById("2nd_time").innerHTML = arrTime[1];
  document.getElementById("3rd_time").innerHTML = arrTime[2];
  document.getElementById("4th_time").innerHTML = arrTime[3];

  document.getElementById("1st").innerHTML = arrNode[0];
  document.getElementById("2nd").innerHTML = arrNode[1];
  document.getElementById("3rd").innerHTML = arrNode[2];
  document.getElementById("4th").innerHTML = arrNode[3];
}

function histTableOverallRankN() {
  var n1 = sortMaxVal(posthistN1, histdateN1);
  var n2 = sortMaxVal(posthistN2, histdateN2);
  var n3 = sortMaxVal(posthistN3, histdateN3);
  var n4 = sortMaxVal(posthistN4, histdateN4);

  var arrVal = [n1[0], n2[0], n3[0], n4[0]];
  var arrT = [n1[1], n2[1], n3[1], n4[1]];
  //console.log(arrT);
  var arrNode = ["Node 1","Node 2","Node 3","Node 4"]

  for (var i = 0; i < arrVal.length; i++){
    for (var j = 0; j < arrVal.length - i - 1; j++){
        if (arrVal[j + 1] > arrVal[j]) {
        var temp = arrVal[j];
        arrVal[j] = arrVal[j + 1];
        arrVal[j + 1] = temp;

        var temp2 = arrT[j];
        arrT[j] = arrT[j + 1];
          arrT[j + 1] = temp2;

          var temp3 = arrNode[j];
          arrNode[j] = arrNode[j + 1];
          arrNode[j + 1] = temp3;
      }
    }
  }
  var arrTime = []
  for (k = 0; k < arrT.length; k++)
  {
    var d = arrT[k] * 1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/"+ dt.getFullYear()
    arrTime[k]=date;
  }
  
  document.getElementById("type").innerHTML = "Overall";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";

  document.getElementById("1st_data").innerHTML = arrVal[0];
  document.getElementById("2nd_data").innerHTML = arrVal[1];
  document.getElementById("3rd_data").innerHTML = arrVal[2];
  document.getElementById("4th_data").innerHTML = arrVal[3];

  document.getElementById("1st_time").innerHTML = arrTime[0];
  document.getElementById("2nd_time").innerHTML = arrTime[1];
  document.getElementById("3rd_time").innerHTML = arrTime[2];
  document.getElementById("4th_time").innerHTML = arrTime[3];

  document.getElementById("1st").innerHTML = arrNode[0];
  document.getElementById("2nd").innerHTML = arrNode[1];
  document.getElementById("3rd").innerHTML = arrNode[2];
  document.getElementById("4th").innerHTML = arrNode[3];
}

function histTableOverallRankFA() 
{
  var fa1 = sortMaxVal(posthistFA1, histdateFA1);
  var fa2 = sortMaxVal(posthistFA2, histdateFA2);
  var fa3 = sortMaxVal(posthistFA3, histdateFA3);
  var fa4 = sortMaxVal(posthistFA4, histdateFA4);

  var arrVal = [fa1[0], fa2[0], fa3[0], fa4[0]];
  var arrT = [fa1[1], fa2[1], fa3[1], fa4[1]];
  //console.log(arrT);
  var arrNode = ["Node 1","Node 2","Node 3","Node 4"]

  for (var i = 0; i < arrVal.length; i++)
  {
    for (var j = 0; j < arrVal.length - i - 1; j++)
    {
        if (arrVal[j + 1] > arrVal[j]) 
        {
          var temp = arrVal[j];
          arrVal[j] = arrVal[j + 1];
          arrVal[j + 1] = temp;

          var temp2 = arrT[j];
          arrT[j] = arrT[j + 1];
          arrT[j + 1] = temp2;

          var temp3 = arrNode[j];
          arrNode[j] = arrNode[j + 1];
          arrNode[j + 1] = temp3;
        }
    }
  }
  var arrTime = []
  for (k = 0; k < arrT.length; k++){
    var d = arrT[k] * 1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/"+ dt.getFullYear();
    arrTime[k]=date;
  }
  
  document.getElementById("type").innerHTML = "Overall";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";

  document.getElementById("1st_data").innerHTML = arrVal[0];
  document.getElementById("2nd_data").innerHTML = arrVal[1];
  document.getElementById("3rd_data").innerHTML = arrVal[2];
  document.getElementById("4th_data").innerHTML = arrVal[3];

  document.getElementById("1st_time").innerHTML = arrTime[0];
  document.getElementById("2nd_time").innerHTML = arrTime[1];
  document.getElementById("3rd_time").innerHTML = arrTime[2];
  document.getElementById("4th_time").innerHTML = arrTime[3];

  document.getElementById("1st").innerHTML = arrNode[0];
  document.getElementById("2nd").innerHTML = arrNode[1];
  document.getElementById("3rd").innerHTML = arrNode[2];
  document.getElementById("4th").innerHTML = arrNode[3];
}

function histTableOverallRankTol() 
{
  var t1 = sortMaxVal(posthistTol1, histdateTol1);
  var t2 = sortMaxVal(posthistTol2, histdateTol2);
  var t3 = sortMaxVal(posthistTol3, histdateTol3);
  var t4 = sortMaxVal(posthistTol4, histdateTol4);

  var arrVal = [t1[0], t2[0], t3[0], t4[0]];
  var arrT = [t1[1], t2[1], t3[1], t4[1]];
  //console.log(arrT);
  var arrNode = ["Node 1","Node 2","Node 3","Node 4"]

  for (var i = 0; i < arrVal.length; i++){
    for (var j = 0; j < arrVal.length - i - 1; j++){
        if (arrVal[j + 1] > arrVal[j]) {
        var temp = arrVal[j];
        arrVal[j] = arrVal[j + 1];
        arrVal[j + 1] = temp;

        var temp2 = arrT[j];
        arrT[j] = arrT[j + 1];
          arrT[j + 1] = temp2;

          var temp3 = arrNode[j];
          arrNode[j] = arrNode[j + 1];
          arrNode[j + 1] = temp3;
      }
    }
  }
  var arrTime = []
  for (k = 0; k < arrT.length; k++){
    var d = arrT[k] * 1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/"+ dt.getFullYear();
    arrTime[k]=date;
  }
  
  document.getElementById("type").innerHTML = "Overall";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";

  document.getElementById("1st_data").innerHTML = arrVal[0];
  document.getElementById("2nd_data").innerHTML = arrVal[1];
  document.getElementById("3rd_data").innerHTML = arrVal[2];
  document.getElementById("4th_data").innerHTML = arrVal[3];

  document.getElementById("1st_time").innerHTML = arrTime[0];
  document.getElementById("2nd_time").innerHTML = arrTime[1];
  document.getElementById("3rd_time").innerHTML = arrTime[2];
  document.getElementById("4th_time").innerHTML = arrTime[3];

  document.getElementById("1st").innerHTML = arrNode[0];
  document.getElementById("2nd").innerHTML = arrNode[1];
  document.getElementById("3rd").innerHTML = arrNode[2];
  document.getElementById("4th").innerHTML = arrNode[3];
}

function histTableOverallRankTemp() 
{
  var temperature1 = sortMaxVal(posthistTemp1, histdateTemp1);
  var temperature2 = sortMaxVal(posthistTemp2, histdateTemp2);
  var temperature3 = sortMaxVal(posthistTemp3, histdateTemp3);
  var temperature4 = sortMaxVal(posthistTemp4, histdateTemp4);

  var arrVal = [temperature1[0], temperature2[0], temperature3[0], temperature4[0]];
  var arrT = [temperature1[1], temperature2[1], temperature3[1], temperature4[1]];
  //console.log(arrT);
  var arrNode = ["Node 1","Node 2","Node 3","Node 4"]

  for (var i = 0; i < arrVal.length; i++){
    for (var j = 0; j < arrVal.length - i - 1; j++){
        if (arrVal[j + 1] > arrVal[j]) {
        var temp = arrVal[j];
        arrVal[j] = arrVal[j + 1];
        arrVal[j + 1] = temp;

        var temp2 = arrT[j];
        arrT[j] = arrT[j + 1];
          arrT[j + 1] = temp2;

          var temp3 = arrNode[j];
          arrNode[j] = arrNode[j + 1];
          arrNode[j + 1] = temp3;
      }
    }
  }
  var arrTime = []
  for (k = 0; k < arrT.length; k++){
    var d = arrT[k] * 1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/"+ dt.getFullYear();
    arrTime[k]=date;
  }
  
  document.getElementById("type").innerHTML = "Overall";
  document.getElementById("unit").innerHTML = "Temperature(°C)";
  document.getElementById("1st_data").innerHTML = arrVal[0];
  document.getElementById("2nd_data").innerHTML = arrVal[1];
  document.getElementById("3rd_data").innerHTML = arrVal[2];
  document.getElementById("4th_data").innerHTML = arrVal[3];

  document.getElementById("1st_time").innerHTML = arrTime[0];
  document.getElementById("2nd_time").innerHTML = arrTime[1];
  document.getElementById("3rd_time").innerHTML = arrTime[2];
  document.getElementById("4th_time").innerHTML = arrTime[3];

  document.getElementById("1st").innerHTML = arrNode[0];
  document.getElementById("2nd").innerHTML = arrNode[1];
  document.getElementById("3rd").innerHTML = arrNode[2];
  document.getElementById("4th").innerHTML = arrNode[3];
}

function histTableOverallRankHumid() 
{
  var humid1 = sortMaxVal(posthistHumid1, histdateHumid1);
  var humid2 = sortMaxVal(posthistHumid2, histdateHumid2);
  var humid3 = sortMaxVal(posthistHumid3, histdateHumid3);
  var humid4 = sortMaxVal(posthistHumid4, histdateHumid4);

  var arrVal = [humid1[0], humid2[0], humid3[0], humid4[0]];
  var arrT = [humid1[1], humid2[1], humid3[1], humid4[1]];
  //console.log(arrT);
  var arrNode = ["Node 1","Node 2","Node 3","Node 4"]

  for (var i = 0; i < arrVal.length; i++){
    for (var j = 0; j < arrVal.length - i - 1; j++){
        if (arrVal[j + 1] > arrVal[j]) {
        var temp = arrVal[j];
        arrVal[j] = arrVal[j + 1];
        arrVal[j + 1] = temp;

        var temp2 = arrT[j];
        arrT[j] = arrT[j + 1];
          arrT[j + 1] = temp2;

          var temp3 = arrNode[j];
          arrNode[j] = arrNode[j + 1];
          arrNode[j + 1] = temp3;
      }
    }
  }
  var arrTime = []
  for (k = 0; k < arrT.length; k++){
    var d = arrT[k] * 1000;
    var dt = new Date(d);
    var date = dt.getDate() + "/" + (dt.getMonth() + 1) + "/"+ dt.getFullYear();
    arrTime[k]=date;
  }
  
  document.getElementById("type").innerHTML = "Overall";
  document.getElementById("unit").innerHTML = "RH(%)";
  document.getElementById("1st_data").innerHTML = arrVal[0];
  document.getElementById("2nd_data").innerHTML = arrVal[1];
  document.getElementById("3rd_data").innerHTML = arrVal[2];
  document.getElementById("4th_data").innerHTML = arrVal[3];

  document.getElementById("1st_time").innerHTML = arrTime[0];
  document.getElementById("2nd_time").innerHTML = arrTime[1];
  document.getElementById("3rd_time").innerHTML = arrTime[2];
  document.getElementById("4th_time").innerHTML = arrTime[3];

  document.getElementById("1st").innerHTML = arrNode[0];
  document.getElementById("2nd").innerHTML = arrNode[1];
  document.getElementById("3rd").innerHTML = arrNode[2];
  document.getElementById("4th").innerHTML = arrNode[3];
}
