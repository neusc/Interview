// 自定义集合构造函数
function Set () {
  // 用于保存集合的元素
  this.items = {}

  // 判断集合自身是否存在某个元素(过滤继承的属性)
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }

  // 向集合添加元素
  Set.prototype.add = function (value) {
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }
  // 从集合中移除元素
  Set.prototype.remove = function (value) {
    if (!this.has(value)) return false
    delete this.items[value]
    return true
  }

  // 清空集合中的所有元素
  Set.prototype.clear = function (value) {
    this.items = {}
  }

  // 获取集合的大小
  Set.prototype.size = function () {
    return Object.keys(this.items).length

    /* 考虑兼容性问题
    let count = 0
    for (let value in this.items) {
      if (this.items.hasOwnProperty(value)) {
        count++
      }
    }
    return count
    */
  }

  Set.prototype.values = function () {
    return Object.keys(this.items)

    /* 考虑兼容性问题
    let keys = []
    for (let value in this.items) {
      if (this.items.hasOwnProperty(value)) {
        keys.push(value)
      }
    }
    return keys
    */
  }
}
