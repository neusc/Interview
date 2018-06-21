let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42
  }
}

let p = new Proxy({}, handler) // handler是一个包含陷阱的占位符对象
p.a = 1

console.log(p.a, p.b)
