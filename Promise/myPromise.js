function myPromise(executor) {
  this.state = "pending";
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilledCallback = [];
  this.onRejectedCallback = [];
  let _this = this;
  try {
    executor(resolve, reject); // 立即执行
  } catch (e) {
    reject(e);
  }

  function resolve(value) {
    if (_this.state === "pending") {
      _this.value = value;
      // 依次执行成功回调
      _this.onFulfilledCallback.forEach(fn => fn(value));
      _this.state = "resolved";
    }
  }

  function reject(reason) {
    if (_this.state === "pending") {
      _this.reason = reason;
      // 依次执行失败回调
      _this.onRejectedCallback.forEach(fn => fn(reason));
      _this.state = "rejected";
    }
  }
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
  let newPromise = null;
  let self = this;
  onFulfilled =
    typeof onFulfilled === "function"
      ? onFulfilled
      : function(val) {
          return val;
        };
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(err) {
          throw err;
        };
  if (this.state === "pending") {
    newPromise = new myPromise((resolve, reject) => {
      this.onFulfilledCallback.push(function() {
        setTimeout(() => {
          try {
            let x = onFulfilled(self.value);
            resolvePromise(newPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      });
      this.onRejectedCallback.push(function() {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(newPromise, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      });
    });
  }
  if (this.state === "resolved") {
    newPromise = new myPromise((resolve, reject) => {
      // then方法是异步执行的
      setTimeout(() => {
        try {
          let x = onFulfilled(self.value);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }
  if (this.state === "rejected") {
    newPromise = new myPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(this.reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      }, 0);
    });
  }
  return newPromise;
};

/**
 * 解析then返回值与新Promise对象
 * @param {Object} newPromise 新的Promise对象
 * @param {*} x 上一个then的返回值
 * @param {Function} resolve promise2的resolve
 * @param {Function} reject promise2的reject
 */
function resolvePromise(newPromise, x, resolve, reject) {
  if (newPromise === x) {
    reject(new Error("promise发生了循环引用"));
  }
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then; // 取出then方法引用
      if (typeof then === "function") {
        let y = then.call(
          x,
          y => {
            // 递归调用，传入y若是Promise对象，继续循环，直到是一个普通值为止
            resolvePromise(newPromise, y, resolve, reject);
          },
          r => {
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x); // 普通值
  }
}

let p = new myPromise((resolve, reject) => {
  resolve(111);
});
p.then(res => {
  console.log("then===", res);
  return {
    then: function(resolve, reject) {
      resolve(2);
    }
  };
}).then(
  data => {
    console.log("then chain===", data);
  },
  e => {
    console.log("then reject===", e);
  }
);
