const { VM } = require('vm2');

function execute(code){

    let result = {}

    try{
        result["message"] = new VM().run(code)
        result["success"] = true
    }catch(err){
        result["message"] = err.toString()
        result["success"] = false
    }finally{
        return result
    }
}

module.exports = execute