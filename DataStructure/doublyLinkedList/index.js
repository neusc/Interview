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

  // 生成反向遍历字符串
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

  // 移除固定位置的节点
  DoublyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null

    let current = this.head
    // 在头部移除
    if (position === 0) {
      if (this.length === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head = current.next
        this.head.prev = null
      }
    } else if (position === this.length - 1) { // 尾部移除
      current = this.tail
      this.tail = current.prev
      this.tail.next = null
    } else {
      let index = 0
      let previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      current.next.prev = previous
    }
    // 链表长度减1并返回移除的元素
    this.length--
    return current.element
  }

  // 根据元素值获取在链表中的位置
  DoublyLinkedList.prototype.indexOf = function (element) {
    let current = this.head
    let index = 0
    // 循环遍历查找元素位置
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    // 没有找到返回-1表示元素不存在
    return -1
  }

  // 根据元素值删除节点
  DoublyLinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 判断链表是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }
  // 获取链表的长度
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }

  // 获取链表的头部节点
  DoublyLinkedList.prototype.getHead = function () {
    return this.head
  }
  // 获取链表的尾部节点
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail
  }
}

let list = new DoublyLinkedList()
list.append('abc')
list.append('cba')
list.append('nba')
list.append('mba')
list.insert(2, '100')
console.log(list.removeAt(3))
console.log(list.indexOf('cba'))
console.log(list)

