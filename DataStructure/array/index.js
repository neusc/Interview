/**
 *
 * Created by chuans
 * Date: 2018/3/7
 */

// map方法
let arr = [1, 3, 2, 4, 5];

let newArr1 = arr.map((item, index, arr) => {
  return item * 2;
});

console.log(newArr1, arr); // 原始数组没有发生变化，支持return返回值，返回新数组

// forEach方法
let newArr2 = arr.forEach((item, index, arr) => {
  console.log(item, index);
});

console.log(newArr2, arr); // forEach遍历数组但没有返回值

// filter方法
let newArr3 = arr.filter((item, index, arr) => {
  return item > 2;
});

console.log(newArr3);

// every方法，如果数组每一项都返回true，则返回true
let newArr4 = arr.every((item, index, arr) => {
  return item > 2;
});

console.log(newArr4);

// some方法，如果数组其中的某一项返回true，则返回true
let newArr5 = arr.some((item, index, arr) => {
  return item > 2;
});

console
  .log(newArr5)

  [
    // reduce方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值。
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    (0, 1, 2, 3, 4)
  ].reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  }) // 10

  [(0, 1, 2, 3, 4)].reduce((prev, curr) => prev + curr); // 10

let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

// 计算数组中重复元素的个数
let countedNames = names.reduce(function(allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {}); // 第二个参数提供初始值，如果没有提供则取数组的第一个值
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

// 数组去重
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result); //[1,2,3,4,5]

// 随机排序(洗牌算法)
function randomSort(a, b) {
  return Math.random() > 0.5 ? -1 : 1;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 10; i++) {
  console.log(arr.sort(randomSort));
}
