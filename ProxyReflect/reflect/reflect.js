Reflect.has(Object, 'assign')  // true

Reflect.apply(Math.floor, undefined, [1.75]) // 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]) // 'hello'

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index // 4

Reflect.apply(''.charAt, 'ponies', [3]) // "i"
