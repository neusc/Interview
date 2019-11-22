function trueCurry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return function(...args2) {
    return trueCurry(fn, ...args, ...args2);
  };
}

function add(x, y) {
  return x + y;
}

let curryAdd = trueCurry(add, 1);
console.log(curryAdd(2));
