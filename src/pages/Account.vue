<template>
  <div class="block1">
    <el-form
    label-position="left"
    label-width="100px"
    :model="formLabelAlign"
    size="small"
    style="max-width: 460px;
    margin-right: auto;">
    <h3 style="text-align: center;">添加管理员</h3>
    <el-form-item label="账户名">
      <el-input v-model="formLabelAlign.name" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.password" type="password"/>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formLabelAlign.verify_password" type="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
<el-table :data="tableData" max-height="400px" size="small" height=320>
    <el-table-column label="名字" prop="username" />
    <el-table-column label="密码" prop="password" />
  </el-table>
  <div style="margin-top: 20px">
    
    <el-button @click="exitAccount">退出登陆</el-button>
    <el-button @click="changePassword">更改密码</el-button>
  </div>
</div>
  <div class="block2">
    <h2 style="margin-left: 30px;" v-if="!morning">
    下午好！
  </h2>
  <h2 style="margin-left: 30px;" v-if="morning">
    上午好！
  </h2></div>
</template>

<script setup>
import axios from 'axios';
import { reactive, ref, onMounted} from 'vue'
const morning = ref(false)
const tableData = ref([])
const formLabelAlign = reactive({
  name: '',
  password: '',
  verify_password: '',
})
function submitForm(){
  if(formLabelAlign.password!=formLabelAlign.verify_password)
  {
    alert('密码输入不同') 
    return false
  }
  axios.post('http://localhost:3002/api/user/addUser', {
          username: formLabelAlign.name,
          password: formLabelAlign.password
        })
}
function resetForm(){
  formLabelAlign.name=''
  formLabelAlign.password=''
  formLabelAlign.verify_password=''
}


const exitAccount = ()=>{
  window.location.reload()
}
const changePassword = ()=>{
  alert('功能未实现')
}



onMounted(()=>{
  let now_time = new Date()
  console.log(now_time.getHours())
  now_time.getHours <= 12 ? morning.value=true : morning.value=false
  axios.get('http://localhost:3002/api/user/query').then((response) => {
    tableData.value=response.data
    tableData.value.forEach((ele)=>{
      ele.password='********'
    })
  })
})
</script>
<style scoped>
  .block1{
    width: 50%;
    height: 550px;
    background-color: antiquewhite;
    float: left;
  }
  .block2{
    background-size: 100% 100%;
    background-image: url('../assets/img/lib.jpg');
    margin:  0 0 0 0;
    top: 0;
    right: 0;
    width: 50%;
    height: 550px;
    float: left;
}</style>


