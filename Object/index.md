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

##### 3.for...in循环以任意顺序遍历一个对象的可枚举属性，循环将遍历对象本身的所有可枚举属性，以及对象从其构造函数原型中继承的属性，最好不用于遍历数组，当访问顺序很重要的时候，此时应该使用Array.prototype.forEach或者for...of代替
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
##### 5.Object.create(obj)方法创建一个新对象，新对象的_proto_属性指向提供的对象obj
```javascript
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
```
##### 6.Object.defineProperty()在对象上定义一个新属性或者修改已有属性
```javascript
const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
```
##### 7.Object.entries()方法返回对象自身的可枚举属性的格式为[key,value]的数组,顺序与for...in循环遍历结果一致
```javascript
const object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)[1]);
// expected output: Array ["baz", 42]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)[2]);
// expected output: Array ["2", "c"]

const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
// expected output: Array ["2", "b"]
```
##### 8.Object.keys返回对象自身的可枚举属性的名称的数组，Object.values返回对象自身的可枚举属性值的数组，顺序与for...in循环遍历结果一致
