/**
 * 本模块的页面参数配置
 * 生成一个结构化的对象数据，提供到 webpack 中使用，主要有如下内容
 *
 * A. 入参
 *    1. pages: 需要编译的模块的目录入口，将使用 fs 模块读取目录下所有文件
 *
 * B. 出参
 *    1. entries： 资源模块入口，一个格式化对象，{ 模块名称: 模块文件的真实路径 }
 *    2. htmlArray：从模块文件目录下读取 _config.js 文件生成的数组 [{ 各种配置关键字: 各种配置值}]
 *    3. defineVariable: 宏变量，提供 webpack.DefinePlugin 使用
 *    4. publicPathName：静态资源链接统一前缀
 */
const path = require('path');
// 需要编译的页面
const { APP_PATH } = require('../system-config');
const mainPage = path.resolve(APP_PATH, './entries/common');

const CreatPageConfig = require('../creat-page-config');

module.exports = Object.assign(
  {},
  {
    // 根据项目定制的宏变量
    defineVariable: {
      API_VERSION: '"V1"',
      PAGE_SOURCE: '"common"',
    },
    // 编译后的静态资源请求链接的统一前缀
    publicPathName: '/common/',
  },
  CreatPageConfig(mainPage)
);
/**
 * 已完成
 */
