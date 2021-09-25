//Hydrogen
var getH1;
var getH2;
var getH3;
var getH4;
//Nitrogen Dioxide
var getN1;
var getN2;
var getN3;
var getN4;
//Formaldehyde
var getFA1;
var getFA2;
var getFA3;
var getFA4;
//Toluene
var getT1;
var getT2;
var getT3;
var getT4;
//Temperature
var getTemp1;
var getTemp2;
var getTemp3;
var getTemp4;
//Humidity
var getHumid1;
var getHumid2;
var getHumid3;
var getHumid4;
//Timestamp of all data points
var sensortime;

/* NodeState:state of Node
1 = Node1
2 = Node2
3 = Node3
4 = Node4
*/
var NodeState = 0;

/* gasState:State of Gases
1 = Hydrogen
2 = Nitrogen Dioxide
3 = Formaldehyde
4 = Toluene
5 = Temperature
6 = Humidity
*/
var gasState = 1;
