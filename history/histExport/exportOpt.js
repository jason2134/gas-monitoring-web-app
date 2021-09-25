function convExtArr(arr, extArr, arrDate, extArrDate) {
	for (i = 1; i< arr.length -1; i++){
		extArr.push(arr[i]);
	}
	for (i = 1; i< arrDate.length - 1; i++){
		extArrDate.push(arrDate[i]);
  }
 // console.log(arr);
  //console.log(extArr);
}

    function r2c(arr) {
      var arrC = [], // next get the longest sub-array length
        //Math.max returns the greatest values within all input parameters
        /*var list = [1,2,3];
        1. Math.max.apply(Math,list) = Math.max(1, 2, 3)
        (PS. Math.max.(list) returns nan as Math.max 
        does not accept array as input)
        2. arr.map iterates through the array and performs
        neccessary operations, and returns a new array without
        changing values of the original one*/

        /* What the functions does:
        1. arr.map iterates and returns the 
        legnth of each subarray, forming a new array
        2. x finds the maximum length of new array formed in step 1 */
        x = Math.max.apply(
          Math,
          arr.map(function (e) {
            return e.length;
          })
        ),
        y = arr.length;
      console.log(x);
      //x is the length of subarray and the number of columns
      //y is the length of total array and the number of rows
      console.log(y);
      for ( var i = 0; i < x; ++i) {
        // this is the loop "down"
        arrC[i] = [];
        for (var j = 0; j < y; ++j) {
          /* and this is the loop "across"*/
          if (i in arr[j]) {
            arrC[i].push(arr[j][i]);
          //pushing column values to row in a new array
          /* For example:
          when i = 0 ; j = 0 -> 4
          The iteration will be:
          arrC[0].push(arr[0][0])
          arrC[0].push(arr[1][0])
          arrC[0].push(arr[2][0])
          arrC[0].push(arr[3][0])... and so on */
          }
        }
      }
      return arrC;
    }

function append2TotalArr() {
  clearExtArr();
  /*1. convExtArr for all parameters in the 4 nodes */
  //Hydrogen
  convExtArr(exportH1Data , h1dataExt, exportH1Date, h1dateExt);
  convExtArr(exportH2Data, h2dataExt, exportH2Date, h2dateExt);
  convExtArr(exportH3Data, h3dataExt, exportH3Date, h3dateExt);
  convExtArr(exportH4Data, h4dataExt, exportH4Date, h4dateExt);
  //NOT
  convExtArr(exportN1Data, not1dataExt, exportN1Date, not1dateExt);
  convExtArr(exportN2Data, not2dataExt, exportN2Date, not2dateExt);
  convExtArr(exportN3Data, not3dataExt, exportN3Date, not3dateExt);
  convExtArr(exportN4Data, not4dataExt, exportN4Date, not4dateExt);
  //FA
  convExtArr(exportFA1Data, fa1dataExt, exportFA1Date, fa1dateExt);
  convExtArr(exportFA2Data, fa2dataExt, exportFA2Date, fa2dateExt);
  convExtArr(exportFA3Data, fa3dataExt, exportFA3Date, fa3dateExt);
  convExtArr(exportFA4Data, fa4dataExt, exportFA4Date, fa4dateExt);
  //Tol
  convExtArr(exportTol1Data, tol1dataExt, exportTol1Date, tol1dateExt);
  convExtArr(exportTol2Data, tol2dataExt, exportTol2Date, tol2dateExt);
  convExtArr(exportTol3Data, tol3dataExt, exportTol3Date, tol3dateExt);
  convExtArr(exportTol4Data, tol4dataExt, exportTol4Date, tol4dateExt);
  //Temperature
  convExtArr(exportTemp1Data, temp1dataExt, exportTemp1Date, temp1dateExt);
  convExtArr(exportTemp2Data, temp2dataExt, exportTemp2Date, temp2dateExt);
  convExtArr(exportTemp3Data, temp3dataExt, exportTemp3Date, temp3dateExt);
  convExtArr(exportTemp4Data, temp4dataExt, exportTemp4Date, temp4dateExt);
  //humidity
  convExtArr(exportHumid1Data, humid1dataExt, exportHumid1Date, humid1dateExt);
  convExtArr(exportHumid2Data, humid2dataExt, exportHumid2Date, humid2dateExt);
  convExtArr(exportHumid3Data, humid3dataExt, exportHumid3Date, humid3dateExt);
  convExtArr(exportHumid4Data, humid4dataExt, exportHumid4Date, humid4dateExt);

  /*2. Redefine exportArr*/
  //exportArr=[[1 2 3 4],[5 6 7 8]]
	  var tempExportArr = [h1dataExt, h1dateExt, h2dataExt, h2dateExt,
		h3dataExt, h3dateExt, h4dataExt, h4dateExt,

		not1dataExt, not1dateExt, not2dataExt, not2dateExt,
		not3dataExt, not3dateExt, not4dataExt, not4dateExt,

		fa1dataExt, fa1dateExt, fa2dataExt, fa2dateExt, fa3dataExt
		, fa3dateExt, fa4dataExt, fa4dateExt,

		tol1dataExt, tol1dateExt, tol2dataExt, tol2dateExt, tol3dataExt,
		tol3dateExt, tol4dataExt, tol4dateExt,
		
		temp1dataExt, temp1dateExt, temp2dataExt, temp2dateExt, temp3dataExt,
		temp3dateExt, temp4dataExt, temp4dateExt,
		
		humid1dataExt, humid1dateExt, humid2dataExt, humid2dateExt, humid3dataExt,
		humid3dateExt,humid4dataExt,humid4dateExt
  ]
 // exportArr  = [h1dataExt, h1dateExt];
  //console.log(exportArr);
  exportArr = r2c(tempExportArr);
}

