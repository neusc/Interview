// 自定义双向链表
function DoublyLinkedList () {

  // 创建节点构造函数
  function Node (element) {
    this.element = element
    this.next = null // 指向下一个节点的引用
    this.prev = null // 指向前一个节点的引用
  }

  // 定义相关属性
  this.length = 0
  this.head = null  // 头部节点
  this.tail = null // 尾部节点

  // 向双向链表尾部添加新节点
  DoublyLinkedList.prototype.append = function (element) {
    let newNode = new Node(element)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  // 生成正向遍历字符串
  DoublyLinkedList.prototype.forwardString = function () {
    let current = this.head
    let forwardStr = ''

    while (current) {
      forwardStr += ',' + current.element
      current = current.next
    }
    return forwardStr.slice(1)
  }

  // 生成反响遍历字符串
  DoublyLinkedList.prototype.reverseString = function () {
    let current = this.tail
    let reverseStr = ''

    while (current) {
      reverseStr += ',' + current.element
      current = current.prev
    }

    return reverseStr.slice(1)
  }

  // 实现toString方法
  DoublyLinkedList.prototype.toString = function () {
    return this.forwardString()
  }

  // 在任意位置插入元素
  DoublyLinkedList.prototype.insert = function (position, element) {
    // 越界插入失败
    if (position < 0 || position > this.length) return false

    let newNode = new Node(element)

    // 在头部插入节点
    if (position === 0) {
      // 判断链表是否为空
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    } else if (position === this.length) {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    } else { // 在中间位置插入
      let index = 0
      let current = this.head
      let previous = null

      while (index++ < position) {
        previous = current
        current = current.next
      }
      // 改变插入位置前后节点与插入节点的指向顺序
      newNode.next = current
      newNode.prev = previous
      previous.next = newNode
      current.prev = newNode
    }
    // 链表长度加1
    this.length++

    return true
  }
}

let list = new DoublyLinkedList()
list.append('abc')
list.append('cba')
list.append('nba')
list.append('mba')
list.insert(2, '100')
console.log(list)

