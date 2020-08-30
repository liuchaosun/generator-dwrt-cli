
/**
 * 脚手架 package.json 配置
 */
module.exports = {
  "name": "",
  "version": "",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cz": "git cz",
    "eslint": "eslint --fix ./src --ext .ts,.tsx,.js",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
    "dll": "webpack --config ./build-config/webpack.dll.config.js",
    "start": "npm run dev:com",
    "build": "npm run build:com",
    "dev:com": "node ./build-config/common/dev.js",
    "build:com": "node ./build-config/common/prod.js"
  },
  "keywords": [
    "docker",
    "webpack",
    "react",
    "typescript",
    "babel",
    "eslint",
    "less"
  ],
  "author": "",
  "devDependencies": {
    "@babel/cli": "^7.10.5",
    "@babel/core": "^7.11.4",
    "@babel/plugin-proposal-class-properties": "^7.10.4",
    "@babel/plugin-proposal-decorators": "^7.10.5",
    "@babel/plugin-syntax-dynamic-import": "^7.8.3",
    "@babel/preset-env": "^7.11.0",
    "@babel/preset-react": "^7.10.4",
    "@babel/preset-typescript": "^7.10.4",
    "@commitlint/cli": "^9.0.1",
    "@commitlint/config-conventional": "^9.0.1",
    "@types/react": "^16.9.47",
    "@types/react-dom": "^16.9.8",
    "@types/react-redux": "^7.1.9",
    "@types/react-router-dom": "^5.1.5",
    "@types/redux-logger": "^3.0.8",
    "@typescript-eslint/eslint-plugin": "^3.9.1",
    "@typescript-eslint/parser": "^3.9.1",
    "antd-dayjs-webpack-plugin": "^1.0.1",
    "autoprefixer": "^9.8.6",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "babel-plugin-import": "^1.13.0",
    "clean-webpack-plugin": "^3.0.0",
    "commitizen": "^4.1.2",
    "commitlint": "^9.0.1",
    "conventional-changelog-cli": "^2.0.34",
    "copy-webpack-plugin": "^6.0.3",
    "css-loader": "^4.2.1",
    "cssnano": "^4.1.10",
    "cz-conventional-changelog": "^3.2.0",
    "eslint": "^7.7.0",
    "eslint-config-prettier": "^6.11.0",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.20.6",
    "express": "^4.17.1",
    "file-loader": "^6.0.0",
    "friendly-errors-webpack-plugin": "^1.7.0",
    "hard-source-webpack-plugin": "^0.13.1",
    "html-webpack-plugin": "^4.3.0",
    "html-webpack-tags-plugin": "^2.0.17",
    "http-proxy-middleware": "^1.0.5",
    "husky": "^4.2.5",
    "less": "^3.12.2",
    "less-loader": "^6.2.0",
    "mini-css-extract-plugin": "^0.10.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "postcss": "^7.0.32",
    "postcss-import": "^12.0.1",
    "postcss-loader": "^3.0.0",
    "prettier": "^2.0.5",
    "raw-loader": "^4.0.1",
    "regenerator-runtime": "^0.13.7",
    "speed-measure-webpack-plugin": "^1.3.3",
    "style-loader": "^1.2.1",
    "terser-webpack-plugin": "^4.1.0",
    "thread-loader": "^2.1.3",
    "typescript": "^3.9.7",
    "url-loader": "^4.1.0",
    "webpack": "^4.43.0",
    "webpack-bundle-analyzer": "^3.8.0",
    "webpack-cli": "^3.3.12",
    "webpack-dev-middleware": "^3.7.2",
    "webpack-hot-middleware": "^2.25.0",
    "webpack-merge": "^5.1.1"
  },
  "dependencies": {
    "antd": "^4.6.1",
    "core-js": "^3.6.5",
    "lodash": "^4.17.20",
    "moment": "^2.27.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.1",
    "react-router": "^5.2.0",
    "react-router-dom": "^5.2.0",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "browserslist": [
    "> 0.5%",
    "last 3 version",
    "ie 11"
  ]
}; 