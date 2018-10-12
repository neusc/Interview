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
    return this.successor && this.successor.fn.apply(this.successor, arguments)
  }
}

function order500 (orderType, isPay, count) {
  if (orderType === 1 && isPay) {
    console.log('亲爱的用户，您中奖了100元红包')
  } else {
    // 不知道下一个节点，将请求传递下去
    return 'nextSuccessor'
  }
}

function order200 (orderType, isPay, count) {
  if (orderType === 2 && isPay) {
    console.log('亲爱的用户，您中奖了20元红包')
  } else {
    return 'nextSuccessor'
  }
}

function orderNormal (orderType, isPay, count) {
  if (count > 0) {
    console.log('亲爱的用户，您已抽中10元优惠券')
  } else {
    console.log('亲爱的用户，请再接再厉哦~')
  }
}

let chainOrder500 = new Chain(order500)
let chainOrder200 = new Chain(order200)
let chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 0)

