// 当前页面的一些主要配置
module.exports = {
  // 用来标识当前页面模块的标记，根据入口文件最后会生成一个个单独的js模块，这里的key用来做模块的名字
  pageModuleKey: 'myIndex',
  // 用来提供给 htmlwebpackplugin 使用的配置
  htmlConfig: {
    // 生成新html的名字
    _fileName: 'index.html',
    // 新的 html 需要基于此文件生成
    _templateFileName: 'simple-index.html',
    // 新 html 的 title
    _title: '首页',
    // 新 html 中，需要引入进来的 js 模块资源
    _chunks: ['myIndex'],
    // 需要除本身以外的其他 js 模块
    _needMoreChunks: true,
  },
};
