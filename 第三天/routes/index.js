var express = require('express');
var router = express.Router();
var fs=require("fs");
router.get('/', function(req, res, next) {
	var data=fs.readFileSync("fxf.txt","utf-8")
	data=data.split(":")
	data=data[1]
	data++
	fs.writeFile("fxf.txt","你访问的页面次数为:"+data,"utf-8",function(err){
		res.render("index",{name: data})
	})
});

module.exports = router;
