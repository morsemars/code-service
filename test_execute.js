const execute = require('./modules/execute')

const tests = [
    execute(`function shout(){
        return "HEEY!"
    }
    return shout()`),
    execute(`for (let i = 1; i <= 10; i++) {
        console.log(i)
    }`),
    execute(`1++`),
    execute(`console.log("HELLO WORLD!")`),
    execute(`return 1 + 1`),
    execute('this.constructor.constructor("return process")().exit()')
]

const test_results = [
    { logs: [], returnValue: 'HEEY!', success: true },
    {
      logs: [
        1, 2, 3, 4,  5,
        6, 7, 8, 9, 10
      ],
      returnValue: undefined,
      success: true
    },
    {
      logs: [],
      returnValue: 'SyntaxError: Invalid left-hand side expression in postfix operation',
      success: false
    },
    { logs: [ 'HELLO WORLD!' ], returnValue: undefined, success: true },
    { logs: [], returnValue: 2, success: true },
    {
      logs: [],
      returnValue: 'TypeError: this.constructor.constructor(...)(...).exit is not a function',
      success: false
    }
  ]

tests.forEach((test, index) => {
    console.log(test.returnValue == test_results[index].returnValue && test.logs.join() == test_results[index].logs.join())
})