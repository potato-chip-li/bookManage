//api路由
//userApi.js —— 测试用 API 示例
import models from '../db.js';
import express from 'express';
import mysql from 'mysql';
import $sql from '../sqlMap.js';
// 连接数据库
const  router = express.Router();
var conn = mysql.createConnection(models.mysql);
conn.connect();

var jsonWrite = function (res, ret) {
   if (typeof ret === 'undefined') {
       res.json({
           code: '1', msg: '操作失败'
       });
   }
   else {
       res.json(
           ret
       );
   }
};
// 增加用户接口
router.post('/addBook', (req, res) => {
   var sql = $sql.book.add;
   var params = req.body;
   console.log(params);
   conn.query(sql, [params.bookname,params.author,params.typename,params.remarks,params.isborrow], function (err, result) {
       if (err) {
           console.log(err);
       }
       if (result) {
           jsonWrite(res, result);
       }
   })
});

router.get('/query',(req,res)=>{
   conn.query('select * from book',function(err,row){
       if(err){
            console.log(err)            
       }
       console.log(typeof row)
       let data = JSON.stringify(row)
       console.log(typeof data)
       res.end(data)
   })
});

export default router;

