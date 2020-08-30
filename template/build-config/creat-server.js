/**
 * 开发环境 创建本地服务器方法
 */
// 进程架构
const Express = require('express');
// webpack
const Webpack = require('webpack');
// webpack 服务器中间件
const webpackDevMiddleware = require('webpack-dev-middleware');
// webpack 热重载
const webpackHotMiddleware = require('webpack-hot-middleware');
// http 路由中间件
const { createProxyMiddleware } = require('http-proxy-middleware');

// 开发环境需要被代理的路由列表
// 代理前：http://localhost:8080/user/login
// 代理后：http://www.exmple.com/user/login
const proxyTables = [
  {
    url: '/user/login',
    options: 'http://www.exmple.com',
  },
  {
    url: '/user/logout',
    options: 'http://www.exmple.com',
  },
];

module.exports = function (port, webpackConfig) {
  const app = Express();

  // 路由注入
  proxyTables.forEach((item) => {
    let context = item.options;
    if (typeof context === 'string') {
      context = {
        target: context,
        changeOrigin: true,
      };
    }
    app.use(item.url, createProxyMiddleware(context));
  });

  // webpack 编译配置后，加入服务器中间件
  const webpackCompiler = Webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(webpackCompiler, {
      quiet: true,
      // 决定 html 文件中的静态资源链接前是否有前缀
      publicPath: webpackConfig.output.publicPath,
      // 控制台打印信息
      stat: {
        colors: true,
        chunks: false,
      },
      hot: true, // 热更新第一步：开启热重载模式
    })
  );

  // 热更新第二步： 使用与服务器中间件相同的编译配置启动热重载中间件
  app.use(
    webpackHotMiddleware(webpackCompiler, {
      log: false,
    })
  );

  // 开发环境优化请求处理
  app.get('/favicon.ico', (req, res) => res.end());
  app.get('/', (req, res) => {
    res.redirect(webpackConfig.output.publicPath + 'index.html');
  });

  // 在目标端口开启服务监听
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Your app is running at:  http://localhost:' + port);
  });
};
/**
 * 已完成
 */
