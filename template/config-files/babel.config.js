/**
 * babel 编译配置，根据一些预先设好的解析规则对特定语法代码进行解析
 * 
 * 解析器预设规则
 */
const presets = [
  [// es6 转 es5 官方预设，https://babeljs.io/docs/en/babel-preset-env
    '@babel/preset-env',
    {
      // 动态引入 polyfill，babel7.4 后使用此方式不需要再在每个模块中手动引入 polyfill, https://babeljs.io/docs/en/babel-polyfill
      useBuiltIns: 'usage',
      corejs: { version: 3, proposals: false },
    },
  ],

  [// react 预设规则, https://babeljs.io/docs/en/babel-preset-react
    '@babel/preset-react',
    {
      // 开启development 会默认加入一些利于开发调试的插件
      development: process.env.NODE_ENV === 'development',
    },
  ],
  // ts 预设规则,使用 babel-loader 读取 ts 资源需要此配置
  '@babel/preset-typescript',
];

/**
 * 解析器插件
 */
const plugins = [
  [// 提供一些辅助函数，用于帮助 es6 编译为 es5 保证正常使用，https://zhuanlan.zhihu.com/p/58624930
    '@babel/plugin-transform-runtime',
    {
      corejs: false,
      helpers: true,
      regenerator: true,
      useESModules: false,
    },
  ],

  // 动态加载--防止错误处理import语法
  '@babel/plugin-syntax-dynamic-import',
  // class 类属性： 宽松模式
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],

  [// 按需加载 plugin-import，三方库 tree-shakeing
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,// 自动引入组件的样式
    },
    'antd',
  ],
  [
    'import',
    {
      libraryName: 'lodash',
      camel2DashComponentName: false,
    },
    'lodash',
  ],
];

module.exports = {
  presets,
  plugins,
};
