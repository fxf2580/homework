var express = require('express');
var router = express.Router();
var fs=require("fs");
router.get('/', function(req, res, next) {
	var data=fs.readFileSync("baidu.txt","utf-8")
	data=data.split(":")
	data=data[1]
	console.log(data)
	data++
	fs.writeFile("baidu.txt",'你访问的次数为:'+data,function(err){
		res.render("index")
	})
});

module.exports = router;
