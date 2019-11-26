var throttle = function(action, delay) {
  var statTime = 0;
  var self = this;

  return function() {
    var currTime = +new Date();

    if (currTime - statTime > delay) {
      action.apply(self, arguments);
      statTime = currTime;
    }
  };
};

// example
function resizeHandler() {
  console.log("resize");
}

window.onresize = throttleV2(resizeHandler, 300);
