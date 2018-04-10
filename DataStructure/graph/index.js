// 图的构造函数自定义实现
function Graph () {
  this.vertexes = [] // 存储顶点集合的数组
  this.adjList = new Dictionary() // 边使用邻接表存储

  // 添加顶点
  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.adjList.set(v, [])
  }

  // 添加边，无向图是双向的，边连接的两个顶点在邻接表对应数组中都应该添加彼此
  Graph.prototype.addEdge = function (v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  // toString方法便于展示图的结果
  Graph.prototype.toString = function () {
    let resultStr = ''
    for (let i = 0; i < this.vertexes.length; i++) {
      let adj = this.adjList.get(this.vertexes[i])
      resultStr += this.vertexes[i] + '->'
      for (let j = 0; j < adj.length; j++) {
        resultStr += adj[j] + ' '
      }
      resultStr += '\n'
    }
    return resultStr
  }

  // 初始化颜色，表示结点当前的三种状态
  // 白色表示未被访问过，灰色表示被访问过但未被完全探索，黑色表示被完全探索过
  Graph.prototype.initializeColor = function () {
    let colors = []
    for (let i = 0; i < this.vertexes.length; i++) {
      colors[this.vertexes[i]] = 'white'
    }
    return colors
  }

  // 图的广度优先搜索算法，基于队列实现，即先入队列的结点先访问
  Graph.prototype.bfs = function (v, handler) {
    // 初始化颜色
    let color = this.initializeColor()
    // 创建队列
    let queue = new Queue()
    // 结点进入队列
    queue.enqueue(v)

    while (!queue.isEmpty()) {
      // 从队列提取一个结点
      let qv = queue.dequeue()
      // 获取结点相邻的所有结点
      let qAdj = this.adjList.get(qv)
      // 将qv结点置为灰色
      color[qv] = 'gray'

      // 依次访问qv的相邻结点并更改它们的颜色，放入队列
      for (let i = 0; i < qAdj.length; i++) {
        let a = qAdj[i]
        if (color[a] === 'white') {
          color[a] = 'gray'
          queue.enqueue(a)
        }
      }
      // 由于qv已经被完全探索过，所以将颜色置为灰色
      color[qv] = 'black'
      if (handler) {
        handler(qv)
      }
    }
  }

  // 图的深度优先遍历算法，基于递归实现(递归也是基于函数栈实现)
  Graph.prototype.dfs = function (handler) {
    let color = this.initializeColor()
    for (let i = 0; i < this.vertexes.length; i++) {
      if (color[this.vertexes[i]] === 'white') {
        this.dfsVisit(this.vertexes[i], color, handler)
      }
    }
  }
  // dfs递归调用算法
  Graph.prototype.dfsVisit = function (u, color, handler) {
    color[u] = 'gray' // 当前结点置灰
    if (handler) { // 处理u结点
      handler(u)
    }

    // 递归访问该结点相邻的所有结点
    let uAdj = this.adjList.get(u)
    for (let i = 0; i < uAdj.length; i++) {
      let w = uAdj[i]
      if (color[w] === 'white') {
        this.dfsVisit(w, color, handler)
      }
    }
    color[u] = 'black' // 结点置灰
  }
}

let graph = new Graph()
let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (let i = 0; i < myVertexes.length; i++) {
  graph.addVertex(myVertexes[i])
}

// 添加边
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph)
console.log(graph.toString())

let resultStr = ''
graph.dfs(function (v) {
  resultStr += v + ' '
})
console.log(resultStr)
