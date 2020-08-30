/**
 * eslint 配置
 */
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  // 指定解析器为 ts 解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  // 全局变量
  globals: {
    SITE_INFO: 'readonly',
    API_VERSION: 'readonly',
    PUBLIC_PATH: 'readonly',
    __DEVELOPMENT__: 'readonly',
  },
  // 自定义eslint规则 0-off 1-warn 2-error
  rules: {
    eqeqeq: [2, 'always'],
    'no-eq-null': 2,
    'no-debugger': 1,
    'no-console': 1,
    'comma-dangle': [2, 'only-multiline'],
    'prettier/prettier': 2,
  },
};
