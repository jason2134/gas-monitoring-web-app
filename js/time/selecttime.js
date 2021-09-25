var x = document.getElementById("from");
var y = document.getElementById("to");
var from = 0;
var to = 0;
// var testfrom=null;
// var testto=null;

//获取from 和 to这两个数之后，就会被送到hist_opt.js中，将from 和 to转换成json后通过ajax发送到webapi
//onchange表示当用户改变input输入框内容时，执行一段Javascript代码，这里也就是执行function（）的内容。
//因为x = document.getElementById("from")中，id=“from” 的input type是date，因此x.value = 2021-06-03，也就是日期的写法，x.value的类型是date。
//而x.valueAsNumber就是把这个date转成了timestamp，类型是数值，也就是number。
document.getElementById("from").onchange = function () {
  //这里要把<label for="from">From:</label>这个输入的yy/mm/dd通过valueAsNumber转成数字，并且要整除1000去除ms的部分（python部分是没有毫秒的）
  //这里需要减去八小时的时差，因为这里html的input date是按照GMT的时间来的，例如输入的日期是2021/06/21，那就是在东一区的2021/06/21 0h0m0s，在香港就是东八区2021/06/21 8h0m0s。
  //所以要想精确表达香港时间的0h0m0s，就需要往把这个输入日期往前倒退8小时，也就是需要减去8*60*60
  from = (x.valueAsNumber / 1000) - 8*60*60;
  //from = x.value;
};

document.getElementById("to").onchange = function () {
  //这里要把<label for="to">To:</label>这个输入的yy/mm/dd通过valueAsNumber转成数字，并且要整除1000去除ms的部分（python部分是没有毫秒的）
  to = (y.valueAsNumber / 1000) - 8*60*60;
  //to = y.value;
};

//this is for debugging type and value of from and to variables.
// function getValue()
// {
//   testfrom = from;
//   testto = to;
//   console.log("from" + ":" + testfrom);
//   console.log("to" + ":" + testto);
// }

