/**
 * Created by litengfei on 2017/12/10.
 */
var express = require("express");
var app = express();
var MemoryLeakManager = require("./../core/MemoryLeakManager.js")

class BigData{
    constructor(){
        this.data = "实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐实得分红烧豆腐红烧豆腐红烧豆腐"
    }
}

var buffer = [];
app.get("/hello",function (req,res) {
    for(var i = 0;i<100000;i++) {
        buffer.push(new BigData())
    }
    res.send("调用成功");
})

app.listen(3000)

process.on('uncaughtException', function (err) {
    console.log(err.stack)
});

MemoryLeakManager.autoWatchMemory(__dirname+"//leak//")





