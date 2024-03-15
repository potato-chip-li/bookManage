import models from '../db.js';
import express from 'express';
import mysql from 'mysql';
import $sql from '../sqlMap.js';

const  router = express.Router();
var conn = mysql.createConnection(models.mysql);
// 选取对象中需要的键值对 obj:对象  usefulKeys:need keys list
const pick = (obj, usefulKeys) =>
   Object.keys(obj).reduce((acc, key) => {
      return usefulKeys.includes(key) ?
        {...acc, [key]: obj[key]} : acc
   }, {});

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

conn.connect();
Date.prototype.toJSON = function () {
    return this.toLocaleString();
    }


router.post('/addStu', (req, res) => {
    let sql = $sql.stu.add;
    let params = req.body;
    conn.query(sql, [params.book_id, params.stu_num, params.stu_name, params.pre_end_time,params.isborrow], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res,result)
        }})})

router.post('/modStu', (req, res) => {
    let sql = $sql.stu.mod;
    let params = req.body;
    conn.query(sql, [params.isborrow,params.id], function (err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {  
            jsonWrite(res,result)
        }
    })
})

router.get('/query',(req,res)=>{
    let sql = $sql.stu.sel;
    let params = req.query || req.params;
    console.log(params)
   conn.query(sql,function(err,row){
       if(err){
            console.log(err)            
       }
       let data = JSON.stringify(row)
       res.end(data)
   })})

router.get('/trackQuery',(req,res)=>{
    let sql = $sql.stu.sel_track;
    let params = req.query || req.params;
    console.log(params)
   conn.query(sql,function(err,row){
       if(err){
            console.log(err)            
       }
       let rawData = {}
       for(let i of row){
        rawData[i.bookname+i.book_id] = []
       }
       console.log(rawData)
       for(let i of row){
        rawData[i.bookname+i.book_id].push(pick(i,['stu_num','stu_name','start_time','rel_end_time']))
       }
       let data = JSON.stringify(rawData)
       res.end(data)
   })})






export default router;