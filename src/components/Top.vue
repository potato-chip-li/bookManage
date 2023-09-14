<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
    router=true
  >
    <el-menu-item index="mainPage" >首页</el-menu-item>
    <el-menu-item index="Books">管理图书</el-menu-item>
    <el-menu-item index="borrowedBooks">已借图书</el-menu-item>
    <el-menu-item index="unreturnedBooks">逾期图书</el-menu-item>
    <el-menu-item index="borrowedHistory">借阅历史</el-menu-item>
    <span style="margin-right: auto;"></span>
    <el-menu-item index="Account" style="margin-left: auto;"><el-avatar style="margin-top: 10px;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/></el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


