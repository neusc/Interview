/**
 * Promise可以串行执行多个异步任务，不需要层层嵌套代码
 * @param
 * @returns
 */

// 0.5秒后返回input*input的计算结果:
function multiply (input) {
  return new Promise(function (resolve, reject) {
    console.log('calculating ' + input + ' x ' + input + '...')
    // setTimeout第三个及之后的参数可以作为回调函数的参数
    setTimeout(resolve, 500, input * input)
  })
}

// 0.5秒后返回input+input的计算结果:
function add (input) {
  return new Promise(function (resolve, reject) {
    console.log('calculating ' + input + ' + ' + input + '...')
    setTimeout(resolve, 500, input + input)
  })
}

let p2 = new Promise(function (resolve, reject) {
  console.log('start new Promise...')
  resolve(123)
})

p2.then(multiply)
  .then(add)
  .then(multiply)
  .then(add)
  .then(function (result) {
    console.log('Got value: ' + result)
  })

