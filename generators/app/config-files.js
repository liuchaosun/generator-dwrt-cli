/**
 * 固定的配置文件
 * 由于在 linux 下以.开头的文件存在问题，因此本模块使用下划线_
 */
module.exports = [
  // 创建 .ediotrconfig 配置文件
  ["_editorconfig", ".editorconfig"],
  // 创建 eslint 相关
  ["_eslintrc.js", ".eslintrc.js"],
  ["_eslintignore", ".eslintignore"],
  // 创建 git 相关
  ["_gitignore", ".gitignore"],
  ["_gitattributes", ".gitattributes"],
  // npm相关
  ["_npmrc", ".npmrc"],
  // travis
  ["_travis.yml", ".travis.yml"],
  // babel
  ["babel.config.js", "babel.config.js"],
  // commitlint 配置文件
  ["commitlint.config.js", "commitlint.config.js"],
  // 项目自定义配置
  ["define-config.js", "define-config.js"],
  // postcss-loader 配置
  ["postcss.config.js", "postcss.config.js"],
  // prettier 插件配置
  ["prettier.config.js", "prettier.config.js"],
  // TypeScript配置
  ["tsconfig.json", "tsconfig.json"],
];
