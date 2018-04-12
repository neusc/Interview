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

  /**
   * 高级排序
   * 希尔排序和快速排序
   */

  // 希尔排序基于插入排序实现
  // 增量的不同会导致效率的不同
  // 大多数情况下效率高于简单排序，在合适的增量下也可能好于快速排序
  ArrayList.prototype.shellSort = function () {
    let length = this.array.length

    let gap = Math.floor(length / 2)

    while (gap > 0) {
      // 以gap为间隔实现插入排序
      for (let i = gap; i < length; i++) {
        let j = i
        let temp = this.array[i]

        while (j > 0 && this.array[j - gap] > temp) {
          this.array[j] = this.array[j - gap]
          j -= gap
        }
        this.array[j] = temp
      }
      // 重新计算间隔，每次减半
      gap = Math.floor(gap / 2)
    }
  }

  // 快速排序基于递归实现
  ArrayList.prototype.quickSort = function (arr) {
    if (arr.length < 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0] // 选取中位数索引的值为基准值
    let left = []
    let right = []
    // 小于基准值的放到基准值的左边
    // 大于等于基准值的放到右边
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    // 递归遍历左右两个数组，最终返回排完序合并和的数组
    return this.quickSort(left).concat([pivot], this.quickSort(right))
  }

  // 取头中尾的中位数作为枢纽值pivot
  ArrayList.prototype.median = function (left, right) {
    let center = Math.floor((left + right) / 2) // 计算中间的位置

    // left、center、right三个位置的数据进行比较和交换
    if (this.array[left] > this.array[center]) {
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
      this.swap(left, right)
    }

    this.swap(center, right - 1) // 将center交换到right-1的位置
    return this.array[right - 1] // 返回pivot
  }

  ArrayList.prototype.quickSort2 = function () {
    this.quickSortRec(0, this.array.length - 1)
  }
  ArrayList.prototype.quickSortRec = function (left, right) {
    if (left >= right) return  // 递归结束条件

    let pivot = this.median(left, right) // 寻找基准值(pivot)

    let i = left
    let j = right - 1
    while (true) {
      while (this.array[++i] < pivot) {} // 从前向后搜索，找到第一个大于基准值的元素
      while (this.array[--j] > pivot) {} // 从后向前搜索，找到第一个小于基准值的元素
      if (i < j) {
        this.swap(i, j) // 交换i,j的位置
      } else {
        break // 遍历寻找到同一个位置则结束当前循环
      }
    }
    // 当前i位置即为基准值的位置
    // 将枢纽值放到正确的位置
    this.swap(i, right - 1)
    // 递归调用
    this.quickSortRec(left, i - 1)
    this.quickSortRec(i + 1, right)
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

list.quickSort2()
console.log(list.array)
