//define node strings
var arrS = [];
var node1 = "Node 1";
var node2 = "Node 2";
var node3 = "Node 3";
var node4 = "Node 4";
//define node data var
var data1 = 0;
var data2 = 0;
var data3 = 0;
var data4 = 0;
var arr = [];
var testArr = [100, 400, 500, 1000, 900, 700, 400];

function sortHist_H1(arr,arrString){
  for (i = 0; i < testArr; i++){
    for (j = 0; j < testArr- i - 1; j++){
      var temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;

              var temp2 = arrString[j];
              arrString[j] = arrString[j + 1];
              arrString[j + 1] = temp2;
    }
  }

  for (k = 0; k < 4; k++){
    var arrR = [];
    var arrX = [];
    arrR.push(arr[k]);
    arrX.push(arrString[k])
  }

}
