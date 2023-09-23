<template>
  <div class="block">
  <el-input v-model="input" style=" width: 60%;margin-top: 20px;" placeholder="Please input" />
  <el-button @click="search_book" style="margin-top: 20px;margin-left: 10px;">搜索</el-button>
  <el-button @click="dialogFormVisible=true" style="margin-top: 20px;margin-left: 10px;">新增</el-button>
  <!-- <el-button @click="displayAllbook" style="margin-top: 20px;margin-left: 10px;">显示所有</el-button> -->
  <addBook v-model="dialogFormVisible"></addBook>
  <borBook v-model="dialogBorrow" @close-vis="dialogBorrow=false" :info="info"></borBook>
  <el-dialog v-model="dialogDelete" title="Warning" width="30%" center>
    <span>
      是否从数据库删除图书
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogDelete = false">Cancel</el-button>
        <el-button type="primary" @click="delete_book">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-table :data="tableData" height="500" style="width: 100%"
    @selection-change="handleSelectionChange" ref="multipleTable">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="bookname" label="书名" width="180" />
    <el-table-column prop="author" label="作者" width="180" />
    <el-table-column prop="typename" label="类别" />
    <el-table-column prop="remarks" label="简介" />
    <el-table-column prop="id" fixed="right" label="选项" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="isBorrow(scope.row)" :class="{'hidden':scope.row.isborrow}">借阅</el-button>
        <el-button link type="primary" size="small" @click="isDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
</el-table>

<div style="margin-top: 20px">
    <el-button @click="borSelection">借阅所选</el-button>
    <el-button @click="delSelection">清除勾选</el-button>
</div>
</div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import axios from 'axios';
import addBook from '../components/addBook.vue';
import borBook from '../components/borBook.vue';

const input = ref('')
const dialogFormVisible = ref(false)
const dialogBorrow =ref(false)
const multipleTable=ref()
const sel_book=ref()
const id=ref(0)
let dialogDelete=ref(false)
var tableData=ref([])
var info={}

function search_book(){
  var filtered_tableData=[]
  tableData.value.forEach((book)=>{
    if (input.value!=''){
      if(book.bookname.indexOf(input.value)!==-1 || book.author.indexOf(input.value)!==-1){
      filtered_tableData.push(book)
    }}
  })
  tableData.value=filtered_tableData
}

function isDelete(row){
  dialogDelete.value=true
  id.value=row.id
}

function delete_book(){
  axios.post('http://localhost:3002/api/book/delBook', {
          id: id.value
        })
        dialogDelete=false
        for(let i=0;i++;i<=tableData.length)
        {
          if(tableData[i].id=id){
            tableData.splice(i,1)
          }
        }
  }

function handleSelectionChange(selection){
  sel_book.value=selection
}

function isBorrow(row){
  dialogBorrow.value=true
  info = {bookname:row.bookname,id:row.id}
}

function borSelection(){
  let returnAll = confirm('是否借阅所选图书')
  if(returnAll===false){return false}
  else{alert('抱歉，该功能还没做')}
}

function delSelection(){
multipleTable.value.clearSelection()
}





onMounted(()=>{
  axios.get('http://localhost:3002/api/book/query').then((response) => {
    tableData.value=response.data
  })
})




</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.hidden{
  visibility:hidden;
}
</style>




