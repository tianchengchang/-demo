
let Config = require("./Config.js");
let UnitTools = require("./UnitTools.js");
let fs = require("fs");
class IDs{
    constructor(){

    }

    initFromConfig(){
        this.idConfig = Config.getServerConfig().ids;
        if(this.idConfig.create){
            this.generateIdstoFile(this.idConfig.from, this.idConfig.to,
                __dirname + "/../" + this.idConfig.path, __dirname + "/../" + this.idConfig.countpath);
        }
    }

    generateIdstoFile(from, to, filePath, countFilePath){
        let numCount = (to - from) + 1; //总共多少ID
        let buffer = new Buffer(4 * numCount); //总共大小
        for (let i = from; i <= to; i ++){
            let start = i - from;
            start *= 4;
            buffer.writeUInt32LE(i, start);
        }

        for (let i = 0; i < numCount; i++){
            let randomIndex = UnitTools.random(0, numCount - 1);
            let currentNum = buffer.readUInt32LE(i * 4);
            let changeNum = buffer.readUInt32LE(randomIndex * 4);

            buffer.writeUInt32LE(currentNum, randomIndex);
            buffer.writeUInt32LE(changeNum, i * 4);
        }

        fs.writeFileSync(filePath, buffer, {flag:"w"});
        fs.writeFileSync(countFilePath, 0, {flag:"w"});
    }

    async getID(){
        let self = this;
        return new Promise(function (resolve, reject){
            let countNum = parseInt(fs.readFileSync(__dirname + "/../" + self.idConfig.countpath, "utf-8"));
            let startBufferIndex = countNum * 4;
            let stream = fs.createReadStream(__dirname + "/../" + self.idConfig.path, {start: startBufferIndex, end: startBufferIndex + 4, flags: "r"})
            stream.on("data", function(dataBuffer){
                let id = dataBuffer.readUInt32LE(0);
                resolve(id);
                fs.writeFileSync(__dirname + "/../" + self.idConfig.countpath, countNum + 1);
            })
        });
    }
}

model.exports = IDs;