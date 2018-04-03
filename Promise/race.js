/**
 * Promise.race()先执行完的Promise获取返回结果
 * @type
 */
let p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'P5')
})
let p6 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, 'P6')
})
Promise.race([p5, p6]).then(function (result) {
  console.log(result) // 'P5'
})
