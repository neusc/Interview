// 此种设计可以不用提供任何参数直接调用函数drawES2015Chart()
function drawES2015Chart ({ size = 'big', cords = { x: 0, y: 0 }, radius = 25 } = {}) {
  console.log(size, cords, radius)
  // 'big, {x:18, y:30}, 30'
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
})

// 从作为函数实参的对象中提取数据
function userId ({ id }) {
  return id
}

function whois ({ displayName: displayName, fullName: { firstName: name } }) {
  console.log(displayName + ' is ' + name)
}

var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe'
  }
}

console.log('userId: ' + userId(user)) // "userId: 42"
whois(user) // "jdoe is John"

// For of迭代和解构
var people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
]

for (var { name: n, family: { father: f } } of people) {
  console.log('Name: ' + n + ', Father: ' + f)
}

// 解构对象中的部分属性为新对象
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
a // 10
b // 20
rest // { c: 30, d: 40 }
