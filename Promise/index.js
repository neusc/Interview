/**
 *
 * Created by chuans
 * Date: 2018/3/7
 */

// Promise只关心自身内部逻辑，并不关心resolve和reject具体如何处理结果
let p1 = new Promise(function (resolve, reject) {
  console.log('start new Promise...')
  let rand = Math.random() * 2
  setTimeout(function () {
    if (rand < 1) {
      console.log('call resolve()...')
      resolve('200 OK')
    } else {
      console.log('call reject()...')
      reject('timeout in ' + rand + 'seconds')
    }
  }, rand * 1000)
})

p1.then(r => {
  console.log('Done ' + r)
}).catch(error => {
  console.log('Failed ' + error)
})
