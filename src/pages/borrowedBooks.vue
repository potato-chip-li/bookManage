<template>
  <borBookPage :filterData="filterData"></borBookPage>
</template>
  
<script setup>
import borBookPage from '../components/borBookPage.vue';
  function filterData(rawData){
    return rawData.filter(ele=>ele.isborrow===1)
    // 使用filter ele后面不能加{},血的教训
    // let newData = rawData.filter((ele)=>{
    //   console.log(ele)
    //   ele.isborrow==0
    // })
    // return newData
    
}
</script>