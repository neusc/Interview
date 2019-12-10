function add() {
  const args = [...arguments]
  const maxLen = Math.max.apply(
    null,
    args.map(item => {
      const str = String(item).split('.')[1]
      return str ? str.length : 0
    })
  )
  return (
    args.reduce((sum, cur) => sum + cur * 10 ** maxLen, 0) / 10 ** maxLen
  )
}
console.log(add(0.1, 0.2)); // => 0.3
console.log(add(10, 11)); // => 21
console.log(add(0.001, 0.003)); // => 0.004
console.log(add(0.001, 0.003, 0.005)); // => 0.009
console.log(add(0.001)); // => 0.001
