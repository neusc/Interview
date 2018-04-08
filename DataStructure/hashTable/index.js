// 哈希表自定义实现
function HashTable () {
  this.storage = [] // 用于存放相关元素， [[[k,v],[k,v],[k,v]],[[k,v],[k,v]],[[k,v]]]
  this.count = 0 // 当前已经存在了多少数据
  this.limit = 8 // 总共可以存放多少数据

  // 哈希函数的实现
  HashTable.prototype.hashFunc = function (str, max) {
    let hashCode = 0

    // 霍纳算法计算hashCode的值
    // Pn(x)= anx^n+a(n－1)x^(n-1)+…+a1x+a0=((…(((anx+an－1)x+an－2)x+ an－3)…)x+a1)x+a0
    // 递推实现为Pi(x)= xPi－1(x)+an－i
    for (let i = 0; i < str.length; i++) {
      // charCodeAt返回对应索引位置字符的Unicode编码，是一个0 - 65535之间的整数
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    hashCode = hashCode % max
    return hashCode
  }

  // 插入数据
  HashTable.prototype.put = function (key, value) {
    let index = this.hashFunc(key, this.limit)

    let bucket = this.storage[index]

    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }
    // 判断是插入新元素还是修改已有元素
    let override = false
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        override = true
        tuple[1] = value
      }
    }
    // 插入新元素
    if (!override) {
      bucket.push([key, value])
      this.count++
      // 数组扩容判断，如果装填因子大于2/3则扩容为原先容量的2倍
      if (this.count > this.limit * 0.75) {
        // 容量为质数便于哈希表的均衡分配
        let primeNum = this.getPrime(this.limit * 2)
        this.resize(primeNum)
      }
    }
  }
  // 根据Key获取数据
  HashTable.prototype.get = function (key) {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]

    if (bucket === undefined) return null
    // 判断bucket中是否有对应的Key
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) return tuple[1]
    }
    // 没有找到，返回null
    return null
  }

  // 根据Key删除数据
  HashTable.prototype.remove = function (key) {
    let index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]

    if (bucket === undefined) return null
    // 判断bucket中是否有对应的Key
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        // 如果删除数据后数据量小于容量的1/4，则缩减容量到原先的一半
        if (this.limit > 8 && this.count < this.limit * 0.25) {
          let primeNum = this.getPrime(Math.floor(this.limit / 2))
          this.resize(primeNum)
        }
      }
      return tuple[1]
    }
    // 没有找到对应的数据，返回null
    return null
  }

  // 哈希表是否为空
  HashTable.prototype.isEmpty = function () {
    return this.count === 0
  }

  // 哈希表中元素的个数
  HashTable.prototype.size = function () {
    return this.count
  }

  HashTable.prototype.resize = function (newLimit) {
    // 保存原先的数组
    let oldStorage = this.storage
    // 重置哈希表属性
    this.count = 0
    this.limit = newLimit
    this.storage = []

    oldStorage.forEach(function (bucket) {
      if (bucket === null) return
      // 对原先哈希表中的数据重新哈希生成新的数组
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    }.bind(this))
  }
  // 判断一个数是否为质数
  HashTable.prototype.isPrime = function (num) {
    let temp = parseInt(Math.sqrt(num))

    for (let i = 2; i < temp; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  // 获取提供数最近的质数
  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
}

// 测试哈希表
// 1.创建哈希表
let ht = new HashTable()

// 2.插入数据
ht.put('abc', '123')
ht.put('cba', '321')
ht.put('nba', '521')
ht.put('mba', '520')

// 3.获取数据
console.log(ht.get('abc'))
ht.put('abc', '111')
console.log(ht.get('abc'))

// 4.删除数据
console.log(ht.remove('abc'))
console.log(ht.get('abc'))
