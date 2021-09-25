//postNode() function definition, it will get data:timeRange from hist_ops.js, wrap it into request.body, post it to url:"/History_Node".
//get response from self.write() in url:"/History_Node"
function postNode(timeRange)
{
  $.ajax({
    type:"POST",
    url:"/HistoryApi",
    data:timeRange,  //这里把从hist_opt.js中处理好的timeRange数据以json格式（contentType决定了timeRange的数据格式）发送到url:"/History_Node"这个地址。
    //并且这个timeRange会被post method打包成一个request.body，而这个request.body可以被json.loads变成python可以处理的数据格式。
    contentType: "application/json",
    success: function (response) 
    {
      //firsthistDateH1 = JSON.parse(response.firsthistDateH1);
      //all the data from url:"/History_Node", self.write({"data"})
      var allData = JSON.parse(response.histdata);
      //node1 data
      posthistH1 = allData.histh1;
      posthistN1 = allData.histnot1;
      posthistFA1 = allData.histfa1;
      posthistTol1 = allData.histtol1;
      posthistTemp1 = allData.histtemp1;
      posthistHumid1 = allData.histhumid1;
      //node2 data
      posthistH2 = allData.histh2;
      posthistN2 = allData.histnot2;
      posthistFA2 = allData.histfa2;
      posthistTol2 = allData.histtol2;
      posthistTemp2 = allData.histtemp2;
      posthistHumid2 = allData.histhumid2;
      //node3 data
      posthistH3 = allData.histh3;
      posthistN3 = allData.histnot3;
      posthistFA3 = allData.histfa3;
      posthistTol3 = allData.histtol3;
      posthistTemp3 = allData.histtemp3;
      posthistHumid3 = allData.histhumid3;
      //Node4 data
      posthistH4 = allData.histh4;
      posthistN4 = allData.histnot4;
      posthistFA4 = allData.histfa4;
      posthistTol4 = allData.histtol4;
      posthistTemp4 = allData.histtemp4;
      posthistHumid4 = allData.histhumid4;

      //all the first date data from url:"/History_Node", self.write({"time"})
      var allTime = JSON.parse(response.histtime);
      //node1 time
      histdateH1 = allTime.histTimeh1;
      histdateN1 = allTime.histTimenot1;
      histdateFA1 = allTime.histTimefa1;
      histdateTol1 = allTime.histTimetol1;
      histdateTemp1 = allTime.histTimetemp1;
      histdateHumid1 = allTime.histTimehumid1;
      //console.log("histdataH1="+posthistH1);
      //console.log("histdateH1="+histdateH1);
      //console.log("histdateH1 length="+histdateH1.length);
      //node2 time
      histdateH2 = allTime.histTimeh2;
      histdateN2 = allTime.histTimenot2;
      histdateFA2 = allTime.histTimefa2;
      histdateTol2 = allTime.histTimetol2;
      histdateTemp2 = allTime.histTimetemp2;
      histdateHumid2 = allTime.histTimehumid2;
      //node3 time
      histdateH3 = allTime.histTimeh3;
      histdateN3 = allTime.histTimenot3;
      histdateFA3 = allTime.histTimefa3;
      histdateTol3 = allTime.histTimetol3;
      histdateTemp3 = allTime.histTimetemp3;
      histdateHumid3 = allTime.histTimehumid3;
      //node4 time
      histdateH4 = allTime.histTimeh4;
      histdateN4 = allTime.histTimenot4;
      histdateFA4 = allTime.histTimefa4;
      histdateTol4 = allTime.histTimetol4;
      histdateTemp4 = allTime.histTimetem4;
      histdateHumid4 = allTime.histTimehumid4;

      //Node1 histdownload data
      var allExtData = JSON.parse(response.histExtData);
      console.log(allExtData);
      exportH1Data = allExtData.histExtH1;
      exportN1Data = allExtData.histExtNOT1;
      exportFA1Data = allExtData.histExtFA1;
      exportTol1Data = allExtData.histExtTol1;
      exportTemp1Data = allExtData.histExtTemp1;
      exportHumid1Data = allExtData.histExtHumid1;

      //Node2 histdownload data
      exportH2Data = allExtData.histExtH2;
      exportN2Data = allExtData.histExtNOT2;
      exportFA2Data = allExtData.histExtFA2;
      exportTol2Data = allExtData.histExtTol2;
      exportTemp2Data = allExtData.histExtTemp2;
      exportHumid2Data = allExtData.histExtHumid2;

      //Node3 histdownload data
      exportH3Data = allExtData.histExtH3;
      exportN3Data = allExtData.histExtNOT3;
      exportFA3Data = allExtData.histExtFA3;
      exportTol3Data = allExtData.histExtTol3;
      exportTemp3Data = allExtData.histExtTemp3;
      exportHumid3Data = allExtData.histExtHumid3;

      //Node4 histdownload data
      exportH4Data = allExtData.histExtH1;
      exportN4Data = allExtData.histExtNOT4;
      exportFA4Data = allExtData.histExtFA4;
      exportTol4Data = allExtData.histExtTol4;
      exportTemp4Data = allExtData.histExtTemp4;
      exportHumid4Data = allExtData.histExtHumid4;

      var allExtDate = JSON.parse(response.histExtTime);
      console.log(allExtDate);
      
      //Node1 histdownload date
      exportH1Date = allExtDate.histExtTimeH1;
      exportN1Date = allExtDate.histExtTimeNOT1;
      exportFA1Date = allExtDate.histExtTimeFA1;
      exportTol1Date = allExtDate.histExtTimeTol1;
      exportTemp1Date = allExtDate.histExtTimeTemp1;
      exportHumid1Date = allExtDate.histExtTimeHumid1;
      
      //Node2 histdownload date
      exportH2Date = allExtDate.histExtTimeH2;
      //console.log(exportH2Date)
      exportN2Date = allExtDate.histExtTimeNOT2;
      exportFA2Date = allExtDate.histExtTimeFA2;
      exportTol2Date = allExtDate.histExtTimeTol2;
      exportTemp2Date = allExtDate.histExtTimeTemp2;
      exportHumid2Date = allExtDate.histExtTimeHumid2;
      
      //Node3 histdownload date
      exportH3Date = allExtDate.histExtTimeH3;
      exportN3Date = allExtDate.histExtTimeNOT3;
      exportFA3Date = allExtDate.histExtTimeFA3;
      exportTol3Date = allExtDate.histExtTimeTol3;
      exportTemp3Date = allExtDate.histExtTimeTemp3;
      exportHumid3Date = allExtDate.histExtTimeHumid3;

      //Node4 histdownload date
      exportH4Date = allExtDate.histExtTimeH4;
      exportN4Date = allExtDate.histExtTimeNOT4;
      exportFA4Date = allExtDate.histExtTimeFA4;
      exportTol4Date = allExtDate.histExtTimeTol4;
      exportTemp4Date = allExtDate.histExtTimeTemp4;
      exportHumid4Date = allExtDate.histExtTimeHumid4;

    },
    error:function()
    {alert("unsuccessful history request")}
  })
}



