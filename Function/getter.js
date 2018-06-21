// 在新对象初始化时定义一个getter
var obj = {
  log: ['a', 'b', 'c'],
  get latest () {  // get语法将对象属性绑定到查询该属性时将被调用的函数。
    if (this.log.length == 0) {
      return undefined
    }
    return this.log[this.log.length - 1]
  }
}

console.log(obj.latest) // expected output: "c"

// 使用defineProperty在现有对象上定义getter
var o = { a: 0 }
Object.defineProperty(o, 'b', {
  get: function () {
    return this.a + 1
  }
})

console.log(o.b) // '1'

// 使用计算属性名
var expr = 'foo'
var obj = {
  get [expr] () {
    return 'bar'
  }
}
console.log(obj.foo) // 'bar'
