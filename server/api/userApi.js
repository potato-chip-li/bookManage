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

var jsonWrite = function (res, result) {
    if (typeof result === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        });
    }
    else {
        res.json(result);
    }
};
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.password], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.get('/query',(req,res)=>{
    var sql = $sql.user.sel;
    // var params = req.body;
    conn.query(sql,function(err,row){
        if(err){
             console.log(err)            
        }
        let data = JSON.stringify(row)
        res.end(data)
    })
});

export default router;

