// 二叉搜索树的自定义实现
function BinarySearchTree () {
  // 结点构造函数
  function Node (key) {
    this.key = key
    this.left = null  // 左子树的引用
    this.right = null // 右子树的引用
  }

  this.root = null

  // 向树中插入数据，供外部调用
  BinarySearchTree.prototype.insert = function (key) {
    let newNode = new Node(key)
    // 判断是否为空树
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  // 插入非根结点
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) { // 向左子树插入结点
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode) // 递归插入
      }
    } else { // 向右子树插入结点
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode) // 递归插入
      }
    }
  }

  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler)
  }

  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 首先访问当前结点
      handler(node.key)
      // 递归遍历结点的左子树
      this.preOrderTraversalNode(node.left, handler)
      // 递归遍历结点的右子树
      this.preOrderTraversalNode(node.right, handler)
    }
  }

  // 中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler)
  }

  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 首先递归遍历结点的左子树
      this.inOrderTraversalNode(node.left, handler)
      // 访问当前结点
      handler(node.key)
      // 最后递归遍历结点的右子树
      this.inOrderTraversalNode(node.right, handler)
    }
  }

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler)
  }

  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 首先递归遍历结点的左子树
      this.postOrderTraversalNode(node.left, handler)
      // 然后递归遍历结点的右子树
      this.postOrderTraversalNode(node.right, handler)
      // 最后访问当前结点
      handler(node.key)
    }
  }

  // 获取二叉搜索树中的结点最小值
  BinarySearchTree.prototype.min = function () {
    let node = this.root
    if (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  // 获取二叉搜索树中的结点最大值
  BinarySearchTree.prototype.max = function () {
    let node = this.root
    if (node.right !== null) {
      node = node.right
    }
    return node.key
  }
}

let bst = new BinarySearchTree()

bst.insert(11)
bst.insert(5)
bst.insert(6)
bst.insert(4)
bst.insert(15)
bst.insert(18)
bst.insert(13)

console.log(bst)
let resultStr = ''
bst.postOrderTraversal(function (key) {
  resultStr += key + ' '
})
console.log(resultStr)
console.log(bst.min())
console.log(bst.max())
