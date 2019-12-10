function asyncFun(genF) {
  const gen = genF();

  return (function next(v) {
    return new Promise((resolve, reject) => {
      try {
        const result = gen.next(v);
        if (result.done) {
          return resolve(result.value);
        }

        return Promise.resolve(result.value)
          .then(next)
          .then(resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  })();
}

// 定义了一个promise，用来模拟异步请求，作用是传入参数++
function getNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 1000);
  });
}

// 所需要执行的Generator函数，内部的数据在执行完成一步的promise之后，再调用下一步
var func = function*() {
  var f1 = yield getNum(1);
  var f2 = yield getNum(f1);
  console.log(f2);
};
asyncFun(func);
