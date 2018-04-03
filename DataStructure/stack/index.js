//自定义栈

function Stack () {
  let items = []

  //栈相关方法

  //压栈
  this.push = function (el) {
    items.push(el)
  }

  //出栈
  this.pop = function () {
    return items.pop()
  }

  //peek
  this.peek = function () {
    return items[items.length - 1]
  }

  //判断栈中元素是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  //获取栈中元素个数
  this.size = function () {
    return items.length
  }
}

//栈的使用
//封装十进制转二进制的函数
function dec2bin (decNumber) {
  let stack = new Stack()
  let reminder

  while (decNumber > 0) {
    reminder = decNumber % 2
    decNumber = Math.floor(decNumber / 2)
    // 每次模2余数进栈
    stack.push(reminder)
  }

  //将栈中元素按序出栈
  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}

//测试
console.log(dec2bin(10))
console.log(dec2bin(46))
