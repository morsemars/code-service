const { VMScript, NodeVM } = require('vm2');

function execute(code) {

    const result = {
        logs: []
    }

    const vm = new NodeVM({
        console: 'redirect',
        sandbox: { result }
    });

    vm.on('console.log', (value) => {
        result["logs"].push(value)
    });

    try {
        const script = new VMScript(`
            result["returnValue"] = (function(){${code}})()
        `)

        vm.run(script)
        result["success"] = true
    } catch (err) {
        result["returnValue"] = err.toString()
        result["success"] = false
    } finally {
        return result
    }
}

module.exports = execute
