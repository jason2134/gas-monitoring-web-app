
function sortHist(inputdata, inputtime) 
{ 
  var arrVal = [];
  var arrTime = [];
  var arr = inputdata;
  var arrT = inputtime;
     for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr.length - i - 1; j++) {
         if (arr[j + 1] > arr[j]) {
           var temp = arr[j];
           arr[j] = arr[j + 1];
           arr[j + 1] = temp;
           var temp2 = arrT[j];
           arrT[j] = arrT[j + 1];
           arrT[j + 1] = temp2;
         }
       }
     }
     for (k = 0; k < 4; k++) {
       arrVal[k]=arr[k]; 
       arrTime[k]=arrT[k];
     }
     var param = new Object();
     param['value'] = arrVal;
     param['time'] = arrTime;

  return param;
}

function add(a,b)
{
    c=a+b;
    return c;
}

function pushtest(a)
{
    if(a.length==4)
    {
        a.push("2021");
    }
    return a;
}

/*
 example 0

*/

var abc=[1,2,3,4];
var ind=[1,2,3,4];
console.log("before sorting, abc="+abc);
console.log("before sorting, ind="+ind);
var test0=sortHist(abc, ind);
console.log("after sorting, orginal abc="+abc);
console.log("after sorting, original ind="+ind);
console.log("after sorting, abc="+test0.value);
console.log("after sorting, ind="+test0.time);

/*
 example one

*/

var a=[1,2,3,4];
var b=[2021,2023,2024,2025];

var t1=a;
let t2=b;
console.log("before adding, a="+a);
console.log("before adding, b="+b);
var test1 = add(a,b);
console.log("after adding, a="+a);
console.log("after adding, b="+b);
console.log("after adding, result="+test1);

/*
 example two

*/

console.log("before pushing, b="+b);
console.log("before pushing, t2="+t2);
var test2 = pushtest(t2);
console.log("after pushing, b="+b);
console.log("after pushing, t2="+t2);

/*
 example 3： remove without changing original array

*/

function remove(arr, item) {
    var result=[];
       for(var i=0; i<arr.length; i++){
       if(arr[i]!=item){
           result.push(arr[i]);
       }
   }
    return result;
}

var c=[1,2,3,3,3,3,3];
console.log("before c="+c);
var d=3;
var test3=remove(c, d);
console.log("after c="+c);
console.log("after removal, c="+test3);

/*
 example 4： copy without changing original array

*/

function copy(arr) {
    var result=[];
       for(var i=0; i<arr.length; i++){
       result[i]=arr[i];
       
   }
    return result;
}

var e = [1,2,3,4,5];
console.log("before e="+e);
var test4=copy(e);
console.log("after e="+e);
console.log("after copy, e="+test4);

/*
 example 5： sort without changing original array

*/

function sort(inputdata, inputtime) 
{ 
  var finalarr=[];
  var finalarrt=[];
  var arrVal = [];
  var arrTime = [];
  for(var i=0; i<inputdata.length; i++)
  {
      arrVal[i]=inputdata[i];
  }
  for(var i=0; i<inputdata.length; i++)
  {
      arrTime[i]=inputtime[i];
  }
     for (let i = 0; i < arrVal.length; i++) {
       for (let j = 0; j < arrVal.length - i - 1; j++) {
         if (arrVal[j + 1] > arrVal[j]) {
           var temp = arrVal[j];
           arrVal[j] = arrVal[j + 1];
           arrVal[j + 1] = temp;

           var temp2 = arrTime[j];
           arrTime[j] = arrTime[j + 1];
           arrTime[j + 1] = temp2;
         }
       }
     }

     for (k = 0; k < 4; k++) 
     {
       finalarr[k]=arrVal[k];
       finalarrt[k]=arrTime[k];
     }
     var param = new Object();
     param['value'] = finalarr;
     param['time'] = finalarrt;

  return param;
}

var f=[12,13,14,15];
var g=[1,2,3,4];
console.log("before sort, f="+f);
console.log("before sort, g="+g);
var test5 = sort(f,g);
console.log("after sort, f="+f);
console.log("after sort, g="+g);
console.log("after sort, final rank="+test5.value);
console.log("after sort, final index="+test5.time);


/*
 example 6,
 基本类型的时候，b和a的空间数值1所在的地址区域，a改变数值就会给a=2创建一个新的地址区域，但是b只会指向数值1所在的地址区域，所以b还是1

*/
var a=1;
var b=a;
console.log("b1="+b);
a=2;
console.log("b2="+b);

/*
 example 7
 b是数组的时候，b指向的是a数组所在的地址区域，所以当b改变的时候，其实a也会跟着一起改变。

*/
var a=[1,1,1];
var b=a;
console.log("a1="+a);
b[2]=2;
console.log("a2="+a);