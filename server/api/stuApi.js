import models from '../db.js';
import express from 'express';
import mysql from 'mysql';
import $sql from '../sqlMap.js';

const  router = express.Router();
var conn = mysql.createConnection(models.mysql);
conn.connect();


router.post('/addStu', (req, res) => {
    var sql = $sql.stu.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.stu_name, params.stu_num, params.book_id, params.start_time, params.end_time,params.bookname], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(res,result)
        }
    })
})

router.post('/delStu', (req, res) => {
    var sql = $sql.stu.del;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.stu_id], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(res,result)
        }
    })
})

router.get('/query',(req,res)=>{
    var params = req.query || req.params;
    console.log(params)
   conn.query('select * from stu',function(err,row){
       if(err){
            console.log(err)            
       }
       let data = JSON.stringify(row)
       res.end(data)
   })})





export default router;