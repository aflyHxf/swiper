/**
 * 配置编译环境和线上环境之间的切换
 *
 * activeServer: 当前ws地址
 * cstest: 客服测试ws地址
 * devtest: 开发测试ws地址
 * platformId: 平台ID
 *
 */
let config={
    platformId:8,
    url:'ws://192.168.10.199:9280'
}
// config.url="wss://www.jin60.com/websocket";
if(location.protocol =="https:")config.url="wss://" +location.host +"/websocket";

export default config
