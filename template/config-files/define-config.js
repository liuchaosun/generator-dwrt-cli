/**
 * 可用的一些自定义配置参数
 * buildPathName: 'build'   编译后的文件目录名
 * templatePathName: 'template' 模板文件目录
 * appPathName: 'src' 程序主代码目录
 * outPublicPathName: 'public' 开发的不编译文件目录
 * triparitePathName: 'lib' 第三方库目录，如 echarts ，不编译
 *
 * siteDescription 一些关于本站点的描述信息
 *
 * speedMeassure 是否开启编译速度检测,开启后部分优化构建功能将失效,发布上线前的构建需要设置为 false,默认false
 * assetsMersure 是否开启编译资源体积大小检测,开启后编译不结束,因此在发布前需要设置为 false ,默认false
 *
 */

const time = new Date().toString();

module.exports = {
  buildPathName: 'build',
  siteDescription:
    '本站点基于 react + webpack 搭建，集成了 TypeScript 强化代码质量，添加 less 做 css 预编译，使用 postcss 做 CSS3 跨浏览器兼容.' +
    '代码格式方面使用 eslint 做格式的检查, 使用 prettier 做格式化, ui 框架使用蚂蚁金服前端组件 antd' +
    '当前部署版本的构建时间是: ++++' +
    time,
  // assetsMersure: false,
  // speedMeassure: false,
};
