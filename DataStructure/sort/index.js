// 封装ArrayList
function ArrayList () {
  this.array = []
  ArrayList.prototype.insert = function (item) {
    this.array.push(item)
  }
  ArrayList.prototype.toString = function () {
    return this.array.join()
  }

  // 冒泡排序
  // 比较次数(N-1) + (N-2)+...+2+1 = N * (N-1) / 2
  // 平均两次比较交换一次，交换次数为N^2/4
  // 时间复杂度O(N^2)
  ArrayList.prototype.bubbleSort = function () {
    let length = this.array.length // 数组的长度

    for (let i = length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1) // 如果前一个元素大于后一个，则交换两个元素
        }
      }
    }
  }

  // 选择排序
  // 比较的次数与冒泡一致，但交换的次数为N-1，效率比冒泡高
  ArrayList.prototype.selectionSort = function () {
    let length = this.array.length

    for (let i = 0; i < length - 1; i++) {
      let min = i // 依次假设每次外层循环的第一个元素为最小值
      for (let j = min + 1; j < length; j++) {
        if (this.array[min] > this.array[j]) {
          min = j // 在后面的元素中寻找最小值并更新min的值
        }
      }
      this.swap(min, i) // 交换初始假设的最小值与实际找到的最小值
    }
  }

  // 交换数组中两个值的位置
  ArrayList.prototype.swap = function (m, n) {
    let temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // 插入排序
  // 比较次数最多为1+2+...+(N-1) = N*(N-1)/2
  // 每趟排序平均只需比较一半，所以比较次数为N*(N-1)/4，所以效率比选择排序高
  // 对于大部分已经有序的数组，效率高很多，因为while循环条件一直为假
  ArrayList.prototype.insertionSort = function () {
    let length = this.array.length

    // 默认0认为是有序的，所以下标从1开始
    for (let i = 1; i < length; i++) {
      let j = i
      let temp = this.array[i]
      // 从已排序的局部数组从后往前遍历，大于temp就后移一位，知道找到已排序元素小于等于新元素的位置
      // 插入新元素既可
      while (j > 0 && this.array[j - 1] > temp) {
        this.array[j] = this.array[j - 1]
        j--
      }
      // 将新元素插入找到的位置
      this.array[j] = temp
    }
  }
}

let list = new ArrayList()

list.insert(3)
list.insert(6)
list.insert(4)
list.insert(2)
list.insert(11)
list.insert(10)
list.insert(5)

console.log(list)
list.insertionSort()
console.log(list)
