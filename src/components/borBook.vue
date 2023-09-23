<template>
    <el-dialog title="借阅选项">
    <el-form :model="form">
      <el-form-item label="书名" :label-width="formLabelWidth">
        <el-input v-model="props.info.bookname" autocomplete="off" disabled="true"/>
      </el-form-item>
      <el-form-item label="借阅者姓名" :label-width="formLabelWidth">
        <el-input v-model="form.stu_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="借阅者学号" :label-width="formLabelWidth">
        <el-input v-model="form.stu_num" autocomplete="off" />  
      </el-form-item>
      <!-- 时间选择 -->
    <el-form-item label="选择时间" :label-width="formLabelWidth">
      <el-date-picker
          v-model="time_value"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          size="small"/>
    </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel_visiable">Cancel</el-button>
        <el-button type="primary" @click="borrow_book">Confirm</el-button>
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
function borrow_book(){
  axios.post('http://localhost:3002/api/book/borBook',{
    isborrow:1,
    id:props.info.id
  })

  let start_time=get_wantTime(time_value.value[0])
  let end_time=get_wantTime(time_value.value[1])
  
  axios.post('http://localhost:3002/api/stu/addStu',{
    stu_name:form.stu_name,
    stu_num:form.stu_num,
    book_id:props.info.id,
    start_time:start_time,
    end_time:end_time,
    bookname:props.info.bookname
  },{}).then((response) => { console.log(response);})
  alert('借阅登记成功')
  cancel_visiable()
}

function cancel_visiable(){
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