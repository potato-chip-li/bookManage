<template>
  <div class="block">
    <el-input v-model="input" style=" width: 60%;margin-top: 20px;" placeholder="Please input" />
    <el-button @click="search_book" 
    style="margin-top: 20px;
    margin-left: 10px;">搜索</el-button>
    <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="BookAuthor" label="书名" width="180" />
    <el-table-column prop="TypeAuthor" label="类别" />
    <el-table-column prop="Remarks" label="借阅者" />
    <el-table-column prop="Remarks" label="借阅时间" />
    <el-table-column prop="Remarks" label="应还时间" />
    <el-table-column fixed="right" label="选项" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="dialogBorrow=true">确认归还</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="borSelection()">归还所选</el-button>
    <el-button @click="delSelection()">清除选项</el-button>
  </div>
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