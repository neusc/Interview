// 此种设计可以不用提供任何参数直接调用函数drawES2015Chart()
function drawES2015Chart ({ size = 'big', cords = { x: 0, y: 0 }, radius = 25 } = {}) {
  console.log(size, cords, radius)
  // 'big, {x:18, y:30}, 30'
}

drawES2015Chart({
  cords: { x: 18, y: 30 },
  radius: 30
})
