import socketVue from '@/tool/socket-vue'
import config from '@/tool/config'
import tool from '@/tool'
import store from '@/store'

// 需本地暂存的数据调取方式
const findSession =(sendDate,data)=>{
    let functionName = sendDate.functionName;
    let   promise ,sessionData  = tool.getStore(functionName);
    if(sessionData){
        promise = new Promise((resolve, reject) => {resolve(sessionData)});
    }else{
        promise = WS.send(sendDate);
        promise.then(res=>{
            tool.setStore(functionName,res,data);
        });
    };
    return promise;
}


/****************************************创建ws对象************************************/
let WS= new socketVue(config,store);
let api = {};

/***************************************心机包***************************************/
//用于验证玩家webSocket链接是否有效。
api.authenticate = function(service,data){
    return WS.send({
        service:service,
        functionName:'authenticate',
        data:data
    })
}

/***************************************玩家***************************************/
//从服务端获取验证码
api.captcha = function(){
    return WS.send({
        service:'player',
        functionName:'captcha'
    })
}

//获取手机验证码
api.getSMSCode = function(data){
    return WS.send({
        service:'player',
        functionName:'getSMSCode',
        data:data
    })
}

//玩家开户
api.create = function(data){
    return WS.send({
        service:'player',
        functionName:'player',
        data:data
    })
}
/***************************************平台***************************************/

// 获取平台信息
api.getPlatformDetails = function(data){
    return findSession({
        service:'platform',
        functionName:'getPlatformDetails'
    })
}
// 搜索平台投注记录
api.searchConsumptionRecord = function(data){
    return WS.send({
        service:'platform',
        functionName:'searchConsumptionRecord',
        data:data
    })
}

export default api
