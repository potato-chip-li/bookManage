<template>
     <h1>{{ msg }}</h1>
    <input v-model="userName" placeholder="请输入姓名" autocomplete>
    <input v-model="password" placeholder="请输入密码" autocomplete>
    <button v-on:click="addUser">提交</button>
    <input v-model="book.bookname" placeholder="请输入bookname" autocomplete>
    <input v-model="book.author" placeholder="请输入author" autocomplete>
    <input v-model="book.typename" placeholder="请输入typename" autocomplete>
    <input v-model="book.remarks" placeholder="请输入remark" autocomplete>
    <!-- <input v-model="book.createtime" placeholder="请输入createtime" autocomplete>
    <input v-model="book.updatetime" placeholder="请输入" autocomplete> -->
    <button @click="addBook">提交</button>



    <p>这是查询按钮</p>
        <p>
            <button @click="getbookMsg">书本</button>
            <button @click="getuserMsg">用户</button>
        </p>
    <router-view/>
</template>

<script>
import axios from 'axios';
export default{
    name: 'Hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        userName: '',
        password: '',
        book:{
          bookname:'',
          password:'',
          author:'',
          typename:'',
          remarks:'',
          isborrow:0
        }
      }
    },
    methods: {
      addUser() {
        var name = this.userName;
        var password = this.password;
        axios.post('http://localhost:3002/api/user/addUser', {
          username: name,
          password: password
        }, {}).then((response) => { console.log(response); })
      },
      getuserMsg () {
        axios.get('http://localhost:3002/api/user/query').then((response) => {
            console.log(response.data)
            console.log('--------')
            return response.data
        })
      },
      addBook () {
        var name = this.book.bookname
        var author = this.book.author
        var typename = this.book.typename
        var remarks = this.book.remarks
        var isborrow = this.book.isborrow
        axios.post('http://localhost:3002/api/book/addBook', {
          bookname: name,
          author: author,
          typename: typename,
          remarks: remarks,
          isborrow: isborrow
        }, {}).then((response) => { console.log(response); })
      },
      getbookMsg () {
        axios.get('http://localhost:3002/api/book/query').then((response) => {
            console.log(response.data)
            console.log('--------')
            return response.data
        })
      },
    }

}
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

