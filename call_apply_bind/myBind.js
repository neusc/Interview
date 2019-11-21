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
