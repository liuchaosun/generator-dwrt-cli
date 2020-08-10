/**
 * eslint 配置， react + ts + prettier
 */
module.exports = {
  // 执行环境
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  // 指定解析器为 ts 解析器
  parser: '@typescript-eslint/parser',
  // 解析器配置
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  // 插件--接入插件后即可在 rule 中定义插件内的规则
  plugins: ['react', '@typescript-eslint', 'prettier'],
  // 配置继承 -- plugins 中接入了某个插件后，可以在 extends 中开启配置
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  // 插件设置
  settings: {
    react: {
      version: 'detect',
    },
  },
  // 全局变量
  globals: {
    API_VERSION: 'readonly',
    SITE_DESC: 'readonly',
    PAGE_SOURCE: 'readonly',
  },
  // 自定义 eslint 规则 0-off 1-warn 2-error
  rules: {
    semi: [2, 'always'],
    quotes: [2, 'single'],
    eqeqeq: [2, 'always'],
    'no-eq-null': 2,
    'no-debugger': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'prettier/prettier': 'error',
  },
};
