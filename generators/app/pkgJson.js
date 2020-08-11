
/**
 * 脚手架 package.json 配置
 */
module.exports = {
  "name": "",
  "version": "",
  "description": "",
  "private": true,
  "scripts": {
    "cz": "npx git-cz",
    "lint": "eslint --fix ./src --ext .ts,.tsx,.js,.jsx",
    "dev": "node ./build-config/journeydiy/dev.js",
    "dll": "webpack --config ./build-config/webpack.config.dll.js",
    "build": "npm run dll && node ./build-config/journeydiy/prod.js",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
  },
  "keywords": [
    "React",
    "webpack",
    "TypeScript"
  ],
  "author": "",
  "devDependencies": {

  },
  "dependencies": {

  },
  "browserslist": [
    "> 1%",
    "last 3 version",
    "ie 11"
  ],
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}; 