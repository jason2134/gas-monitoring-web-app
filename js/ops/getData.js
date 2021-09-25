//RealTime front end request 
function getData() {
  $.ajax({
            type: "POST",
            url: "/RealTimeApi",
            //async:false,//Ajax here defaults to be async
            contentType: "application/json",
            //Ajax post method will accept the data in json format from webapi url, 
            //so its better to convert the real data into json format before putting into webapi url.
            //Echart accepts json format data. 
            success:function(raw_Response) 
            {
              //response refers to the requested data from web api(url is "/RealTime" Handler) in the webtest.py
              //node1
              response = JSON.parse(raw_Response)
              getH1 = response[0]
              getN1 = response[1]
              getFA1 = response[2]
              getTol1 = response[3]
              getTemp1 = response[4]
              getHumid1 = response[5]
              //node2
              getH2 = response[6];
              getN2 = response[7];
              getFA2 = response[8];
              getTol2 = response[9];
              getTemp2 = response[10];
              getHumid2 = response[11];
              //node3
              getH3 = response[12];
              getN3 = response[13];
              getFA3 = response[14];
              getTol3 = response[15];
              getTemp3 = response[16];
              getHumid3 = response[17];
              //node4 
              getH4 = response[18];
              getN4 = response[19];
              getFA4 = response[20];
              getTol4 = response[21];
              getTemp4 = response[22];
              getHumid4 = response[23];
              //timestamp of all datas
              sensortime = response[24];
              //console.log to watch data response is normal or not
              //console.log("Raw of H1 = " + getH1);
              //console.log("Realtime = "+ sensortime);
              if (NodeState == 1) {
                  //Node 1 chart refresh
                  refreshNode1();
                  //table refresh
                  tableOnClickEvent();
                  resizeNode1();
              } else if (NodeState == 2) {
                  //Node 1 chart refresh
                  refreshNode2();
                  //table refresh
                  tableOnClickEvent();
                  resizeNode2();
              } else if (NodeState == 3) {
                  //Node 1 chart refresh
                  refreshNode3();
                  //table refresh
                  tableOnClickEvent();
                  resizeNode3();
              } else if (NodeState == 4) {
                  //Node 1 chart refresh
                  refreshNode4();
                  //table refresh
                  tableOnClickEvent();
                  resizeNode4();
              }
            },
            error:function()
            {
              alert("unsuccessful request")
            }
            });
}

/*
//Node1 frontend request from node1 requesthandler in webtest.py 
function requestNode1() 
{
    $.ajax({
            type: "POST",
            url: "/Node1",
            //async:false,
            contentType: "application/json",
            success:function(response) 
            {
              //h1 is one of the self.write apis in Node 1 requesthandler, others are similar
              getH1 = response.h1
              getN1 = response.n1
              getFA1 = response.fa1
              getT1 = response.t1
              getTemp1 = response.temp1
              getHumid1 = response.humid1
              //console.log to watch data response is normal or not
              console.log("Raw of H1 = " + getH1)
              //console.log("Raw of N1 = " + getN1)
              //console.log("Raw of FA1 = " + getFA1)
              //console.log("Raw of T1 = " + getT1)
              //console.log("Raw of Temp1 = " + getTemp1)
              //console.log("Raw of Humid1 = " + getHumid1)
                  //Node 1 chart refresh
              refreshNode1();
              //table refresh
           //   tableOnClickEvent();
            },
            error:function()
            {
              alert("unsuccessful request")
            }
            });
}

//Node2 frontend request from node2 requesthandler in webtest.py 
function requestNode2() 
{
    $.ajax({
            type: "POST",
            url: "/Node2",
            //async:false,
            contentType: "application/json",
            success:function (response) 
            {

              getH2 = response.h2
              getN2 = response.n2
              getFA2 = response.fa2
              getT2 = response.t2
              getTemp2 = response.temp2
              getHumid2 = response.humid2
              //console.log to watch data response is normal or not
              console.log("Raw of H2 = " + getH2)
              //console.log("Raw of N2 = " + getN2)
              //console.log("Raw of FA2 = " + getFA2)
              //console.log("Raw of T2 = " + getT2)
              //console.log("Raw of Temp2 = " + getTemp2)
              //console.log("Raw of Humid2 = " + getHumid2)
            },
            error:function()
            {
              alert("unsuccessful request")
            }
          });
}

//Node3 frontend request from node3 requesthandler in webtest.py 
function requestNode3() 
{
    $.ajax({
            type: "POST",
            url: "/Node3",
            //async:false,
            contentType: "application/json",
            success:function(response) 
            {
              getH3 = response.h3
              getN3 = response.n3
              getFA3 = response.fa3
              getT3 = response.t3
              getTemp3 = response.temp3
              getHumid3 = response.humid3
              //console.log to watch data response is normal or not
              console.log("Raw of H3 = " + getH3)
              //console.log("Raw of N3 = " + getN3)
              //console.log("Raw of FA3 = " + getFA3)
              //console.log("Raw of T3 = " + getT3)
              //console.log("Raw of Temp3 = " + getTemp3)
              //console.log("Raw of Humid3 = " + getHumid3)
            },
            error:function()
            {
              alert("unsuccessful request")
            }
          });
}

function requestNode4() 
{
    $.ajax({
            type: "POST",
            url: "/Node4",
            //async:false,
            contentType: "application/json",
            success:function (response) 
            {
              getH4 = response.h4
              getN4 = response.n4
              getFA4 = response.fa4
              getT4 = response.t4
              getTemp4 = response.temp4
              getHumid4 = response.humid4
              //console.log to watch data response is normal or not
              console.log("Raw of H4 = " + getH4)
              //console.log("Raw of N4 = " + getN4)
              //console.log("Raw of FA4 = " + getFA4)
              //console.log("Raw of T4 = " + getT4)
              //console.log("Raw of Temp4 = " + getTemp4)
              //console.log("Raw of Humid4 = " + getHumid4)
            },
            error:function()
            {
              console.log("Unsuccessful request")
            }
          });
}*/
