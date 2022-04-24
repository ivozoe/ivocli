//将download这个函数包裹一个promise，避免形成回调地狱
const { promisify } = require('util')
const path = require('path')

const download = promisify(require('download-git-repo'))
const open = require('open')

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile } = require('../utils/utils')

//拉取模板
const createProjectAction = async (project) => {
    console.log('ivo helps you create your project~');
    //1. clone 项目:github
    await download(vueRepo, project, { clone: true })
    //2. 执行 npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    await commandSpawn(command, ['install'], { cwd: `./${project}` })
    //3. 运行 npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
    //4. 打开浏览器
    open('http://localhost:8080/')
}

//添加组件
const addCpnAction = async (name, dest) => {
    //1. 编译ejs模板，得到一个字符串:  /utils/util.js
    const result = await compile("vue-component.ejs", { name, lowerName: name.toLowerCase() })
    //2. 将字符串写入.vue文件中
    const targetPath = path.resolve(dest, `${name}.vue`)
    console.log(targetPath);
    writeToFile(targetPath, result)
    //4. 放到对应的文件夹中
}


module.exports = {
    createProjectAction,
    addCpnAction
}