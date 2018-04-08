// 哈希表自定义实现
function HashTable () {
  this.storage = [] // 用于存放相关元素
  this.count = 0 // 当前已经存在了多少数据
  this.limit = 8 // 总共可以存放多少数据

  // 哈希函数的实现
  HashTable.prototype.hashFunc = function () {
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
}
