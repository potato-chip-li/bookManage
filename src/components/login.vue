<template>
    <el-form
      label-position="left"
      label-width="100px"
      :model="formLabel"
      style="max-width: 460px;margin:200px auto;"
    >
      <el-form-item label="账号">
        <el-input v-model="formLabel.username" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabel.password" />
      </el-form-item>
      <el-button @click="Account_register" style="margin-left: 100px;width: 360px;">登录</el-button>
    </el-form>

  </template>
  
<script setup>
import axios from 'axios';
import { reactive, ref } from 'vue'
  
const Auth = ref(false)
const formLabel = reactive({
  username: '',
  password:''
})

async function Account_register(){
  await axios.get('http://localhost:3002/api/user/query').then((response) => {
  response.data.forEach(ele => {
    if(ele.username==formLabel.username && ele.password==formLabel.password){
      alert("登录成功")
      Auth.value=true
    }
    else{
      console.log("登陆失败，账号或密码错误")
    }
  });
})
}
  </script>
  