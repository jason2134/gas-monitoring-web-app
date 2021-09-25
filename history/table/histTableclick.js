/**
 * Multiplexing 
 * 
 */


function clickH()
{
  if (document.getElementById("type").innerHTML == "Node 1") 
  {
    histTableRankH1();
  } 
  else if(document.getElementById("type").innerHTML == "Node 2") {
    histTableRankH2();
  } 
  else if (document.getElementById("type").innerHTML == "Node 3") {
    histTableRankH3();
  } 
  else if (document.getElementById("type").innerHTML == "Node 4") {
    histTableRankH4();
  } 
  else if (document.getElementById("type").innerHTML == "Overall"){
    histTableOverallRankH();
  }
}

function clickN()
{
  if (document.getElementById("type").innerHTML == "Node 1") 
  {
    histTableRankN1();
  } 
  else if(document.getElementById("type").innerHTML == "Node 2") {
    histTableRankN2();
  } 
  else if (document.getElementById("type").innerHTML == "Node 3") {
    histTableRankN3();
  } 
  else if (document.getElementById("type").innerHTML == "Node 4") {
    histTableRankN4();
  } 
  else if(document.getElementById("type").innerHTML == "Overall"){
    histTableOverallRankN();
  }
}

function clickFA()
{
  if (document.getElementById("type").innerHTML == "Node 1") 
  {
    histTableRankFA1();
  } 
  else if(document.getElementById("type").innerHTML == "Node 2") {
    histTableRankFA2();
  } 
  else if (document.getElementById("type").innerHTML == "Node 3") {
    histTableRankFA3();
  } 
  else if (document.getElementById("type").innerHTML == "Node 4") {
    histTableRankFA4();
  }
  else if (document.getElementById("type").innerHTML == "Overall") {
    histTableOverallRankFA();
  }
}

function clickTol()
{
  if (document.getElementById("type").innerHTML == "Node 1") 
  {
    histTableRankTol1();
  } 
  else if(document.getElementById("type").innerHTML == "Node 2") {
    histTableRankTol2();
  } 
  else if (document.getElementById("type").innerHTML == "Node 3") {
    histTableRankTol3();
  } 
  else if (document.getElementById("type").innerHTML == "Node 4") {
    histTableRankTol4();
  }
  else if (document.getElementById("type").innerHTML == "Overall") {
    histTableOverallRankTol();
  }
}

function clickTemp()
{
  if (document.getElementById("type").innerHTML == "Node 1") 
  {
    histTableRankTemp1();
  } 
  else if(document.getElementById("type").innerHTML == "Node 2") 
  {
    histTableRankTemp2();
  } 
  else if (document.getElementById("type").innerHTML == "Node 3") {
    histTableRankTemp3();
  } 
  else if (document.getElementById("type").innerHTML == "Node 4") {
    histTableRankTemp4();
  }
  else if (document.getElementById("type").innerHTML == "Overall"){
    histTableOverallRankTemp();
  }
}

function clickHumid()
{
  if (document.getElementById("type").innerHTML == "Node 1") 
  {
    histTableRankHumid1();
  } 
  else if(document.getElementById("type").innerHTML == "Node 2") {
    histTableRankHumid2();
  } 
  else if (document.getElementById("type").innerHTML == "Node 3") {
    histTableRankHumid3();
  } 
  else if (document.getElementById("type").innerHTML == "Node 4") {
    histTableRankHumid4();
  } 
  else if (document.getElementById("type").innerHTML == "Overall"){
    histTableOverallRankHumid();
  }
}
