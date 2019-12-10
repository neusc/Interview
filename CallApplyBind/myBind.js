Function.prototype.myBind = function(objThis, ...params) {
  const thisFn = this;
  let fnToBind = function(...secondParams) {
    const isNew = this instanceof fnToBind;
    const context = isNew ? this : Object(objThis);
    return thisFn.call(context, ...params, ...secondParams);
  };
  fnToBind.prototype = Object.create(thisFn.prototype);
  return fnToBind;
};

Function.prototype.myBind2 = function(context) {
  var _this = this;
  var argsParent = Array.prototype.slice.call(arguments, 1);
  return function() {
    var args = argsParent.concat(Array.prototype.slice.call(arguments)); //转化成数组
    _this.apply(context, args);
  };
};
