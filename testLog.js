//function: every second a will increase 1
var a=0;
function logtest(){
    for(var i=0; i<1; i++)
    {
        a=a+1;
        console.log("response =" + a);
        
    }
}
setInterval(logtest,1000)
