import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
// import {addUser,getuserMsg,addBook,getbookMsg} from './handleData'


const app = createApp(App)
// app.provide(addUser,getuserMsg,addBook,getbookMsg)
app.use(router)
app.use(ElementPlus)
app.mount('#app')