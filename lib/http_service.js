//登录
var login = function (userName,passWord) {
    return $.post("../data/login/login.json",{
        userName : userName,
        passWord : passWord
    })
}

//查询用户信息
var getUserInfo = function(token){
    return $.post("../data/user/getUserInfo.json",{
        token : token
    })
}

//查询用户积分
var  getCredit = function(userId){
    return $.post("../data/credit/credit.json",{
        userId : userId
    })
}


//检查是否需要充值 (自定义promise)
var  isRecharge = function(credit){
    var defer = $.Deferred();

    //异步检测
    setTimeout(function(){
        //生成随机数值 0,1
        var isRe = Math.floor(Math.random()*2);
        defer.resolve(isRe);
    },50);

    return defer.promise();
}