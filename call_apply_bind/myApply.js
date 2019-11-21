Function.prototype.myApply = function(context) {
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  const specialPrototype = Symbol("特殊属性");
  context[specialPrototype] = this;
  let args = arguments[1];
  let result = null;
  if (args) {
    if (!Array.isArray(args) && !isArrayLike(args)) {
      throw new TypeError("第二个参数必须为数组或类数组对象");
    } else {
      args = Array.from(args);
      result = context[specialPrototype](...args);
    }
  } else {
    result = context[specialPrototype]();
  }
  delete context[specialPrototype];
  return result;
};

function isArrayLike(o) {
  if (
    o &&
    typeof o === "object" &&
    isFinite(o.length) &&
    o.length > 0 &&
    o.length === Math.floor(o.length) &&
    o.length < Math.pow(2, 32)
  )
    return true;
  else {
    return false;
  }
}

function handle(...params) {
  console.log("params", this, ...params); // do some thing
}
handle.myApply(false, [1]);
