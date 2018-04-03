/**
 *
 * Created by chuans
 * Date: 2018/3/5
 */
let q = (function () {
  let counter = 0
  return {
    add: function () {
      return ++counter
    },
    decrease: function () {
      return --counter
    },
    get: function () {
      return counter
    }
  }
})()

console.log(q.add())
console.log(q.decrease())
console.log(q.get())

class Counter {
  constructor (counter = 0) {
    this.counter = counter
  }

  add () {
    return ++this.counter
  }

  decrease () {
    return --this.counter
  }

  set (counter) {
    this.counter = counter
  }

  get () {
    return this.counter
  }
}

let p = new Counter(5)
console.log(p.add())
console.log(p.decrease())
console.log(p.get())
console.log(p.set(10))
console.log(p.get())
