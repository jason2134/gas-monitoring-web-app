//This js file is for All Data Operation from Ajax to different displays on Html.
//getData.js is for Ajax operation from Web API to Ajax
//nodex.py is for Data Management & Operation from MongoDB to Web API

//Refresh Chart Operation
var loopInterval = null;

//Firstly, clear all the nodes chart display on Html
//Clear Node1 Echart Display
function clearNode1() {
        clearH1();  //in /chart/node1/h1.js
        clearNOT1();  //in /chart/node1/no2_1.js
        clearFA1(); //in /chart/node1/fa1.js
        clearTol1();  //in /chart/node1/tol1.js
        clearTH1(); //in /chart/node1/th1.js
        clearBar1();//in /chart/node1/bar1.js
      }

//Clear Node2 Echart Display
function clearNode2(){
        clearH2();  //in /chart/node2/h2.js
        clearNOT2();  //in /chart/node2/n2.js
        clearFA2(); //in /chart/node2/fa2.js
        clearTol2();  //in /chart/node2/t2.js
        clearTH2(); //in /chart/node2/th2.js
        clearBar2();//in /chart/node2/bar2.js
      }

//Clear Node3 Echart Display
function clearNode3(){
        clearH3();  
        clearNOT3();
        clearFA3();
        clearTol3();
        clearTH3();
        clearBar3();
      }

//Clear Node4 Echart Display
function clearNode4(){
        clearH4();
        clearNOT4();
        clearFA4();
        clearTol4();
        clearTH4();
        clearBar4();
      }

//Secondly, request all the datas from each node on the Web API by using Ajax in getData.js
function requestData() {
        //post requests for all sensor nodes in getData.js
        getData();
      }

//Finally, Refresh Node Echart Display after Ajax operation
function refreshNode1() {
        refresh_h1();   // in /chart/node1/h1.js
        refresh_not1();   // in /chart/node1/n1.js
        refresh_fa1();  // in /chart/node1/fa1.js
        refresh_tol1();   // in /chart/node1/t1.js
        refresh_temp1();// in /chart/node1/th1.js
        refresh_bar1(); // in /chart/node1/bar1.js
      }

     
function refreshNode2(){
        refresh_h2();
        refresh_not2();
        refresh_fa2();
        refresh_tol2();
        refresh_temp2();
        refresh_bar2();
      }      

      
function refreshNode3(){
        refresh_h3();
        refresh_not3();
        refresh_fa3();
        refresh_tol3();
        refresh_temp3();
        refresh_bar3();
      }

      

function refreshNode4(){
        refresh_h4();
        refresh_not4();
        refresh_fa4();
        refresh_tol4();
        refresh_temp4();
        refresh_bar4();
      }

//Resize the chart display when the computer screen is sizing
function resizeNode1() {
  resizeH1(); // in /chart/node1/h1.js
  resizeNOT1();
  resizeFA1();
  resizeTol1();
  resizeTH1();
  resizeBar1();
}
      
function resizeNode2() {
  resizeH2();
  resizeNOT2();
  resizeFA2();
  resizeTol2();
  resizeTH2();
  resizeBar2();
}

function resizeNode3() {
  resizeH3();
  resizeNOT3();
  resizeFA3();
  resizeTol3();
  resizeTH3();
  resizeBar3();
}

function resizeNode4() {
  resizeH4();
  resizeNOT4();
  resizeFA4();
  resizeTol4();
  resizeTH4();
  resizeBar4();
}
// keep all above code

//NodeState is a variable acting as flag for indicating which node is now monitoring.
//This variable represents all the related events of the node, including request this node data in database, pass it to webapi, extract and display on echart.
//For future development, append one more node, u just need to append one more NodeState variable 
function loopNode() {
 clearInterval(loopInterval);
  clearNode1();
  clearNode2();
  clearNode3();
  clearNode4();
  clearTable();
  //name_H2_table();
  //NodeState Deter put in AJAX response
  if (NodeState == 1) {
    loopInterval = setInterval(function () {
      getData();
    }, 1000)

  } else if (NodeState == 2) {
    loopInterval = setInterval(function () {
      getData();
  }, 1000)
  } else if (NodeState == 3) {
      loopInterval = setInterval(function () {
      getData();
  }, 1000)
  } else if (NodeState == 4) {
    loopInterval = setInterval(function () {
      getData();
  }, 1000)
  }
}


//gasState variable is defined in getVariable.js, the initial variable is 1.
//This variable is used as a flag for triggering different table events in dataVis.html
//Onclick() functions are called on dataVis.html, when u onclick different icons like h2, no2, fa,..., the gasState will change correspondingly.
//For future development, append one more information recorded by the sensor node, u just need to append one more gasState variable with a corresponding function.
function h2Onclick() {
  gasState = 1;
}

function NO2Onclick() {
  gasState = 2;
}

function faOnclick() {
  gasState = 3;
}

function TolueneOnclick() {
  gasState = 4;
}

function TempOnclick() {
  gasState = 5;
}

function HumidOnclick() {
  gasState = 6;
}


//This function is responsible for table data refresh event.
//gasState is firstly defined in getVariable.js, then is called in dataVis.html to change.
//init_table() and name_table() are all defined in table.js, init_table() includes extract data and do bubble sorting.
//This tableOnClickEvent() function is called in getData.js
function tableOnClickEvent() {
  if (gasState == 1) {
    clearTable()
    name_H2_table();
    init_H2_table();
  } else if (gasState == 2) {
    clearTable()
    name_NOT_table();
    init_NOT_table();
  } else if (gasState == 3) {
    clearTable();
    name_FA_table();
    init_FA_table();
  } else if (gasState == 4) {
    clearTable();
    name_Tol_table();
    init_Tol_table();
  } else if (gasState == 5) {
    clearTable();
    name_Temp_table();
    init_Temp_table();
  } else if (gasState == 6) {
    clearTable();
    name_Humid_table();
    init_Humid_table();
  } else {
    clearTable();
    name_Humid_table();
    init_H2_table();
  }
}
