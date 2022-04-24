//执行终端命令文件
//开启另外一个进程
const { spawn } = require('child_process')

//command, args, options
const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args)
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        childProcess.on("close", () => {
            resolve()
        })
    })
}



module.exports = {
    commandSpawn
}