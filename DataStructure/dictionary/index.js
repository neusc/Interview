function Dictionary () {
  this.items = {}

  // 向字典中添加键值对
  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value
  }

  // 判断字典中是否有某个Key
  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key)
  }

  // 从字典中移除某个Key
  Dictionary.prototype.remove = function (key) {
    if (!this.has(key)) return false
    delete this.items[key]
    return true
  }

  // 根据Key获取value
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined
  }

  // 获取所有的key
  // 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
  // 数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致，所以顺序并不固定
  // 两者的主要区别是：for-in 循环还会枚举其原型链上的属性
  Dictionary.prototype.keys = function () {
    return Object.keys(this.items)
  }

  // 获取所有的value
  Dictionary.prototype.values = function () {
    return Object.values(this.items)
  }

  // 获取字典中总共有多少个键值对
  Dictionary.prototype.size = function () {
    return this.keys().length
  }

  // 清空字典
  Dictionary.prototype.clear = function () {
    this.items = {}
  }
}

let dict = new Dictionary()

dict.set('name', 'stephen')
dict.set('age', 25)
dict.set('height', 1.88)
dict.set('address', '北京市')

console.log(dict.get('name'))
console.log(dict.keys())
console.log(dict.values())
console.log(dict.size())
console.log(dict.remove('height'))
console.log(dict.keys())
