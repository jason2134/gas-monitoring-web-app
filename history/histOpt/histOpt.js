//sendTimeRange() is called in historyData.html, defined in histOpt.js
//然后把在selecttime.js中处理得到的from和to放入到timeRange这个array当中，
//并且把timeRange Object传入postNodex（timeRange）函数，从而传递到postHist.js中的ajax，ajax将timeRange打包成post包发送回指定url：“/History_Node”中.
//然后timeRange array通过指定url：“/History_Node”被传送到后台进行数据库对应时间的数据读取。
//把选择到的数据array再返回到指定url：“/History_Node”中，ajax获得response之后就开始json parse并且把数据推送到不同的echart display。
function sendTimeRange() 
{
  if (x.value > y.value) 
  {
    alert("Invalid Date Input");
    y.value = "dd/mm/yyyy";
    x.value = "dd/mm/yyyy";
  } 
  else 
  {
    //用一个timeRange的Object来存放from和to这两个数据，并且把这两个数据通过JSON.stringify变成json格式。
    //timeRange的console.log结果是：Object {from: from; to: to;}
    var timeRange = new Object();
    timeRange["from"] = from;
    timeRange["to"] = to;
    timeRange = JSON.stringify(timeRange);
    console.log(timeRange);
    //use function postNode() by Ajax in histPost.js to send timeRange Object to url:"/History_Node"
    postNode(timeRange);
    //activate table according to their inner HTML
  }
}

//function refreshhistNode1() is used for displaying history data of H2, NO2, FA, Toluene, Temp, Humid. 
//Its called in displayHist() in hist_opt.js and final called in hist_model.js
//Dont name the same function in js, it cannot overload.
 function refreshhistNode1() {
         clearhistnode1h2();
         refreshhistH1();
         refreshhistNOT1();
         refreshhistFA1();
         refreshhistTol1();
         refreshhistTemp1();
         refreshhistHumid1();
         histTableRankH1();
 }

//function refreshhistNode2() is used for displaying history data of H2, NO2, FA, Toluene, Temp, Humid. 
//Its called in displayHist() in hist_opt.js and final called in hist_model.js
  function refreshhistNode2(){
         refreshhistH2();
         refreshhistNOT2();
         refreshhistFA2();
         refreshhistTol2();
         refreshhistTemp2();
         refreshhistHumid2();
         histTableRankH2();
      }

//function refreshhistNode3() is used for displaying history data of H2, NO2, FA, Toluene, Temp, Humid. 
//Its called in displayHist() in hist_opt.js and final called in hist_model.js
function refreshhistNode3(){
         refreshhistH3();
         refreshhistNOT3();
         refreshhistFA3();
         refreshhistTol3();
         refreshhistTemp3();
         refreshhistHumid3();
         histTableRankH3();
      }

//function refreshhistNode4() is used for displaying history data of H2, NO2, FA, Toluene, Temp, Humid. 
//Its called in displayHist() in hist_opt.js and final called in hist_model.js
  function refreshhistNode4(){
         refreshhistH4();
         refreshhistNOT4();
         refreshhistFA4();
         refreshhistTol4();
         refreshhistTemp4();
         refreshhistHumid4();
         histTableRankH4();
  }

  function refreshhistOverall()
  {
        refreshoverallhistH();
        refreshoverallhistNOT();
        refreshoverallhistFA();
        refreshoverallhistTol();
        refreshoverallhistTemp();
        refreshoverallhistHumid();
        histTableOverallAct();
      }

//Its called in hist_model.js, hist_nodeState is defined in histVariable.js
function displayHist() {
    if (hist_nodeState == 1) 
    {
        refreshhistNode1();
        
    } 
    else if (hist_nodeState == 2) 
    {
        refreshhistNode2();
    } 
    else if (hist_nodeState == 3) 
    {
        refreshhistNode3();
    } 
    else if (hist_nodeState == 4) 
    {
        refreshhistNode4();
    }
}
