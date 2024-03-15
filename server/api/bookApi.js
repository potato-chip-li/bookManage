import models from '../db.js';
import express from 'express';
import mysql from 'mysql';
import $sql from '../sqlMap.js';
// 连接数据库
const  router = express.Router();
let conn = mysql.createConnection(models.mysql);
console.log(conn)
conn.connect();

let jsonWrite = function (res, result) {
   if (typeof result === 'undefined') {
       res.json({
           code: '1', msg: '操作失败'
       });
   }
   else {
       res.json(result)
   }
}
// 增加用户接口
router.post('/addBook', (req, res) => {
   let sql = $sql.book.add
   let params = req.body
   console.log(params)
    conn.query(sql, [params.bookname,params.author,params.typename,params.remarks], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)                             
        }})})

router.post('/delBook',(req, res)=>{
    let sql = $sql.book.del
    let params = req.body
    console.log(params)
    conn.query(sql ,[params.id],function(err,result){
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }})})

// router.post('/borBook',(req, res)=>{
//     let sql = $sql.book.bor
//     let params = req.body
//     console.log(params)
//     conn.query(sql ,[params.isborrow,params.id],function(err,result){
//         if (err) {
//             console.log(err)
//         }
//         if (result) {
//             jsonWrite(res, result)
//         }})})

  
router.get('/unborBook',(req,res)=>{
    let sql = $sql.book.sel_unbor
    let params = req.query || req.params;
    console.log(params)
    conn.query(sql,function(err,row){
       if(err){
            console.log(err)            
       }
       let data = JSON.stringify(row)
       res.end(data)
   })})

router.get('/query',(req,res)=>{
    let sql = $sql.book.sel
    let params = req.query || req.params;
    console.log(params)
    conn.query(sql,function(err,row){
    if(err){
        console.log(err)            
    }
    let data = JSON.stringify(row)
    res.end(data)
})})

export default router;

