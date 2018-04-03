/**
 * Promise.all()的使用，所有promise都执行完之后同时返回结果
 * @type
 */
let p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'P3')
})
let p4 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, 'P4')
})
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p3, p4]).then(function (results) {
  console.log(results) // 获得一个Array: ['P3', 'P4']
})
