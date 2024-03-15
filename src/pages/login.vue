<template>
  <div class="page-login">
    <span>Book Manage Page</span>
    <el-form
      label-position="left"
      label-width="100px"
      :model="formLabel"
      style="max-width: 460px;margin:200px auto;"
    >
        <el-input v-model="formLabel.username" placeholder="账号" width="50px" v-focus/>
        <el-input v-model="formLabel.password" placeholder="密码" width="50px" style="margin-top: 20px;"/>
      <div class="button-log">
        <el-button @click="Account_login" >登录</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </el-form>
    
  </div>
  </template>
  
<script setup>
import axios from 'axios';
import { reactive } from 'vue'

const vFocus = {
  mounted: (el) => el.focus()
}
const formLabel = reactive({
  username: '',
  password:''
})
const emit = defineEmits(['close-vis'])
async function Account_login(){
  if(formLabel.username==='' || formLabel.password===''){
    console.log('密码或账号为空')
  }
  else{
      await axios.get('http://localhost:3002/api/user/query').then((response) => {
        response.data.forEach(ele => {
          if(ele.username==formLabel.username && ele.password==formLabel.password){
            console.log("登录成功")
            emit('close-vis')
          }
        });
        })}}

function reset(){
  formLabel.username='';
  formLabel.password=''
}
</script>

<style>
.page-login{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/background.jpg');
  background-size: cover;
  text-align: center;
  
}
.page-login > span{
  font-family: fantasy;
  font-size: larger;
  color: skyblue;
}
.button-log{
  text-align: center;
  margin-top: 20px;
}
</style>
  