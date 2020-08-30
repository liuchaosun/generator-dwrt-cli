/**
 * 启动函数 creatServer
 * 开发环境配置生成函数 WebpackFunc
 * 传递的参数 pageConf
 */
// 1
const pageConf = require('./module-config');
// 2
const WebpackFunc = require('../webpack.dev.config');
// 3
const creatServer = require('../creat-server');

creatServer(8080, WebpackFunc(pageConf));
/**
 * 已完成
 */
