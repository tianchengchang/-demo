
let unitTools = require("UnitTools");
let config = require("Config");
class LoginManager{
    weixinLogin(){

    };

    //调用服务器测试登录接口，创建或返回测试账号
    testLogin(account){
        UnitTools.request(Config.testUrl, {account:account}, function(err, data){
            if(err){
                cc.log("登录异常");
                cc.log(data);
                return;
            }
        }, 5000)
    };
}

module.exports = LoginManager;