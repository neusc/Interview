// 示例一
function traversal(node) {
  if (node && node.nodeType === 1) {
    console.log(node.tagName);
  }
  let i = 0;
  let childNodes = node.childNodes;
  let len = childNodes.length;
  for (i; i < len; i++) {
    traversal(childNodes[i]);
  }
}

// 示例二
function traversal(node) {
  let stack = [];
  stack.push(node);
  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode && currentNode.nodeType === 1) {
      console.log(currentNode.tagName);
      const childNodes = currentNode.children;
      const len = childNodes.length;
      for (let i = 0; i < len; i++) {
        stack.push(childNodes[i]);
      }
    }
  }
}
