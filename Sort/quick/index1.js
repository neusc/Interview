// 快速排序
function quickSort (arr) {
  console.time('快排耗时')
  if (arr.length <= 1) return arr
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1) [0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  console.timeEnd('快排耗时')
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort([3, 2, 5, 6, 4]))
