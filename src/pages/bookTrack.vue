<template>
    <div style="margin-top: 20px;">
        <el-input v-model="input" style=" width: 50%;" placeholder="输入书名检索" />
        <el-button @click="search_book" style="margin-left: 10px;">搜索</el-button>
        <el-button @click="resetTableDate" style="margin-left: 10px;">清除</el-button>
    </div>
    <div id="content">
        <ol v-for="(value,key) in ulData" :key="key">
            <li><p>《{{ key }}》</p>
                <ol v-for="ele in value" id="book-track">
                <li>
                    <span>{{ ele.start_time }}</span>~<span>{{ ele.rel_end_time }}</span>
                    <p>姓名：{{ ele.stu_name }}&nbsp;学号：{{ ele.stu_num }}</p>
                </li>
                <span>&rarr;</span>
                </ol>
            </li>
        </ol>
    </div>
</template>
    
<script setup>
import axios from 'axios';
import { ref,onMounted } from 'vue';
const ulData = ref()
const input = ref('')
const resetTableDate = ()=>{
    input.value=''
    getUlData()
}

const search_book=()=>{
  var filtered_ulData={};
    Object.keys(ulData.value).forEach((ele)=>{                              
      if(ele.includes(input.value)){
          filtered_ulData[ele]=ulData.value[ele]
    }})
    console.log(filtered_ulData)
    ulData.value=filtered_ulData
}




const getUlData = ()=>{
    axios.get('http://localhost:3002/api/stu/trackQuery').then((response) => {
      ulData.value=response.data
})}

onMounted(getUlData)

</script>

<style scoped>
#content {
    height: 500px;
    overflow: auto;
}
#content > ol:hover{
    background-color: aliceblue;
}
#content p{
    text-align: center;
}
#book-track {
    display: inline;
}
#book-track:hover {
    color: skyblue;
}
#book-track li{
    display: inline-block; 
    width: 200px;
    height: 40px;   
    background-color: antiquewhite;
    border-radius: 5px;
    margin: 10px 25px;
    text-align: center;
    font-size: 12px;
               
 }    
</style>