<template>
  <div>
  <div style="margin-top: 20px;">
  <el-input v-model="input" style=" width: 50%;" placeholder="输入书名或作者检索" />
  <select v-model="type_sel" style="margin-left: 10px;">
  <option value="" disabled>--选择图书类别--</option>
  <option value="哲学总类">哲学总类</option>
  <option value="人文社科">人文社科</option>
  <option value="文学艺术">文学艺术</option>
  <option value="历史地理">历史地理</option>
  <option value="自然科学">自然科学</option>
  </select>
  <el-button @click="search_book" style="margin-left: 10px;">搜索</el-button>
  <el-button @click="resetTableDate" style="margin-left: 10px;">重置</el-button>
  </div>
  <!-- 这里的v-model用来控制组件el-dialog的显示与隐藏.-->
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
    @selection-change="handleSelectionChange" ref="multipleTable" >
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
    <el-button @click="dialogFormVisible=true">新增图书</el-button>
</div>
</div>
</template>

<script setup>
import { ref,onMounted,watch } from 'vue'
import axios from 'axios';
import addBook from '../components/addBook.vue';
import borBook from '../components/borBook.vue';

const input = ref('')
const type_sel = ref('')
const dialogFormVisible = ref(false)
const dialogBorrow =ref(false)
const multipleTable=ref()
const sel_book=ref()
const id=ref(0)
let dialogDelete=ref(false)
var tableData=ref([])
var raw_tableData=[]
var info={}


function search_book(){
  var filtered_tableData=[];
    raw_tableData.forEach((book)=>{                              
      if(book.bookname.includes(input.value) || book.author.includes(input.value)){
        if(type_sel.value === "" || book.typename === type_sel.value){
          filtered_tableData.push(book)
    }}})
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
        dialogDelete.value=false
        raw_tableData = raw_tableData.filter(ele=>ele.id !== id.value)
        tableData.value = raw_tableData
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

function getTableDate(){
  axios.get('http://localhost:3002/api/book/unborbook').then((response) => {
    raw_tableData=response.data
    tableData.value=raw_tableData
  })
}

function resetTableDate(){
  input.value=''
  type_sel.value=''
  tableData.value=raw_tableData
}

onMounted(getTableDate)
// 监听dialogFormVisible,dialogBorrow，更新tableDate
watch([dialogFormVisible,dialogBorrow],(newValue,oldValue)=>{
  if(newValue[0]===false && newValue[1]===false){
    setTimeout(getTableDate,500) 
  }
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




