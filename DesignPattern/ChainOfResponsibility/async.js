class Chain {
  constructor (fn) {
    this.fn = fn
    this.successor = null
  }

  setNextSuccessor (successor) {
    return this.successor = successor
  }

  // 传递请求
  passRequest () {
    let ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
    return ret
  }

  // 对于异步操作需要手动传递请求
  next () {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
}

function Fn1 () {
  console.log(1)
  return 'nextSuccessor'
}

function Fn2 () {
  console.log(2)
  setTimeout(() => {
    this.next()
  }, 1000)
}

function Fn3 () {
  console.log(3)
}

// 将函数封装成职责链节点
let chainFn1 = new Chain(Fn1)
let chainFn2 = new Chain(Fn2)
let chainFn3 = new Chain(Fn3)

// 指定节点在职责链顺序
chainFn1.setNextSuccessor(chainFn2)
chainFn2.setNextSuccessor(chainFn3)

chainFn1.passRequest()
