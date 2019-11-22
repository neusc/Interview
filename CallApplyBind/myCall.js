Function.prototype.myCall = function(context, ...arr) {
  if (context === undefined || context === null) {
    context = window;
  } else {
    context = Object(context);
  }
  const specialPrototype = Symbol("特殊属性");
  context[specialPrototype] = this;
  let result = context[specialPrototype](...arr);
  delete context[specialPrototype];
  return result;
};

function handle(...params) {
  console.log("params", this, ...params); // do some thing
}
handle.myCall(false, 1);
