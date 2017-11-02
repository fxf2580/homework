var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'bao'
})
router.post('/insert',function(req,res,next){
	var title=req.body.tit;
	var zza=req.body.zz;
	var xqa=req.body.xq;
	var aa=req.body.a;
	var sels=req.body.sel;
	res.header('Access-Control-Allow-Origin','*');
	con.query('INSERT INTO xin(uid,name,title,time,detail) VALUES("'+sels+'","'
		+title+'","'+zza+'",now(),"'+xqa+'")',function(err,rows,fields){
			res.send(rows);
		})
})
router.post('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var butt=req.body.btn;
	con.query('SELECT * FROM xin',function(err,rows,fileds){
		res.send(rows)
	})
})
router.post('/detail',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var c=req.body.a;
	con.query('SELECT * FROM xin WHERE id='+c,function(err,rows,fileds){
		res.send(rows)
	})
})
module.exports = router;
