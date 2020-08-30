/**
 * 根据不同的传入参数生成不同的模块数据
 * 本文件主要是为了复杂的SPA项目设立
 */
const fs = require('fs');
const path = require('path');
/**
 * npm script 启动命令传入的参数 process.argv, 如 npm run dev index ==> node ./build-config/main/server.js "index"
 *  1. 第一个参数返回启动 exe  node
 *  2. 第二个参数返回启动的脚本文件 server.js 的确切目录位置
 *  3. 第三个参数返回后面的 index 值，以此类推下去
 *  。。。
 */
let [nodeExe, exectPath, ...serverPages] = process.argv;
console.log(`启动编译的页面是：${serverPages.length > 0 ? serverPages : '全部页面'}！\n`);

module.exports = function (pages) {
  // 如果pages是数组，则构建了多个项目模块
  // 一般情况下只是一条独立的数据
  pages = Array.isArray(pages) ? pages : [pages];

  /**
   * 1. 同步的方式获取指定路径下的文件目录 readdirSync
   * 2. 过滤不符合标准的目录 filter
   * 3. 生成新的想要的数组
   * {
   *  entry: 一个明确的路径,
   *  pageModuleKey: 一个标记
   *  htmlConfig：给 html-webpack-plugin 插件使用的配置
   * }
   * 4. 将多个编译模块下的目录合并成一个入口数组
   * */
  let pageConfig = pages.reduce((acc, cur) => {
    let fileArray = fs
      .readdirSync(cur)
      .filter((filename) => /^[a-zA-Z0-9]/.test(filename))
      .map((filename) => {
        // 页面入口文件路径
        const indexFilePath = path.resolve(cur, filename + '/index');
        // 读取配置里的数据
        const fileConfig = require(path.resolve(cur, filename + '/config'));
        return Object.assign({}, { entry: indexFilePath }, fileConfig);
      });
    // 合并所有项目模块到一个数组中
    return acc.concat(fileArray);
  }, []);

  // 开发环境优化措施！！！
  // 如果传入了几个确定需要编译的文件标识，则需要与 pageModuleKey 比对，只启动对符合条件文件的编译
  if (serverPages && serverPages.length > 0) {
    pageConfig = pageConfig.filter((item) => serverPages.indexOf(item.pageModuleKey) > -1);
  }

  return {
    // 生成 webpack 入口对象 key : path
    entries: pageConfig.reduce((acc, cur) => {
      if (cur.pageModuleKey && cur.entry) {
        acc[cur.pageModuleKey] = cur.entry;
      }
      return acc;
    }, {}),
    // html-webpack-plugin 使用的配置
    htmlArray: pageConfig.map((item) => item.htmlConfig),
  };
};
/**
 * 已完成
 */
