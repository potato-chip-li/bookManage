<template>
  <div class="block">
    <el-input v-model="input" style=" width: 60%;margin-top: 20px;" placeholder="Please input" />
    <el-button @click="search_book"
    style="margin-top: 20px;
    margin-left: 10px;">搜索</el-button>
    <el-table :data="tableData" height="500" style="width: 100%" 
    @selection-change="handleSelectionChange" ref="multipleTable">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="book_id" label="图书id" width="180" />
    <el-table-column prop="bookname" label="书名" width="180" />
    <el-table-column prop="stu_name" label="借阅者" />
    <el-table-column prop="start_time" label="借阅时间" />
    <el-table-column prop="end_time" label="应还时间" />
    <el-table-column fixed="right" label="选项" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="isReturn(scope.row)">确认归还</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="dialogReturn" title="Warning" width="30%" center>
    <span>
      是否归还图书
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogReturn = false">Cancel</el-button>
        <el-button type="primary" @click="return_book">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
  <div style="margin-top: 20px">
    <el-button @click="borSelection">归还所选</el-button>
    <el-button @click="delSelection">清除选项</el-button>
  </div>
</div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'

var tableData=ref([])
const input=ref('')
const dialogReturn=ref(false)
const multipleTable=ref()
const book_id = ref(0)
const stu_id = ref(0)
const sel_book = ref()

function search_book(){
  console.log(input.value)
  var filtered_tableData=[]
  tableData.value.forEach((ele)=>{
    if (input.value!=''){
      if(ele.bookname.indexOf(input.value)!==-1 || ele.stu_name.indexOf(input.value)!==-1){
      filtered_tableData.push(ele)
    }}
  })
  tableData.value=filtered_tableData
}

function isReturn(row){
  dialogReturn.value=true
  book_id.value = row.book_id
  stu_id.value = row.stu_id
}
function return_book(){
  axios.post('http://localhost:3002/api/book/borBook',{
    isborrow:0,
    id:book_id.value
  })
  axios.post('http://localhost:3002/api/stu/delStu',{
    stu_id:stu_id.value
  })
  alert('归还成功')
  dialogReturn.value=false
}
function handleSelectionChange(selection){
  sel_book.value=selection
  console.log(sel_book.value)
}
function borSelection(){
  let returnAll = confirm('是否归还所选图书')
  console.log(returnAll)
  if(returnAll===false){return false}
  sel_book.value.forEach(ele=>{
    axios.post('http://localhost:3002/api/book/borBook',{
    isborrow:0,
    id:ele.book_id
  })
    axios.post('http://localhost:3002/api/stu/delStu',{
    stu_id:ele.stu_id
  })
  })
}
function delSelection(){
  multipleTable.value.clearSelection()
}
onMounted(()=>{
  axios.get('http://localhost:3002/api/stu/query').then((response) => {
    tableData.value=response.data
  })
})
</script>