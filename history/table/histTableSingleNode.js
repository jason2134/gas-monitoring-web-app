/*
 * Single Node history data ranking insert functions
 * Purpose: insert the ranking results of single nodes in table in historyData.html
 * They are constanly called in histTableclick.js every time u wanna switch to different gases in a table in one Node or overall nodes.
 * They are firstly called in histOpt.js when selected which node, changed hist_nodestate, and called these functions
 */

//Hydrogen Node1
function histTableRankH1() 
{
  document.getElementById("type").innerHTML = "Node 1";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Hydrogen";
  document.getElementById("2nd").innerHTML = "Hydrogen";
  document.getElementById("3rd").innerHTML = "Hydrogen";
  document.getElementById("4th").innerHTML = "Hydrogen";
  var result = sortHist(posthistH1,histdateH1);
  // console.log("ranking value of H2 in node 1 ="+result.value);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
  //console.log(posthistH1);
  //console.log(histdateH1);
}

//Hydrogen Node2
function histTableRankH2() {
  document.getElementById("type").innerHTML = "Node 2";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Hydrogen";
  document.getElementById("2nd").innerHTML = "Hydrogen";
  document.getElementById("3rd").innerHTML = "Hydrogen";
  document.getElementById("4th").innerHTML = "Hydrogen";
  var result = sortHist(posthistH2,histdateH2);
  // console.log("ranking value of H2 in node 2 ="+result.value);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Hydrogen Node3
function histTableRankH3() {
  document.getElementById("type").innerHTML = "Node 3";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Hydrogen";
  document.getElementById("2nd").innerHTML = "Hydrogen";
  document.getElementById("3rd").innerHTML = "Hydrogen";
  document.getElementById("4th").innerHTML = "Hydrogen";
  var result = sortHist(posthistH3,histdateH3);
  // console.log("ranking value of H2 in node 3 ="+result.value);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Hydrogen Node4
function histTableRankH4() {
  document.getElementById("type").innerHTML = "Node 4";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Hydrogen";
  document.getElementById("2nd").innerHTML = "Hydrogen";
  document.getElementById("3rd").innerHTML = "Hydrogen";
  document.getElementById("4th").innerHTML = "Hydrogen";
  var result = sortHist(posthistH4,histdateH4);
  // console.log("ranking value of H2 in node 4 ="+result.value);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}


//NO2 Node1
function histTableRankN1() {
  document.getElementById("type").innerHTML = "Node 1";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Nitrogen Dioxide";
  document.getElementById("2nd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("3rd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("4th").innerHTML = "Nitrogen Dioxide";
  var result = sortHist(posthistN1,histdateN1);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//NO2 Node2
function histTableRankN2() {
  document.getElementById("type").innerHTML = "Node 2";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Nitrogen Dioxide";
  document.getElementById("2nd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("3rd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("4th").innerHTML = "Nitrogen Dioxide";
  var result = sortHist(posthistN2,histdateN2);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//NO2 Node3
function histTableRankN3() {
  document.getElementById("type").innerHTML = "Node 3";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Nitrogen Dioxide";
  document.getElementById("2nd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("3rd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("4th").innerHTML = "Nitrogen Dioxide";
  var result = sortHist(posthistN3,histdateN3);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//NO2 Node4
function histTableRankN4() {
  document.getElementById("type").innerHTML = "Node 4";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Nitrogen Dioxide";
  document.getElementById("2nd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("3rd").innerHTML = "Nitrogen Dioxide";
  document.getElementById("4th").innerHTML = "Nitrogen Dioxide";
  var result = sortHist(posthistN4,histdateN4);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//FA Node1
function histTableRankFA1() {
  document.getElementById("type").innerHTML = "Node 1";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Formaldehyde";
  document.getElementById("2nd").innerHTML = "Formaldehyde";
  document.getElementById("3rd").innerHTML = "Formaldehyde";
  document.getElementById("4th").innerHTML = "Formaldehyde";
  var result = sortHist(posthistFA1,histdateFA1);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}


//FA Node2
function histTableRankFA2() {
  document.getElementById("type").innerHTML = "Node 2";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Formaldehyde";
  document.getElementById("2nd").innerHTML = "Formaldehyde";
  document.getElementById("3rd").innerHTML = "Formaldehyde";
  document.getElementById("4th").innerHTML = "Formaldehyde";
  var result = sortHist(posthistFA2,histdateFA2);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//FA Node3
function histTableRankFA3() {
  document.getElementById("type").innerHTML = "Node 3";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Formaldehyde";
  document.getElementById("2nd").innerHTML = "Formaldehyde";
  document.getElementById("3rd").innerHTML = "Formaldehyde";
  document.getElementById("4th").innerHTML = "Formaldehyde";
  var result = sortHist(posthistFA3,histdateFA3);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//FA Node4
function histTableRankFA4() {
  document.getElementById("type").innerHTML = "Node 4";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Formaldehyde";
  document.getElementById("2nd").innerHTML = "Formaldehyde";
  document.getElementById("3rd").innerHTML = "Formaldehyde";
  document.getElementById("4th").innerHTML = "Formaldehyde";
  var result = sortHist(posthistFA4,histdateFA4);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}


//Toluene Node1
function histTableRankTol1() {
  document.getElementById("type").innerHTML = "Node 1";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Toluene";
  document.getElementById("2nd").innerHTML = "Toluene";
  document.getElementById("3rd").innerHTML = "Toluene";
  document.getElementById("4th").innerHTML = "Toluene";
  var result = sortHist(posthistTol1,histdateTol1);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Toluene Node2
function histTableRankTol2() {
  document.getElementById("type").innerHTML = "Node 2";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Toluene";
  document.getElementById("2nd").innerHTML = "Toluene";
  document.getElementById("3rd").innerHTML = "Toluene";
  document.getElementById("4th").innerHTML = "Toluene";
  var result = sortHist(posthistTol2,histdateTol2);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Toluene Node3
function histTableRankTol3() {
  document.getElementById("type").innerHTML = "Node 3";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Toluene";
  document.getElementById("2nd").innerHTML = "Toluene";
  document.getElementById("3rd").innerHTML = "Toluene";
  document.getElementById("4th").innerHTML = "Toluene";
  var result = sortHist(posthistTol3,histdateTol3);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Toluene Node4
function histTableRankTol4() {
  document.getElementById("type").innerHTML = "Node 4";
  document.getElementById("unit").innerHTML = "Gas Concentration(ppb)";
  document.getElementById("1st").innerHTML = "Toluene";
  document.getElementById("2nd").innerHTML = "Toluene";
  document.getElementById("3rd").innerHTML = "Toluene";
  document.getElementById("4th").innerHTML = "Toluene";
  var result = sortHist(posthistTol4,histdateTol4);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Temperature Node1
function histTableRankTemp1() {
  document.getElementById("type").innerHTML = "Node 1";
  document.getElementById("unit").innerHTML = "Degree Celsius(°C)";
  document.getElementById("1st").innerHTML = "Temperature";
  document.getElementById("2nd").innerHTML = "Temperature";
  document.getElementById("3rd").innerHTML = "Temperature";
  document.getElementById("4th").innerHTML = "Temperature";
  var result = sortHist(posthistTemp1,histdateTemp1);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Temperature Node2
function histTableRankTemp2() {
  document.getElementById("type").innerHTML = "Node 2";
  document.getElementById("unit").innerHTML = "Degree Celsius(°C)";
  document.getElementById("1st").innerHTML = "Temperature";
  document.getElementById("2nd").innerHTML = "Temperature";
  document.getElementById("3rd").innerHTML = "Temperature";
  document.getElementById("4th").innerHTML = "Temperature";
  var result = sortHist(posthistTemp2,histdateTemp2);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Temperature Node3
function histTableRankTemp3() {
  document.getElementById("type").innerHTML = "Node 3";
  document.getElementById("unit").innerHTML = "Degree Celsius(°C)";
  document.getElementById("1st").innerHTML = "Temperature";
  document.getElementById("2nd").innerHTML = "Temperature";
  document.getElementById("3rd").innerHTML = "Temperature";
  document.getElementById("4th").innerHTML = "Temperature";
  var result = sortHist(posthistTemp3,histdateTemp3);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Temperature Node4
function histTableRankTemp4() {
  document.getElementById("type").innerHTML = "Node 4";
  document.getElementById("unit").innerHTML = "Degree Celsius(°C)";
  document.getElementById("1st").innerHTML = "Temperature";
  document.getElementById("2nd").innerHTML = "Temperature";
  document.getElementById("3rd").innerHTML = "Temperature";
  document.getElementById("4th").innerHTML = "Temperature";
  var result = sortHist(posthistTemp4,histdateTemp4);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}


//Humidity Node1
function histTableRankHumid1() {
  document.getElementById("type").innerHTML = "Node 1";
  document.getElementById("unit").innerHTML = "RH(%)";
  document.getElementById("1st").innerHTML = "Humidity";
  document.getElementById("2nd").innerHTML = "Humidity";
  document.getElementById("3rd").innerHTML = "Humidity";
  document.getElementById("4th").innerHTML = "Humidity";
  var result = sortHist(posthistHumid1,histdateHumid1);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Humidity Node2
function histTableRankHumid2() {
  document.getElementById("type").innerHTML = "Node 2";
  document.getElementById("unit").innerHTML = "RH(%)";
  document.getElementById("1st").innerHTML = "Humidity";
  document.getElementById("2nd").innerHTML = "Humidity";
  document.getElementById("3rd").innerHTML = "Humidity";
  document.getElementById("4th").innerHTML = "Humidity";
  var result = sortHist(posthistHumid2,histdateHumid2);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}

//Humidity Node3
function histTableRankHumid3() {
  document.getElementById("type").innerHTML = "Node 3";
  document.getElementById("unit").innerHTML = "RH(%)";
  document.getElementById("1st").innerHTML = "Humidity";
  document.getElementById("2nd").innerHTML = "Humidity";
  document.getElementById("3rd").innerHTML = "Humidity";
  document.getElementById("4th").innerHTML = "Humidity";
  var result = sortHist(posthistHumid3,histdateHumid3);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}


//Humidity Node4
function histTableRankHumid4() {
  document.getElementById("type").innerHTML = "Node 4";
  document.getElementById("unit").innerHTML = "RH(%)";
  document.getElementById("1st").innerHTML = "Humidity";
  document.getElementById("2nd").innerHTML = "Humidity";
  document.getElementById("3rd").innerHTML = "Humidity";
  document.getElementById("4th").innerHTML = "Humidity";
  var result = sortHist(posthistHumid4,histdateHumid4);
  document.getElementById("1st_data").innerHTML = result.value[0];
  document.getElementById("2nd_data").innerHTML = result.value[1];
  document.getElementById("3rd_data").innerHTML = result.value[2];
  document.getElementById("4th_data").innerHTML = result.value[3];
  document.getElementById("1st_time").innerHTML = result.time[0];
  document.getElementById("2nd_time").innerHTML = result.time[1];
  document.getElementById("3rd_time").innerHTML = result.time[2];
  document.getElementById("4th_time").innerHTML = result.time[3];
}


