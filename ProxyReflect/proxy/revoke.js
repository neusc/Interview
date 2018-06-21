var revocable = Proxy.revocable({}, {
  get: function (target, name) {
    return '[[' + name + ']]'
  }
})

var proxy = revocable.proxy
console.log(proxy.foo) //"[[foo]]"

revocable.revoke()  // 撤销代理

console.log(proxy.foo) // TypeError is thrown
proxy.foo = 1           // TypeError

delete proxy.foo // TypeError
typeof proxy    // "object"

