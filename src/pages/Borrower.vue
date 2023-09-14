<template>
    <el-table :data="tableData" height="500" style="width: 100%">
   <el-table-column prop="BookAuthor" label="书名" width="180" />
   <el-table-column prop="Author" label="作者" width="180" />
   <el-table-column prop="TypeAuthor" label="类别" />
   <el-table-column prop="Remarks" label="简介" />
 </el-table>
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