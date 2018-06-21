/**
 *
 * Created by chuans
 * Date: 2018/3/5
 */

// privateCounter和changeBy是私有函数和变量
// 这两项都无法在这个匿名函数外部直接访问，必须通过匿名函数返回的三个公共函数访问。
let makeCounter = function () {
  let privateCounter = 0

  function changeBy (val) {
    privateCounter += val
  }

  return {
    increment: function () {
      changeBy(1)
    },
    decrement: function () {
      changeBy(-1)
    },
    value: function () {
      return privateCounter
    }
  }
}

let Counter1 = makeCounter()
let Counter2 = makeCounter()  // 每个闭包的词法环境都是相互独立的
console.log(Counter1.value()) // logs 0
Counter1.increment()
Counter1.increment()
console.log(Counter1.value()) // logs 2
Counter1.decrement()
console.log(Counter1.value()) // logs 1
console.log(Counter2.value()) // logs 0
