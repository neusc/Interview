// 示例一
// 生成器函数generator function
function* createIterator () {
  let first = yield 1
  let second = yield first + 2  // 4 + 2
                                // first =4 是next(4)将参数赋给上一条的
  yield second + 3              // 5 + 3, second = 5是next(5)将参数赋给上一条的
}

let iterator = createIterator() // 直接调用生成器函数，返回的是一个迭代器iterator对象

console.log(iterator.next()) // "{value: 1, done: false}"
console.log(iterator.next(4)) // "{value: 6, done: false}"
console.log(iterator.next(5)) // "{value: 8, done: true }"
console.log(iterator.next())  // "{value: undefined, done: true}"

// 示例二
function* anotherGenerator (i) {
  yield i + 1
  yield i + 2
  yield i + 3
}

function* generator (i) {
  yield i
  yield* anotherGenerator(i)// 移交执行权
  yield i + 10
}

let gen = generator(10)

console.log(gen.next().value) // 10
console.log(gen.next().value) // 11
console.log(gen.next().value) // 12
console.log(gen.next().value) // 13
console.log(gen.next().value) // 20
