const path = require('path')
const fs = require('fs')
const ejs = require('ejs');

//对ejs文件做一个编译
const compile = (templateName, data) => {
    //取出vue-component.ejs文件
    const templatePosition = `../templates/${templateName}`;
    const templatePath = path.resolve(__dirname, templatePosition)
    return new Promise((resolve, rejects) => {
        //利用ejs的renderFile进行编译
        ejs.renderFile(templatePath, { data }, {}, (err, result) => {
            if (err) {
                console.log(err);
                rejects()
                return
            }
            resolve(result)
        })
    })
}

//编译结束后写入文件
const writeToFile = (path, content) => {
    return fs.promises.writeFile(path, content)
}

module.exports = {
    compile,
    writeToFile
}