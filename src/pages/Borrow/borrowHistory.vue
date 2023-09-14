<template>
  <div class="block">
    <el-input v-model="input" style=" width: 60%;margin-top: 20px;" placeholder="Please input" />
    <el-button @click="search_book" 
    style="margin-top: 20px;
    margin-left: 10px;">搜索</el-button>
    <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column prop="BookAuthor" label="书名" width="180" />
    <el-table-column prop="Author" label="作者" width="180" />
    <el-table-column prop="TypeAuthor" label="借阅者" />
    <el-table-column prop="Remarks" label="借阅时间" />
    <el-table-column prop="Remarks" label="归还时间" />
 </el-table>
</div>
</template>

<script setup>
const tableData = [
 {
   BookAuthor: '2016-05-03',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
 {
   BookAuthor: '2016-05-02',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
 {
   BookAuthor: '2016-05-04',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
 {
   BookAuthor: '2016-05-01',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
 {
   BookAuthor: '2016-05-08',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
 {
   BookAuthor: '2016-05-06',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
 {
   BookAuthor: '2016-05-07',
   Author: 'Tom',
   TypeAuthor: 'No. 189, Grove St, Los Angeles',
 },
]
</script>