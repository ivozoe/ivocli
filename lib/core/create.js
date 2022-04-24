const program = require('commander')
const { createProjectAction, addCpnAction } = require('./actions')

const createCommands = () => {
    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        .action(createProjectAction)

    program
        .command('addcpn <name>')
        .description('add vue component, 例如: ivo addcpn HelloWorld -d src/components')
        .action((name) => {
            addCpnAction(name, program.dest || "src/components")
        })
}

module.exports = createCommands;