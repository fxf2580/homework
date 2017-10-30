var express=require('express');
var router=express.Router();
var mysql=require('mysql');
var con=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'time'
})
router.post('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT * FROM shi',function(err,rows){
		res.send(rows)
	})
})

router.post('/lie',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT * FROM jian',function(err,rows){
		res.send(rows)
	})
})

module.exports=router;