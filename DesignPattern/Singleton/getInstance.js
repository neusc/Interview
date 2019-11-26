let getInstance = function(fn) {
    let result = null;
    return function() {
      return result || fn.call(this, arguments);
    };
  };