/**
 * webpack 生产环境配置
 */
process.env.NODE_ENV = 'production';

const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// 抽取 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩 css 代码
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 压缩 js 代码
const TerserPlugin = require('terser-webpack-plugin');
// webpack 基础配置
const BaseWebpackConfFunc = require('./webpack.base.config');

// 编译速度监测--此包与动态添加资源链接的插件 html-webpack-tags-plugin 有冲突,只能二选一
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const speedMeasure = new SpeedMeasurePlugin();
// 编译尺寸监测--需要检查编译包体积的时候才放开
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// 添加现有文件资源或者CDN链接到动态生成的html中，必须在html-webpack-plugin之后使用
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// !!! 使用 dayjs 替换 momentjs, 大幅降低打包体积 64K -> 4K
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const {
  JS_PATH,
  CSS_PATH,
  TRIPARITE_PATH,
  TRIPARITE_PATH_NAME,
  analysisBuildAssets,
  bundleDllReact,
  bundleDllFolder,
  bundleDllLibName,
} = require('./system-config');

module.exports = function ({ publicPathName, defineVariable, entries, htmlArray }) {
  // 通用配置
  let baseConfig = BaseWebpackConfFunc({ htmlArray, defineVariable, publicPathName });

  let prodConfig = {
    entry: entries,

    // 指定编译文件的生成名称，注意文件指纹
    output: {
      filename: JS_PATH + '[name].[chunkhash:8].js',
    },

    // 持续优化策略
    optimization: {
      // 编译出错跳过文件生成
      noEmitOnErrors: true,
      // 运行时分支
      runtimeChunk: {
        name: 'manifest',
      },
      // 分包策略
      splitChunks: {
        minChunks: 1,
        minSize: 30000,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        // 生成文件名称时用的连接线 如 vendors~main.js
        automaticNameDelimiter: '~',
        name: true,
        // 配置缓存组
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            // 所有模块
            chunks: 'all',
            minChunks: 1,
            priority: 99,
          },
          common: {
            name: 'common',
            // 同步的重复模块（异步的由 plugin-syntax-dynamic-import 处理成单独的文件）
            chunks: 'async',
            minChunks: 3,
            priority: 10,
            // 是否允许模块重复加载
            reuseExistingChunk: false,
          },
        },
      },
      // 是否开启压缩
      minimize: true,
      // 压缩配置
      minimizer: [
        // 压缩js
        new TerserPlugin({
          // 开启插件缓存
          cache: true,
          // 使用多线程并行构建，提升编译速度（默认进程数是 cpu - 1,可以设置为数字以指定进程数
          parallel: true,
          // 如果生产环境也开启 sourceMap，这里需要设置为 true
          sourceMap: false,
          terserOptions: {
            compress: {
              warnings: false,
              // drop_console: true,
              drop_debugger: true,
            },
          },
        }),

        // 压缩 css
        new OptimizeCssAssetsPlugin(),
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      // 替换 momentjs
      new AntdDayjsWebpackPlugin(),
      // 抽取 css
      new MiniCssExtractPlugin({
        filename: CSS_PATH + '[name].[contenthash:8].css',
        chunkFilename: CSS_PATH + '[name].[contenthash:8].css',
      }),

      // 自定义编译出错后的处理, 构建完毕会触发 done
      function () {
        this.hooks.done.tap('done', (stats) => {
          if (stats.compilation.errors && stats.compilation.errors.length) {
            // 可以将error发往指定地点
            console.log(stats.compilation.errors);

            process.exit(1);
          }
        });
      },
    ],
  };

  let hbConfig = merge(baseConfig, prodConfig);

  // 开启编译资源分析模式
  if (analysisBuildAssets) {
    hbConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerHost: '127.0.0.1',
        analyzerPort: 9999,
        openAnalyzer: true,
      })
    );

    return speedMeasure.wrap(hbConfig);
  }
  // 不开启编译资源分析模式 ----> 添加 dll 文件构建优化
  if (bundleDllReact) {
    // HtmlWebpackTagsPlugin 必须在html-webpack-plugin之后
    // 上面两个编译分析插件都与 HtmlWebpackTagsPlugin 存在冲突,不能同时使用
    hbConfig.plugins = hbConfig.plugins.concat([
      // 使用DLL
      new Webpack.DllReferencePlugin({
        manifest: TRIPARITE_PATH + `/${bundleDllFolder}/${bundleDllLibName}.json`,
      }),
      new HtmlWebpackTagsPlugin({
        // 添加 append 会将此文件标签放到最后，设置为false往前放
        append: false,
        tags: [
          {
            path: TRIPARITE_PATH_NAME + `/${bundleDllFolder}/${bundleDllLibName}.dll.js`,
            // 开启hash解决缓存问题
            hash: true,
          },
        ],
      }),
    ]);
  }

  return hbConfig;
};
