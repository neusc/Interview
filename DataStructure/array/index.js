/**
 *
 * Created by chuans
 * Date: 2018/3/7
 */

// map方法
let arr = [1, 3, 2, 4, 5]

let newArr1 = arr.map((item, index, arr) => {
  return item * 2
})

console.log(newArr1, arr) // 原始数组没有发生变化，支持return返回值，返回新数组

// forEach方法
let newArr2 = arr.forEach((item, index, arr) => {
  console.log(item, index)
})

console.log(newArr2, arr)  // forEach遍历数组但没有返回值

// filter方法
let newArr3 = arr.filter((item, index, arr) => {
    return item > 2
  }
)

console.log(newArr3)

// every方法，如果数组每一项都返回true，则返回true
let newArr4 = arr.every((item, index, arr) => {
    return item > 2
  }
)

console.log(newArr4)

// some方法，如果数组其中的某一项返回true，则返回true
let newArr5 = arr.some((item, index, arr) => {
    return item > 2
  }
)

console.log(newArr5)
