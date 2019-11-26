Function.prototype.after = function(fn) {
  let self = this;
  return function() {
    let ret = self.apply(this, arguments);
    if (ret === "nextSuccessor") {
      return fn.apply(this, arguments);
    }
    return ret;
  };
};

fn1 = function() {
  console.log(1);
  return "nextSuccessor"
};
fn2 = function() {
  console.log(2);
  return "nextSuccessor"
};
fn3 = function() {
  console.log(3);
  return "nextSuccessor"
};

let fn = fn1.after(fn2).after(fn3);
fn();
