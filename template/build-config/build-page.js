const webpack = require('webpack');
// 打印编译进度插件
const ProcessPlugin = require('webpack/lib/ProgressPlugin');

module.exports = function (config) {
  // 编译文件解析
  const compiler = webpack(config);

  // 控制台打印编译进度
  compiler.apply(
    new ProcessPlugin((percentage, msg) => {
      console.log(percentage * 100 + '%', msg);
    })
  );

  // 启动编译
  compiler.run((err, stats) => {
    if (err) throw err;
    // 打印结果输出到控制台
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
        depth: false,
      }) + '\n\n'
    );
  });
};
/**
 * 已完成
 */
