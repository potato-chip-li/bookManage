<template>
    <div>
      <div style="margin-top: 20px;">
      <el-input v-model="input" style=" width: 50%;" placeholder="根据书名与学生名字检索" />
      <el-button @click="search_book" style="margin-left: 10px;">搜索</el-button>
      <el-button @click="resetTableDate" style="margin-left: 10px;">重置</el-button>
      </div>
      <el-table :data="tableData" height="500" style="width: 100%" 
      @selection-change="handleSelectionChange" ref="multipleTable">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="主键"  v-if="false"/>
      <el-table-column prop="book_id" label="图书id" width="180" />
      <el-table-column prop="bookname" label="书名" width="180" />
      <el-table-column prop="stu_name" label="借阅者" />
      <el-table-column prop="start_time" label="借阅时间" />
      <el-table-column prop="pre_end_time" label="应还时间" />
      <el-table-column fixed="right" label="选项" width="120">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="showDialogReturn(scope.row)">确认归还</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogReturn" title="提示" width="30%" center>
      <span>
        <li v-for="ele in returnBookMessage">是否归还图书: 图书标号:
          <strong>{{ ele.book_id }}</strong>
          ,图书名称:<strong>《{{ ele.bookname }}》</strong>
        </li>
      </span>
  
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogReturn = false">取消</el-button>
          <el-button type="primary" @click="return_book">确认</el-button>
        </span>
      </template>
    </el-dialog>
    <div style="margin-top: 20px">
      <el-button @click="dialogReturn=true">归还所选</el-button>
      <el-button @click="delSelection">清除选项</el-button>
    </div>
  </div>
  </template>
  
  <script setup>
  import {ref,onMounted } from 'vue'
  import axios from 'axios'

  
  const props = defineProps(['filterData'])
  var raw_tableData=[]
  var returnBookMessage=[]
  
  var tableData=ref([])
  const input=ref()
  const dialogReturn=ref(false)
  const multipleTable=ref()
  
  
  function search_book(){
    var filtered_tableData=[];
      tableData.value.forEach((ele)=>{
        if(ele.bookname.includes(input.value) || ele.stu_name.includes(input.value)){
        filtered_tableData.push(ele)
      }})
      tableData.value=filtered_tableData
  }
  
  function showDialogReturn(row){
    returnBookMessage=[]
    dialogReturn.value=true
    returnBookMessage.push(row)
  }
  
  
  async function return_book(){
    await Promise.all(returnBookMessage.map((ele) => {
      axios.post('http://localhost:3002/api/stu/modStu',{
        isborrow:0,
        id:ele.id
      })
    })).then(()=>{
      console.log('归还成功')
      dialogReturn.value=false
      // for(let i of returnBookMessage){
      //   tableData.value = tableData.value.filter(ele=>ele.book_id!==i.book_id)
      // }
      getTableDate()
      returnBookMessage=[] 
    })
  }


  
  function handleSelectionChange(selection){
    returnBookMessage=selection
    console.log(returnBookMessage)
    console.log(tableData.value)
  }
  
  
  function delSelection(){
    multipleTable.value.clearSelection()
  }
  
  function getTableDate(){
    axios.get('http://localhost:3002/api/stu/query').then((response) => {
      raw_tableData=response.data
      // 调用父组件传来的方法
      tableData.value = props.filterData(raw_tableData)
    })
  }
  
  function resetTableDate(){
    input.value=''
    getTableDate()
  }
  
  onMounted(getTableDate)
  </script>