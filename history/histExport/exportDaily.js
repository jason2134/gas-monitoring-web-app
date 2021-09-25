function append2TotalDailyArr() {
  clearExtArr();
  /*1. convExtArr for all parameters in the 4 nodes */
  //Hydrogen
  convExtArr(posthistH1, h1dataExt, histdateH1, h1dateExt);
  convExtArr(posthistH2, h2dataExt, histdateH2, h2dateExt);
  convExtArr(posthistH3, h3dataExt, histdateH3, h3dateExt);
  convExtArr(posthistH4, h4dataExt, histdateH4, h4dateExt);
//NOT
  convExtArr(posthistN1, not1dataExt, histdateN1, not1dateExt);
  convExtArr(posthistN2, not2dataExt, histdateN2, not2dateExt);
  convExtArr(posthistN3, not3dataExt, histdateN3, not3dateExt);
  convExtArr(posthistN4, not4dataExt, histdateN4, not4dateExt);
//FA
  convExtArr(posthistFA1, fa1dataExt, histdateFA1, fa1dateExt);
  convExtArr(posthistFA2, fa2dataExt, histdateFA2, fa2dateExt);
  convExtArr(posthistFA3, fa3dataExt, histdateFA3, fa3dateExt);
  convExtArr(posthistFA4, fa4dataExt, histdateFA4, fa4dateExt);
  //Tol
  convExtArr(posthistTol1, tol1dataExt, histdateTol1, tol1dateExt);
  convExtArr(posthistTol2, tol2dataExt, histdateTol2, tol2dateExt);
  convExtArr(posthistTol3, tol3dataExt, histdateTol3, tol3dateExt);
  convExtArr(posthistTol4, tol4dataExt, histdateTol4, tol4dateExt);
  //Temperature
  convExtArr(posthistTemp1, temp1dataExt, histdateTemp1, temp1dateExt);
  convExtArr(posthistTemp2, temp2dataExt, histdateTemp2, temp2dateExt);
  convExtArr(posthistTemp3, temp3dataExt, histdateTemp3, temp3dateExt);
  convExtArr(posthistTemp4, temp4dataExt, histdateTemp4, temp4dateExt);
  //humidity
  convExtArr(posthistHumid1, humid1dataExt, histdateHumid1, humid1dateExt);
  convExtArr(posthistHumid2, humid2dataExt, histdateHumid2, humid2dateExt);
  convExtArr(posthistHumid3, humid3dataExt, histdateHumid3, humid3dateExt);
  convExtArr(posthistHumid4, humid4dataExt, histdateHumid4, humid4dateExt);

	/*2. Redefine exportArr*/
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
  /*3 Process the tempArr to switch row to column*/
  exportArr = r2c(tempExportArr);
}


function exportDailyOnClick() {
  append2TotalDailyArr()
  exportToCsv("exportdaily.csv", exportArr);
    }
