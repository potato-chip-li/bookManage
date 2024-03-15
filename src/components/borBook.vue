<template>
    <el-dialog title="借阅选项">
    <el-form :model="form">
      <el-form-item label="书名" :label-width="formLabelWidth">
        <el-input v-model="props.info.bookname" autocomplete="off" :disabled="true"/>
      </el-form-item>
      <el-form-item label="借阅者学号" :label-width="formLabelWidth">
        <el-input v-model="form.stu_num" autocomplete="off" />  
      </el-form-item>
      <el-form-item label="借阅者姓名" :label-width="formLabelWidth">
        <el-input v-model="form.stu_name" autocomplete="off" />
      </el-form-item>
      <!-- 时间选择 -->
    <el-form-item label="归还时间" :label-width="formLabelWidth">
      <el-date-picker
          v-model="time_value"
          type="date"
          />
    </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="emit('close-vis')">Cancel</el-button>
        <el-button type="primary" @click="borrowBook()">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup>
import { reactive, ref, } from 'vue'
import axios from 'axios';
  

const formLabelWidth = '140px'
const emit = defineEmits(['close-vis'])
const props = defineProps(['info'])
const time_value = ref('')
const form = reactive({
  stu_name: '',
  stu_num: '',
})


function borrowBook(){
  axios.post('http://localhost:3002/api/stu/addStu', {
    book_id:props.info.id,
    stu_name:form.stu_name,
    stu_num:form.stu_num,
    pre_end_time:get_wantTime(time_value.value),
    isborrow:1
  }).then(
    console.log('图书借阅成功')
  )
  emit('close-vis')
}



function get_wantTime(old_time){
  let time_data=new Date(old_time)
  let year = time_data.getFullYear()
  let month = time_data.getMonth()+1
  let day = time_data.getDate()
  return year+'-'+month+'-'+day
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