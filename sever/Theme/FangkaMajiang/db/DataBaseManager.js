var MongooseAsync = require("../../../core/MongooseAsync");      //跳转到db、跳转到FangkaMajiang、跳转到Theme

//单实例类
class DataBaseManager {
    constructor(){

    };

    //获取单实例的方法
    static  instance(){
        if (DataBaseManager.g_Instance == null){
            DataBaseManager.g_Instance = new DataBaseManager();
        }
        return DataBaseManager.g_Instance;
    }

    async initDB(account, pass, ip, port, dbName){
        this.mog = new MongooseAsync();     //初始化
        var isok = this.mog.connect(account, pass, ip, port, dbName);
        if (isok){
            //连接成功定义表
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }
}

DataBaseManager.g_Instance = null;

module.exports = DataBaseManager;