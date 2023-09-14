<template>  
    <!-- Form -->
    <el-dialog title="添加书籍">
      <el-form :model="form">
        <el-form-item label="书名" :label-width="formLabelWidth">
          <el-input v-model="form.bookname" autocomplete="off" />
        </el-form-item>
        <el-form-item label="作者" :label-width="formLabelWidth">
          <el-input v-model="form.author" autocomplete="off" />
        </el-form-item>
        <el-form-item label="类别" :label-width="formLabelWidth">
            <el-select v-model="form.typename" placeholder="选择类别">
                <el-option label="哲学总类" value="哲学总类" />
                <el-option label="人文社科" value="人文社科" />
                <el-option label="文学艺术" value="文学艺术" />
                <el-option label="历史地理" value="历史地理" />
                <el-option label="自然科学" value="自然科学" />
            </el-select>
        </el-form-item>
        <el-form-item label="简介" :label-width="formLabelWidth">
          <el-input v-model="form.remarks" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submitBook()">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script setup>
  import axios from 'axios'
  import { reactive, ref } from 'vue'
  const formLabelWidth = '140px'
  let form = reactive({
    bookname: '',
    author: '',
    typename: '',
    remarks: '',
    isborrow:0
    // delivery: false,
    // type: [],
    // resource: '',
    // desc: '',
  })
  function submitBook(){
    console.log(form)
        axios.post('http://localhost:3002/api/book/addBook', {
          bookname: form.bookname,
          author: form.author,
          typename: form.typename,
          remarks: form.remarks,
          isborrow: form.isborrow
        }, {}).then((response) => { console.log(response); })
        alert('添加成功')
        form.bookname=''
        form.author=''
        form.typename=''
        form.remarks=''
  }
  </script>
  <style scoped>
  .el-button--text {
    margin-right: 15px;
  }
  .el-select {
    width: 300px;
  }
  .el-input {
    width: 300px;
  }
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>
  