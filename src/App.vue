<script setup>
import Top from './components/Top.vue';
import login from './pages/login.vue'
import { ref } from 'vue'


const Auth = ref(false)

</script>

<template>
<Transition name='login'>
<div class="block" v-if="Auth">
  <Top></Top>
  <router-view></router-view>
  <div class="demo"></div>
</div>
<login @close-vis="Auth=true" v-else></login>
</Transition>


</template>


<style>
  *{
    margin: 0;
    padding: 0;
  }
  .main{
    width: 60%;
    margin: 100px auto;
  }
  .demo{
    position: absolute;
    bottom: 3px;
    right: 3px;
    background-size: 100% 100%;
    background-image: url('./assets/img/books_1.jpg');
    width: 90px;
    height: 90px;
  }
  .block{
    height: 550px;
  }

.login-enter-active,
.login-leave-active {
  transition: opacity 0.5s ease;
}

.login-enter-from,
.login-leave-to {
  opacity: 0;
}
</style>
