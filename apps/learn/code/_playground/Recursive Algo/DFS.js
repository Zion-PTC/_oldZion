function traverseDFS(root) {
  let stack = [root];
  let res = [];

  while (stack.length) {
    let curr = stack.pop();
    res.push(curr.key);

    if (curr.right) {
      stack.push(curr.right);
    }

    if (curr.left) {
      stack.push(curr.left);
    }
  }

  return res.reverse();
}
