// fs 用法 https://github.com/sboudrias/mem-fs-editor

var Generator = require('yeoman-generator');

var path = require('path');
var packageJson = require('./pkgJson')
var configArray = require('./config-files.js');

module.exports = class extends Generator {
  // 构造函数
  constructor(args, opts) {
    // 调用继承自父类的构造器
    super(args, opts);
    this.log('欢迎使用脚手架: dwrt-cli');
    // 添加此配置，调用 yo dwrt-cli 时必须传入一个目录名如 yo dwrt-cli demo
    this.argument("projectName", { type: String, required: true, desc: "请输入你的项目名称" });
    this.option("folder", { type: Boolean, required: false, desc: "开启此配置会以项目名称生成一个目录" });
  }
  initializing() {
    this.log('初始化ing...');
    // 重新设置模板文件路径
    this.sourceRoot(path.resolve(__dirname, "../../template"));
    // 重新设置目标生成路径 this.contextRoot 可以获取命令行执行的位置
    let destination = this.contextRoot;
    if (this.options.folder) {
      destination += '/' + this.options.projectName;
    }
    this.destinationRoot(destination);
  }
  // 用户交互
  async prompting() {
    this.log('请配合提示输入以下信息：');
    // this.prompt 调用提示模块
    this.answers = await this.prompt([
      {// 项目名称
        type: "input",
        name: "name",
        message: "项目名称：",
        default: this.options.projectName, // 设置默认值为文件目录名
      },
      {// 初始化版本
        type: "input",
        name: "version",
        message: "初始化版本：",
        default: "0.1.0",
      },
      {// 模板标题
        type: "input",
        name: "title",
        message: "html 模板的 title",
        default: this.options.projectName,
      }
    ]);
  }
  // 写入文件系统
  writing() {
    // 拷贝html
    this.fs.copy(
      this.templatePath('./htmls/simple-index.html'),
      this.destinationPath('temlate/simple-index.html')
    );
    this.fs.copy(
      this.templatePath('./htmls/_common'),
      this.destinationPath('temlate/_common')
    );

    // 拷贝项目编译配置
    this.fs.copy(
      this.templatePath('./build-config'),
      this.destinationPath('build-config')
    );

    // 拷贝三方资源库
    this.fs.copy(
      this.templatePath('./lib'),
      this.destinationPath('lib')
    );

    // 拷贝 vscode 配置
    this.fs.copy(
      this.templatePath('./_vscode'),
      this.destinationPath('.vscode')
    );

    // 拷贝 核心演示代码
    this.fs.copy(
      this.templatePath('./src'),
      this.destinationPath('src')
    );
  }
  configuring() {
    this.log('生成配置文件...');
    // package.json 配置
    const pkgJson = Object.assign(
      {},
      packageJson,
      {
        "name": this.answers.name,
        "version": this.answers.version,
      }
    );
    // 在目标路径下，如果没有 package.json 则创建一个，反之修改它
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    // 生成其他配置文件
    configArray.forEach(item => {
      this.fs.copy(
        this.templatePath('./config-files/' + item[0]),
        this.destinationPath(item[1])
      );
    })
  }
  // 安装依赖
  install() {
    // 加载其他默认的插件
    this.npmInstall();
  }
  conflicts() {
    // this.log('有冲突的话这里解决一下...');
  }
  end() {
    this.log('脚手架生成完毕，你可以执行 npm start 查看演示效果，祝您使用愉快！');
  }
};