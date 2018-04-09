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
