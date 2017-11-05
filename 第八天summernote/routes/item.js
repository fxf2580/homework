var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'bao'
})
router.get('/list',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var cc=req.body.btn;
	con.query('SELECT * FROM xin',function(err,rows,fields){
		res.send(rows);
	})
})
router.post('/insert',function(req,res,next){
	var title=req.body.tit;
	var zza=req.body.zz;
	var aa=req.body.a;
	var sels=req.body.sel;
	res.header('Access-Control-Allow-Origin','*');
	con.query(`INSERT INTO xin (uid,name,title,time,detail) VALUES ('${sels}','${title}','${zza}',now(),'${aa}')`,function(err,rows,fields){
		res.send(rows);
	})
})
router.post('/del',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var uid=req.body.id;
	con.query('DELETE FROM xin WHERE id='+uid,function(err,rows,fields){
		res.send(rows);
	})
})
router.post('/update',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var bb=req.body.b;
	var xxtit=req.body.xtit;
	var xxzz=req.body.xzz;
	var yyy=req.body.yy;
	console.log(yyy)
	con.query('UPDATE xin SET name="'+xxzz+'",title="'+xxtit+'",detail="'+bb+'",time=now() WHERE id='+yyy,function(err,rows,fields){
		res.send(rows);
	})
})
module.exports = router;
