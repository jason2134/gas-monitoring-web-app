//Define JS variables
var T = null;
var valueTime = null;

//Define JS time refresh function
function time() {
  var dt = new Date();//Date()是javascript的内置函数，只显示执行时的时间，不会刷新
                      //format: Mon May 24 2021 11:11:11 (HK Standard Time)
                      //一定要new，这样才能把Date() property传递给dt 这个var object，才能使用下面的dt.getFullYear()...
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;//不加1，五月份返回4
  var day = dt.getDate();
  var h = dt.getHours();//获取时
  var m = dt.getMinutes();//获取分
  var s = dt.getSeconds();//获取秒
  //print test
  //window.alert(mt)
  //时间显示格式：（h >= 10 ? h: '0' + h）表示当遇到h，m，s都小于10的时候，显示成“09” etc
  valueTime = y + '/' + mt+ '/' + day +' ' + (h >= 10 ? h: '0' + h) + ':' +(m >= 10 ? m : '0' + m) +':' + (s>= 10 ? s : '0' + s);
  //将valuetime的值插入到html文档中的<div class = "time"></div>，document.querySelector对应的是html的div class
  document.querySelector(".time").innerHTML = valueTime
  //use console log to check values
  // console.log("Year:"+y);
  // console.log("Month:"+mt);
  // console.log("Day:"+day);
  // console.log("Hour:"+h);
  // console.log("Minute:"+m);
  // console.log("Second:"+s);
}
//start to loop and refresh time
setInterval(time, 1000); 
