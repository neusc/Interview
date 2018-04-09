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

  // 在二叉搜索树中递归查找指定的值
  // 注意return的使用，因为函数具有返回值
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
  }

  BinarySearchTree.prototype.searchNode = function (node, key) {
    if (node === null) {
      return false
    }
    if (key < node.key) { // 递归查找
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 在二叉搜索树中查找结点的非递归方法
  BinarySearchTree.prototype.search2 = function (key) {
    let node = this.root
    while (node !== null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  BinarySearchTree.prototype.remove = function (key) {
    let current = this.root
    let parent = this.root
    let isLeftChild = true

    // 查找需要删除的结点
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }
      if (current === null) return false // 没有找到需要删除的结点
    }
    // 删除的结点是叶结点
    if (current.left === null && current.right === null) {
      if (this.root === current) {
        this.root = null
      } else if (isLeftChild) { // 将父节点指向删除节点的引用置为null
        parent.left = null
      } else {
        parent.right = null
      }
      // 删除的结点有一个子结点
    } else if (current.right === null) {
      if (this.root === current) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      if (this.root === current) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
      // 删除的结点有两个子结点
    } else {
      // 计算删除结点的后继结点
      let successor = this.getSuccessor(current)

      if (current === this.root) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      // 将删除节点的左子树赋值给后继结点
      successor.left = current.left
    }
    return true
  }
  // 寻找删除结点的后继结点
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    let successorParent = delNode
    let successor = delNode
    let current = delNode.right // 后继结点应该从右子树查找

    // 寻找结点
    while (current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    if (successor !== delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    // 返回查找到的后继结点
    return successor
  }
}

let bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(13)
bst.insert(20)
bst.insert(3)
bst.insert(8)
bst.insert(10)
bst.insert(12)
bst.insert(14)
bst.insert(18)
bst.insert(25)
bst.insert(19)

console.log(bst)
let resultStr = ''
bst.preOrderTraversal(function (key) {
  resultStr += key + ' '
})
console.log(resultStr)
console.log(bst.min())
console.log(bst.max())
console.log(bst.search(5))
console.log(bst.search2(28))
console.log(bst.remove(15))
console.log(bst)
