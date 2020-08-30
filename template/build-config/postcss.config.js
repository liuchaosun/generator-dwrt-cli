// postcss 提供预处理css功能，需要依赖插件配置，也可以添加自定义的插件
// postcss-loader 只是一个连通 webpack 和各插件之间的管道
// 需要提供浏览器 browserlist 配置，基于配置进行浏览器前缀补足
module.exports = {
  plugins: {
    autoprefixer: {}, // 前缀补全,自动添加浏览器厂商前缀
    // !!!禁止使用这个插件，使用后会导致webpack的alias在background:url()获取图片时找不到正确路径
    // precss: {},
    cssnano: {}, // 优化css
  },
};
/**
 * 已完成
 */
