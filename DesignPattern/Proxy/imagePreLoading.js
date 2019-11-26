var myImage = (function() {
  var imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc: function(src) {
      imgNode.src = src;
    }
  };
})();
// 代理模式
var ProxyImage = (function() {
  var img = new Image();
  img.onload = function() {
    myImage.setSrc(this.src);
  };
  return {
    setSrc: function(src) {
      myImage.setSrc(
        "http://img.lanrentuku.com/img/allimg/1212/5-121204193Q9-50.gif"
      );
      img.src = src;
    }
  };
})();
// 调用方式
ProxyImage.setSrc(
  "https://img.alicdn.com/tps/i4/TB1b_neLXXXXXcoXFXXc8PZ9XXX-130-200.png"
);
