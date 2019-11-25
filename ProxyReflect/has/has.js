// has方法可以看作是针对 in 操作的钩子，当我们判断对象是否具有某个属性时，这个方法会生效，典型的操作就是 in ,
// 该方法接收两个参数 目标对象 target 和 要检查的属性 prop，并返回一个 boolean 值
let p = new Proxy({}, {
    has: function(target, prop) {
        if( prop[0] === '_' ) {
            console.log('it is a private property')
            return false;
        }
        return true;
    }
});

console.log('a' in p);      // true
console.log('_a' in p )     // it is a private property
                            // false
