<template>

  <div class="block">
  <el-input v-model="input" style=" width: 60%;margin-top: 20px;" placeholder="Please input" />
  <el-button @click="search_book" style="margin-top: 20px;margin-left: 10px;">搜索</el-button>
  <el-button @click="dialogFormVisible=true" style="margin-top: 20px;margin-left: 10px;">新增</el-button>
  <!-- <el-button @click="displaybook=true" style="margin-top: 20px;margin-left: 10px;">显示所有</el-button> -->
  <addBook v-model="dialogFormVisible"></addBook>
  <borBook v-model="dialogBorrow"></borBook>
  <el-dialog v-model="dialogDelete" title="Warning" width="30%" center>
    <span>
      是否从数据库删除图书
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogDelete = false">Cancel</el-button>
        <el-button type="primary" @click="dialogDelete = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-table :data="tableData" height="500" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="bookname" label="书名" width="180" />
    <el-table-column prop="author" label="作者" width="180" />
    <el-table-column prop="typename" label="类别" />
    <el-table-column prop="remarks" label="简介" />
    <el-table-column fixed="right" label="选项" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="dialogBorrow=true">借阅</el-button>
        <el-button link type="primary" size="small" @click="dialogDelete=true">删除</el-button>
      </template>
    </el-table-column>
</el-table>
<div style="margin-top: 20px">
    <el-button @click="borSelection()">借阅所选</el-button>
    <el-button @click="delSelection()">清除选项</el-button>
</div>
<!-- 刷新页面 -->
<h2 v-show="false">{{ count }}</h2>
</div>
</template>

<script setup>
import { ref,reactive,onMounted } from 'vue'
import axios from 'axios';
import addBook from '../components/addBook.vue';
import borBook from '../components/borBook.vue';
const input = reactive()
const dialogFormVisible = ref(false)
const dialogBorrow =ref(false)
const dialogDelete=ref(false)
function search_book(){
  tableData=ref(tableData)
  console.log(tableData)
  console.log(tableData.value)
  if(input!=''){
    if(input==tableData.value[1].bookname || input==tableData.value[2].author)
    console.log('@@@@@@@')
  }
}


var tableData=[]
const count=ref(0)
    onMounted(()=>{
      axios.get('http://localhost:3002/api/book/query').then((response) => {
        tableData=response.data
      })
      // tableData的值在axios中改变时,就算把tableData定义为ref页面也不刷新,原因未知,
      // 可以使用下面的setTimeout让页面重新渲染,其中的时间要大于axios异步执行结束的时间，最优的方法是做一个一直变化的动画
      setTimeout(()=>{
        count.value++
      },50)
    })




</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>




