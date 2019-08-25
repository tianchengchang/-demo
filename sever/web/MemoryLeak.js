var express = require("express");
var app = express();
var MemoryLeakManager = require("./../core/MemoryLeakManager.js");  //监听内存泄漏的模块

app.get("/hello", function(req, res){
    res.send("调用成功");
});

//监听的端口
app.listen(3000);

//错误输出
process.on("uncaughtException", function(err){
    //console.log(err.message);    //错误信息
    console.log(err.stack);     //错误堆栈
});

//定时器（10秒后调用）
// setTimeout(function(){
//     //输出内存泄漏信息
//     MemoryLeakManager.writeMemory(__dirname + "//leak//");   //__dirname表示当前文件夹（web），leak必须是已经创建好的文件夹
// }, 10000);
// var a = "";
// a.hello();