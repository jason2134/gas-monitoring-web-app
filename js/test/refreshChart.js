//+表示将Date(2021, 3, 3)转成timestamp的数值表示
//var base = +new Date(2021, 3, 3);1623921195; 1607110465663;
var base = new Date(1623921195000);
var oneDay = 24 * 3600 * 1000; //这一天是精确到ms级
var date = [];
var data = [Math.random() * 150];
var now = new Date(base);


//这个是Echart中根据base+oneDay的方法进行动态刷新的函数。把realtime换成从数据获得的timestamp
//就可以做同样的根据数据库的timestamp的动态刷新。
//shift here is a 参数，当addData这个函数有需要用shift这个输入参数时，就会跳到需要用到的位置，
//这里的情况就是if (shift) 这个判断。如果仅仅用addData（），就不会用到任何和shift参数相关的语句。
function addData(shift) 
{
    now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);
    data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
    //这里表示调用shift功能
    if (shift) 
    {
        date.shift();
        data.shift();
    }
    //这里表示将now变量自增一天
    now = new Date(+new Date(now) + oneDay);
    //这里就是检查now这个变量对应的年月日时分秒的数值是否递增正确。
    // var yt = now.getFullYear();
    // var mt = now.getMonth();
    // var ddt = now.getDate();
    // var ht = now.getHours();
    // var mmt = now.getMinutes();
    // var st = now.getSeconds();
    // console.log("Year:"+yt);
    // console.log("Month:"+mt);
    // console.log("Day:"+ddt);
    // console.log("Hour:"+ht);
    // console.log("Minute:"+mmt);
    // console.log("Second:"+st);
}

//表示addData()函数执行两次，因此在图上最开始显示的是2021/04/03和2021/04/04
//并且不能用addData(shift) or addData(true)调用addData函数，会报错.
for (var i = 1; i < 6; i++) 
{
    addData();
}


    option = 
    {
        //xAxis
        xAxis: 
        {
            type: 'category',
            boundaryGap: false,
            axisLine:
            {
                lineStyle:
                {
                    color:'white',
                    width: 4,
                }
            },
            axisLabel:
            {
                textStyle:
                {
                    color:'white',
                    fontSize:8,
                },
            },
            data: date,
        },
        //yAxis
        yAxis: 
        {
            boundaryGap: [0, '50%'],
            type: 'value',
            axisLine:
            {
                lineStyle:
                {
                    color:'white',
                    width: 4,
                }
            },
            axisLabel:
            {
                textStyle:
                {
                    color:'white',
                    fontSize:8,
                },
            },
        },
        tooltip: 
        {
            show:true,
            trigger: 'axis',
            //这里需要了解echart官方解释中，params的数据结构，收藏在个人的csdn js文件夹中
            //seriesName，value是其中两个
            axisPointer: 
            {
                animation: true,
            },
            //使用console.log(params)就可以知道params的数据结构，你会发现他就是一个长度为1的数组，调用就用params[0]。并且里面包含有各种变量：seriesName, axisValue, value等
            formatter(params)
            {
                console.log(params);
                return params[0].seriesName + '<br/>'+ params[0].axisValue + '<br/>'+ Math.round(params[0].value);
            },
        },
            //Series for data in yAxis
            series: 
            [
                {
                    name:'成交',
                    type:'line',
                    smooth:true,
                    symbol:'none',
                    //areaStyle: {normal: {}},
                    data: data,
                }
            ]
        };


//基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('chart1'));
myChart.setOption(option)

//这里必须要调用addData(true)，不然不会出现shift功能，所有的数据会被append到图表中。
setInterval(function () 
{
    addData(true);
    myChart.setOption(option);
}, 1000);