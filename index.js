#!/usr/bin/env node
const program = require('commander')

const helpOtions = require('./lib/core/help')
const createCommands = require('./lib/core/create')
//硬编码
// program.version('1.0.0');

//查看版本号：不指定后面的写法
program.version(require('./package.json').version);

//指定后面的写法
// program.version(require('./package.json').version, '-v --version');

//帮助和可选信息
helpOtions()

//创建其他指令
createCommands()

program.parse(process.argv)