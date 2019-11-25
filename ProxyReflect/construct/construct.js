// construct 用于拦截 new 操作符，
// 为了使 new 操作符在生成的 Proxy对象上生效，用于初始化代理的目标对象自身必须具有[[Construct]]内部方法；
// 它接收三个参数，目标对象 target ，构造函数参数列表 argumentsList 以及最初实例对象时，new 命令作用的构造函数

let p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log(newTarget === p); // true
    console.log("called: " + argumentsList.join(", ")); // called：1,2
    return { value: (argumentsList[0] + argumentsList[1]) * 10 };
  }
});

console.log(new p(1, 2).value); // 30
