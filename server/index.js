// node 后端服务器
//index.js——Express 服务器入口文件


import bodyParser  from 'body-parser'
import express from 'express'
import userApi from './api/userApi.js'
import bookApi from './api/bookApi.js'
import stuApi from './api/stuApi.js'

const app = express()

//采用设置所有均可访问的方法解决跨域问题
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由

app.use('/api/user', userApi)
app.use('/api/book', bookApi)
app.use('/api/stu', stuApi)
// 监听端口
app.listen(3002)
console.log('success listen at port:3002......')

