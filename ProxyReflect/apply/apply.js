// 用于拦截函数的调用，共有三个参数，分别是目标对象（函数）target，被调用时的上下文对象 thisArg
// 以及被调用时的参数数组 argumentsList，该方法可以返回任何值
function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    return target(argumentsList[0], argumentsList[1]) * 2;
  }
};

let proxy = new Proxy(sum, handler);

console.log(sum(1, 2)); // 3
console.log(proxy(1, 2)); // Calculate sum：1,2  
                          // 6
console.log(proxy.call(null, 3, 4));    // Calculate sum：3,4
                                        // 14

console.log(Reflect.apply(proxy, null, [5, 6]));    // Calculate sum: 5,6
                                                   // 22