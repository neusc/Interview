##### 1.Symbol类型的值可以作为对象的属性，该属性是唯一的、匿名的且不可枚举的。
```javascript
Symbol('foo') === Symbol('foo') // false
const foo = Symbol() //typeof foo === 'symbol'
const bar = Symbol() //typeof bar === 'symbol'
let obj = {}
obj[foo] = 'foo'
obj[bar] = 'bar'
JSON.stringify(obj) // {}
Object.keys(obj) // []
Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [ Symbol(), Symbol() ]
```


##### 2.Object.hasOwnProperty的使用，用于检测是否自身含有属性，会过滤从原型链继承来的属性
```javascript
let o = Object()
o.prop = 'exists'
o.hasOwnProperty('prop') // true
o.hasOwnProperty('toString') // false
o.hasOwnProperty('hasOwnProperty') // false
```

##### 3.for...in循环以任意顺序遍历一个对象的可枚举属性，循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性，最好不用于遍历数组，当访问顺序很重要的时候
```javascript
let triangle = { a: 1, b: 2, c: 3 }

function ColoredTriangle () {
  this.color = 'red'
}

ColoredTriangle.prototype = triangle

let obj = new ColoredTriangle()

for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`)
  }
}

// Output:
// "obj.color = red"
```

##### 4.可枚举属性是指那些内部 “可枚举” 标志设置为 true 的属性，对于通过直接的赋值和属性初始化的属性，该标识值默认为即为 true，对于通过 Object.defineProperty 等定义的属性，该标识值默认为 false。可枚举的属性可以通过 for...in 循环进行遍历（除非该属性名是一个 Symbol）
