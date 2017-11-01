var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var con=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	database:'bao'
})
router.post('/search',function(req,res,next){
	var cc=req.body.va;
	res.header('Access-Control-Allow-Origin','*');
	con.query('SELECT * FROM fey WHERE name LIKE "%'+cc+'%" OR sex LIKE "%'+cc+'%"',function(err,rows,fields){
		res.send(rows);
	})
})
module.exports = router;
