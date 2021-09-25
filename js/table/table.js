//Table display for realtime data, includes data update and ranking

//define node strings displayed in table
var arrS = [];
var node1 = "Node 1";
var node2 = "Node 2";
var node3 = "Node 3";
var node4 = "Node 4";
//define node data var
var arr = [];
var data1_table = 0;
var data2_table = 0;
var data3_table = 0;
var data4_table = 0;

//getH() is for getting all H2 datas from 4 nodes in getData.js
function getH() 
{
  data1_table = getH1;
  data2_table = getH2;
  data3_table = getH3;
  data4_table = getH4;
  arr = [data1_table, data2_table, data3_table, data4_table];
  arrS = [node1, node2, node3, node4];
}

//getNOT() is for getting all NO2 datas from 4 nodes in getData.js
function getNOT() {
  data1_table = getN1;
  data2_table = getN2;
  data3_table = getN3;
  data4_table = getN4;
  arr = [data1_table, data2_table, data3_table, data4_table];
  arrS = [node1, node2, node3, node4];
}

//getFA() is for getting all FA datas from 4 nodes in getData.js
function getFA() {
  data1_table = getFA1;
  data2_table = getFA2;
  data3_table = getFA3;
  data4_table = getFA4;
  arr = [data1_table, data2_table, data3_table, data4_table];
  arrS = [node1, node2, node3, node4];
}

//getTol() is for getting all Toluene datas from 4 nodes in getData.js
function getTol() {
  data1_table = getTol1;
  data2_table = getTol2;
  data3_table = getTol3;
  data4_table = getTol4;
   arr = [data1_table, data2_table, data3_table, data4_table];
  arrS = [node1, node2, node3, node4];
}

//getTemp() is for getting all Temp datas from 4 nodes in getData.js
function getTemp() {
  data1_table = getTemp1;
  data2_table = getTemp2;
  data3_table = getTemp3;
  data4_table = getTemp4;
   arr = [data1_table, data2_table, data3_table, data4_table];
  arrS = [node1, node2, node3, node4];
}

//getHumid() is for getting all Humid datas from 4 nodes in getData.js
function getHumid() {
  data1_table = getHumid1;
  data2_table = getHumid2;
  data3_table = getHumid3;
  data4_table = getHumid4;
   arr = [data1_table , data2_table , data3_table , data4_table ];
  arrS = [node1, node2, node3, node4];
}

//Gas rank sorting
      function bubbleSort(arr, arrString) 
      {
        for (let i = 0; i < arr.length; i++) 
        {
          for (let j = 0; j < arr.length - i - 1; j++) 
          {
            if (arr[j + 1] > arr[j]) 
            {
              var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              var temp2 = arrString[j];
              arrString[j] = arrString[j + 1];
              arrString[j + 1] = temp2;
            }
          }
        }
        document.getElementById("1st").innerHTML = arrS[0];
        document.getElementById("2nd").innerHTML = arrS[1];
        document.getElementById("3rd").innerHTML = arrS[2];
        document.getElementById("4th").innerHTML = arrS[3];

        //unit conversion
        if (arr[0] >= 1000) {
          document.getElementById("1st_data").innerHTML = arr[0]/1000 + 'ppm';
        } else {
          document.getElementById("1st_data").innerHTML = arr[0] + 'ppb';
        }

        if (arr[1] >= 1000) {
          document.getElementById("2nd_data").innerHTML = arr[1]/1000 + 'ppm';
        } else {
          document.getElementById("2nd_data").innerHTML = arr[1] + 'ppb';
        }

        if (arr[2] >= 1000) {
          document.getElementById("3rd_data").innerHTML = arr[2]/1000 + 'ppm';
        } else {
          document.getElementById("3rd_data").innerHTML = arr[2] + 'ppb';
        }

        if (arr[3] >= 1000) {
          document.getElementById("4th_data").innerHTML = arr[3]/1000 + 'ppm';
        } else {
          document.getElementById("4th_data").innerHTML = arr[3] + 'ppb';
        }
      }

//Sort temp and humid only, without any unit display conversion 
function sortOther(arr, arrString)
{
  for (let i = 0; i < arr.length; i++) 
  {
    for (let j = 0; j < arr.length - i - 1; j++) 
    {
      if (arr[j + 1] > arr[j]) 
      {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        var temp2 = arrString[j];
        arrString[j] = arrString[j + 1];
        arrString[j + 1] = temp2;
      }
    }
  }
  document.getElementById("1st").innerHTML = arrS[0];
  document.getElementById("2nd").innerHTML = arrS[1];
  document.getElementById("3rd").innerHTML = arrS[2];
  document.getElementById("4th").innerHTML = arrS[3];

  document.getElementById("1st_data").innerHTML = arr[0];
  document.getElementById("2nd_data").innerHTML = arr[1];
  document.getElementById("3rd_data").innerHTML = arr[2];
  document.getElementById("4th_data").innerHTML = arr[3];
}

//Name and init table function, they are called in ops.js, utilized in getData.js
// var H2_interval = null;
// var NO_interval = null;
// var FA_interval = null;
// var T_interval = null;
// var Temp_interval = null;
// var Humid_interval = null;
function name_H2_table() 
{
    document.getElementById("type").innerHTML = "Hydrogen";
    document.getElementById("unit").innerHTML = "Gas Concentration";
}
function init_H2_table() 
{
    getH();
    bubbleSort(arr, arrS);
}

function name_NOT_table() {
    document.getElementById("type").innerHTML = "Nitrogen Dioxide"
    document.getElementById("unit").innerHTML = "Gas Concentration";
}
function init_NOT_table() 
{
   getNOT();
   bubbleSort(arr, arrS);
}

function name_FA_table() 
{
    document.getElementById("type").innerHTML = "Formaldehyde";
    document.getElementById("unit").innerHTML = "Gas Concentration";
}
function init_FA_table() 
{
    getFA();
    bubbleSort(arr, arrS);
}

function name_Tol_table() 
{
    document.getElementById("type").innerHTML = "Torluene";
    document.getElementById("unit").innerHTML = "Gas Concentration";
}
function init_Tol_table() 
{
    getTol();
    bubbleSort(arr, arrS);
}

function name_Temp_table() 
{
    document.getElementById("type").innerHTML = "Temperature";
    document.getElementById("unit").innerHTML = "Degree Celsius(°C)";
}

function init_Temp_table() 
{
    getTemp();
    sortOther(arr, arrS);
}

function name_Humid_table() 
{
    document.getElementById("type").innerHTML = "Humidity";
    document.getElementById("unit").innerHTML = "RH(%)";
}

function init_Humid_table() 
{
    getHumid();
    sortOther(arr, arrS);
}

function clearTable() 
{
        data1_table  = 0;
        data2_table  = 0;
        data3_table  = 0;
        data4_table  = 0; 
}

// $(function() {
  
//   $("table").resizableColumns({
//     store: window.store
//   });
// });