function exportToCsv(filename, rows)
{
      var processRow = function (row) {
        var finalVal = "";
        for (var j = 0; j < row.length; j++)
        {
          var innerValue = row[j] === null ? "" : row[j].toString();  //convert array to string
          if (j > 0)
            { finalVal += ","; }
          if (row[j] instanceof Date) {
            innerValue = row[j].toLocaleString();
          }
          // /g (g = global) will mean that all of the matching values are replaced
          var result = innerValue.replace(/" /g, '""');// /xxx means xxx is a string, \x means 特殊字符(eg. \n is change row)
          //replace items with only 1 double-quote(") to 2 double quote(" ")
          if (result.search(/("|,|\n) /g) >= 0)
            { result = '"' + result + '"'; }
          
          finalVal += result;
        }
        return finalVal + "\n";
      };

      var csvFile = "";
      for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);//create variable 
  }//"text/csv;charset=utf-8;"
  //text!= string , text is a file type, while csv is under the text category
//create a Blob object, giving the string var csvFile with the type CSV
      var blob = new Blob([csvFile], { type: "text/csv;charset=utf-8;" });
      if (navigator.msSaveBlob)
      {
        // IE 10+
        navigator.msSaveBlob(blob, filename);
      }
      else {
        var link = document.createElement("a");
        if (link.download !== undefined) {
          // feature detection
          // Browsers that support HTML5 download attribute
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);  //set download attribute for link by Blob
          link.setAttribute("download", filename);  //set download attribute for link by Blob
          link.style.visibility = "hidden";
          document.body.appendChild(link);
          link.click();
          /*remove child to avoid over stacking of child elemnt "link" in the 
          HTML tag body*/
          document.body.removeChild(link);
        }
      }
  console.log(csvFile);
  console.log(typeof csvFile);
    }

function exportOnClick() {
  append2TotalArr()
  exportToCsv("exporthistory.csv", exportArr);
    }
function test() {
  alert("hello");
}
