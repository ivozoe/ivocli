
const program = require('commander')
const helpOtions = () => {
    //修改--help：增加自己的options
    program.option('-i --ivo', 'a ivo cli')
    program.option('-d --dest <dest>', 'a destination folder, 例如：-d /src/components')
    //拉取什么模板
    program.option('-f --framework <framework>', 'your framework')

    //监听某个指令，可以调用某个函数
    program.on('--help', function () {
        console.log('');
        console.log('Other:');
        console.log('   other options~');
    })

}

module.exports = helpOtions;