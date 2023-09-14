<script setup>
import Top from './components/Top.vue';

</script>

<template>
  <Top></Top>
  <router-view></router-view>
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
