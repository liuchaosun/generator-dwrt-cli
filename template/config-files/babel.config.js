// babel 编译配置，根据一些预先设好的解析规则对特定语法代码进行解析
// 解析器预设规则
const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: { version: 3 },
    },
  ],
  [
    '@babel/preset-react',
    {
      development: process.env.NODE_ENV === 'development',
    },
  ],
  '@babel/preset-typescript',
];

// 解析器插件
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  ['@babel/plugin-proposal-class-properties', { loose: true }],
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
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
