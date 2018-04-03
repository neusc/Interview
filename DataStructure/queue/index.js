//自定义队列实现
function Queue () {
  let items = []

  //队列操作

  //进入队列
  this.enqueue = function (el) {
    items.push(el)
  }
  //移出队列
  this.dequeue = function () {
    return items.shift()
  }
  //查看前端元素
  this.front = function () {
    return items[0]
  }

  //查看队列是否为空
  this.isEmpty = function () {
    return items.length === 0
  }

  // 查看队列中元素个数
  this.size = function () {
    return items.length
  }
}

// 击鼓传花函数实现
function passGame (nameList, num) {
  let queue = new Queue()
  //所有成员进入队列
  nameList.forEach(name => {
    queue.enqueue(name)
  })

  //寻找最后剩下的人
  while (queue.size() > 1) {
    //将前num-1个人依次从队列前端出队并从后端再次进入队列
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    //移除第num个人
    queue.dequeue()
  }

  //获取最后剩下的人
  let endName = queue.dequeue()
  console.log('最后剩下的人是：' + endName)

  //获取该人在队列中的位置
  return nameList.indexOf(endName)
}

//验证结果
let names = ['She', 'Chuan', 'Fleta', 'Godfrey', 'Curry']
let index = passGame(names, 7)
console.log('该人在队列中的位置是：' + index)

