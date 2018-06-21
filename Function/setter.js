// 在对象初始化时定义setter
var language = {
  set current (name) {
    this.log.push(name)
  },
  log: []
}

language.current = 'EN'
console.log(language.log) // ['EN']

language.current = 'FA'
console.log(language.log) // ['EN', 'FA']

// 使用defineProperty为当前对象定义setter
var o = { a: 0 }

Object.defineProperty(o, 'b', { set: function (x) { this.a = x / 2 } })

o.b = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.a) // 5

// 使用计算属性名
var expr = 'foo'

var obj = {
  baz: 'bar',
  set [expr] (v) { this.baz = v }
}

console.log(obj.baz) // "bar"
obj.foo = 'baz'      // run the setter
console.log(obj.baz) // "baz"
