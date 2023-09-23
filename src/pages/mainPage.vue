<script setup>
import axios from "axios";
import * as echarts from "echarts";
import { onMounted,onUnmounted,ref,reactive } from "vue";

var myDate = new Date();
const booknum=reactive({
    num_all:0,
    num_isbor:0,
    num_unreturn:0,
})
const booksort=reactive({
    sort1:0,
    sort2:0,
    sort3:0,
    sort4:0,
    sort5:0,
})
let echart = echarts;

onMounted(() => {
    axios.get('http://localhost:3002/api/book/query').then((response)=>{
        booknum.num_all=response.data.length
        response.data.forEach(ele => {
            if(ele.typename=='哲学总类') {booksort.sort1++}
            if(ele.typename=='人文社科') {booksort.sort2++}
            if(ele.typename=='文学艺术') {booksort.sort3++}
            if(ele.typename=='历史地理') {booksort.sort4++}
            if(ele.typename=='自然科学') {booksort.sort5++}
        })
    })
    axios.get('http://localhost:3002/api/stu/query').then((response)=>{
        booknum.num_isbor=response.data.length
        response.data.forEach(ele => {
        if(+ele.end_time.split('-')[0]<myDate.getFullYear()){
            booknum.num_unreturn++
      }
      else{
        if(+ele.end_time.split('-')[1]<myDate.getMonth()+1) booknum.num_unreturn++
        if(+ele.end_time.split('-')[1]==myDate.getMonth()+1){
          if(+ele.end_time.split('-')[1]<myDate.getMonth()+1) booknum.num_unreturn++
          if(+ele.end_time.split('-')[1]==myDate.getMonth()+1){
            if(+ele.end_time.split('-')[2]<=myDate.getDate()) booknum.num_unreturn++
        }}
      }
    })
    })
    // 设置延时，要比axios.get慢
    setTimeout(initChart_1,1000)
    setTimeout(initChart_2,1000)
    setTimeout(initChart_3,1000)
});

onUnmounted(() => {
    echart.dispose;
});

// 基础配置一下Echarts
function initChart_1() {
    let chart_1 = echart.init(document.getElementById("myEcharts_1"),);
    // 把配置和数据放这里
    chart_1.setOption({
    title: {
    text: '图书借阅时间',
    subtext: 'Fake Data',
    left: 'center'
    },
    xAxis: {
        type: "category",
        data: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
        ]
    },
    tooltip: {
        trigger: "axis"
    },
    yAxis: {
        type: "value"
    },
    series: [
        {
        data: [
            820,
            932,
            901,
            934,
            1290,
            1330,
            1320,
            801,
            102,
            230,
            4321,
            4129
        ],
        type: "line",
        smooth: true
        }
    ]
    });
    window.onresize = function() {
    //自适应大小
    chart_1.resize();
    };
}

function initChart_2(){
    let chart_2 = echart.init(document.getElementById("myEcharts_2"),);
    var option;
    option = {
    title: {
        text: '图书分类',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left'
    },
    series: [
        {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
            { value: booksort.sort1, name: '哲学总类' },
            { value: booksort.sort2, name: '人文社科' },
            { value: booksort.sort3, name: '文学艺术' },
            { value: booksort.sort4, name: '历史地理' },
            { value: booksort.sort5, name: '自然科学' }
        ],
        emphasis: {
            itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
        }
    ]
    };
    chart_2.setOption(option)
    }

function initChart_3(){
    let chart_3 = echart.init(document.getElementById("myEcharts_3"));
    var option = {
        title: {
        text: '借阅情况',
        left: 'center'},
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: ['未借图书', '已借图书', '逾期图书',],
            inverse: true
        },
        series: [
            {
            data: [booknum.num_all, booknum.num_isbor, booknum.num_unreturn],
            type: 'bar'
            }
        ]
        };
chart_3.setOption(option)
}


</script>


<template>
<div class="block">
    <div class="echarts-box">
      <div id="myEcharts_2" :style="{ width: '900px', height: '300px', float:'left'}"></div>
      <div id="myEcharts_3" :style="{ width: '600px', height: '300px', float:'left' }"></div>
      <div id="myEcharts_1" :style="{ width: '900px', height: '300px', float:'left'}"></div>
    </div>
</div>
</template>
  
