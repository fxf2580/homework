var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'bao'
})
router.post('/count',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT COUNT(*) FROM fey',function(err,rows,fields){
		res.send(rows);
	})
})
router.post('/fenye',function(req,res,next){
	var cc=req.body.b;
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT * FROM fey LIMIT '+(cc-1)*2+',2',function(err,rows,fields){
		res.send(rows);
		console.log(rows)
	})
})
module.exports = router;
