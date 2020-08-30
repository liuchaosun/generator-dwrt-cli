/**
 * 预编译公共基础包配置
 * 使用这种方式可以预先编译出一个不会轻易改动的基础包，如框架代码等
 * 抽取出的公共文件使用 DllPlugin 进行文件描述解释
 *
 * 在需要使用此基础包的项目中使用 DllReferencePlugin 读取这个描述文件
 * 通过描述文件可以知道当前这个基础包内集成了哪些资源
 * 这些资源被集成后统一对外暴露一个入口
 * 当使用项目将要编译某些资源时，会与描述文件中的内容进行对比，如果发现内容存在，则不再进行编译打包
 *
 * dll 的功能与 splitchunks 的功能有重复的地方，而区别在于 dll 更容易控制,
 * 并且通过 dll 可以构建出一个包含所有集成项目共同需要的外部资源，方便使用
 *
 * 预编译包也有一个缺陷: 在开发模式下不能很好的打印错误日志，此时如果发生错误会报错：
 * Uncaught Error: Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.
 * 因此请保证此配置 webpack.DllReferencePlugin 始终仅作用于生产环境
 */
const path = require('path');
const webpack = require('webpack');
const { TRIPARITE_PATH, bundleDllFolder, bundleDllLibName } = require('./system-config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    [bundleDllLibName]: [
      'react',
      'redux',
      'react-redux',
      'redux-thunk',
      'react-dom',
      'react-router',
      'react-router-dom',
    ],
  },
  output: {
    filename: '[name].dll.js',
    library: '[name]_[hash:8]',
    path: path.join(TRIPARITE_PATH, bundleDllFolder),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      // 跟library保持相同
      name: '[name]_[hash:8]',
      path: path.join(TRIPARITE_PATH, bundleDllFolder + '/[name].json'),
    }),
  ],
};
/**
 * 已完成
 */
