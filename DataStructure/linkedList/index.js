// 自定义封装链表类
function LinkedList () {
  // 自定义封装Node类，用于保存节点信息
  function Node (element) {
    this.element = element
    this.next = null
  }

  this.length = 0 // 链表的长度
  this.head = null // 链表的第一个节点

  // 向链表尾部添加元素
  LinkedList.prototype.append = function (element) {
    let newNode = new Node(element)

    // 判断链表是否为空
    if (this.head === null) {
      this.head = newNode
    } else {
      let current = this.head
      // 找到当前链表的最后一个元素
      while (current.next) {
        current = current.next
      }
      // 向最后一项之后添加新节点
      current.next = newNode
    }
    this.length++
  }

  // 重写toString方法，只输出节点的element信息
  LinkedList.prototype.toString = function () {
    let listString = ''
    let current = this.head

    // 循环遍历链表所有元素，取出element拼接成字符串
    while (current) {
      listString += ',' + current.element
      current = current.next
    }
    return listString.slice(1)
  }

  // 向链表任意位置插入节点
  LinkedList.prototype.insert = function (position, element) {
    // 越界插入失败，返回null
    if (position < 0 || position >= this.length) return null

    let newNode = new Node(element)
    let current = this.head
    let previous = null
    index = 0

    // 判断插入位置是否在头部
    if (position === 0) {
      newNode.next = current
      this.head = newNode
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    this.length++
    return true
  }
  // 移除链表任意位置的节点
  // 注意链表中没有引用的元素会被自动回收
  LinkedList.prototype.removeAt = function (position) {
    // 越界移除失败，位置等于length也为越界，因为索引从0开始
    if (position < 0 || position >= this.length) return false

    let current = this.head
    let previous = null
    index = 0

    // 判断移除位置是否在头部
    if (position === 0) {
      this.head = current.next
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    // 长度减一
    this.length--
    // 返回移除的元素
    return current.element
  }

  // 查找元素在链表中的位置
  LinkedList.prototype.indexOf = function (element) {
    let current = this.head
    index = 0

    // 循环遍历找到节点位置
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    // 节点不存在则返回-1
    return -1
  }

  // 删除链表中的指定节点
  LinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 判断链表是否为空
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }

  // 计算链表的长度
  LinkedList.prototype.size = function () {
    return this.length
  }

  // 获取第一个节点
  LinkedList.prototype.getFirst = function () {
    return this.head.element
  }
}

let list = new LinkedList()
list.append(20)
list.append(10)
list.append(30)
list.insert(2, 15)
list.remove(10)
console.log(list)
