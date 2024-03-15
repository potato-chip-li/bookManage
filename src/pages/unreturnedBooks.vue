<template>
<borBookPage :filterData="filterData"></borBookPage>
</template>

<script setup>
import borBookPage from '../components/borBookPage.vue';
function filterData(rawData){
  return rawData.filter((ele)=>
    Date.parse(ele.pre_end_time) < Date.now() && ele.isborrow===1
  )
}
</script>
