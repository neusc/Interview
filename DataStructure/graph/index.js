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
