<script setup>
import Top from './components/Top.vue';
import axios from 'axios';
import { reactive, ref } from 'vue'
  
const Auth = ref(false)
const Regis = ref(true)
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
      Regis.value=false
    }
  });
})
  if(Regis.value==true){
    alert("登陆失败，账号或密码错误")
  }
}

function Account_reset(){
  formLabel.username=''
  formLabel.password=''
}
</script>

<template>

  <div style="background-color: aliceblue;" v-if="Regis">
  <el-form
      label-position="left"
      label-width="100px"
      :model="formLabel"
      style="max-width: 460px;height: 200px;;margin:200px auto;"
    ><h4 style="text-align: center;">图书管理系统登录页面</h4>
        <el-input v-model="formLabel.username" placeholder="账户"/>
        <el-input v-model="formLabel.password" placeholder="密码"/>
      <el-button @click="Account_register" type='primary' style="width: 100px; margin-top: 20px; margin-left: 120px;">登录</el-button>
      <el-button @click="Account_reset" type='info' style="width: 100px; margin-top: 20px;">重置</el-button>
    </el-form>
  </div>

<div v-if="Auth">
  <Top></Top>
  <router-view></router-view>
</div>
<div class="demo"></div>
</template>

<style>
  .main{
    width: 60%;
    margin: 100px auto;
  }
  .demo{
    float: right;
    background-size: 100% 100%;
    background-image: url('./assets/img/books_1.jpg');
    width: 90px;
    height: 90px;
  }
  .block{
    height: 550px;
  }
</style>
