var express=require('express');
var router=express.Router();
var mysql=require('mysql');

var con=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'bao'
})
router.post('/insert',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	var tt=req.body.use;
	var jj=req.body.mess;
	con.query('INSERT INTO message(user,message) VALUES("'+tt+'","'+jj+'")',function(err,rows,fileds){
		res.send(rows);
	})
})
router.post('/in',function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT * FROM message',function(err,rows,fileds){
		res.send(rows);
	})
})
router.post('/del',function(req,res,next){
	var dd=req.body.uid;
	res.header('Access-Control-Allow-Origin','*');
	con.query('DELETE FROM message WHERE id='+dd,function(err,rows,fileds){
		res.send(rows);
	})
})
module.exports=router;