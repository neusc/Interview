// 快速排序3
function quickSort3 (arr, low, high) {
  low = typeof low !== 'number' ? 0 : low
  high = typeof high !== 'number' ? arr.length - 1 : high
  if (low < high) {
    let pivot = partition2(arr, low, high)
    quickSort3(arr, low, pivot - 1)
    quickSort3(arr, pivot + 1, high)
  }
  return arr
}

function partition2 (arr, low, high) {
  let pivot = arr[low]
  while (low < high) {
    while (low < high && arr[high] > pivot) {
      --high
    }
    arr[low] = arr[high]
    while (low < high && arr[low] <= pivot) {
      ++low
    }
    arr[high] = arr[low]
  }
  arr[low] = pivot
  return low
}

console.log(quickSort3([3, 2, 5, 6, 4]))
